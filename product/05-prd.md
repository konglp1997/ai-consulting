# AIHotNews 产品需求文档（PRD）

## 1. 文档信息

| 项目 | 内容 |
|------|------|
| 文档名称 | AIHotNews 产品需求文档 |
| 版本 | v1.0 |
| 项目代号 | Horizon（品牌化后为 AIHotNews） |
| 仓库地址 | https://github.com/konglp1997/ai-consulting |
| 线上站点 | https://konglp1997.github.io/ai-consulting/ |
| 文档状态 | 评审通过，用于指导迭代 |
| 编写日期 | 2026-07-10 |

## 2. 产品概述

### 2.1 背景

AI 技术迭代速度极快，国内外信息源高度分散（GitHub、HackerNews、Reddit、RSS 博客、国内媒体、Telegram 等），中文从业者每天需要花费大量精力筛选有效信息。AIHotNews 旨在用一套多智能体协作的 Pipeline 自动完成「采集 → 评分 → 增强 → 摘要 → 发布 → 通知」全链路，每日为中文读者产出一份高质量 AI 前沿资讯简报。

### 2.2 产品定位

AI 驱动的多源新闻聚合系统，每日自动生成中文 AI 前沿资讯简报。

### 2.3 核心目标

- 覆盖中英文共 12 类信息源，保证信息广度。
- 通过 DeepSeek 大模型对每条内容打分（0–10 分）与增强，保证内容质量与可读性。
- 全流程自动化运行，单次运行成本控制在 0.1–0.5 元。
- 输出可读性强的中文 Markdown 简报，并自动发布到 GitHub Pages。

### 2.4 核心价值

| 价值维度 | 说明 |
|----------|------|
| 广度 | 12 类信息源，覆盖国内外主流 AI 资讯渠道 |
| 质量 | 大模型评分筛选 + 内容增强，单日约 35 条中筛出 8 条重要资讯 |
| 时效 | 每日 UTC 22:00 定时运行，次日可见 |
| 成本 | 单次运行 0.1–0.5 元，几乎零边际成本 |
| 可扩展 | 多智能体架构，新增信息源或能力只需新增对应智能体 |

## 3. 用户场景与用户故事

### US-1：AI 研究者每日追踪前沿
- **角色**：AI 算法研究员
- **场景**：希望每天早上花 5 分钟了解前一天全球 AI 领域发生了什么。
- **验收标准**：能在 GitHub Pages 站点看到当日简报，含排名列表与每条新闻的背景解读、参考链接。

### US-2：工程师跟进开源项目动态
- **角色**：大模型应用工程师
- **场景**：关注 vllm/sglang/transformers/ollama/langchain 等项目 release 与 karpathy 动态。
- **验收标准**：简报中应包含上述项目的新版本发布信息，并附带背景解读。

### US-3：产品经理把握行业风向
- **角色**：AI 产品经理
- **场景**：需要快速了解国内（量子位、新智元、36氪、机器之心、虎嗅）与国际（OpenAI/Anthropic/Google/HF Blog）动态。
- **验收标准**：简报同时覆盖中英文源，并按重要性排序。

### US-4：订阅用户接收推送
- **角色**：飞书群成员
- **场景**：希望简报生成后自动推送到飞书群。
- **验收标准**：Webhook 推送折叠卡片，包含总览与分条布局，点开可查看详情。

### US-5：外部 AI 客户端接入能力
- **角色**：第三方 AI Agent 开发者
- **场景**：希望通过 MCP 协议调用 AIHotNews 的采集、分析、增强、生成能力。
- **验收标准**：提供标准 MCP 服务接口，支持分阶段执行与运行产物查询。

## 4. 功能需求

### 4.1 信息源管理模块
- 支持 12 类信息源的配置化管理，包括 GitHub 动态、HackerNews、Reddit、RSS、Telegram、Google News、OpenBB 等。
- 每类源可独立配置参数（如 HN 最低分数 100、时间窗口 24h）。
- 支持启用/禁用单个信息源，单源失败不影响整体运行。

### 4.2 AI 分析引擎模块
- 基于 DeepSeek（deepseek-chat）对内容进行 0–10 分评分。
- 重要资讯阈值 8.0；并发 5；throttle 1 秒；温度 0.3；max_tokens 8192。

### 4.3 简报生成模块
- 生成 Markdown 简报：标题 + blockquote（筛选统计）+ ol（排名列表）+ 每条新闻详情（标题、来源、背景、讨论、参考链接、标签）。
- 支持 en/zh 多语言标签模板。

