# AIHotNews 技术架构文档

| 版本 | 日期 | 作者 | 状态 |
|------|------|------|------|
| v1.0 | 2026-07-10 | konglp1997 | 发布 |

---

## 1. 架构概述

### 1.1 设计原则

AIHotNews 采用**配置驱动的多智能体 Pipeline 架构**，核心设计原则：

1. **单一职责**：每个智能体模块只负责一个明确任务（采集/分析/增强/生成/通知）
2. **配置驱动**：所有信息源、AI 参数、过滤规则通过 JSON 配置文件定义，零代码变更即可调整
3. **容错隔离**：单个信息源或 AI 任务失败不影响整体流程
4. **可扩展性**：新增信息源只需实现 BaseScraper 接口，新增 AI 能力只需扩展 Agent
5. **零成本运维**：基于 GitHub 生态（Actions + Pages），无服务器成本

### 1.2 系统分层

```
┌─────────────────────────────────────────────────────┐
│                    展示层 (Presentation)              │
│         GitHub Pages / Jekyll / 玻璃拟态 UI           │
├─────────────────────────────────────────────────────┤
│                    通知层 (Notification)               │
│         Webhook (飞书) / Email (待实现)               │
├─────────────────────────────────────────────────────┤
│                    编排层 (Orchestration)              │
│         HorizonOrchestrator — Pipeline 调度           │
├──────────────────┬──────────────────────────────────┤
│   AI 智能体层     │         采集层 (Collection)       │
│  Analyzer         │    GitHub / HN / Reddit / RSS     │
│  Enricher         │    Telegram / GoogleNews / OpenBB │
│  Summarizer       │                                  │
├──────────────────┴──────────────────────────────────┤
│                    基础设施层                          │
│    DeepSeek API / GitHub API / Reddit API / RSS      │
└─────────────────────────────────────────────────────┘
```

---

## 2. 数据流架构

### 2.1 主 Pipeline 数据流

```
配置加载 (config.json)
    │
    ▼
采集阶段 (并行) ──────► ContentItem[] (原始内容池)
    │                    · 标题、URL、内容、来源、时间
    ▼
AI 分析评分 (并发5) ──► ContentItem[] (带评分)
    │                    · ai_score: 0-10
    ▼
过滤 (阈值 8.0) ──────► ContentItem[] (重要资讯)
    │
    ▼
AI 内容增强 (并发5) ──► ContentItem[] (带背景解读)
    │                    · 背景、讨论摘要
    ▼
摘要生成 ─────────────► Markdown 简报文档
    │                    · 标题 + 统计 + 排名 + 详情
    ▼
存储 + 发布 ──────────► GitHub Pages 站点
    │
    ▼
通知推送 ─────────────► 飞书卡片 / 邮件
```

### 2.2 数据模型

核心数据模型 `ContentItem`（定义于 `src/models.py`）：

| 字段 | 类型 | 说明 |
|------|------|------|
| id | str | 唯一标识（来源+哈希） |
| source_type | SourceType | 来源类型枚举 |
| title | str | 标题 |
| url | str | 原文链接 |
| content | str | 正文内容 |
| author | str | 作者/频道 |
| published_at | datetime | 发布时间 |
| ai_score | float | AI 评分 (0-10) |
| ai_summary | str | AI 摘要 |
| metadata | dict | 扩展元数据 |

---

## 3. 模块详细设计

### 3.1 采集层

#### 3.1.1 BaseScraper 抽象

```python
class BaseScraper(ABC):
    """所有采集器的基类"""
    async def fetch(self, since: datetime) -> List[ContentItem]
    def _generate_id(self, *parts) -> str
```

所有采集器继承 BaseScraper，实现 `fetch()` 方法，返回标准化的 `ContentItem` 列表。

#### 3.1.2 采集器一览

