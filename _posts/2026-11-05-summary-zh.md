---
layout: default
title: "Daily-Summary: 2026-11-05 (ZH)"
date: 2026-11-05
lang: zh
---

> 从 65 条内容中筛选出 14 条重要资讯。

---

1. [OpenAI 自主流水线发现并修复 948 个 Linux 内核提权漏洞](#item-1) ⭐️ 9.0/10
2. [月之暗面开源 Kimi K3.1 Pro 权重](#item-2) ⭐️ 9.0/10
3. [AI 揭露网络安全领域数十年的技术债务](#item-3) ⭐️ 8.0/10
4. [Go 发布全新 JSON API encoding/json/v2](#item-4) ⭐️ 8.0/10
5. [Anthropic 在 LLM 推理的可证明性上取得进展](#item-5) ⭐️ 8.0/10
6. [十年逆向工程为 DOS 版《银河飞将》带来合作多人模式](#item-6) ⭐️ 8.0/10
7. [OpenAI 收购 Pierre Computer Company 以增强 Codex](#item-7) ⭐️ 8.0/10
8. [腾讯发布 Hy4 开放权重模型，专注游戏开发](#item-8) ⭐️ 8.0/10
9. [朝鲜虚假面试导致币安 63 亿美元盗窃案](#item-9) ⭐️ 8.0/10
10. [在 AWS Trainium2 上为 GLM-5.3-Flash 打造的 NKI 层超级内核将解码步从 32.2 毫秒降至 24.2 毫秒](#item-10) ⭐️ 8.0/10
11. [注意力而非长度预测检索中的上下文腐烂](#item-11) ⭐️ 8.0/10
12. [甲骨文因美国担忧取消与腾讯 70 亿美元 AI 芯片租赁协议](#item-12) ⭐️ 8.0/10
13. [黑客演示绕过 iPhone 锁定模式的持久越狱](#item-13) ⭐️ 8.0/10
14. [华为要求昇腾 960DT 客户自行采购 HBM 内存](#item-14) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenAI 自主流水线发现并修复 948 个 Linux 内核提权漏洞](https://openai.com/index/a-thousand-fewer-paths-to-root) ⭐️ 9.0/10

OpenAI 宣布其构建的自主流水线能够发现、验证并生成补丁，共处理了 Linux 内核中的 948 个本地权限提升漏洞。这标志着 AI 驱动的漏洞研究在关键开源代码库上实现了大规模应用演示。 Linux 内核中的本地权限提升漏洞对攻击者极具价值，因为它们能让非特权用户获得 root 权限，因此一次性发现数百个此类漏洞可能显著增强这一全球基础性基础设施的安全性。这也表明 AI 智能体可能成为漏洞研究和自动补丁生成中的实用力量，有望改变安全团队分类和修复缺陷的方式。 该流水线据称覆盖了发现、验证和生成补丁的完整流程，但公告未详细说明误报率、有多少补丁被上游接受，或涉及哪些具体内核子系统。948 这一数字指的是本地权限提升问题，独立验证和上游合并状态仍是重要的注意事项。

rss · OpenAI Blog · 11月4日 08:00

**背景**: Linux 内核是 Linux 操作系统的核心，广泛应用于服务器、Android 设备和云基础设施。本地权限提升（LPE）漏洞允许已在机器上获得立足点的攻击者提升至 root 权限，因此这类缺陷是攻击者和防御者共同关注的重点目标。自动化漏洞发现和补丁生成是活跃的研究领域，KernJC 等工具正在探索针对内核漏洞的自动化易受攻击环境生成。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ubuntu.com/blog/fragnesia-linux-vulnerability-fixes-available">Fragnesia Linux kernel local privilege escalation ... - Ubuntu</a></li>
<li><a href="https://arxiv.org/html/2404.11107">KernJC: Automated Vulnerable Environment Generation for Linux...</a></li>
<li><a href="https://www.emergentmind.com/topics/autonomous-vulnerability-discovery">Autonomous Vulnerability Discovery</a></li>

</ul>
</details>

**标签**: `#security`, `#linux-kernel`, `#ai-for-security`, `#vulnerability-research`, `#automated-patching`

---

<a id="item-2"></a>
## [月之暗面开源 Kimi K3.1 Pro 权重](http://platform.kimi.ai/) ⭐️ 9.0/10

月之暗面在 Hugging Face 上发布了 Kimi K3.1 Pro 的开放权重，这是一个原生多模态智能体模型，总参数 2.8 万亿、激活参数 104B，上下文窗口约 100 万 token。权重以 MXFP4 量化形式发布，同时该模型也可通过 platform.kimi.ai 的 API 调用，兼容 OpenAI 与 Anthropic 接口。 这是一个重要的开源 AI 里程碑，因为发布如此规模和能力的模型开放权重，直接与其他前沿开放权重模型形成竞争，为研究人员和企业提供了一个强大且可本地部署的替代方案。兼容 OpenAI/Anthropic 的 API 也降低了开发者切换或将该模型集成到现有工作流的门槛。 该模型是 K3.1 系列的首个模型，基于 Kimi K3 通过跨数百个下游领域的大规模联合强化学习后训练而成，在编程、3D 创作、金融研究、事实准确性和智能体能力方面有显著提升。然而，本地运行完整的 2.8 万亿参数模型需要大量硬件，例如多 GPU 节点，而 MXFP4 量化以一定精度换取更低的内存占用。

telegram · zaihuapd · 11月4日 15:47

**背景**: 月之暗面是一家中国 AI 公司，以其 Kimi 系列大语言模型闻名。原生多模态智能体模型从设计之初就将文本、图像等模态作为一等输入，并能作为智能体使用工具、协调子智能体来解决复杂任务。MXFP4 是一种量化格式，通过分块共享缩放因子将神经网络权重压缩到每个元素 4 比特，从而显著降低推理的内存和计算需求。开放权重意味着模型的参数可公开下载，任何人都可以运行、微调或研究该模型，这与仅提供 API 的闭源模型形成对比。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/moonshotai/Kimi-K3.1-Pro">moonshotai/Kimi-K3.1-Pro - Hugging Face</a></li>
<li><a href="https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart">Kimi K3.1 Pro - Kimi API Platform</a></li>
<li><a href="https://www.kapilsharma.dev/posts/mxfp4-visualizer/">Understanding MXFP4 Quantization | Kapil Sharma</a></li>

</ul>
</details>

**社区讨论**: 评论者指出，本地运行该模型可能需要高端多 GPU 节点，因此它对企业比个人更实用。一些人质疑该模型是否“刷榜”（benchmaxxed），并且没有明显领先于 DeepSeekV4.1-Flash 等竞争对手，而另一些人则报告了强劲的实际测试结果，并强调第三方推理提供商已经开始托管该模型，具有更好的吞吐量和降低成本的空间。

**标签**: `#open-weights`, `#large-language-models`, `#multimodal`, `#moonshot-ai`, `#model-release`

---

<a id="item-3"></a>
## [AI 揭露网络安全领域数十年的技术债务](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability) ⭐️ 8.0/10

IEEE Spectrum 的一篇文章指出，AI 驱动的漏洞发现正迫使软件行业面对约 40 年积累的技术债务，因为 AI 工具能快速找到人类遗漏的缺陷。文章以 PHP2Shell 漏洞为例，探讨 AI 是会帮助偿还这些债务，还是会制造无休止的修复循环。 这很重要，因为 AI 正将漏洞管理从定期人工审计转变为持续自动发现，可能暴露出广泛使用的软件中大量潜伏缺陷。其结果将影响开源项目、企业和国家如何优先安排补丁，以及软件是变得更健壮还是仅仅更频繁地被修补。 文章和社区讨论强调，许多技术债务问题并非简单的差一错误，而是需要大规模重构，并且理论极限（引用《哥德尔、艾舍尔、巴赫》）表明没有系统能做到绝对安全。PHP2Shell 漏洞作为一个具体案例，展示了 AI 如何发现传统方法遗漏的深层缺陷。

hackernews · pseudolus · 11月4日 11:52 · [社区讨论](https://news.ycombinator.com/item?id=50364336)

**背景**: 技术债务是指软件开发过程中因走捷径或次优决策而产生的未来成本，可能积累数十年并使系统变得脆弱。漏洞管理是识别、评估和修复安全缺陷的持续过程，传统上通过人工审计和定期扫描完成。用于漏洞检测的 AI 利用机器学习自动发现表明安全缺陷的模式，可能同时加速发现和修复。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Technical_debt">Technical debt - Wikipedia</a></li>
<li><a href="https://www.microsoft.com/en-us/security/business/security-101/what-is-vulnerability-management">What Is Vulnerability Management? | Microsoft Security</a></li>
<li><a href="https://www.ibm.com/think/topics/technical-debt">What is technical debt? - IBM</a></li>

</ul>
</details>

**社区讨论**: 评论者争论 AI 是在真正偿还技术债务，还是开启了一个强制性的、无休止的功能中性修复 treadmill，一些人指出许多问题需要重构而非狭窄补丁。其他人引用《哥德尔、艾舍尔、巴赫》认为完美安全在理论上不可能，而一些人则认为 AI 审计终于实现了开源广泛代码审查的承诺。

**标签**: `#AI`, `#cybersecurity`, `#technical debt`, `#vulnerability management`, `#open source`

---

<a id="item-4"></a>
## [Go 发布全新 JSON API encoding/json/v2](https://go.dev/blog/jsonv2) ⭐️ 8.0/10

Go 团队宣布了新的 JSON API encoding/json/v2，其重新设计的接口旨在提升性能和易用性。新包基于 encoding/json/jsontext 构建，将在 Go 1.27 中引入，而原有的 encoding/json 在 Go 1 兼容性承诺下继续得到支持。 JSON 是 Go 中使用最广泛的标准库包之一，因此重大修订会影响几乎所有处理 JSON 的 Go 程序。此次变更承诺更好的性能和更清晰的 API，但也为依赖现有行为的开发者和库带来了迁移考量。 v2 API 引入了行为变化，例如更严格的 UTF-8 处理、区分大小写的字段匹配以及不同的 nil 切片行为；在 Go 1.27 中，v1 包将基于 v2 引擎实现，可能改变错误消息。值得注意的是，MarshalIndent 函数被移除，需要更复杂的代码来实现缩进输出。

hackernews · olexsmir · 11月4日 17:52 · [社区讨论](https://news.ycombinator.com/item?id=50369106)

**背景**: Go 的 encoding/json 包自早期以来一直是该语言标准库的基石，提供 JSON 数据的编组和解组功能。JSON（JavaScript 对象表示法）是一种无处不在的数据交换格式，而 Go 的实现因性能和 API 设计限制而受到批评，与 jsoniter 等第三方替代方案相比有所不足。v2 工作旨在解决这些问题，同时通过 Go 1 承诺保持向后兼容性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://go.dev/blog/jsonv2">A new Go API for JSON - The Go Programming Language</a></li>
<li><a href="https://go.dev/doc/jsonv2-migration">encoding/json/v2 Migration Guide - The Go Programming Language</a></li>
<li><a href="https://github.com/golang/go/issues/71497">encoding / json / v 2 : new API for encoding / json · Issue #71497...</a></li>

</ul>
</details>

**社区讨论**: 社区反应不一：一些人欢迎重新设计，但惋惜 MarshalIndent 的移除使得快速生成可读 JSON 输出变得更困难。另一些人质疑 JSON 的简单性，指出如果它真的简单，每种语言早就应该解决它了，还有人讨论用于进一步提升性能的专用 SIMD 解析器。

**标签**: `#go`, `#json`, `#standard-library`, `#api-design`, `#parsing`

---

<a id="item-5"></a>
## [Anthropic 在 LLM 推理的可证明性上取得进展](https://www.anthropic.com/research/provable-inference) ⭐️ 8.0/10

Anthropic 发表了关于大语言模型可证明推理的研究，使用 zkSNARKs 以密码学方式证明给定输出是由哪个模型生成的。该系统据称名为 FlashProve，其计算开销是正常推理的 72 倍至 90-100 倍。 这项工作解决了闭源模型提供商的一个关键信任问题：用户如何确定提供商服务器上实际运行的是哪些权重？如果可行，可证明推理可以实现 AI 输出的可验证归属，影响 AI 实验室展示合规性的方式以及用户对基于 API 的服务的信任。 该证明系统需要一个约 6.5 MB 的承诺，有效期为约 1600 万次请求，之后提供商必须重新承诺。在 24 线程上验证一个证明需要 17 秒（单线程 21 秒），该方法建立在 VerInf 和 zkLLM 等先前工作之上，有社区成员指出其选用了 400B 的 Maverick 模型。

hackernews · ltononro · 11月4日 17:17 · [社区讨论](https://news.ycombinator.com/item?id=50368626)

**背景**: 可证明推理使用零知识证明，特别是 zkSNARKs，允许提供商在不泄露模型权重的情况下证明特定模型产生了给定输出。这一点很重要，因为闭源 AI 实验室不公开其模型，使得验证关于使用哪个模型的说法变得困难。2024 年的 zkLLM 等先前工作在一个 A100 上以约 2.5 个 token/秒的速度证明了 13B 模型，表明该领域正在快速发展。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/research/provable-inference">Progress on provable inference for large language models</a></li>
<li><a href="https://shattered.io/anthropic-flashprove-provable-inference-72x-overhead-2026/">Anthropic FlashProve: Provable Inference at 72x [2026]</a></li>
<li><a href="https://www.europesays.com/ai/226951/">Progress on provable inference for large language models ...</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论热烈且带有批评。一位研究者（neuwirth）声称 Anthropic 在他的 VerInf 工作基础上构建但几乎没有署名，其他人则讨论了高计算开销，并提出了替代方案，如对开源权重模型进行重新执行，或从多个独立提供商处获得概率性证明。

**标签**: `#llm-inference`, `#cryptography`, `#zero-knowledge-proofs`, `#ai-safety`, `#anthropic`

---

<a id="item-6"></a>
## [十年逆向工程为 DOS 版《银河飞将》带来合作多人模式](https://fireflyk64.github.io/wcmulti/) ⭐️ 8.0/10

开发者 daniel_rh 和他的兄弟花费十多年时间逆向工程 1990 年的 DOS 游戏《银河飞将》，成功识别并同步游戏状态变量，实现了合作多人模式。他们发现游戏状态适合放在 64k 数据段内，从而能够向游戏函数注入调用并通过网络同步游戏状态，让玩家可以一起执行故事任务。 该项目展示了持久逆向工程和游戏修改的强大能力，表明经典单人游戏可以通过多人功能获得新生。它突显了复古游戏爱好者的奉献精神，并为其他对游戏状态同步和内存操作感兴趣的人提供了详细的技术案例研究。 作者指出游戏状态适合放在 64k 数据段内，他们通过停止-前进、转向和通信等实验探测内存来定位变量。最喜欢的发现是摄像机位于实体结构中，他们还回应了关于使用数据通道传输语音而非 RTC 流的问题。

hackernews · daniel_rh · 11月4日 18:51 · [社区讨论](https://news.ycombinator.com/item?id=50369895)

**背景**: 《银河飞将》是由 Origin Systems 于 1990 年 9 月 26 日为 MS-DOS 发布的太空飞行模拟游戏，是 Chris Roberts 系列的第一部作品。逆向工程游戏状态涉及分析内存以找到代表游戏条件的变量，然后修改或同步它们以实现多人等新功能。DOS 游戏通常有有限的内存段，64k 数据段是 x86 架构实模式的限制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Wing_Commander_(video_game)">Wing Commander (video game) - Wikipedia</a></li>
<li><a href="https://github.com/0xFA11/MultiplayerNetworkingResources">GitHub - 0xFA11/MultiplayerNetworkingResources: A curated ...</a></li>

</ul>
</details>

**社区讨论**: 社区反应积极，评论表达了对《银河飞将》的怀旧之情和对详细技术文章的赞赏。一位评论者将该技术比作 8 位时代的游戏作弊方法，通过更改内存值来实现，另一位则提出了关于使用数据通道传输语音而非 RTC 流的技术问题。

**标签**: `#reverse-engineering`, `#game-hacking`, `#DOS`, `#multiplayer`, `#retro-gaming`

---

<a id="item-7"></a>
## [OpenAI 收购 Pierre Computer Company 以增强 Codex](https://openai.com/index/openai-to-acquire-pierre/) ⭐️ 8.0/10

OpenAI 于 2026 年 11 月 4 日宣布将收购 Pierre Computer Company, Inc.，这家初创公司开发了 Code Storage 和一系列开源开发者工具，此举旨在扩展 Codex 在代码构建、理解和审查方面的能力。交易财务条款未披露。 此次收购通过整合 Pierre 的代码工具和人才，增强了 OpenAI 的 Codex 编程智能体，后者已拥有超过 200 万周活跃用户。这反映了 AI 实验室通过“人才收购”开发者工具初创公司来增强编程助手并可能构建训练数据集的更广泛趋势。 Pierre 由 Bootstrap 的原始创作者 Jacob Thornton 和 Mark Otto 创立，其 diffs 库获得了 Mitchell Hashimoto 等知名开发者的赞誉。该交易被视为一次“人才收购”，OpenAI 可能利用 Pierre 的团队来改进 Codex 的代码审查和差异比较能力，但 Pierre 现有产品的命运尚不清楚。

hackernews · OpenAI Blog · 11月4日 15:21 · [社区讨论](https://news.ycombinator.com/item?id=50366863)

**背景**: OpenAI Codex 是一款于 2025 年 4 月发布的 AI 编程智能体，可帮助完成编写代码和修复漏洞等软件工程任务。“人才收购”是一种策略，即大公司收购小公司主要是为了获得其优秀团队而非产品。Pierre Computer Company 以其开源工具（包括流行的 diffs 库）闻名，由 Bootstrap 框架的创作者创立。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/openai-to-acquire-pierre/">OpenAI to acquire Pierre Computer Company, Inc.</a></li>
<li><a href="https://tech-insider.org/openai-to-acquire-pierre-codex-code-storage-trees-diffs-2026/">OpenAI Pierre Acquisition: 3 Tools for Codex [2026]</a></li>
<li><a href="https://en.wikipedia.org/wiki/Acqui-hire">Acqui-hire</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论者将此次收购与 OpenAI 的 scaling-git 工作联系起来，并指出 Mitchell Hashimoto 是 Pierre 的粉丝和投资者。一些人讨论了“人才收购”的本质，一位评论者创造了一个术语来形容因为比订阅费更便宜而收购公司，另一位则想知道此类收购是否也用于构建关于软件如何制作的数据集。

**标签**: `#openai`, `#acquisitions`, `#codex`, `#developer-tools`, `#ai-coding`

---

<a id="item-8"></a>
## [腾讯发布 Hy4 开放权重模型，专注游戏开发](https://hy.tencent.ai/research/hy4) ⭐️ 8.0/10

腾讯发布了 Hy4，这是一个新的开放权重基础模型，包含专门用于游戏开发的能力，并附带两个开源科学模型：用于单细胞表示的 HyCell 和用于物理场建模的 HyPDE。该发布坦诚地指出了在研究级数学和长周期编程等挑战性基准上与顶级专有模型之间仍存在的差距。 此次发布通过提供具有独特游戏开发专长和开放科学工具的强模型，增强了开放权重生态系统，为研究人员和开发者提供了比专有系统更有能力的替代方案。腾讯对差距的诚实评估也为透明的人工智能发展树立了建设性的基调。 Hy4 针对包括虚幻引擎、Unity 和 Godot 在内的主要游戏引擎进行了适配，训练数据由腾讯互动娱乐事业群的专业开发者策划，涵盖功能实现、游戏逻辑、状态跟踪和资产管线。社区基准测试指出，Hy4 工作彻底但速度较慢，每个问题运行数十次查询，有时单个查询耗时长达一小时。

hackernews · Philpax · 11月4日 14:11 · [社区讨论](https://news.ycombinator.com/item?id=50365780)

**背景**: 开放权重模型是学习参数公开释放的人工智能模型，允许任何人下载、运行、研究和本地修改。腾讯是全球最大的视频游戏厂商，其 Hy 模型系列专为多步骤任务设计，包括软件开发、办公工作、财务分析、游戏开发和科学研究。此前发布的 Hy4 预览版拥有 7700 亿总参数和 490 亿激活参数。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Open_weights">Open weights - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Tencent_Hy">Tencent Hy - Wikipedia</a></li>
<li><a href="https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/">Tencent Releases and Open-Sources Tencent Hy 4 preview - Tencent</a></li>

</ul>
</details>

**社区讨论**: 评论者赞扬腾讯开源了 HyCell 和 HyPDE 等科学模型，将其与一些限制研究的美国初创公司形成对比，并指出游戏开发重点很有趣。其他人赞赏对与专有模型差距的诚实承认，而一项基准测试指出 Hy4 在成本/准确性前沿上表现不错，但由于大量查询而非常缓慢。

**标签**: `#llm`, `#open-weights`, `#tencent`, `#game-development`, `#ai-research`

---

<a id="item-9"></a>
## [朝鲜虚假面试导致币安 63 亿美元盗窃案](https://www.theregister.com/security/2026/11/03/north-korean-fake-job-interview-led-to-63b-binance-heist/5307398) ⭐️ 8.0/10

朝鲜攻击者在一次虚假面试中诱骗币安软件工程师下载恶意软件，随后利用内部 AI 工具攻陷两名钱包工程师，并利用以太坊 EIP-7702 漏洞，于 10 月 29 日从热钱包中盗取 63 亿美元。美国联邦调查局（FBI）将这起创纪录的盗窃案归咎于朝鲜。 这是迄今为止最大的加密货币盗窃案，导致投资者从币安撤资 36 亿美元，并引发了对整个交易所行业招聘安全、部署令牌卫生和平台责任的严重质疑。 攻击链始于一次虚假编码测试，通过内部 AI 工具触及钱包 DevOps 工程师 A 和钱包软件工程师 C，并利用在工程师 A 电脑上发现的容器部署权限令牌以及以太坊 EIP-7702，最终攻陷热钱包。

hackernews · smalltech · 11月4日 14:09 · [社区讨论](https://news.ycombinator.com/item?id=50365755)

**背景**: 朝鲜越来越多地利用虚假面试和虚假招聘人员身份向开发者传播恶意软件，且往往针对加密货币公司。币安是全球最大的加密货币交易所之一，热钱包是连接互联网、用于存放活跃交易资金的钱包，因此成为高价值目标。EIP-7702 是一项以太坊升级，允许外部拥有账户临时像智能合约一样运作，攻击者可滥用该机制获取控制权。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.theregister.com/security/2026/11/03/north-korean-fake-job-interview-led-to-63b-binance-heist/5307398">North Korean fake job interview led to $ 6 . 3 B Binance heist</a></li>
<li><a href="https://bingx.com/en/flash-news/post/fake-job-interview-malware-led-to-b-binance-hack-fbi-points-to-north-korea">Fake Job Interview Malware Led to $6.3B Binance Hack, FBI Points...</a></li>
<li><a href="https://www.theguardian.com/business/2026/nov/01/investors-take-out-36bn-from-binance-after-record-hack-that-stole-billions">Investors pull billions in funds from Binance after... | The Guardian</a></li>

</ul>
</details>

**社区讨论**: 评论者将工程师 C 的容器部署令牌视为重大危险信号，认为部署应仅通过 CI 进行以提供干净的构建环境。其他人批评该工程师使用工作笔记本电脑参加外部面试，嘲讽使此类欺诈成为可能的非人性化自动招聘流程，并指责领英在打击虚假公司和招聘人员方面做得不够。

**标签**: `#security`, `#cryptocurrency`, `#social-engineering`, `#devops`, `#hiring`

---

<a id="item-10"></a>
## [在 AWS Trainium2 上为 GLM-5.3-Flash 打造的 NKI 层超级内核将解码步从 32.2 毫秒降至 24.2 毫秒](https://www.reddit.com/r/MachineLearning/comments/1xo0yuq/p_nki_layer_megakernels_for_glm53flash_on_aws/) ⭐️ 8.0/10

RunAnywhere 开源了一个在单台 trn2.48xlarge 上服务 GLM-5.3-Flash（320B MoE，100 万 token 上下文）的推理引擎，将每个层的一半重写为一个 NKI 内核（稀疏注意力层则为整个层），以消除逐内核开销和跨芯片集合通信。在相同布局下，batch-8 解码步从 32.2 毫秒（10 月 17 日构建）降至 24.2 毫秒（11 月 1 日构建），其中融合的稀疏注意力层节省了 3.2 毫秒，KDA 和 MoE 内核又节省了 3.2 毫秒。 这项工作表明，在 AWS Trainium2 上，解码步的大部分时间花在开销而非模型计算上，手写的 NKI 超级内核可以在没有 vLLM 或 NxD Inference 等现成基线的情况下恢复显著性能。它为在非 GPU 加速器上优化大型 MoE 模型提供了实用的开源参考，对在 AWS 自研芯片上部署 LLM 的团队很有价值。 性能分析显示，在早期构建中，递归仅占 KDA 层注意力部分 2% 的时间，而 mHC 预投影占 36%，XLA 胶水代码占 33%，转置占 10%，流混合占 10%；batch-8 步为 24.2 毫秒，而内存下限为 6.1 毫秒，每步有 125 次跨芯片集合通信。内核将工作集保留在每个物理 NeuronCore 的 28 MiB SBUF 中，利用逻辑核心的两个物理核心流式传输 672–708 GB/s 的权重，并在集合通信阻塞下一个内核时将其移入内核内部；稀疏注意力预填充中仍保留一个近似，影响 1.2% 的选择，使对数概率偏移 0.012–0.021 nats，并在 448 个位置中的 3 个改变了最高 token。

reddit · r/MachineLearning · /u/WildCard727 · 11月4日 21:47

**背景**: AWS Trainium2 是 AWS 的第三代自研机器学习芯片，每颗芯片包含八个 NeuronCore-V3 核心，并支持将物理核心组合起来的逻辑 NeuronCore 配置（LNC）。NKI（Neuron 内核接口）是一种裸金属语言和编译器，用于直接编程 Trainium 和 Inferentia 设备，提供指令级控制以开发自定义算子。超级内核将整个 LLM 前向传播或解码步融合为单次内核启动，以消除内核启动开销和跨内核的 HBM 往返，这一技术也在 GPU 上被探索。GLM-5.3-Flash 是一个 320B 参数的混合专家模型，具有 100 万 token 上下文，KDA 指的是一种带递归的线性注意力层。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://awsdocs-neuron.readthedocs-hosted.com/en/latest/general/nki/index.html">Neuron Kernel Interface (NKI) — AWS Neuron Documentation</a></li>
<li><a href="https://awsdocs-neuron.readthedocs-hosted.com/en/latest/general/arch/neuron-hardware/trainium2.html">Trainium2 Architecture — AWS Neuron Documentation</a></li>
<li><a href="https://theorempath.com/topics/megakernels">Megakernels . End-to-End Fused LLM Inference Kernels | TheoremPath</a></li>

</ul>
</details>

**标签**: `#inference-optimization`, `#aws-trainium`, `#megakernels`, `#moe`, `#ml-systems`

---

<a id="item-11"></a>
## [注意力而非长度预测检索中的上下文腐烂](https://www.reddit.com/r/MachineLearning/comments/1xnzzgn/length_is_cheap_competition_is_not_attention/) ⭐️ 8.0/10

一项大规模检索研究（126,473 次试验）覆盖五个开源模型（0.5B–3B），发现上下文中的竞争性陈述而非上下文长度是准确率损失的主要驱动因素：中性填充几乎无代价（32K 时准确率 0.97–1.00），而竞争性陈述使准确率降至 0.11–0.21。证据上的注意力质量 log(1/a*)解释了 35–58%的损失方差，而长度仅解释 2–8%。 这挑战了主流的“上下文腐烂由长度导致”的叙事，并建议长上下文和 RAG 从业者应专注于减少竞争性证据，而非简单地缩短上下文。研究还提出任何长度声明都应包含可见的中性对照，这可能改变长上下文评估的设计方式。 注意力结果是预测性的而非因果性的（未对 a*进行干预）；研究使用一个合成键值检索任务，模型最大 3B，仅在 MMLU 复现中使用 7B。Du 等人（2025）的掩码填充协议在 MMLU 上复现（30K 时损失 11–18 分），但在检索中掩码在 32K 时损失 46 个准确率点，而可见填充无损失。

reddit · r/MachineLearning · /u/neom_gluon · 11月4日 21:08

**背景**: 上下文腐烂指随着输入上下文变长，LLM 输出质量下降的现象，已在许多前沿模型中被记录。Du 等人 2025 年的论文使用掩码填充协议（在保留位置索引的同时将无关 token 从注意力中隐藏），认为仅上下文长度就会损害性能。本研究在受控检索环境中检验该主张，并基于注意力竞争提出替代解释。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.zenml.io/llmops-database/context-rot-evaluating-llm-performance-degradation-with-increasing-input-tokens">Context Rot: Evaluating LLM Performance Degradation with ...</a></li>
<li><a href="https://www.aimodeling.com/en/news/slug/context-rot-attention-competition-not-length">Attention predicts context rot: competition, not length</a></li>
<li><a href="https://www.tmls.nyc/research/position-bias-long-context">Position Bias in Long-Context Retrieval | TMLS — The Machine...</a></li>

</ul>
</details>

**标签**: `#LLM long-context`, `#retrieval`, `#attention`, `#context rot`, `#empirical study`

---

<a id="item-12"></a>
## [甲骨文因美国担忧取消与腾讯 70 亿美元 AI 芯片租赁协议](https://www.tradingview.com/news/seekingalpha:e51e68f4d094b:0-oracle-cancels-7b-ai-chip-lease-with-tencent-amid-us-concerns-ft/) ⭐️ 8.0/10

甲骨文取消了一项与腾讯为期五年、价值约 70 亿美元的 AI 芯片租赁协议，该协议原计划让腾讯通过甲骨文在东南亚的数据中心获得约 10 万枚先进 AI 芯片。此前美国特朗普政府官员对此交易表示担忧，而腾讯已支付了约占合同金额 30%的首付款。 此次取消凸显了中美科技脱钩的加剧，表明即使通过海外云租赁间接获取先进 AI 芯片，如今也会受到美国政府的审查。这可能打乱腾讯的 AI 基础设施计划，并为其他试图通过第三国数据中心规避出口管制的中国公司树立先例。 该协议于今年早些时候签署，涉及甲骨文在东南亚的多个数据中心，腾讯打算租赁那些因美国出口管制而无法直接在中国获得的芯片。具体芯片型号未披露，但报道指出它们是受美国限制的先进英伟达 GPU。

telegram · zaihuapd · 11月4日 11:01

**背景**: 美国出于国家安全考虑，对先进半导体实施了严格的出口管制，特别是针对英伟达 H100 和 B200 等高性能 GPU，以遏制中国 AI 的发展。这些限制在 2025 年 4 月进一步收紧，促使中国科技公司寻求变通方案，例如从海外云服务商租赁算力。甲骨文作为主要的云基础设施提供商，在东南亚运营的数据中心可以在针对中国的禁令直接范围之外托管此类芯片。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.zerohedge.com/ai/oracle-kills-7bn-tencent-ai-chip-deal-under-trump-pressure">Oracle Kills $7BN Tencent AI Chip Deal Under Trump... | ZeroHedge</a></li>
<li><a href="https://qz.com/tencent-oracle-ai-chips-lease-deal-100126">Tencent leases 100,000 AI chips from Oracle in $7 billion deal</a></li>
<li><a href="https://www.datacenterdynamics.com/en/news/tencent-signs-on-for-100000-gpus-via-oracle-report/">Tencent signs on for 100,000 GPUs via Oracle - report - DCD</a></li>

</ul>
</details>

**标签**: `#AI chips`, `#US-China tech`, `#geopolitics`, `#cloud infrastructure`, `#export controls`

---

<a id="item-13"></a>
## [黑客演示绕过 iPhone 锁定模式的持久越狱](https://appleinsider.com/articles/26/11/04/apples-lockdown-mode-thwarted-by-a-new-persistent-iphone-jailbreak) ⭐️ 8.0/10

黑客团队 Calif 在 X 上发布视频，展示一台开启锁定模式的 iPhone 18 Pro 被越狱，并且在升级到 iOS 27.2 后仍保持越狱状态。视频中先通过 AirDrop 传送 PDF，随后在设置中完成更新。 这很重要，因为锁定模式是苹果最高级别的安全设置，苹果曾在 2026 年 3 月宣称其自 2022 年以来防护成功率达 100%；而一个能跨更新存活的持久越狱与这一说法相矛盾，并可能影响记者、活动人士等高风险用户。 Calif 未公开技术细节，称正在向苹果披露该漏洞，并且不会发布越狱工具。演示似乎以通过 AirDrop 传送的 PDF 作为入口，且越狱在通过 OTA 升级到 iOS 27.2 后依然保持。

telegram · zaihuapd · 11月4日 14:38

**背景**: 锁定模式是 iOS 中可选的极限保护功能，会强化无线连接、媒体处理、沙盒和网络安全，面向可能遭受高级攻击的用户。持久（不完美越狱）意味着修改状态在重启后仍能保留，本例中甚至在系统更新后依然存在，这通常需要串联多个漏洞。Calif 此前曾在 2026 年 10 月的 Hexacon 大会上演示了针对 iPhone 18 Pro 上 iOS 27.0.1 的不完美越狱。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://support.apple.com/en-us/105120">About Lockdown Mode - Apple Support</a></li>
<li><a href="https://www.explainx.ai/blog/calif-io-ios-27-0-1-untethered-jailbreak-iphone-18-pro-hexacon-ai-claimed-vs-verified-2026">iOS 27.0.1 Untethered Jailbreak: AI Role Checked (2026 ...</a></li>
<li><a href="https://betanews.com/article/apple-killed-ios-jailbreaking/">How Apple put an end to iOS jailbreaking - BetaNews</a></li>

</ul>
</details>

**标签**: `#iOS security`, `#jailbreak`, `#Lockdown Mode`, `#Apple`, `#vulnerability disclosure`

---

<a id="item-14"></a>
## [华为要求昇腾 960DT 客户自行采购 HBM 内存](https://thenextweb.com/news/huawei-hbm-smuggling-samsung-sk-hynix-ascend-960dt) ⭐️ 8.0/10

据报道，华为已告知部分客户，其下一代旗舰 AI 芯片昇腾 960DT 将主要使用三星和 SK 海力士的 HBM，并要求客户自行解决内存来源，因为中国厂商的 HBM 产能不足。走私的 HBM3E 在深圳单颗售价已涨至约 4000 美元，而一年前仅为数百美元。 这一消息表明，中国本土 HBM 供应尚无法支撑华为的 AI 芯片雄心，迫使客户以高价进入灰色市场渠道。这将推高中国 AI 基础设施建设的成本与供应风险，也凸显出口管制正在如何塑造全球 AI 硬件竞争格局。 据报道，走私的 HBM 被焊在性能极弱的处理器上，按处理器编码报关运至香港，再由人携带入内地并加热拆下。昇腾 960DT 的发布时间近期被提前至 2027 年第一季度，而其对外国 HBM 的依赖仍是关键瓶颈。

telegram · zaihuapd · 11月4日 14:52

**背景**: HBM（高带宽内存）是由三星、AMD 和 SK 海力士开发的 3D 堆叠 DRAM 技术，可为 AI 加速器提供所需的海量内存带宽。HBM3E 是当前一代产品，用于 NVIDIA H200 等芯片，主要由三星、SK 海力士和美光生产。昇腾 960DT 是华为的下一代旗舰 AI 芯片，旨在在中国市场挑战 NVIDIA。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/High_Bandwidth_Memory">High Bandwidth Memory - Wikipedia</a></li>
<li><a href="https://theaiinsider.tech/2026/09/18/huawei-moves-up-launch-of-next-generation-ascend-960dt-ai-chip-to-early-2027/">Huawei Moves Up Launch of Next-Generation Ascend 960DT AI ...</a></li>
<li><a href="https://www.nvidia.com/en-us/data-center/h200/">H200 GPU | NVIDIA</a></li>

</ul>
</details>

**标签**: `#Huawei`, `#AI chips`, `#HBM`, `#supply chain`, `#semiconductors`

---