### 4.4 发布部署模块
- GitHub Pages（Jekyll legacy build）托管静态站点。
- GitHub Actions 定时任务（UTC 22:00）每日执行全流程。

### 4.5 通知推送模块
- 飞书 Webhook 折叠卡片通知，支持总览 + 分条布局。

### 4.6 邮件订阅模块（待实现）
- 支持订阅/退订、关键词过滤，推送每日简报邮件。

### 4.7 前端展示模块
- 玻璃拟态（Glassmorphism）UI。
- JS 动态注入：新闻卡片包裹、详情页 header、参考链接展开、底部统计玻璃容器。

---

## 5. 智能体架构设计（核心章节）

本节为 PRD 重点，占整体篇幅 50% 以上。AIHotNews 的核心是一个多智能体协作 Pipeline，由编排智能体统一调度采集、分析、增强、摘要、通知、MCP 等智能体，实现端到端自动化。

### 5.1 智能体总体架构

系统采用「编排者 + 专业智能体」的分层架构，自上而下分为四层：

| 层次 | 智能体 | 职责 |
|------|--------|------|
| 编排层 | Orchestrator Agent | 加载配置、调度全流程、错误恢复、触发通知 |
| 能力层 | Collector / Analyzer / Enricher / Summarizer | 采集、评分、增强、生成 |
| 服务层 | MCP Agent | 对外暴露 MCP 协议接口，支持分阶段执行 |
| 输出层 | Notification Agent | Webhook / Email 推送 |

数据流转主线：

```
配置加载 → Collector Agents（并行采集，输出 ContentItem 列表）
        → Analyzer Agent（评分 0-10，并发 5，限流 1s）
        → 过滤（≥8.0 的重要资讯）
        → Enricher Agent（背景增强，并发 5）
        → Summarizer Agent（生成中文 Markdown 简报）
        → 存储结果（run_store 持久化）
        → Notification Agent（飞书 Webhook / 邮件）
```

设计原则：每个智能体单一职责、输入输出标准化（ContentItem）、阶段间解耦、单点失败可降级。

### 5.2 采集智能体（Collector Agents）详细设计

采集智能体位于 `src/scrapers/`，每个采集器是独立智能体，继承统一的 `BaseScraper` 抽象，输出标准化 `ContentItem` 对象。

#### 5.2.1 BaseScraper 抽象设计

| 要素 | 定义 |
|------|------|
| 输入 | 配置对象（源参数、时间窗口 hours） |
| 输出 | `List[ContentItem]`，每条含 title、url、source、content、published_at、raw 等字段 |
| 核心方法 | `scrape() -> List[ContentItem]`（抽象方法，子类实现） |
| 通用能力 | 日志记录、异常捕获、超时控制、重试装饰器 |

BaseScraper 统一封装：日志前缀、请求超时、重试退避（默认 3 次、指数退避）、ContentItem 标准化构造。子类只需实现 `scrape()` 逻辑，保证新增信息源的成本最低。

#### 5.2.2 各采集器职责规范

| 采集器 | 信息源 | 输入 | 输出 | 采集方式 | 错误处理 |
|--------|--------|------|------|----------|----------|
| GitHubScraper | karpathy 动态；vllm/sglang/transformers/ollama/langchain releases | 用户名/仓库名、hours | 用户事件 + release 记录 | GitHub API | API 限流 403 时退避重试；单仓库失败跳过 |
| HackerNewsScraper | HN Top 40（分数 ≥100） | top_n=40、min_score=100、hours | 故事列表 + 标题/分值/链接 | HN API | 取不到 story 详情时丢弃该条 |
| RedditScraper | MachineLearning/LocalLLaMA/artificial/singularity | subreddit 列表、hours | 热门帖子 | Reddit API | 子版块失败不影响其他子版块 |
| RSSScraper | Simon Willison、GitHub Trending、Semianalysis、OpenAI/Anthropic/Google AI/HF Blog、LWN.net、量子位、新智元、36氪、机器之心、虎嗅 | feed URL 列表 | feed 条目 | RSS/Atom 解析 | 单 feed 解析失败跳过 |
| TelegramScraper | zaihuapd 频道 | 频道名、hours | 频道消息 | t.me/s 公开预览页 HTML 解析 | 页面结构变化时记录告警并降级 |
| GoogleNewsScraper | Google News RSS | 关键词、hours | 新闻条目 | RSS | 同 RSSScraper |
| OpenBBScraper | OpenBB 平台 | 平台参数 | 数据条目 | OpenBB 接口 | 接口异常跳过 |