| 采集器 | 文件 | 信息源 | API | 并发 |
|--------|------|--------|-----|------|
| GitHubScraper | scrapers/github.py | 用户动态、Release | GitHub REST API | 串行 |
| HackerNewsScraper | scrapers/hackernews.py | Top Stories | HN Firebase API | 串行 |
| RedditScraper | scrapers/reddit.py | Subreddit 热门 | Reddit JSON API | 串行 |
| RSSScraper | scrapers/rss.py | RSS/Atom Feed | feedparser | 并行 |
| TelegramScraper | scrapers/telegram.py | 公开频道 | t.me/s HTML 解析 | 并行 |
| GoogleNewsScraper | scrapers/google_news.py | Google News | RSS | 并行 |
| OpenBBScraper | scrapers/openbb.py | OpenBB 平台 | OpenBB API | 并行 |

#### 3.1.3 采集调度策略

- **并行采集**：所有采集器通过 `asyncio.gather` 并行执行
- **限流**：Telegram 支持 Retry-After 响应头自动退避
- **User-Agent**：`AIHotNews-Aggregator`（GitHub）、`AIHotNews/1.0`（Telegram）
- **错误隔离**：`return_exceptions=True`，单源失败返回空列表

### 3.2 AI 智能体层

#### 3.2.1 Analyzer（分析评分智能体）

**职责**：对每条 ContentItem 进行 0-10 评分

**Prompt 工程要点**：
- System Prompt 定义评分维度（重要性、相关性、新颖性、影响力）
- 温度 0.3（偏低，保证评分一致性）
- 输出结构化 JSON（score + reason）

**并发设计**：
- `asyncio.Semaphore(5)` 控制并发数
- `throttle_sec=1` 每次调用间隔 1 秒
- 失败重试 + 指数退避

#### 3.2.2 Enricher（内容增强智能体）

**职责**：为通过阈值的重要资讯补充背景和上下文

**增强内容**：
- 技术背景说明
- 行业影响分析
- 关联事件上下文

**并发设计**：与分析器相同（并发 5，限流 1 秒）

#### 3.2.3 Summarizer（摘要生成智能体）

**职责**：生成最终中文简报

**输出结构**（Markdown）：
```
# Daily-Summary: YYYY-MM-DD (ZH)

> 从 N 条内容中筛选出 M 条重要资讯。

1. [新闻标题](#item-1)
2. ...

---

<a id="item-1"></a>
## 新闻标题 ⭐️9.0/10
**来源**: ...
**背景**: ...
**讨论**: ...
**参考链接**: ...
**标签**: ...
```

**多语言模板**：`LABELS` 字典支持 `en` / `zh` 两套标签

### 3.3 编排层

#### 3.3.1 HorizonOrchestrator

**核心流程**（9 步）：

| 步骤 | 操作 | 输入 | 输出 |
|------|------|------|------|
| 1 | 加载配置 | config.json | Config 对象 |
| 2 | 初始化采集器 | sources 配置 | Scraper 列表 |
| 3 | 并行采集 | 时间窗口 (24h) | ContentItem[] |
| 4 | AI 分析评分 | ContentItem[] | 评分后列表 |
| 5 | 过滤 | 阈值 8.0 | 重要资讯列表 |
| 6 | AI 内容增强 | 重要资讯 | 增强后列表 |
| 7 | 生成摘要 | 增强列表 | Markdown 文档 |
| 8 | 存储结果 | Markdown | 文件系统 |
| 9 | 触发通知 | 摘要+列表 | Webhook/Email |

**错误处理策略**：
- 采集阶段：单源失败 → 跳过，日志告警
- AI 阶段：单条失败 → 跳过该条，继续处理其他
- 生成阶段：失败 → 重试 3 次，最终降级为纯标题列表
- 通知阶段：失败 → 记录日志，不影响存储

### 3.4 MCP 服务层

#### 3.4.1 架构组件

| 组件 | 文件 | 职责 |
|------|------|------|
| HorizonPipelineService | mcp/service.py | 应用服务层，暴露分阶段执行接口 |
| HorizonRuntime | mcp/horizon_adapter.py | 动态加载运行时引用 |
| HorizonMcpError | mcp/errors.py | 统一错误定义 |
| run_store | mcp/run_store.py | 运行产物持久化 |
| server | mcp/server.py | MCP 服务器入口 |

