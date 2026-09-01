---
layout: default
title: "Daily-Summary: 2026-09-01 (ZH)"
date: 2026-09-01
lang: zh
---

> 从 50 条内容中筛选出 9 条重要资讯。

---

1. [谷歌从 Chrome 网上应用店移除 Manifest V2 扩展，包括 uBlock Origin](#item-1) ⭐️ 8.0/10
2. [NAT：互联网中心化的原罪](#item-2) ⭐️ 8.0/10
3. [通过木马文件攻破 Claude Code Opus 5 自动模式](#item-3) ⭐️ 8.0/10
4. [滑动窗口注意力在长上下文推理上胜过线性注意力](#item-4) ⭐️ 8.0/10
5. [动态图上的 GNN 存在时间泄漏；SynthFin-AML 强制因果划分](#item-5) ⭐️ 8.0/10
6. [DeepSeek 发布实验性视觉模型 V4-Flash-Vision-Exp](#item-6) ⭐️ 8.0/10
7. [OpenClaw 2.0：史上最大更新，汇集 1.6 万拉取请求](#item-7) ⭐️ 8.0/10
8. [库克卸任苹果 CEO，特努斯接棒聚焦 AI](#item-8) ⭐️ 8.0/10
9. [寒序科技公布 MRAM 推理路线，uHBM 带宽 24 TB/s](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [谷歌从 Chrome 网上应用店移除 Manifest V2 扩展，包括 uBlock Origin](https://webiterate.dev/google-removed-extensions-ublock-origin-108/) ⭐️ 8.0/10

谷歌已正式从 Chrome 网上应用店移除所有 Manifest V2 扩展，包括流行的广告拦截器 uBlock Origin。这一变化自最近的清理行动起生效，标志着 Chrome 中 MV2 时代的终结。 此举对依赖广告拦截器保护隐私和安全的用户影响重大，因为 uBlock Origin 被广泛认为是最有效的工具之一。同时，它也引发了对谷歌对浏览器生态系统控制权以及 Chrome 上广告拦截未来的担忧。 此次移除是谷歌 Manifest V2 弃用计划的一部分，该计划于 2024 年 6 月开始禁用 MV2 扩展，并将在 Chrome 139 中完全移除支持。已安装 MV2 扩展的用户可能仍可暂时使用，但新安装或更新将不再可用。

hackernews · twapi · 8月31日 21:10 · [社区讨论](https://news.ycombinator.com/item?id=49514878)

**背景**: Manifest V2（MV2）是 Chrome 之前的扩展框架，而 Manifest V3（MV3）是新的框架，它限制了某些 API，尤其影响广告拦截器。uBlock Origin 是一款流行的开源内容拦截器，依赖 MV2 的功能，其开发者表示 MV3 版本 uBlock Origin Lite 效果较差。谷歌一直推动 MV3 以提升安全性和性能，但批评者认为它限制了广告拦截功能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline">Manifest V2 support timeline | Chrome for Developers</a></li>
<li><a href="https://chromeunboxed.com/manifest-v2-is-officially-dead-as-the-chrome-web-store-permanently-purges-legacy-extensions/">Manifest V2 is officially dead as the Chrome Web Store ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/UBlock_Origin">uBlock Origin - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区评论对谷歌的决定表示强烈不满，许多用户建议改用 Firefox 作为解决方案。一些人强调广告拦截现在已成为安全问题，尤其是对技术不精通的用户，并批评谷歌对网络单方面的控制。

**标签**: `#Chrome`, `#Manifest V2`, `#ad-blocking`, `#privacy`, `#browser`

---

<a id="item-2"></a>
## [NAT：互联网中心化的原罪](https://dreamstation.systems/personal/ntppost.html) ⭐️ 8.0/10

一篇评论文章认为网络地址转换（NAT）是互联网中心化的根本原因，引发了讨论，Linux NAT 的原始实现者 Rusty Russell 和其他人从历史和技术角度发表了看法。 这一讨论凸显了为应对 IPv4 地址稀缺而采取的技术权宜之计如何塑造了现代互联网架构，使自托管变得困难并强化了客户端-服务器模式。它之所以重要，是因为它为关于互联网治理、隐私和去中心化的持续辩论提供了信息。 文章指出，NAT 使得发送文件、运行个人电子邮件或托管服务变得困难，除非进行端口转发或购买 VPS。Rusty Russell 承认他的实现优先考虑将更多连接压缩到一个 IP 中，无意中削弱了公共端点的概念，而 elric 等评论者则认为，只要可控，普通 NAT 是可以接受的，真正的問題是 CGNAT。

hackernews · robinpie · 8月31日 02:23 · [社区讨论](https://news.ycombinator.com/item?id=49504905)

**背景**: NAT 在 RFC 1631 中作为应对 IPv4 地址耗尽的短期解决方案被引入，允许多个设备在私有网络上共享一个公共 IP 地址。它还通过隐藏内部系统提供了基本的安全层。随着时间的推移，NAT 变得无处不在，但它使入站连接变得复杂，并因助长互联网服务的中心化而受到批评。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Network_address_translation">Network address translation - Wikipedia</a></li>
<li><a href="https://dreamstation.systems/personal/ntppost.html">Internet centralization and the original sin of NAT</a></li>
<li><a href="https://lemmy.world/post/51367779">Internet centralization and the original sin of NAT - Lemmy.World</a></li>

</ul>
</details>

**社区讨论**: 社区讨论大体上支持文章的观点，Rusty Russell 坦诚地承认了自己的责任。然而，elric 反驳说，只要可控，普通 NAT 是可以接受的，真正的邪恶是 CGNAT，而其他人则指出 NAT 保护了不安全的设备。总体情绪是微妙的，承认 NAT 的利弊。

**标签**: `#NAT`, `#internet architecture`, `#centralization`, `#networking`, `#history`

---

<a id="item-3"></a>
## [通过木马文件攻破 Claude Code Opus 5 自动模式](https://embracethered.com/blog/posts/2026/breaking-claude-code-opus-5-and-automode/) ⭐️ 8.0/10

一名安全研究人员详细描述了一种新型攻击，通过利用 Claude Code Opus 5 自动模式中可预测的工具使用行为，使用木马化文件攻破该模式。该攻击利用模型从当前目录导入文件的倾向，使恶意文件能够遮蔽标准 Python 模块并执行任意代码。 这项研究凸显了 AI 编程代理中的关键漏洞，表明即使有安全分类器，它们也可能被诱骗执行恶意代码。它强调了需要强大的沙箱和行为分析来防范此类攻击，影响依赖 AI 辅助编码的开发者和组织。 该攻击专门针对 Claude 的行为模式，例如其对 `python -c` 的依赖以及从工作目录自动导入的行为。自动模式使用 Sonnet-5 作为安全分类器，但攻击通过将恶意代码嵌入到被静默导入的文件中来绕过检测。

hackernews · Recursing · 8月31日 07:49 · [社区讨论](https://news.ycombinator.com/item?id=49506819)

**背景**: Claude Code 是一款 AI 编程助手，可以在自动模式下运行，通过安全分类器路由工具调用以减少用户提示。间接提示注入攻击将恶意指令嵌入外部内容，基于 LLM 的代理可能会处理这些内容，导致意外操作。木马化文件（例如 Python 包中的文件）可以利用导入机制在未经用户明确同意的情况下执行代码。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://veganmosfet.codeberg.page/posts/2026-08-12-opus5_automode/">Prompt Injection Experiments with Opus - 5 in Claude Code ...</a></li>
<li><a href="https://news.ycombinator.com/item?id=49506819">Breaking Claude Code Opus 5 Auto Mode | Hacker News</a></li>
<li><a href="https://unit42.paloaltonetworks.com/ai-agent-prompt-injection/">Fooling AI Agents: Web-Based Indirect Prompt Injection Observed in the Wild</a></li>

</ul>
</details>

**社区讨论**: 社区讨论强调了攻击的巧妙性，但对其分类存在争议，一些人指出这更像木马而非提示注入。用户强调沙箱化代理的重要性，分享了遇到意外行为的个人经历，并对允许从任意目录静默导入的设计提出质疑。

**标签**: `#AI security`, `#prompt injection`, `#Claude Code`, `#agent safety`, `#cybersecurity`

---

<a id="item-4"></a>
## [滑动窗口注意力在长上下文推理上胜过线性注意力](https://www.reddit.com/r/MachineLearning/comments/1w3j1vw/slidingwindow_attention_beats_linear_on/) ⭐️ 8.0/10

一篇新的 arXiv 预印本（arXiv:2608.28444）报告称，带有 sinks 的滑动窗口注意力（SWA）在长上下文推理基准（如 Needle-in-a-Haystack 和 BABILong）上的性能比线性注意力变体高出 2 到 10 倍。作者建议改用 SWA，而不是对线性模型进行后训练。 这一发现挑战了线性注意力作为高效长上下文 LLM 的主流研究方向，表明一个简单的基线可能比复杂的后训练线性变体更有效。这可能会改变研究重点，并为该领域节省大量计算资源。 论文声称带有 sinks 的 SWA 无需后训练，运行速度快，且内存占用低。作者指出，线性注意力模型可能需要从头训练或进行大量后训练才能达到 SWA 的性能。

reddit · r/MachineLearning · /u/Justgototheeffinmoon · 8月31日 16:35

**背景**: Transformer 中的标准注意力机制随序列长度呈二次方成本，这促使了线性注意力变体的研究，以实现线性扩展。滑动窗口注意力（SWA）将注意力限制在局部窗口内，从而降低成本，而“sinks”是保留注意力的早期 token，用于稳定生成。BABILong 是一个长上下文推理基准，采用大海捞针方法，包含 20 个推理任务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2608.28444v1">Sliding - window beats linear attention</a></li>
<li><a href="https://arxiv.org/abs/2406.10149">[2406.10149] BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack</a></li>
<li><a href="https://runinfra.ai/glossary/attention-sinks">Attention sinks : what it is and why it moves cost | RunInfra</a></li>

</ul>
</details>

**标签**: `#attention mechanisms`, `#long-context reasoning`, `#LLM efficiency`, `#arXiv preprint`

---

<a id="item-5"></a>
## [动态图上的 GNN 存在时间泄漏；SynthFin-AML 强制因果划分](https://www.reddit.com/r/MachineLearning/comments/1w3imxy/your_gnn_is_probably_just_an_overcomplicated_mlp/) ⭐️ 8.0/10

该帖子揭示了在动态图上进行标准 GNN 评估时存在时间泄漏问题，即模型在训练期间会看到未来的边。为解决此问题，作者发布了 SynthFin-AML v10.0，一个包含 10 万个节点和 120 万条边的合成数据集，并提出了严格的 3 快照时间划分以强制因果边界。 这很重要，因为时间泄漏会夸大性能指标，导致图机器学习研究（尤其是在反洗钱等领域）得出过于乐观的结论。所提出的数据集和评估协议为在动态图上基准测试 GNN 提供了更严格的标准，可能提高未来研究的可靠性。 作者实现了 3 快照时间点划分：训练使用截至第 7 天的边，验证使用截至第 8 天的边，测试使用截至第 10 天的边，从而在物理上分离时间窗口。他们还通过确保欺诈和零售交易金额共享相同的对数正态分布（μ=8.517，σ=0.8）来消除分布泄漏。基准测试显示，在严格时间划分下，GraphSAGE（PR-AUC 0.881）略优于 LightGBM（0.848）。

reddit · r/MachineLearning · /u/Glabmayt2075 · 8月31日 16:21

**背景**: 图神经网络（GNN）常用于动态图上的节点分类，但标准评估通常使用静态快照的随机划分，这可能导致时间泄漏——模型无意中使用了未来信息。这在金融交易网络中尤其成问题，因为交易顺序很重要。作者提出了一种因果评估协议，并发布了一个合成数据集以促进公平比较。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://kumo.ai/pyg/concepts/data-leakage/">Data Leakage in Graph ML: When Future Information Contaminates Training | Kumo.ai | Kumo.ai</a></li>

</ul>
</details>

**社区讨论**: 未提供社区讨论，但该帖子可能引发关于图机器学习评估实践的辩论，一些人同意时间泄漏的普遍性，另一些人则质疑合成数据集的泛化能力。

**标签**: `#GNN`, `#temporal leakage`, `#dynamic graphs`, `#anti-money laundering`, `#evaluation`

---

<a id="item-6"></a>
## [DeepSeek 发布实验性视觉模型 V4-Flash-Vision-Exp](https://www.reddit.com/r/LocalLLaMA/comments/1w39i6r/deepseekaideepseekv4flashvisionexp_hugging_face/) ⭐️ 8.0/10

DeepSeek 已在 Hugging Face 上发布 DeepSeek-V4-Flash-Vision-Exp，这是 V4 系列首款实验性多模态模型。它在 V4-Flash 架构上加入视觉模块并持续训练，以实现视觉理解能力。 此次发布意义重大，因为 DeepSeek 将其开源模型系列扩展到了多模态领域，可能加剧视觉语言模型领域的竞争。对于需要强大开源模型来处理图像描述、OCR 和图表分析等任务的开发者和研究人员来说，这将带来益处。 与 V4-Flash-0731 相比，其多模态 agent 能力大幅提升，ApexBench 分数从 26.2 升至 36.5，而文本 agent 性能基本持平。该模型可通过 Hugging Face 获取，并以 deepseek-v4-flash-vision-exp 的 ID 通过 API 提供。

reddit · r/LocalLLaMA · /u/t4a8945 · 8月31日 10:13

**背景**: DeepSeek 是一家以发布高质量开源模型而闻名的中国 AI 公司。多模态模型能够同时处理文本和图像，从而支持图像描述、视觉问答和文档分析等任务。ApexBench 是用于评估多模态 agent 性能的基准测试。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp">deepseek-ai/ DeepSeek - V 4 - Flash - Vision - Exp · Hugging Face</a></li>
<li><a href="https://api-docs.deepseek.com/guides/vision/?ref=despertar.tech">Vision | DeepSeek API Docs</a></li>
<li><a href="https://www.datalearner.com/en/benchmarks/apexbench">ApexBench : Multimodal Agent Benchmark and... | DataLearnerAI</a></li>

</ul>
</details>

**社区讨论**: Reddit 帖子目前评论较少，原帖作者仅分享了 Hugging Face 链接。稀疏的讨论表明尚处于早期关注阶段，但高评分预示着社区参与潜力巨大。

**标签**: `#DeepSeek`, `#vision model`, `#AI`, `#Hugging Face`, `#open source`

---

<a id="item-7"></a>
## [OpenClaw 2.0：史上最大更新，汇集 1.6 万拉取请求](https://openclaw.ai/blog/openclaw-2-accidentally) ⭐️ 8.0/10

OpenClaw 于 2026 年 8 月 31 日发布了 2.0 版本（v2026.8.1），汇集了来自 933 名贡献者（其中 569 名是首次贡献者）的超过 1.6 万个拉取请求。此次更新覆盖安装、消息、记忆、技能、模型、浏览器、插件和安全等方面，并引入了共享云端会话以支持协作。 这是 OpenClaw 历史上最大的一次发布，展示了强大的社区参与度和显著的功能改进。它提升了项目的易用性和安全性，可能吸引更多用户和贡献者加入开源 AI 助手生态系统。 该版本包含对私有凭据请求的新控制、插件审查和执行权限，以及针对更改的 OpenAI 路由引用的迁移工具。建议操作者在更新前备份配置和状态，因为团队为准备此次更新暂停了近七周的发布。

telegram · zaihuapd · 8月31日 04:38

**背景**: OpenClaw 是一个开源 AI 助手项目，允许用户与各种模型和工具交互。拉取请求（PR）是对代码仓库的提议更改，由维护者审查并合并。此次发布规模庞大，超过 1.6 万个 PR，凸显了开源开发的协作性质。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://letsdatascience.com/news/openclaw-releases-20-with-security-upgrades-26ff8fb3">OpenClaw Releases 2.0 With Security Upgrades | Let's Data Science</a></li>
<li><a href="https://www.explainx.ai/blog/openclaw-2-0-release-august-2026">OpenClaw 2.0 Release — 16K PRs, Rebuilt UI (2026) | explainx.ai...</a></li>
<li><a href="https://shattered.io/openclaw-2-0-ai-assistant-release-2026/">OpenClaw 2.0 Release : 933 Coders, 16K PRs [2026]</a></li>

</ul>
</details>

**标签**: `#OpenClaw`, `#software release`, `#open source`, `#AI`, `#collaboration`

---

<a id="item-8"></a>
## [库克卸任苹果 CEO，特努斯接棒聚焦 AI](https://www.bloomberg.com/news/articles/2026-08-30/apple-s-new-ceo-john-ternus-takes-reins-from-tim-cook-focusing-on-ai) ⭐️ 8.0/10

2026 年 8 月 31 日，蒂姆·库克正式卸任苹果 CEO，51 岁的硬件工程老将约翰·特努斯于 9 月 1 日接任。特努斯的首要任务是推动 AI 落地，包括补齐 Siri 升级延期等短板，并于 9 月 9 日发布苹果首款折叠屏 iPhone，深度植入 AI 功能。 此次领导层变动标志着苹果战略重心转向 AI，新任 CEO 特努斯将 AI 作为核心方向。即将推出的搭载先进 AI 功能的折叠屏 iPhone 可能对智能手机市场产生重大影响，并影响苹果与三星、谷歌等竞争对手的竞争格局。 预计在 9 月 9 日发布会上亮相的折叠屏 iPhone，据传将配备 12GB RAM、5 倍潜望式摄像头、48MP 主摄和超广角镜头，并深度集成 Siri AI，可结合屏幕、日历和相机理解现实场景。库克将继续担任执行主席。

telegram · zaihuapd · 8月31日 10:21

**背景**: 苹果长期以来是消费科技领域的领导者，Siri 是其跨 iOS 等平台的虚拟助手。然而，苹果在 AI 领域相比 OpenAI 和谷歌等竞争对手一直受到批评。折叠屏 iPhone 标志着苹果进入三星等厂商已占据的市场，而 AI 集成被视为关键差异化因素。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cultofmac.com/news/what-i-want-from-apples-first-foldable-iphone">What I want from Apple’s first foldable iPhone | Cult of Mac</a></li>
<li><a href="https://www.macrumors.com/2026/08/30/apple-pencil-for-iphone-ultra-was-tested/">Apple Pencil for iPhone Ultra Was Tested - MacRumors</a></li>
<li><a href="https://beforeyoutake.com/phones/apples-first-foldable-iphone-tipped-to-launch-in-2026-with-ai-features-crease-free-display-premium-design/">Apple’s First Foldable iPhone Tipped to Launch in 2026 with AI ...</a></li>

</ul>
</details>

**标签**: `#Apple`, `#CEO transition`, `#AI`, `#Siri`, `#foldable iPhone`

---

<a id="item-9"></a>
## [寒序科技公布 MRAM 推理路线，uHBM 带宽 24 TB/s](https://mp.weixin.qq.com/s/adyFanNueXUHKnxr9m64kg) ⭐️ 8.0/10

国内首家 MRAM 磁计算公司寒序科技公布了基于 MRAM 的推理产品路线，首代 uHBM 片内读带宽设计为 24 TB/s，uLPU 面向 4B 多模态模型提出超 2000 Tokens/s 的解码目标。 这一公告标志着 AI 推理硬件可能发生范式转变，通过使用持久性 MRAM 存储权重，减少数据搬运和能耗。如果实现，它可能为传统基于 GPU 的推理提供有竞争力的替代方案，尤其在边缘和数据中心部署中。 该架构将模型权重驻留在持久性 MRAM 阵列中，并在片上完成矩阵-向量运算，减少权重重复搬运。验证芯片 SpinPU-ED01 已通过第三方检测和 24 小时稳定运行验证，产品路线从芯片延伸至 2U Tray 和 Rack。

telegram · zaihuapd · 8月31日 13:41

**背景**: MRAM（磁阻随机存取存储器）是一种非易失性存储技术，兼具速度、耐久性和持久性，使其在 AI 工作负载中具有吸引力，因为权重数据可以持久存储。传统 AI 推理通常依赖将权重从 DRAM 搬运到计算单元，能耗较高；使用 MRAM 可以减少这种开销。uHBM 和 uLPU 是定制架构，旨在利用 MRAM 的特性实现高带宽、低功耗的推理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.prodigitalweb.com/beginner-guide-to-magnetoresistive-ram-mram/">Beginner Guide To Magnetoresistive RAM ( MRAM )... | ProDigitalWeb</a></li>
<li><a href="https://www.everspin.com/persyst">Persistent MRAM for Mission‑Critical Systems | PERSYST</a></li>
<li><a href="https://www.gaitpu.com/data-center/storage/data-persistence-with-mram-over-cxl">通过 CXL 实现 MRAM 的数据持久性 – Embedded AI Data Center</a></li>

</ul>
</details>

**标签**: `#MRAM`, `#AI hardware`, `#inference`, `#chip design`, `#uHBM`

---