#### 5.2.3 采集调度策略

- **并发**：多个采集器并行执行，由编排智能体统一调度。
- **限流**：对 GitHub API、HN API 等带配额的源，通过 `throttle`/重试退避控制请求频率。
- **重试**：网络类错误指数退避（1s→2s→4s），最多 3 次；解析类错误直接跳过并告警。
- **时间窗口**：统一使用 `--hours`（默认 24h）过滤过期内容。

### 5.3 AI 分析评分智能体（Analyzer Agent）详细设计

位于 `src/ai/analyzer.py`。

#### 5.3.1 职责与输入输出
- **输入**：采集到的 `ContentItem` 列表（约 35 条/日）。
- **职责**：对每条内容进行 0–10 分评分，评估重要性、相关性与新颖度。
- **输出**：带 `score` 字段的 `ContentItem` 列表。

#### 5.3.2 评分模型设计

| 评分维度 | 权重 | 说明 |
|----------|------|------|
| 重要性 | 40% | 是否为业界重大事件（如新模型发布、重大融资） |
| 相关性 | 30% | 与 AI 前沿主题的契合度 |
| 新颖度 | 20% | 是否为首次出现、是否提供新视角 |
| 影响范围 | 10% | 涉及人群/生态范围 |

评分标准（0–10 分制）：
- 8.0–10.0：重要资讯，进入增强与简报（阈值 8.0）
- 6.0–7.9：次重要，仅记录不进入简报
- 0–5.9：一般内容，过滤

#### 5.3.3 Prompt 工程设计
- System Prompt 明确角色为「AI 前沿资讯评审专家」，要求输出严格 JSON（含 score、reason 字段）。
- User Prompt 包含 title、source、content 摘要，要求按四维度打分并给出总分与理由。
- 温度 0.3 保证稳定性，max_tokens 8192 兼容长内容。

#### 5.3.4 并发策略与限流
- 并发 5 个分析任务，使用线程池/异步并发。
- throttle_sec=1，每两次 API 调用间隔至少 1 秒，避免 DeepSeek API 限流。

#### 5.3.5 评分质量保障
- 对评分异常（如全部同分、JSON 解析失败）触发告警并降级为人工兜底标记。
- 可抽样回放历史 ContentItem 验证评分一致性。

### 5.4 内容增强智能体（Enricher Agent）详细设计

位于 `src/ai/enricher.py`。

#### 5.4.1 职责与输入输出
- **输入**：通过评分阈值（≥8.0）的 `ContentItem` 列表（约 8 条/日）。
- **职责**：为每条重要内容补充背景信息、上下文解读、关联信息。
- **输出**：带 `enrichment`（背景、讨论、关联参考）字段的 `ContentItem`。

#### 5.4.2 增强策略
- 背景补充：该事件发生的行业背景、相关历史节点。
- 上下文关联：与近期其他资讯的关联、可能的影响。
- 讨论视角：社区（HN/Reddit）主流观点摘录。

#### 5.4.3 Prompt 工程设计
- System Prompt 要求模型作为「AI 行业分析师」，输出结构化增强字段（background、discussion、related）。
- User Prompt 注入内容本身 + 已有评分理由，要求避免编造，不确定时标注「待核实」。

#### 5.4.4 增强质量评估
- 增强内容必须可溯源，禁止幻觉编造数据。
- 通过参考链接交叉验证关键事实。

### 5.5 摘要生成智能体（Summarizer Agent）详细设计

位于 `src/ai/summarizer.py`。

#### 5.5.1 职责与输入输出
- **输入**：增强后的重要 `ContentItem` 列表。
- **职责**：生成每日中文简报 Markdown 文档。
- **输出**：Markdown 格式简报。

#### 5.5.2 简报结构设计
```
# 简报标题（含日期）
> blockquote：筛选统计（采集 N 条 / 入选 M 条 / 信息源分布）
## 排名列表（ol 有序列表）
1. 新闻标题一
2. 新闻标题二
## 每条新闻详情
### 1. 新闻标题一
- 来源 / 时间
- 背景：...
- 讨论：...
- 参考链接：...
- 标签：...
```

#### 5.5.3 多语言模板设计
- 提供 en/zh 两套标签模板（标题、背景、讨论、参考链接等字段名）。
- 输出语言固定为中文（业务要求），但模板字段可切换以兼容国际化场景。