#### 3.4.2 分阶段执行

MCP 支持将 Pipeline 拆分为独立阶段执行：
- `collect` — 仅采集
- `analyze` — 仅分析评分
- `enrich` — 仅内容增强
- `generate` — 仅生成摘要
- `full` — 完整流程

每个阶段的输出通过 `run_store` 持久化，可被下一阶段加载。

### 3.5 通知层

#### 3.5.1 Webhook 通知（飞书）

**卡片布局**：
- Header：标题 + 日期
- Body：折叠卡片（collapsible）或 总览+分条（overview+items）或 纯摘要（summary）
- 支持 `zh` / `en` 双语言标题

**配置驱动**：`webhook.request_body` 定义飞书卡片 JSON 模板，支持变量替换：
- `#{message_title}` — 消息标题
- `#{summary}` — 摘要内容

#### 3.5.2 邮件通知（待实现）

**设计**：
- IMAP 监听订阅/退订邮件
- SMTP 发送每日简报
- 配置：`email_address` / `sender_name` / `subscribe_keyword` / `unsubscribe_keyword`

### 3.6 展示层

#### 3.6.1 技术栈

| 层 | 技术 | 说明 |
|----|------|------|
| 站点生成 | Jekyll (legacy) | GitHub Pages 原生支持 |
| 主题 | jekyll-theme-cayman | 基础主题，通过 CSS 覆盖 |
| 样式 | 自定义 CSS | 玻璃拟态 Glassmorphism |
| 交互 | 原生 JS | DOM 操作增强 |
| 字体 | 系统字体栈 | 无外部字体加载 |

#### 3.6.2 前端 JS 增强

| 函数 | 职责 |
|------|------|
| processScoreBadges() | ⭐️N/10 → 彩色 badge |
| markSemanticElements() | 给标签/来源行加语义 class |
| brandifyHeader() | h1 文字包渐变 span |
| setupScrollProgress() | 滚动进度条 |
| injectDetailHeader() | 详情页注入 AIHotNews logo |
| wrapNewsItems() | 每条新闻包进玻璃卡片 |
| openAllDetails() | 参考链接默认展开 |
| wrapSummarySection() | blockquote+ol 包进玻璃容器 |

---

## 4. 部署架构

### 4.1 GitHub Actions 流水线

```
┌──────────────────────────────────────────────────┐
│            daily-summary.yml                      │
│         (UTC 22:00 定时 / 手动触发)                │
├──────────────────────────────────────────────────┤
│  1. Checkout 代码                                 │
│  2. Setup Python 3.12                             │
│  3. Install uv + 依赖                              │
│  4. cp config.github.json → config.json           │
│  5. uv run horizon --hours 24                     │
│     ├─ 采集 (GitHub Secrets 提供 API Keys)         │
│     ├─ AI 分析 (DEEPSEEK_API_KEY)                 │
│     ├─ 生成 Markdown 简报                          │
│     └─ 写入 docs/_posts/                          │
│  6. Deploy to GitHub Pages (gh-pages 分支)        │
└──────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────┐
│            GitHub Pages (Jekyll)                   │
│    自动构建 → https://konglp1997.github.io/        │
│         /ai-consulting/                            │
└──────────────────────────────────────────────────┘
```

### 4.2 Secret 管理

| Secret | 用途 |
|--------|------|
| DEEPSEEK_API_KEY | DeepSeek API 调用 |
| GITHUB_TOKEN | 代码检出 + Pages 部署 |
| HORIZON_WEBHOOK_URL | 飞书 webhook 推送 |
| OPENAI_API_KEY | 备用（OpenAI provider） |
| ANTHROPIC_API_KEY | 备用（Anthropic provider） |

### 4.3 分支策略

| 分支 | 用途 |
|------|------|
| main | 源代码 + docs/ 内容 |
| gh-pages | GitHub Pages 部署分支 |

