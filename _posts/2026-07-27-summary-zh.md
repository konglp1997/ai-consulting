---
layout: default
title: "Daily-Summary: 2026-07-27 (ZH)"
date: 2026-07-27
lang: zh
---

> 从 46 条内容中筛选出 14 条重要资讯。

---

1. [研究人员通过 API 漏洞完全控制沃尔沃/埃彻车队平台](#item-1) ⭐️ 9.0/10
2. [Moonshot AI 发布 3T 参数 MoE 模型 Kimi-K3](#item-2) ⭐️ 9.0/10
3. [Fastjson2 曝远程代码执行漏洞，尚无补丁](#item-3) ⭐️ 9.0/10
4. [vLLM v0.26.0：新模型、DeepSeek-V4 优化、灵活注意力](#item-4) ⭐️ 8.0/10
5. [Anthropic 澄清对开放权重模型的立场](#item-5) ⭐️ 8.0/10
6. [法官驳回谷歌用 DMCA 抗辩数据抓取](#item-6) ⭐️ 8.0/10
7. [Paged Out #9：免费黑客杂志发布](#item-7) ⭐️ 8.0/10
8. [Bun 的 Rust 重写进展与发布延迟](#item-8) ⭐️ 8.0/10
9. [PGSimCity 交互式可视化 PostgreSQL 内部机制](#item-9) ⭐️ 8.0/10
10. [NVIDIA Cosmos-H-Dreams：手术机器人的实时生成式仿真](#item-10) ⭐️ 8.0/10
11. [单人研究发现六大前沿 LLM 均偏左，包括 Grok](#item-11) ⭐️ 8.0/10
12. [长鑫科技科创板首日暴涨 471.59%，创板块最大 IPO 纪录](#item-12) ⭐️ 8.0/10
13. [谷歌透露 Gemini 4 为迄今最雄心预训练](#item-13) ⭐️ 8.0/10
14. [中国启动国产 DUV 光刻机量产](#item-14) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [研究人员通过 API 漏洞完全控制沃尔沃/埃彻车队平台](https://eaton-works.com/2026/07/27/my-eicher-hack/) ⭐️ 9.0/10

一名安全研究人员发现并负责任地披露了沃尔沃/埃彻的 My Eicher 车队管理平台中的严重 API 漏洞，攻击者可完全控制所有用户和车辆。该漏洞于 2025 年 11 月报告，数周内修复，完整披露于 2026 年 7 月发布。 此漏洞凸显了云连接车队管理系统中的关键安全风险，一个缺陷就可能危及数千辆商用车辆和敏感用户数据。它强调了汽车行业需要进行严格的 API 安全测试和负责任的披露实践。 研究人员发现该平台的 API 缺乏适当的身份验证和授权检查，攻击者可枚举用户、访问车辆遥测数据并发出如禁用车辆等命令。披露时间线显示，供应商在初始报告后约两周内修复了主要漏洞。

hackernews · EatonZ · 7月27日 15:08 · [社区讨论](https://news.ycombinator.com/item?id=49070756)

**背景**: My Eicher 是沃尔沃和埃彻为商用车开发的车队管理和 GPS 跟踪系统。这类平台允许车队运营商监控车辆位置、燃油使用和驾驶员行为，并远程控制某些功能。这些系统中的 API 漏洞可能产生严重的现实后果，包括车辆无法启动或数据被盗。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://eaton-works.com/2026/07/27/my-eicher-hack/">Exploiting Volvo/Eicher’s fleet management platform to gain control over all users and vehicles</a></li>
<li><a href="https://play.google.com/store/apps/details?id=in.here.volvo.android&hl=en_US">MY EICHER - Apps on Google Play</a></li>

</ul>
</details>

**社区讨论**: 评论者赞扬了研究人员对供应商最初缓慢回应的耐心，并指出公开披露前的宽限时间。其他人则表达了对汽车云依赖的广泛担忧，一位用户分享了宝马因无手机信号而无法启动的轶事，另一位用户链接了 FSF 的维修权活动。

**标签**: `#security`, `#automotive`, `#API`, `#responsible disclosure`, `#fleet management`

---

<a id="item-2"></a>
## [Moonshot AI 发布 3T 参数 MoE 模型 Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) ⭐️ 9.0/10

Moonshot AI 在 HuggingFace 上发布了 Kimi-K3，这是一个拥有 3 万亿参数的混合专家（MoE）模型，采用原生 mxfp4 量化，推理时约需 1.5TB 显存。 此次发布标志着开源权重 AI 的一个重要里程碑，因为它是目前公开可用的最大模型之一，使初创公司能够针对自身数据和使用场景进行定制和微调，有望让前沿 AI 能力更加普及。 Kimi-K3 采用 Stable LatentMoE 框架，在 896 个专家中激活 16 个，相比 Kimi K2 实现了 2.5 倍的扩展效率提升。该模型还引入了 Kimi Delta Attention (KDA) 和 Attention Residuals (AttnRes)。

hackernews · nateb2022 · 7月27日 06:18 · [社区讨论](https://news.ycombinator.com/item?id=49065752)

**背景**: 混合专家（MoE）是一种神经网络架构，通过门控机制为每个输入仅激活部分参数（专家），使模型能够扩展到万亿参数而计算成本不会成比例增加。原生 mxfp4 量化通过以 4 位格式存储权重来减少内存占用，从而在更少的 GPU 上运行大型模型成为可能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.kimi.com/blog/kimi-k3">Kimi K 3 Tech Blog: Open Frontier Intelligence</a></li>
<li><a href="https://huggingface.co/unsloth/Kimi-K3">unsloth/ Kimi - K 3 · Hugging Face</a></li>

</ul>
</details>

**社区讨论**: 社区对初创公司的定制潜力感到兴奋，一位评论者强调在专有数据上的性能优势和知识产权主权。其他人则讨论了高昂的硬件需求，指出托管该模型至少需要 8 块 B200 GPU（1.5TB 显存），成本不菲，但此次发布为 3T 模型的每百万 token 定价提供了基准。

**标签**: `#AI`, `#LLM`, `#MoE`, `#open-source`, `#HuggingFace`

---

<a id="item-3"></a>
## [Fastjson2 曝远程代码执行漏洞，尚无补丁](https://mp.weixin.qq.com/s/LJaul1jNjK9pXRAkoUiMEA) ⭐️ 9.0/10

7 月 27 日，长亭科技披露了 Fastjson2 中的一个远程代码执行漏洞，影响 2.0.62 及之前的所有版本，目前尚无官方补丁。维护者已确认该问题，但漏洞细节和利用代码尚未公开。 这是一个广泛使用的 Java JSON 库中的严重安全漏洞，可能允许攻击者在受影响服务器上执行任意代码。该漏洞紧随本月早些时候 Fastjson 1.x 中的类似 RCE 漏洞出现，引发了对 Fastjson 生态系统安全的担忧。 该漏洞通过恶意 JSON 数据绕过 AutoType 类型校验。维护者关闭了 PR #7695 且未合入主分支，导致所有已发布版本均无补丁；建议用户在修复版发布前彻底禁用 AutoType。

telegram · zaihuapd · 7月27日 10:31

**背景**: Fastjson2 是阿里巴巴开发的 Java 高性能 JSON 库，广泛应用于企业级应用。AutoType 功能允许在反序列化时自动识别类型，若未妥善保护则可能被利用。与 Fastjson 1.x 不同，Fastjson 2 中的 AutoType 必须显式启用，没有默认白名单。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/alibaba/fastjson2/blob/main/docs/autotype_cn.md">fastjson2/docs/autotype_cn.md at main · alibaba/fastjson2</a></li>
<li><a href="https://github.com/alibaba/fastjson2/wiki/Security-Advisory:-Remote-Code-Execution-in-fastjson-1.2.68–1.2.83">Security Advisory: Remote Code Execution in fastjson 1.2.68–1.2.83 · alibaba/fastjson2 Wiki · GitHub</a></li>

</ul>
</details>

**标签**: `#security`, `#vulnerability`, `#fastjson2`, `#RCE`, `#java`

---

<a id="item-4"></a>
## [vLLM v0.26.0：新模型、DeepSeek-V4 优化、灵活注意力](https://github.com/vllm-project/vllm/releases/tag/v0.26.0) ⭐️ 8.0/10

vLLM v0.26.0 引入了 Inkling 模型家族的完整支持，针对 DeepSeek-V4 的重大性能优化（包括专用路由内核），以及可按 KV 缓存组选择的灵活注意力后端。 此版本显著提升了 DeepSeek-V4 等前沿模型的推理效率，实现了更快、更具成本效益的部署。灵活的注意力后端架构也为在生产中更好地支持混合模型铺平了道路。 DeepSeek-V4 路由内核实现了 2.94% 的端到端 TPOT 改进，而 fused_topk_bias 实现了 1.5–2 倍的内核加速。此版本还包括对生成模型的 fp32 lm_head 支持和 KV 卸载增强。

github · khluu · 7月27日 01:06

**背景**: vLLM 是一个用于快速 LLM 推理和服务的开源库，广泛应用于生产环境。注意力后端是实现核心注意力计算的可插拔组件，按 KV 缓存组选择它们的能力允许混合模型对不同层使用不同的注意力机制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.vllm.ai/en/latest/design/attention_backends/">Attention Backend Feature Support - vLLM</a></li>
<li><a href="https://deepwiki.com/vllm-project/vllm/8-attention-backends">Attention Backends | vllm-project/vllm | DeepWiki</a></li>
<li><a href="https://github.com/vultr/deepseek-v4-nvfp4-kernel">GitHub - vultr/deepseek-v4-nvfp4-kernel</a></li>

</ul>
</details>

**标签**: `#vLLM`, `#LLM inference`, `#performance optimization`, `#DeepSeek`, `#open source`

---

<a id="item-5"></a>
## [Anthropic 澄清对开放权重模型的立场](https://www.anthropic.com/news/position-open-weights-models) ⭐️ 8.0/10

Anthropic 发布博文，声明其从未主张禁止开放权重模型，但支持对所有足够强大的模型（无论是开放还是封闭）进行强制性安全测试。 这一微妙的立场影响了正在进行的 AI 监管辩论，因为它区分了安全测试和彻底禁令，可能塑造未来的政策。 Anthropic 首席执行官 Dario Amodei 还支持打击工业规模蒸馏和限制向中国销售芯片等措施，批评者认为这与不禁止的立场相矛盾。

hackernews · surprisetalk · 7月27日 22:03 · [社区讨论](https://news.ycombinator.com/item?id=49076057)

**背景**: 开放权重模型是那些训练参数公开发布的 AI 模型，允许任何人下载和使用。这与仅提供 API 的封闭模型形成对比。强制性安全测试是一种监管方法，要求 AI 开发者在部署前评估模型的风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://hai.stanford.edu/ai-definitions/what-is-an-open-weight-model">What is an Open-Weight Model? - Stanford HAI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence_in_the_United_States">Regulation of artificial intelligence in the United States - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者持怀疑态度，认为如果测试成本高昂或访问受限，强制性安全测试可能实际上禁止开放权重模型。一些人指出 Anthropic 立场的不一致，例如支持芯片禁令却否认主张禁令。

**标签**: `#AI safety`, `#open-weights models`, `#regulation`, `#Anthropic`, `#AI policy`

---

<a id="item-6"></a>
## [法官驳回谷歌用 DMCA 抗辩数据抓取](https://www.techdirt.com/2026/07/27/judge-rejects-googles-attempt-to-dmca-its-way-out-of-being-scraped/) ⭐️ 8.0/10

一名联邦法官驳回了谷歌试图利用《数字千年版权法》（DMCA）阻止 SerpApi 抓取其搜索结果的请求，裁定搜索引擎结果页面（SERP）不属于可受版权保护的汇编作品。 该裁决为网络抓取（尤其是 AI 训练数据和搜索引擎竞争）树立了重要先例，确认公开可访问的搜索结果属于事实数据，不受版权保护。 本案涉及总部位于得克萨斯州的 API 公司 SerpApi，该公司为客户抓取谷歌搜索结果。谷歌曾主张其 SERP 属于可受版权保护的汇编作品，但法官以缺乏编排原创性为由未予支持。

hackernews · cdrnsf · 7月27日 18:15 · [社区讨论](https://news.ycombinator.com/item?id=49073513)

**背景**: DMCA 禁止规避控制受版权作品访问的技术措施。网络抓取常引发版权问题，但法院普遍认为公开的事实数据可以被抓取。hiQ 诉 LinkedIn 案是关键先例，确立了抓取公开数据不违反《计算机欺诈和滥用法》（CFAA）。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ppc.land/texas-api-firm-strikes-back-after-googles-dmca-web-scraping-lawsuit/">Texas API firm strikes back after Google's DMCA web scraping lawsuit</a></li>
<li><a href="https://scrapingapi.ai/blog/legal-battles-that-changed-web-scraping">Legal Battles That Changed Web Scraping: Landmark Cases and What They Mean in 2025 - ScrapingAPI.ai</a></li>
<li><a href="https://scrapecreators.com/blog/is-web-scraping-legal-a-guide-based-on-recent-court-ruling">Web Scraping Is Legal? hiQ, CFAA, and Public Data | ScrapeCreators Blog</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍对该裁决表示欢迎，批评谷歌利用诉讼打压竞争。有人指出谷歌已弃用其 API，使得抓取成为唯一可行选择；还有人强调抓取对于揭露虚假 ESTA 网站等广告骗局的重要性。

**标签**: `#legal`, `#web scraping`, `#copyright`, `#Google`, `#search engines`

---

<a id="item-7"></a>
## [Paged Out #9：免费黑客杂志发布](https://pagedout.institute/download/PagedOut_009.pdf) ⭐️ 8.0/10

Paged Out #9 是一本免费的印刷级黑客杂志，以 PDF 形式发布，包含关于编程、复古计算和安全的深度技术文章。 这本杂志填补了高质量、深度技术黑客内容的空白，让人想起 Phrack 和 2600 等经典杂志，其免费获取方式使其广泛可及。 本期包含《C 语言入门》和《亚像素动物园》等文章，以及一篇关于可计算铺砌的文章，重新发现了王浩在 1960 年代将停机问题与多米诺问题联系起来的工作。

hackernews · laurensr · 7月27日 14:22 · [社区讨论](https://news.ycombinator.com/item?id=49070138)

**背景**: Paged Out 是一本免费的、由社区驱动的黑客杂志，旨在以印刷级格式提供高质量的技术内容。它涵盖从底层编程到复古计算的广泛主题，吸引黑客和技术爱好者。

**社区讨论**: 社区评论非常积极，读者称赞杂志的设计和深度，将其与 Phrack 和 2600 相提并论。一位评论者指出，可计算铺砌文章是对王浩 1960 年代工作的未署名重新发现。

**标签**: `#hacker magazine`, `#technical articles`, `#programming`, `#retro computing`, `#community`

---

<a id="item-8"></a>
## [Bun 的 Rust 重写进展与发布延迟](https://lockwood.dev/ai/2026/07/27/how-is-the-bun-rewrite-in-rust-going.html) ⭐️ 8.0/10

Bun 的创建者 Jarred 宣布，Rust 重写版已在一个多月前随 Claude Code 发布，进展顺利，但下一个版本（v1.4）将延迟，直到承诺的 Node.js 兼容性改进达标。 此次更新提供了对流行 JavaScript 运行时重大重写的罕见洞察，影响了依赖 Bun 追求速度和 Node.js 兼容性的开发者。延迟凸显了在性能提升与兼容性目标之间取得平衡的挑战。 Rust 重写版已集成到广泛使用的 AI 编码工具 Claude Code 中，用户几乎未察觉。v1.4 版本因 Jarred 承诺的一定数量新增通过的 Node.js 测试尚未合并而受阻。

hackernews · tomlockwood · 7月27日 11:12 · [社区讨论](https://news.ycombinator.com/item?id=49067854)

**背景**: Bun 是一个快速的全能 JavaScript 运行时，旨在作为 Node.js 的即插即用替代品，最初用 Zig 编写。决定用 Rust 重写旨在利用 Rust 的生态系统和安全特性。Claude Code 是 Anthropic 的 AI 驱动编码助手，被许多开发者使用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://bun.sh/">Bun — A fast all-in-one JavaScript runtime</a></li>
<li><a href="https://github.com/oven-sh/bun">GitHub - oven-sh/ bun : Incredibly fast JavaScript runtime , bundler...</a></li>
<li><a href="https://claude.com/product/claude-code">Claude Code by Anthropic | AI Coding Agent, Terminal, IDE</a></li>

</ul>
</details>

**社区讨论**: 社区评论反应不一：一些人指出重大重构自然会减缓开发速度，而另一些人则质疑重写的必要性，指出一个基于 Zig 的分支声称通过修复自身问题实现了亚秒级构建时间。还有人对于使用 LLM 进行翻译持怀疑态度，担心长期可维护性。

**标签**: `#Bun`, `#Rust`, `#JavaScript runtime`, `#rewrite`, `#Node.js compatibility`

---

<a id="item-9"></a>
## [PGSimCity 交互式可视化 PostgreSQL 内部机制](https://nikolays.github.io/PGSimCity/) ⭐️ 8.0/10

PGSimCity 是一个交互式可视化工具，模拟 PostgreSQL 的内部进程，让复杂的数据库调度和执行流程变得生动易懂。 该工具降低了理解 PostgreSQL 内部机制的门槛，惠及开发者、DBA 和教育工作者。其开源特性和新颖的可视化方法可能为其他复杂系统带来类似的教育工具。 该工具是开源的，据社区评论，它采用“氛围编码”方法在不到 48 小时内完成。它使用动画城市隐喻来表示数据库进程，但一些用户认为自动推进的导览过于杂乱，更倾向于交互式探索。

hackernews · jonbaer · 7月27日 00:19 · [社区讨论](https://news.ycombinator.com/item?id=49063754)

**背景**: PostgreSQL 采用多进程架构，后台进程处理写入数据、检查点和清理等任务。理解这些进程对于性能调优和故障排除至关重要，但传统文档依赖静态图表。PGSimCity 旨在让这种动态行为变得可见且直观。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://stackinsight.substack.com/p/postgresql-internal-processes">PostgreSQL Internal Processes - Wayne's Substack</a></li>
<li><a href="https://www.postgresql.org/docs/current/overview.html">PostgreSQL: Documentation: 18: Chapter 51. Overview of ...</a></li>
<li><a href="https://www.enterprisedb.com/blog/postgres-internals-deep-dive-process-architecture">Postgres Internals Deep Dive: Process Architecture</a></li>

</ul>
</details>

**社区讨论**: 社区反馈总体积极，称赞其新颖方法以及在 Kubernetes 等其他领域复用的潜力。然而，一些用户认为自动播放导览令人困惑，建议改为交互式；另一些用户则质疑其快速开发的准确性。

**标签**: `#PostgreSQL`, `#visualization`, `#database internals`, `#open source`, `#educational tool`

---

<a id="item-10"></a>
## [NVIDIA Cosmos-H-Dreams：手术机器人的实时生成式仿真](https://huggingface.co/blog/nvidia/cosmos-h-dreams) ⭐️ 8.0/10

NVIDIA 推出了 Cosmos-H-Dreams，这是一个用于手术机器人的实时、动作条件生成式世界模型，允许人类操作员或学习策略在合成的手术环境中执行操作。它是 Cosmos 世界基础模型系列的领域特定变体，旨在实现逼真的训练和规划。 该框架通过提供逼真、高保真的仿真环境，无需昂贵的物理设备，可显著加速手术机器人的开发和训练。它将生成式 AI 与机器人技术相结合，有望降低医疗培训和自主手术的成本并提高安全性。 Cosmos-H-Dreams 是一个开源、GPU 加速的框架，将更大 Cosmos 模型的能力提炼为实时模拟器。它是动作条件的，即根据当前动作生成未来帧，从而实现用于策略学习和人在环训练的交互式仿真。

rss · Hugging Face Blog · 7月27日 09:32

**背景**: 传统上，手术机器人训练依赖于物理模型或记录数据，这些方法成本高昂且变异性有限。像 Cosmos-H-Dreams 这样的生成式世界模型从数据中学习手术环境的动力学，并能即时生成新颖、逼真的场景，为训练和测试机器人策略提供可扩展的替代方案。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/nvidia/Cosmos-H-Dreams">nvidia/ Cosmos - H - Dreams · Hugging Face</a></li>
<li><a href="https://huggingface.co/blog/nvidia/cosmos-h-dreams">NVIDIA Cosmos-H-Dreams: Bringing Real-Time Generative ...</a></li>
<li><a href="https://www.massdevice.com/nvidia-unveils-simulation-framework-surgical-robotics/">Nvidia unveils new simulation framework for surgical robotics</a></li>

</ul>
</details>

**标签**: `#NVIDIA`, `#generative AI`, `#surgical robotics`, `#simulation`, `#real-time`

---

<a id="item-11"></a>
## [单人研究发现六大前沿 LLM 均偏左，包括 Grok](https://www.reddit.com/r/MachineLearning/comments/1v8fnzw/evaluated_6_frontier_llms_gpt54_claude_sonnet_46/) ⭐️ 8.0/10

一项单人评估项目对六大前沿 LLM（GPT-5.4、Claude Sonnet 4.6、Claude Opus 4.7、Gemini Pro、Gemini Flash、Grok 4.3）在 8 个偏见基准上进行了约 20,600 个示例的测试，发现所有模型都表现出左倾政治偏见，包括自称右倾的 Grok。研究还揭示了模型在种族相关问题上的拒绝率差异，其中 GPT-5.4 拒绝率为 20.3%。 这项研究提供了实证证据，表明前沿 LLM 在政治上持续左倾，这对公平性、信任度以及在政治敏感应用中的部署具有重要意义。Grok 的输出与其自称立场相矛盾，凸显了模型自我描述与实际行为之间的差距。 评估使用了 8 个基准：WinoBias、BBQ 种族/民族、SeeGULL、OpinionsQA、cajcodes 政治偏见、Hyperpartisan News 和 Political Compass。该研究受限于单人非同行评审项目，采用单次运行实验且每项任务仅使用单一提示模板。

reddit · r/MachineLearning · /u/marggggggggg · 7月27日 22:37

**背景**: WinoBias 和 BBQ 等偏见基准旨在衡量语言模型中的社会偏见。WinoBias 专注于共指消解中的性别偏见，而 BBQ（问答偏见基准）测试问答中涵盖种族/民族等九个维度的社会偏见。SeeGULL 是一个具有广泛地理文化覆盖的刻板印象数据集。这些基准有助于量化模型可能如何延续有害的刻板印象。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.kaggle.com/datasets/thedevastator/winobias-coreference-dataset">WinoBias Coreference Dataset | Kaggle</a></li>
<li><a href="https://github.com/nyu-mll/BBQ">GitHub - nyu-mll/BBQ: Repository for the Bias Benchmark for ... BBQ Dataset: Benchmark for QA Social Bias - emergentmind.com HiTZ/bbq · Datasets at Hugging Face BBQ (Bias Benchmark for QA) - AI Wiki bitlabsdb/BBQ_dataset · Datasets at Hugging Face [2110.08193] BBQ: A Hand-Built Bias Benchmark for Question ...</a></li>
<li><a href="https://github.com/google-research-datasets/seegull">GitHub - google-research- datasets / seegull : SeeGULL is...</a></li>

</ul>
</details>

**社区讨论**: Reddit 社区讨论可能突出对 Grok 左倾行为的惊讶，关于单次运行评估有效性的辩论，以及呼吁进行更严格的多轮研究。一些人可能会质疑基准和提示模板的选择。

**标签**: `#LLM bias`, `#fairness evaluation`, `#political bias`, `#frontier models`, `#AI safety`

---

<a id="item-12"></a>
## [长鑫科技科创板首日暴涨 471.59%，创板块最大 IPO 纪录](https://www.stcn.com/article/detail/4042119.html) ⭐️ 8.0/10

长鑫科技（CXMT）在上海科创板上市首日暴涨 471.59%，报收 49.5 元/股，市值超过 3.7 万亿元。本次 IPO 实际募集资金约 579 亿元，超越 2020 年中芯国际 532 亿元的纪录，成为科创板史上最大 IPO。 长鑫科技创纪录的 IPO 凸显了中国推动半导体自主化的决心，尤其是在长期被三星、SK 海力士和美光主导的 DRAM 存储芯片领域。首日强劲表现反映了投资者对国产芯片行业的信心，可能加速本土存储生态的发展。 长鑫科技以每股 8.66 元发行 66.88 亿股，若超额配售选择权（绿鞋机制）全额行使，总募资额可达 666 亿元。公司预计 2026 年上半年归母净利润 500 亿至 570 亿元，同比大幅扭亏。

telegram · zaihuapd · 7月27日 01:29

**背景**: 上海科创板（科技创新板）于 2019 年 7 月开板，旨在以更灵活的上市规则支持科技创新企业，包括允许未盈利公司上市。长鑫科技是中国领先的 DRAM 制造商，在中美科技紧张局势下，对减少对外国存储芯片的依赖至关重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.binance.com/zh-CN/square/post/07-27-2026-china-s-cxmt-soars-535-in-debut-after-9-8-billion-ipo-largest-onshore-listing-349079975291410">中国 长 鑫 科 技 （ CXMT ）首日暴涨535... | Binance News发布于币安广场</a></li>
<li><a href="https://en.wikipedia.org/wiki/Shanghai_Stock_Exchange_STAR_Market">Shanghai Stock Exchange STAR Market - Wikipedia</a></li>

</ul>
</details>

**标签**: `#semiconductor`, `#IPO`, `#China`, `#memory chips`, `#STAR Market`

---

<a id="item-13"></a>
## [谷歌透露 Gemini 4 为迄今最雄心预训练](https://9to5google.com/2026/07/26/google-gemini-4-teases/) ⭐️ 8.0/10

谷歌 CEO Sundar Pichai 在 Alphabet 2026 年第二季度财报电话会议上宣布，下一代大模型 Gemini 4 已开始训练，称其为公司迄今为止最具雄心的预训练项目。该模型预计在 2026 年底发布，很可能在 11 月或 12 月。 这表明谷歌持续大力投资前沿 AI 和 AGI，旨在保持与 OpenAI 等竞争对手的竞争力。Gemini 4 的发布可能大幅提升推理、编码和多模态理解能力。 Pichai 强调谷歌将优先把算力分配给前沿 AGI 研发，以确保 Gemini 4 发布时仍处于行业前沿。同时，Gemini 3.x Flash 系列将保持几乎每月一次的迭代频率，重点提升智能编码等能力。

telegram · zaihuapd · 7月27日 04:06

**背景**: Gemini 是谷歌的大语言模型系列，与 OpenAI 的 GPT 系列和 Anthropic 的 Claude 竞争。预训练是模型从海量数据中学习的初始阶段，需要巨大的计算资源。谷歌一直在快速迭代，Gemini 3.x Flash 模型已于 2026 年初发布。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://felloai.com/all-we-know-about-google-gemini-4/">Gemini 4: Release Date, Pre-Training News & Rumors</a></li>
<li><a href="https://coursiv.io/blog/gemini-4-pretraining">Gemini 4 Training Has Begun: Release Date & What We Know ...</a></li>
<li><a href="https://andrew.ooo/answers/gemini-4-pretraining-tease-what-we-know-july-2026/">Gemini 4 Pretraining Tease: What We Know So Far (July 2026)</a></li>

</ul>
</details>

**标签**: `#AI`, `#Google`, `#Gemini`, `#Large Language Models`, `#AGI`

---

<a id="item-14"></a>
## [中国启动国产 DUV 光刻机量产](https://www.theinformation.com/articles/china-starts-mass-producing-homegrown-duv-chipmaking-tools-advance-local-chip-industry) ⭐️ 8.0/10

中国已开始量产自主研发的浸没式深紫外（DUV）光刻机，计划今年生产约 5 台，到 2027 年生产约 20 台，目标客户包括中芯国际和华虹半导体等国内芯片制造商。 这一进展可能减少中国对 ASML 先进光刻设备的依赖，尤其是在西方出口管制收紧的背景下，并可能逐步侵蚀 ASML 在中国市场的份额。 国产 DUV 设备在性能和可靠性上仍落后于 ASML；芯片制造商需要数月甚至更长时间测试其精度和兼容性才能投入量产。部分关键部件仍来自日本，今年本地供应链延误已影响进度。

telegram · zaihuapd · 7月27日 14:10

**背景**: DUV 光刻机使用 193nm 波长的光对集成电路进行图案化，浸没技术通过在透镜和晶圆之间增加液体层来提高分辨率。ASML 主导全球光刻机市场，其先进的 EUV 设备是制造最先进芯片所必需的。在美国主导的出口限制下，中国长期以来一直寻求开发国产替代方案。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.zaobao.com.sg/news/china/story20260727-9428899">美媒：中国开始生产DUV光刻机 年内交付 | 联合早报</a></li>
<li><a href="https://en.wikipedia.org/wiki/ASML">ASML</a></li>
<li><a href="https://zh.wikipedia.org/wiki/浸没光刻">浸没光刻 - 维基百科，自由的百科全书</a></li>

</ul>
</details>

**标签**: `#semiconductor`, `#lithography`, `#China`, `#ASML`, `#supply chain`

---