#### 5.5.4 Markdown 输出规范
- 统一使用 ATX 标题（#）。
- 链接使用 `[文本](url)` 格式。
- 每条新闻以 `###` 三级标题分隔。

#### 5.5.5 质量评估标准
- 入选条目数与排名列表一致。
- 每条详情字段完整（来源、背景、讨论、参考链接、标签）。
- 无幻觉内容，关键事实可溯源。

### 5.6 编排智能体（Orchestrator Agent）详细设计

位于 `src/orchestrator.py`，核心类 `HorizonOrchestrator`。

#### 5.6.1 Pipeline 编排流程
1. 加载配置（信息源、AI 参数、阈值、并发数）。
2. 初始化采集器（基于配置动态实例化）。
3. 并行采集（Collector Agents 并发执行）。
4. AI 分析评分（Analyzer Agent，并发 5、限流 1s）。
5. 过滤（保留 score ≥ 8.0 的内容）。
6. AI 内容增强（Enricher Agent，并发 5）。
7. 生成摘要（Summarizer Agent）。
8. 存储结果（run_store 持久化运行产物）。
9. 触发通知（Notification Agent）。

#### 5.6.2 状态管理与错误恢复
- 各阶段独立错误处理：单源/单条失败不影响整体。
- 关键阶段产出持久化，支持断点续跑（配合 MCP 分阶段执行）。
- 全流程异常时记录错误并通知（不静默吞掉）。

#### 5.6.3 配置驱动设计
- 全部参数（信息源列表、阈值、并发、温度、max_tokens、throttle）走配置文件。
- 支持 `--hours` 命令行参数覆盖时间窗口（默认 24h）。

#### 5.6.4 扩展性设计
- 新增信息源：实现 `BaseScraper.scrape()` 并在配置中注册即可。
- 新增大模型 Provider：在 AI 智能体中抽象 Provider 接口。
- 新增通知渠道：实现 Notification 接口即可。

### 5.7 MCP 服务智能体详细设计

位于 `src/mcp/`，对外提供标准 MCP（Model Context Protocol）服务接口。

#### 5.7.1 MCP 协议支持
- 遵循 MCP 标准，允许外部 AI 客户端通过统一协议调用 AIHotNews 能力。
- 暴露能力：采集、分析、增强、生成、运行产物查询。

#### 5.7.2 分阶段执行能力
- 支持单独运行某个阶段（如仅采集、仅分析），便于调试与外部编排。
- 各阶段输入输出标准化，可串联也可独立调用。

#### 5.7.3 核心组件
| 组件 | 职责 |
|------|------|
| HorizonPipelineService | 应用服务层，封装各阶段业务逻辑 |
| HorizonRuntime | 动态加载运行时，按需实例化智能体 |
| run_store | 运行产物持久化（采集结果、评分、简报等） |

#### 5.7.4 外部集成接口
- 外部 AI 客户端可通过 MCP 调用 `collect`、`analyze`、`enrich`、`summarize`、`get_run` 等工具。
- 支持按 run_id 查询历史运行产物。

### 5.8 通知智能体（Notification Agent）详细设计

位于 `src/services/`。

#### 5.8.1 Webhook 通知策略
- `WebhookNotifier`（webhook.py）：简报生成后触发飞书 Webhook。
- 支持折叠卡片布局，避免长内容刷屏。

#### 5.8.2 飞书卡片布局设计
- 总览区：日期、入选条数、信息源分布。
- 分条区：每条新闻标题 + 评分 + 来源，可点击展开。
- 折叠策略：默认折叠详情，展开后查看背景与参考链接。

#### 5.8.3 邮件通知策略
- `EmailNotifier`（email.py，待实现）。
- 支持订阅/退订、关键词过滤。
- 邮件正文为简报 Markdown 渲染后的 HTML。

### 5.9 智能体协作机制

#### 5.9.1 数据流转
- 统一以 `ContentItem` 为数据载体，阶段间传递（采集→评分→增强→生成）。
- 每个智能体只读写自己负责的字段，避免耦合。

#### 5.9.2 并发与同步
- 采集阶段：多采集器并行。
- 分析/增强阶段：线程池并发 5，受 throttle 限流。
- 生成阶段：串行汇总，保证简报顺序稳定。

#### 5.9.3 错误传播与降级策略
| 故障点 | 降级策略 |
|--------|----------|
| 单个采集器失败 | 跳过该源，其余源正常产出 |
| 单条评分失败 | 跳过该条，不影响其他评分 |
| 增强失败 | 保留原内容，标注「未增强」 |
| 生成失败 | 记录错误并通知，不发布空简报 |
| 通知失败 | 重试 3 次，仍失败则告警 |