---

## 5. 配置系统

### 5.1 配置文件结构

`data/config.json`（生产）或 `data/config.github.json`（Actions）：

```json
{
  "version": "1.0",
  "ai": {
    "provider": "deepseek",
    "model": "deepseek-chat",
    "base_url": "https://api.deepseek.com",
    "api_key_env": "DEEPSEEK_API_KEY",
    "temperature": 0.3,
    "max_tokens": 8192,
    "throttle_sec": 1,
    "languages": ["zh"],
    "analysis_concurrency": 5,
    "enrichment_concurrency": 5
  },
  "sources": {
    "github": [...],
    "hackernews": {...},
    "rss": [...],
    "reddit": {...},
    "telegram": {...}
  },
  "filtering": {
    "ai_score_threshold": 8.0,
    "time_window_hours": 24
  },
  "webhook": {...}
}
```

### 5.2 环境变量替换

配置中 `${ENV_VAR}` 语法支持运行时替换：
- `${LWN_KEY}` → LWN.net API Key
- `${DEEPSEEK_API_KEY}` → DeepSeek API Key

---

## 6. 扩展性设计

### 6.1 新增信息源

实现 BaseScraper 接口，注册到 config.json：

```python
class MyScraper(BaseScraper):
    async def fetch(self, since: datetime) -> List[ContentItem]:
        # 实现采集逻辑
        return items
```

在 config.json `sources` 中添加配置即可，无需修改编排代码。

### 6.2 切换 AI Provider

修改 config.json `ai` 部分：
- `provider`: deepseek → openai / anthropic / google
- `model`: 对应模型名
- `base_url`: API 端点
- `api_key_env`: 环境变量名

### 6.3 新增通知渠道

实现通知接口，在 orchestrator 中注册。当前支持飞书 webhook，邮件订阅待实现。

---

## 7. 可观测性

### 7.1 日志

- Python `logging` 模块，分级输出（DEBUG/INFO/WARNING/ERROR）
- GitHub Actions 运行日志可直接查看
- 各采集器、AI 任务独立日志

### 7.2 运行产物

- `data/summaries/` — 生成的 Markdown 简报
- `data/cache/` — 采集缓存
- MCP `run_store` — 分阶段运行产物

### 7.3 质量监控

- 每日简报质量：人工查看 + 评分稳定性监控
- 采集覆盖率：各信息源采集成功率
- AI 成本：DeepSeek API 调用量和费用

---

## 8. 安全与合规

### 8.1 安全

- API Key 通过 GitHub Secrets 存储，不硬编码
- 配置文件使用 `${ENV_VAR}` 引用环境变量
- 无数据库、无用户数据存储（邮件订阅除外）

### 8.2 合规

- 采集内容均为公开信息源
- 简报包含原文链接，尊重版权
- 开源协议（LICENSE）明确使用条款

---

## 9. 成本分析

| 项目 | 成本 | 说明 |
|------|------|------|
| DeepSeek API | ~0.1-0.5 元/天 | 约 35 条分析 + 8 条增强 + 1 次摘要 |
| GitHub Pages | 0 元 | 免费额度内 |
| GitHub Actions | 0 元 | 公开仓库免费 |
| 域名 | 0 元 | 使用 GitHub Pages 默认域名 |
| **月度总计** | **3-15 元** | 仅 API 调用费用 |

---

## 10. 技术栈总览

| 层级 | 技术 | 版本 |
|------|------|------|
| 语言 | Python | 3.12 |
| 包管理 | uv | latest |
| 异步框架 | asyncio | stdlib |
| HTTP 客户端 | httpx | latest |
| HTML 解析 | BeautifulSoup4 | latest |
| 数据模型 | pydantic | latest |
| AI 模型 | DeepSeek | deepseek-chat |
| CI/CD | GitHub Actions | - |
| 站点 | GitHub Pages / Jekyll | legacy |
| 前端 | 原生 CSS + JS | - |
| 协议 | MCP (Model Context Protocol) | - |
