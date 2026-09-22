---
layout: default
title: "Daily-Summary: 2026-09-22 (ZH)"
date: 2026-09-22
lang: zh
---

> 从 66 条内容中筛选出 13 条重要资讯。

---

1. [OpenAI 发布 GPT-6 Sol 与 Luna 模型](#item-1) ⭐️ 9.0/10
2. [Anthropic 发布 Claude Opus 5.5，价格下调](#item-2) ⭐️ 9.0/10
3. [五角大楼承认过度依赖 AI 导致伊朗学校遭袭](#item-3) ⭐️ 9.0/10
4. [vLLM v0.30.0 发布：新增多款模型、GPU 权重缓存守护进程与量化升级](#item-4) ⭐️ 8.0/10
5. [黑客声称窃取全部 FBI 员工数据](#item-5) ⭐️ 8.0/10
6. [Trail of Bits 批评 SAML 是糟糕设计的分形](#item-6) ⭐️ 8.0/10
7. [WordPress 修复可导致条件性 RCE 的未认证路径遍历漏洞](#item-7) ⭐️ 8.0/10
8. [gzip 能充当语言模型吗？](#item-8) ⭐️ 8.0/10
9. [OpenAI 为 GPT-6 增强提示缓存，新增断点与诊断功能](#item-9) ⭐️ 8.0/10
10. [小米发布 MiMo-V2.6 多模态模型，强化学习训练成本仅 350 万美元](#item-10) ⭐️ 8.0/10
11. [阿里发布真武 V900，宣称最强国产 AI 芯片，算力提升至 3 倍](#item-11) ⭐️ 8.0/10
12. [DeepSeek 发布 DSec 沙箱平台：每日服务 300 万个实例](#item-12) ⭐️ 8.0/10
13. [中国调查 DeepSeek 与月之暗面数据泄露事件](#item-13) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenAI 发布 GPT-6 Sol 与 Luna 模型](https://openai.com/index/introducing-gpt-6-sol-and-luna/) ⭐️ 9.0/10

OpenAI 发布了 GPT-6 Sol 和 GPT-6 Luna 两款新模型，以不同的能力与成本组合将前沿智能带入日常工作，现已在 API、Codex 和 ChatGPT 中上线。GPT-6 Luna 的价格仅为 GPT-5.6 Luna 的一半，且两款模型运行时消耗的 token 都比同级别的 GPT-5.6 模型更少。 大幅降价和 token 效率的提升可能会显著降低开发者和企业运行大规模 AI 工作负载的成本，而模型在 ChatGPT、Codex 和 API 中的同步上线则影响广泛的用户群体。此次发布也加剧了与 Anthropic 的 Claude 等对手在编程助手和智能体领域的竞争。 GPT-6 Sol 和 Luna 建立在 GPT-6 Astra 的技术进展之上，将其大部分优势带入更快、更经济的模型中。对于 GPT-6 Sol 和 Luna，欧盟数据驻留仅支持标准处理，而对于 2026 年 3 月 5 日及之后发布的模型，区域处理端点会收取 10% 的附加费。

hackernews · OpenAI Blog · 9月22日 18:00 · [社区讨论](https://news.ycombinator.com/item?id=49805509)

**背景**: OpenAI 会定期发布新一代大语言模型，每一代通常都会在推理、速度和成本上较前代有所改进。GPT-6 Astra 是 GPT-6 系列中较早的旗舰模型，而 Sol 和 Luna 则是基于它衍生出的更高效变体。定价和 token 消耗是开发者的关键指标，因为 API 成本会随使用量增长，尤其是在智能体和编程类工作负载中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/introducing-gpt-6-sol-and-luna/">Introducing GPT‑6 Sol and Luna - OpenAI</a></li>
<li><a href="https://9to5mac.com/2026/09/22/openai-upgrading-chatgpt-and-codex-with-two-more-gpt-6-models/">OpenAI upgrading ChatGPT and Codex with two more GPT-6 models</a></li>
<li><a href="https://community.openai.com/t/announcing-gpt-6-sol-and-gpt-6-luna-in-the-api-codex-and-chatgpt/1399925">Announcing GPT-6 Sol and GPT-6 Luna in the API, Codex and ChatGPT</a></li>

</ul>
</details>

**社区讨论**: 评论者强调 GPT-6 Luna 相比 GPT-5.6 Luna 价格减半是一大亮点，simonw 还分享了鹈鹕基准测试的对比。开发者们就 Codex 与 Claude Code 的使用限制和套餐价值展开讨论，有人对上一代 GPT-5.6 Sol 模型产生了依恋，担心新模型虽然技术上更强但用起来不够自然。也有人称赞 ChatGPT 对普通用户而言整体产品质量出色。

**标签**: `#OpenAI`, `#GPT-6`, `#AI models`, `#LLM`, `#model release`

---

<a id="item-2"></a>
## [Anthropic 发布 Claude Opus 5.5，价格下调](https://www.anthropic.com/claude-opus-5-5) ⭐️ 9.0/10

Anthropic 发布了 Claude Opus 5.5，这是其公开呼吁“为前沿技术减速（pacing the frontier）”之后的首个模型发布，全面下调了价格（每百万输入 token 从 5 美元降至 4 美元，输出从 25 美元降至 20 美元，缓存读取从 0.50 美元降至 0.20 美元，缓存写入从 6.25 美元降至 5 美元），并改进了沟通风格，使其表达更自然。该模型在发布前由 Frontier Design 和 METR 等外部评估机构进行了测试，并在 OpenRouter 上由五家供应商提供服务。 此次发布加剧了外界对领先实验室是否真的在放缓前沿开发的争论——它们究竟是在安全叙事下继续狂奔，还是确实在减速；而大幅降价也给竞争对手带来压力，因为像 DeepSeek 这样更便宜的模型正获得越来越多的关注。这也表明，沟通质量和长时间会话中的可用性正成为旗舰模型的关键差异化因素。 价格表显示，缓存读取降至每百万 token 0.20 美元，输入降至 4 美元，输出降至 20 美元，缓存写入降至 5 美元，使 Opus 5.5 明显比 Opus 5 便宜。Anthropic 称早期测试者发现其写作更清晰、更易理解，最重要的信息被放在前面，公司将其视为实用性和安全性双重收益。

hackernews · km144 · 9月22日 16:29 · [社区讨论](https://news.ycombinator.com/item?id=49803892)

**背景**: Anthropic 是一家美国 AI 公司，其 Claude 模型分为三个层级：Haiku（能力最弱）、Sonnet 和 Opus（能力最强）。“为前沿技术减速（pacing the frontier）”是一项提议，尤其由 Anthropic CEO Dario Amodei 提出，主张 AI 公司和政府应有意放缓越来越强大的前沿模型的开发速度，以便安全措施和监管能够跟上。DeepSeek 是一家中国 AI 公司，以极低成本发布开放权重的前沿模型而闻名，重塑了 LLM 市场的价格竞争格局。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/claude-opus-5-5">Introducing Claude Opus 5 . 5 \ Anthropic</a></li>
<li><a href="https://www.pacingthefrontier.com/">Pacing the Frontier</a></li>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek">DeepSeek - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论者强烈质疑 Anthropic 的表述：有人指出其中的讽刺意味——第一行提醒读者“为前沿技术减速”的呼吁，而帖子其余部分却用具体数字证明 Anthropic 根本没有减速。也有人对降价表示欢迎，一位评论者强调 Opus 5 很可能是 OpenRouter 上支出最高的模型，而另一位则表示对便宜得多的 DeepSeek v4.1 在繁重的智能体任务上的表现很满意。

**标签**: `#AI/ML`, `#LLM`, `#Anthropic`, `#Claude`, `#Model Release`

---

<a id="item-3"></a>
## [五角大楼承认过度依赖 AI 导致伊朗学校遭袭](https://www.bloomberg.com/graphics/2026-iran-school-attack/) ⭐️ 9.0/10

五角大楼承认，过度依赖其 AI 目标定位系统 Project Maven，是导致伊朗米纳布一所学校遭导弹袭击的原因之一。该校因数据过时被错误标记为伊斯兰革命卫队设施。调查发现，美国“未能履行尽一切可能核实目标的义务”，且这一失误“超出了单纯疏忽的范畴”。 这是 AI 安全与治理领域的一个范式转变案例，表明将高风险军事决策委托给 AI 系统可能导致灾难性平民伤亡。它引发了关于法律责任、人类责任以及 AI 在战争中局限性的深刻问题，可能重塑军方部署和监管此类技术的方式。 官员指出，一些用户期望 Maven 能标记情报中的过时记录或矛盾之处，但尚不清楚他们为何认为系统会这样做；米纳布站点与其他候选目标一起被输入 Maven，并被推荐为打击目标。五角大楼将责任归咎于 Palantir 的软件，而 Palantir 则指向错误的数据输入，导致问责不明。

hackernews · devonnull · 9月22日 19:03 · [社区讨论](https://news.ycombinator.com/item?id=49806430)

**背景**: Project Maven 是美国国防部于 2017 年启动的一项计划，旨在加速机器学习与数据集成在军事情报工作流程中的应用，包括情报、监视和目标获取。它是五角大楼的旗舰 AI 项目，并处于美国对伊朗打击行动的核心，代表了现代战争最具深远意义的变革之一。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Project_Maven">Project Maven - Wikipedia</a></li>
<li><a href="https://www.euractiv.com/news/ai-at-war-five-things-to-know-about-project-maven/">AI at war: Five things to know about Project Maven | Euractiv</a></li>
<li><a href="https://www.militarytimes.com/news/your-military/2026/09/16/ai-military-targeting-may-move-faster-than-humans-can-authenticate-critics-warn/">AI military targeting may move faster than humans can authenticate, critics warn</a></li>

</ul>
</details>

**社区讨论**: 评论者就根本原因展开辩论，一些人认为 AI 并非真正的罪魁祸首，而是人为疏忽；另一些人则强调，人类必须对 AI 辅助决策负责，尤其是在导致平民死亡时。许多人批评五角大楼和 Palantir 都缺乏问责，并警告说，误解 AI 的局限性会导致危险的过度依赖。

**标签**: `#AI ethics`, `#military AI`, `#accountability`, `#AI safety`, `#Pentagon`

---

<a id="item-4"></a>
## [vLLM v0.30.0 发布：新增多款模型、GPU 权重缓存守护进程与量化升级](https://github.com/vllm-project/vllm/releases/tag/v0.30.0) ⭐️ 8.0/10

vLLM 发布了 v0.30.0，这是一个包含来自 315 位贡献者（其中 104 位新贡献者）的 762 次提交的重大更新，新增了对 DeepSeek-V4.1-Flash、DeepSeek-V4-Flash-Vision-Exp、GLM-5.3-Flash、K2-Horizon、Cohere Compass、Bailing V3 VL 和 Nanbeige4.2 等模型的支持。该版本还引入了持久化的每 GPU 权重缓存守护进程（通过 `--load-format ipc_cache` 实现引擎快速重启）、Gumbel-max 水印、HiSparse 主机驻留 KV 分层，以及大量性能和量化改进。 vLLM 是目前使用最广泛的开源大语言模型推理与服务引擎之一，因此本次发布直接影响开发者部署和扩展生产模型的方式。Fast Start 权重缓存守护进程以及新的量化/后端特性可以显著降低重启延迟并提升大规模服务吞吐量，而广泛的模型支持则使 vLLM 与快速演进的开放权重模型生态保持同步。 Fast Start 守护进程将量化后、按 TP 分片的权重保存在 GPU 内存中，并通过 CUDA IPC 提供给新引擎，目前还覆盖了 FP4 检查点和多节点 TP。其他值得注意的细节包括：在 SM100 上通过 FlashMLA V4.1 为 DeepSeek-V4.1-Flash 提供 MXFP8 KV 存储、带有 AVX512/AMX 稀疏 MLA 内核的 DeepSeek-V4 CPU 后端，以及通过 `quantization_config.targets` 实现的有针对性在线量化。

github · khluu · 9月22日 05:20

**背景**: vLLM 是一个高效服务大语言模型的开源引擎，以 PagedAttention 等管理 KV 缓存内存的技术而闻名。MXFP8 是由开放计算项目（Open Compute Project）定义的微缩放 FP8 格式，它在块级别（通常以 32 个元素为一组）应用缩放因子，从而提高量化精度。FlashMLA 是 DeepSeek 为多头潜在注意力（MLA）优化的注意力内核库，旨在让长上下文解码更快、更便宜。权重缓存守护进程是一个持久化进程，它将模型权重保留在 GPU 内存中，使重启的推理引擎可以通过零拷贝 IPC 映射这些权重，而无需从磁盘重新加载。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.vllm.ai/en/stable/api/vllm/model_executor/model_loader/weight_cache/daemon/">daemon - vLLM</a></li>
<li><a href="https://github.com/vllm-project/vllm/issues/56049">[Feature]: Fast Start For vLLM · Issue #56049 · vllm-project/vllm</a></li>
<li><a href="https://github.com/deepseek-ai/FlashMLA">GitHub - deepseek-ai/ FlashMLA : FlashMLA : Efficient Multi-head...</a></li>

</ul>
</details>

**标签**: `#vLLM`, `#LLM inference`, `#model serving`, `#release`, `#GPU optimization`

---

<a id="item-5"></a>
## [黑客声称窃取全部 FBI 员工数据](https://www.404media.co/we-hacked-the-fbi-hackers-say-they-have-data-on-all-fbi-employees/) ⭐️ 8.0/10

一个据称是 ShinyHunters 的黑客组织声称窃取了全部 FBI 员工的数据，并表示其目的并非金钱，而是某种形式的“胁迫”。该消息由 404 Media 报道，目前尚未得到 FBI 或其他权威机构的独立证实。 如果该声明得到证实，如此规模的泄露将构成重大国家安全事件，暴露联邦执法人员的敏感个人与职业数据，可能被用于间谍活动或针对性攻击。这也凸显出即便是资源充足的政府机构，也面临来自复杂网络攻击的日益严重的风险。 据报道，黑客对 404 Media 表示其动机是“胁迫”而非为钱财进行勒索，且尚未公开提供数据证据。该声明仍未得到证实，目前不清楚实际获取了多少条记录（如果有的话），也不清楚具体包含哪些类型的信息。

hackernews · spenvo · 9月22日 17:46 · [社区讨论](https://news.ycombinator.com/item?id=49805278)

**背景**: 国家支持的黑客攻击和网络间谍活动日益普遍，民族国家和犯罪团伙以政府数据库为目标，以获取情报、制造混乱或施加影响。一个著名的先例是 2015 年美国人事管理办公室（OPM）数据泄露事件，中国被指控窃取了约 2210 万名美国政府雇员的记录。此类事件引发了关于如何保护大型集中式敏感个人数据存储的争论。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/State-sponsored_hacking">State-sponsored hacking</a></li>
<li><a href="https://en.wikipedia.org/wiki/Archive.ph">Archive.ph</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍对任何大型机构保护敏感数据库的能力表示悲观，有人引用 2015 年 OPM 泄露事件作为证据，认为国家行为者很可能已经掌握了此类数据。其他人则将其与《太空堡垒卡拉狄加》中物理隔离系统的虚构场景相类比，也有人嘲讽黑客声称的非金钱动机，或批评 FBI 的能力。

**标签**: `#cybersecurity`, `#data breach`, `#FBI`, `#hacking`, `#national security`

---

<a id="item-6"></a>
## [Trail of Bits 批评 SAML 是糟糕设计的分形](https://blog.trailofbits.com/2026/09/21/saml-a-fractal-of-bad-design/) ⭐️ 8.0/10

Trail of Bits 发布了一篇题为《SAML：糟糕设计的分形》的博客文章，对安全断言标记语言（SAML）的安全性和设计缺陷进行了批判性分析。该文章在 Hacker News 上引发了包含 73 条评论的热烈讨论，将 SAML 与 OpenID Connect（OIDC）进行比较，并分享了现实世界中的实现恐怖故事。 SAML 仍广泛用于企业单点登录（SSO），因此其设计缺陷对依赖它的组织具有广泛的安全影响。讨论强调，尽管 OIDC 正在逐渐取代 SAML，但两种协议都存在漏洞，企业在实践中仍需同时支持两者。 文章列举了 SAML 的漏洞，但未对 OIDC 进行同等比较，而 OIDC 自身也存在问题，如 JWT 算法混淆、none 算法攻击、缺少受众检查以及 JOSE 库中的错误。SAML 的 XML 签名实现历来是严重漏洞的来源，包括签名包装攻击。

hackernews · aray07 · 9月22日 18:57 · [社区讨论](https://news.ycombinator.com/item?id=49806335)

**背景**: SAML（安全断言标记语言）是一种基于 XML 的标准，用于在身份提供者和服务提供者之间交换认证和授权数据，常用于企业 SSO。OIDC（OpenID Connect）是构建在 OAuth 2.0 之上的较新认证层，使用 JSON Web Token（JWT）而非 XML。两种协议都旨在让用户一次登录即可访问多个应用，但在复杂性、生态系统支持和安全记录方面有所不同。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/SAML">SAML - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/OpenID">OpenID - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Single_sign-on">Single sign-on - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者指出，文章批评 SAML 却没有同等审视 OIDC 自身的缺陷，如 JWT 算法混淆和缺少受众检查。其他人则认为 SAML 仍具有 OIDC 所缺乏的企业特定功能，如 IdP 发起的流程，并且 OIDC 规范支持不一致，使得 SAML 稳定的平庸在某些情况下更可取。还有几人分享了关于 XML 签名验证错误和 SCIM 集成负担的恐怖故事。

**标签**: `#SAML`, `#OIDC`, `#authentication`, `#security`, `#SSO`

---

<a id="item-7"></a>
## [WordPress 修复可导致条件性 RCE 的未认证路径遍历漏洞](https://github.com/WordPress/wordpress-develop/security/advisories/GHSA-7hp8-65ch-5whp) ⭐️ 8.0/10

WordPress 发布了 7.1.2 版本，修复了一个可导致条件性远程代码执行（RCE）的严重未认证路径遍历漏洞，并出于对旧版本用户的照顾，将该修复向后移植到 4.7 以来的所有分支。 该漏洞影响庞大的用户群体，因为 WordPress 驱动着互联网上很大一部分网站，而且未认证的特性意味着攻击者无需任何凭据即可利用，可能导致网站被完全攻陷。 该漏洞涉及对传递给 locate_template() 等函数的用户提供模板名称验证不足，这些函数无法防止目录遍历，补丁已在 WordPress 开发仓库的提交 9c4e85 中被确认。

hackernews · vntok · 9月22日 16:33 · [社区讨论](https://news.ycombinator.com/item?id=49803959)

**背景**: 路径遍历（也称为目录遍历或点-点-斜杠攻击）利用对用户提供的文件名验证不足，使攻击者能够访问预期目录之外的文件。远程代码执行（RCE）是一种严重的漏洞，允许攻击者远程在目标系统上运行任意恶意代码，通常会导致系统完全被攻陷。WordPress 是一个广泛使用的开源内容管理系统（CMS），驱动着数百万个网站，因此其安全问题影响尤为重大。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Path_traversal_vulnerability">Path traversal vulnerability</a></li>
<li><a href="https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/remote-code-execution/">What is Remote Code Execution (RCE)? | CrowdStrike</a></li>
<li><a href="https://wptavern.com/wordpress-security-team-discusses-backporting-security-releases-to-fewer-versions">WordPress Security Team Discusses Backporting Security ...</a></li>

</ul>
</details>

**社区讨论**: 评论者指出约三分之一的 WordPress 安装未使用最新的 7.x 分支，一些人批评 WordPress 的安全记录，称其为网络历史上最易受攻击的软件之一。其他人分享了迁移到 Hugo 等静态站点生成器以规避此类漏洞的积极经验，还有评论者指出，9 年前关于 locate_template() 的文档评论就预言了这一确切缺陷。

**标签**: `#security`, `#wordpress`, `#vulnerability`, `#rce`, `#path-traversal`

---

<a id="item-8"></a>
## [gzip 能充当语言模型吗？](https://nathan.rs/posts/gzip-lm/) ⭐️ 8.0/10

nathan.rs 上的一篇文章探讨了 gzip 压缩算法能否充当语言模型，在 Hacker News 上引发了热烈讨论（368 分、145 条评论），涉及压缩与预测之间的深层联系。 这一点很重要，因为它凸显了数据压缩与语言建模之间的根本理论联系，这一联系是现代大语言模型的基础，并被 3Blue1Brown 和 DeepMind 的《Language Modeling Is Compression》等近期研究广泛传播。 讨论指出，gzip 可以通过将测试文件与特定领域的文件一起压缩并选择输出最小的文件来对文本进行主题分类，但作为语言模型，它只能提供合理性的下界，因为可能续写的搜索空间太大，无法进行有意义的探索。

hackernews · networked · 9月22日 06:08 · [社区讨论](https://news.ycombinator.com/item?id=49797323)

**背景**: gzip 是一种广泛使用的文件压缩工具，基于 Deflate 算法，该算法结合了 LZ77 和 Huffman 编码。信息论表明，任何预测模型都可以转换为无损压缩器，反之亦然，这意味着压缩性能与预测质量直接相关。这种理论等价性最近在大语言模型上得到了探索，这些模型可以作为强大的通用压缩器。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2309.10668">[2309.10668] Language Modeling Is Compression - arXiv.org</a></li>
<li><a href="https://en.wikipedia.org/wiki/Gzip">gzip - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者强调了怀卡托大学 Witten 团队在利用压缩进行文本分类方面的历史工作，引用了 3Blue1Brown 关于该主题的视频系列，并提到了 ts_zip 和 Hutter Prize 等相关项目。一些人对 gzip 搜索可能续写空间的能力表示怀疑，而另一些人则指出了压缩与下一词预测之间的直观联系。

**标签**: `#compression`, `#language-modeling`, `#gzip`, `#information-theory`, `#machine-learning`

---

<a id="item-9"></a>
## [OpenAI 为 GPT-6 增强提示缓存，新增断点与诊断功能](https://openai.com/index/better-prompt-caching-for-gpt-6) ⭐️ 8.0/10

OpenAI 宣布为 GPT-6 改进提示缓存功能，带来更高的缓存命中率、全新的诊断工具、显式断点，以及旨在降低延迟和成本的多种控制选项，面向使用该 API 的开发者。 提示缓存直接影响基于 GPT-6 构建的应用的经济性和响应速度，因此更高的命中率和显式控制能够显著降低大规模运行长而重复提示的开发者所承担的 token 成本和响应时间。 此次更新引入了显式断点，允许开发者精确标记哪些提示前缀应被缓存，同时提供用于监控缓存行为的诊断工具；显式缓存写入通常按溢价计费（约为普通输入价格的 1.25 倍）。

rss · OpenAI Blog · 9月22日 21:00

**背景**: 提示缓存是一种技术，LLM 提供商会存储重复提示前缀的处理结果，使后续复用该前缀的请求无需重新计算，从而节省时间和费用。不同提供商触发缓存的方式各异：有的自动检测前缀，有的则要求显式标记或断点。缓存命中率（即由缓存提供服务的请求占比）是判断缓存是否真正带来收益的关键指标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developers.openai.com/api/docs/guides/prompt-caching">Prompt caching | OpenAI API</a></li>
<li><a href="https://redis.io/blog/what-is-prompt-caching/">What Is Prompt Caching? LLM Speed & Cost Guide - Redis</a></li>
<li><a href="https://openrouter.ai/docs/guides/best-practices/prompt-caching">Prompt Caching - Optimize AI Model Costs with Smart Caching</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#GPT-6`, `#prompt caching`, `#LLM`, `#API optimization`

---

<a id="item-10"></a>
## [小米发布 MiMo-V2.6 多模态模型，强化学习训练成本仅 350 万美元](https://www.reddit.com/r/MachineLearning/comments/1wn36d4/xiaomi_releases_mimov26_frontier_intelligence_all/) ⭐️ 8.0/10

小米正式发布了 MiMo-V2.6 系列模型，这是一组原生全模态（omni-modal）AI 模型，官方称其达到前沿水平的智能表现，而强化学习训练总成本仅为 350 万美元。此次发布还附带一个实时更新的“benchmaxxing”仪表盘，并采用“built in public”（公开构建）的方式推进，模型页面位于 mimo.xiaomi.com/mimo-v2-6。 如果 350 万美元的强化学习训练成本属实，这将相比通常需要数千万甚至数亿美元的前沿模型训练成本实现大幅降低，可能显著降低其他实验室和企业构建有竞争力多模态系统的门槛。同时，小米的入局也加剧了消费硬件厂商与中国 AI 实验室在开源前沿模型领域的竞争。 MiMo-V2.6 系列据称包含三款新模型，其中旗舰推理模型为全模态、万亿参数规模，面向专业工作流。该发布强调智能、效率与成本之间的平衡，而实时仪表盘旨在随着模型开发透明地追踪基准测试表现。

reddit · r/MachineLearning · /u/we_are_mammals · 9月22日 07:56

**背景**: MiMo 是小米自研的大模型系列，“全模态”（omni-modal）意味着模型能够原生处理文本、图像、音频等多种输入类型，而不依赖各自独立的专用模块。强化学习（RL）是一种通过奖励期望输出来训练模型的技术，已成为提升现代大语言模型推理能力的关键方法。“Benchmaxxing”是社区俚语，指为在公开基准测试中取得高分而进行激进优化，因此一个实时追踪这些分数的仪表盘既引人关注，也容易招致质疑。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mimo.xiaomi.com/mimo-v2-6">MiMo-V2.6 | Xiaomi</a></li>
<li><a href="https://siliconangle.com/2026/09/22/xiaomi-introduces-mimo-v2-6-series-open-source-ai-model-family/">Xiaomi introduces Mimo-V2.6 series open-source AI model family - SiliconANGLE</a></li>
<li><a href="https://mimo.mi.com/models/en-US/mimo-v2.6-pro">Xiaomi MiMo-V2.6 Series: 3 New Models Officially Released</a></li>

</ul>
</details>

**标签**: `#AI`, `#Machine Learning`, `#Multimodal`, `#Reinforcement Learning`, `#Xiaomi`

---

<a id="item-11"></a>
## [阿里发布真武 V900，宣称最强国产 AI 芯片，算力提升至 3 倍](https://finance.sina.com.cn/stock/bxjj/2026-09-22/doc-inissitf7048094.shtml) ⭐️ 8.0/10

在 2026 云栖大会上，阿里平头哥于 9 月 22 日发布真武 V900 AI 芯片，宣称算力达到上一代真武 M890 的 3 倍，单一集群最多可扩展至 50 万卡。阿里 CEO 吴泳铭同时表示，Qwen 计划训练 5 至 10 万亿参数的新模型，并目标到 2032 年阿里云全球数据中心规模超过 20GW。 这是来自头部云厂商的一次重大硬件发力，直接挑战英伟达在 AI 加速器领域的主导地位，并加剧了国产芯片厂商之间的竞争。3 倍算力提升、50 万卡集群扩展能力以及 20GW 数据中心路线图，表明阿里正押注芯片、云与模型垂直整合的 AI 基础设施。 搭载真武 V900、ICN Switch、磐脉及镇岳芯片的全新磐久超节点服务器计划于 2027 年第一季度上市；而现有的阿里云灵骏真武 M890 超节点实例 GP9A 已对外提供服务，成为国内首个成功运行超 2 万亿参数大模型的超节点形态算力。阿里还承诺三年投入超过 530 亿美元以支撑这一建设。

telegram · zaihuapd · 9月22日 03:30

**背景**: 平头哥是阿里巴巴旗下的自研芯片设计部门，其真武系列是面向 AI 训练与推理的芯片，旨在降低对英伟达 GPU 的依赖。超节点是一种机柜级紧耦合系统，通过 ICN Switch 等高速互联芯片把大量 AI 芯片连接起来，使其像一台计算机一样工作，这对大模型训练和高并发 Agent 推理至关重要。Qwen（通义千问）是阿里的开源大语言模型系列，参数量是衡量模型规模与容量的粗略指标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.eet-china.com/news/202609227841.html">阿里亮出最强底牌：真武V900发布，狂砸3800亿建AI集群 阿里亮出最强底...</a></li>
<li><a href="https://www.ithome.com/1/005/602.htm">最强国产 AI 芯片阿里平头哥真武 V900 发布，全新磐久超节点服务器明...</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/2085708631140579231">阿里研究员透露Qwen4.5后模型将扩展至5-10T参数 - 知乎</a></li>

</ul>
</details>

**标签**: `#AI chips`, `#Alibaba`, `#AI infrastructure`, `#datacenter`, `#hardware`

---

<a id="item-12"></a>
## [DeepSeek 发布 DSec 沙箱平台：每日服务 300 万个实例](https://arxiv.org/abs/2609.22978) ⭐️ 8.0/10

DeepSeek-AI 与清华大学联合发布技术报告《DeepSeek Elastic Compute（DSec）》，公开了一个每天服务约 300 万个沙箱实例的生产级沙箱平台，用于支撑大规模智能体训练与评测。该平台通过统一 SDK 提供 FnCall、容器、Firecracker microVM 和完整 VM 四种后端，并将有状态的 rollout 执行与可抢占的 GPU 训练解耦。 这是业界首批公开披露的生产级智能体沙箱基础设施细节之一，说明面向智能体的强化学习在每天数百万实例的规模下已具备可行性。其架构设计与性能数据对构建智能体训练流水线的 AI 基础设施和分布式系统工程师具有重要参考价值。 单个生产单元约 160 个节点，峰值并发超过 38 万，创建速度超过每秒 5000 个沙箱，单节点可高密度承载 3200 个容器或 800 个 microVM。平台基于 3FS 分布式文件系统按需加载 EROFS 镜像，而非传统 Docker 全量拉取，从而实现任务完成时间快 1.7 倍、磁盘写入减少 57%，并通过内存共享与回收机制使峰值内存占用下降约 40%。

telegram · zaihuapd · 9月22日 04:45

**背景**: 智能体训练需要在被称为沙箱的隔离环境中运行不可信代码，例如代码执行、软件工程任务和安全渗透测试，而这些沙箱必须能够以极大规模快速创建和销毁。Firecracker microVM 是基于 KVM 的轻量级虚拟机，兼具硬件级隔离、亚秒级启动和低内存开销；EROFS 则是一种只读 Linux 文件系统，专为压缩镜像的高性能分发而优化。3FS 是 DeepSeek 自研的面向 AI 训练与推理的高性能分布式文件系统，为 DSec 的镜像按需加载提供了底层支撑。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/deepseek-ai/3FS">GitHub - deepseek-ai/3FS: A high-performance distributed file ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/EROFS">EROFS</a></li>
<li><a href="https://github.com/firecracker-microvm/firecracker">GitHub - firecracker-microvm/firecracker: Secure and fast ... GitHub - firecracker-microvm/firecracker: Secure and fast ... Run Your First Firecracker microVM - labs.iximiuz.com I tried Firecracker microVMs for self-hosted services, and it ... firecracker-microvm/firecracker | DeepWiki What Is a Firecracker VM? · Learn</a></li>

</ul>
</details>

**标签**: `#AI infrastructure`, `#sandbox`, `#agent training`, `#distributed systems`, `#DeepSeek`

---

<a id="item-13"></a>
## [中国调查 DeepSeek 与月之暗面数据泄露事件](https://www.theinformation.com/articles/china-probes-deepseek-moonshot-potential-data-leaks-anthropic) ⭐️ 8.0/10

中国互联网监管机构正在调查 DeepSeek 和月之暗面（Moonshot AI），起因是 Anthropic 于 9 月 10 日发布一份 154 页报告，指控 7 家中国公司大规模违规使用 Claude 模型。报告举例称，DeepSeek 曾把一名警方监控系统开发工程师的请求转发给 Claude。 此次调查处于 AI 安全、数据隐私和中美科技摩擦的交汇点，可能改变中国 AI 公司获取境外模型和处理敏感数据的方式。它还可能为跨境 AI 合规以及第三方模型使用的监管审查树立先例。 Anthropic 的报告点名了 7 家中国公司，并特别指控 DeepSeek 将一名开发警方监控系统的工程师的请求转发给 Claude。调查由中国互联网监管机构进行，但目前尚未公布正式指控或结论。

telegram · zaihuapd · 9月22日 14:37

**背景**: DeepSeek 是一家总部位于杭州的 AI 公司，由对冲基金幻方量化（High-Flyer）拥有和资助，开发开放权重的大语言模型，并于 2025 年 1 月发布了 DeepSeek-R1 聊天机器人。月之暗面（Moonshot AI）是一家中国 AI 初创公司，其名称灵感来自 Pink Floyd 的专辑《The Dark Side of the Moon》，开发了 Kimi 系列模型。Anthropic 的 Claude 是一款商业 AI 模型，其数据使用政策对客户数据的处理方式有所限制，尤其是对商业用户和 API 用户。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek_(Company)">DeepSeek (Company)</a></li>
<li><a href="https://www.moonshot.ai/">Welcome to Moonshot AI . Our mission is to seek the optimal...</a></li>
<li><a href="https://platform.claude.com/docs/en/manage-claude/api-and-data-retention">API and data retention - Claude Platform Docs</a></li>

</ul>
</details>

**标签**: `#AI regulation`, `#data privacy`, `#DeepSeek`, `#Anthropic`, `#China tech`

---