#### 5.9.4 智能体可观测性
- 每个智能体记录结构化日志（阶段名、输入条数、输出条数、耗时、错误）。
- run_store 持久化各阶段产物，支持事后回放与分析。
- 关键指标：采集总数、入选数、平均评分、各阶段耗时、总成本。

---

## 6. 非功能需求

| 维度 | 要求 |
|------|------|
| 性能 | 全流程在 GitHub Actions 单次 job 内完成；分析/增强并发 5 |
| 可用性 | 单源/单条失败不阻断整体；每日定时执行 |
| 安全性 | API Key 通过 GitHub Secret 注入，不落盘不日志；遵循最小权限 |
| 可扩展性 | 新增信息源/Provider/通知渠道只需实现接口并注册配置 |
| 成本 | 单次运行 0.1–0.5 元（DeepSeek 计费） |
| 可观测 | 结构化日志 + run_store 产物持久化 |

## 7. 数据需求

### 7.1 数据模型
核心实体 `ContentItem`：title、url、source、content、published_at、score、reason、enrichment（background/discussion/related）、tags、raw。

### 7.2 存储
- 运行产物通过 `run_store` 持久化（采集结果、评分结果、增强结果、最终简报）。
- 简报 Markdown 提交至仓库，由 GitHub Pages 渲染。

### 7.3 隐私
- 仅采集公开信息源，不涉及用户隐私数据。
- API Key 等密钥通过 Secret 管理，不写入代码或产物。

## 8. 接口需求

### 8.1 MCP 接口
- `collect`：触发采集，返回 ContentItem 列表。
- `analyze`：对内容评分，返回带分列表。
- `enrich`：对高分内容增强。
- `summarize`：生成简报。
- `get_run`：按 run_id 查询运行产物。

### 8.2 Webhook 接口
- 飞书 Webhook：接收折叠卡片 JSON。

### 8.3 CLI 接口
- `--hours`：指定时间窗口（默认 24）。

## 9. 发布计划与里程碑

| 阶段 | 内容 | 状态 |
|------|------|------|
| 阶段一 | 本地跑通简报 | ✅ 完成 |
| 阶段二 | 推 GitHub + Secret + Pages 上线 | ✅ 完成 |
| 阶段三 | 品牌化 + 信息源调优（5 个国内 RSS、玻璃拟态 UI） | ✅ 完成 |
| 阶段四 | 邮件订阅 | ⏳ 待实现 |

## 10. 风险评估与应对

| 风险 | 影响 | 应对 |
|------|------|------|
| 信息源页面结构变更 | 采集失败 | 解析容错 + 告警 + 降级跳过 |
| DeepSeek API 限流 | 评分中断 | throttle 限流 + 重试退避 |
| API Key 泄露 | 安全风险 | GitHub Secret 注入，不落盘 |
| 简报质量波动 | 用户体验下降 | 评分质量保障机制 + 抽样回放 |
| 单次运行成本上升 | 成本失控 | 监控 token 用量，优化 Prompt |

## 11. 附录

### 11.1 术语表
| 术语 | 说明 |
|------|------|
| ContentItem | 标准化内容对象，贯穿全 Pipeline |
| MCP | Model Context Protocol，模型上下文协议 |
| run_store | 运行产物持久化存储 |
| Glassmorphism | 玻璃拟态 UI 设计风格 |

### 11.2 关键配置项
| 配置项 | 默认值 |
|--------|--------|
| model | deepseek-chat |
| 重要资讯阈值 | 8.0 |
| 分析并发 | 5 |
| 增强并发 | 5 |
| temperature | 0.3 |
| max_tokens | 8192 |
| throttle_sec | 1 |
| hours | 24 |
| HN top_n | 40 |
| HN min_score | 100 |

### 11.3 信息源清单（12 类）
- GitHub：karpathy 动态；vllm/sglang/transformers/ollama/langchain releases
- HackerNews：Top 40（≥100 分）
- Reddit：MachineLearning / LocalLLaMA / artificial / singularity
- 国际 RSS：Simon Willison、GitHub Trending、Semianalysis、OpenAI Blog、Anthropic News、Google AI Blog、Hugging Face Blog、LWN.net
- 国内中文源：量子位、新智元、36氪快讯、机器之心、虎嗅
- Telegram：zaihuapd 频道
