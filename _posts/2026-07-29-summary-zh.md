---
layout: default
title: "Daily-Summary: 2026-07-29 (ZH)"
date: 2026-07-29
lang: zh
---

> 从 55 条内容中筛选出 15 条重要资讯。

---

1. [GPT-5.6 融合前沿智能与效率](#item-1) ⭐️ 9.0/10
2. [TurboFieldfare 在 Mac 上用 2GB 内存运行 Gemma 4 26B](#item-2) ⭐️ 8.0/10
3. [Mitchell Hashimoto 推出 Superlogical，打造可组合终端应用](#item-3) ⭐️ 8.0/10
4. [Kimi 推出 K3-256k：半价同性能](#item-4) ⭐️ 8.0/10
5. [长篇政策文档无法可靠约束 LLM 智能体](#item-5) ⭐️ 8.0/10
6. [AI 蠕虫通过 Microsoft Copilot for Word 自我传播](#item-6) ⭐️ 8.0/10
7. [Godot VR 游戏发布与移植 PSVR2 的经验总结](#item-7) ⭐️ 8.0/10
8. [马修·格林：AI 驱动的密码分析正逢后量子时代](#item-8) ⭐️ 8.0/10
9. [OpenAI 向 10 万名研究人员免费提供 ChatGPT](#item-9) ⭐️ 8.0/10
10. [使用 Vulkan 在边缘设备上进行厂商无关的 ML 推理](#item-10) ⭐️ 8.0/10
11. [Claude 共享对话及 Artifacts 遭谷歌索引，Anthropic 称符合设计](#item-11) ⭐️ 8.0/10
12. [俄罗斯指控 Telegram 创始人杜罗夫协助恐怖活动](#item-12) ⭐️ 8.0/10
13. [报告称 Hugging Face 被广泛用于生成深度伪造裸照](#item-13) ⭐️ 8.0/10
14. [月之暗面融资 35 亿美元，估值达 350 亿美元](#item-14) ⭐️ 8.0/10
15. [中国起草反网络暴力法，AI 网暴被纳入规制](#item-15) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [GPT-5.6 融合前沿智能与效率](https://openai.com/index/gpt-5-6-frontier-intelligence-efficiency) ⭐️ 9.0/10

OpenAI 于 2026 年 7 月 9 日发布了 GPT-5.6，这是一个包含三个变体（Luna、Terra、Sol）的大语言模型系列，在模型、推理和智能体工作流方面提升了 AI 效率，每美元可提供更多智能。 此次发布显著降低了每单位智能的成本，使前沿 AI 对企业和研究人员更加可及和可扩展，并为 AI 行业的效率树立了新标准。 最强大的变体 GPT-5.6 Sol 在编程、知识工作、网络安全和科学领域取得了最先进的结果，同时使用的 token 更少，估计成本低于以往的前沿模型。

rss · OpenAI Blog · 7月29日 00:00

**背景**: GPT-5.6 是 OpenAI 开发的大语言模型（LLM）。智能体工作流是由 AI 驱动的流程，其中自主智能体在最少人工干预下做出决策并协调任务。此次发布专注于提升这些领域的效率。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/GPT-5.6">GPT-5.6 - Wikipedia</a></li>
<li><a href="https://openai.com/index/gpt-5-6-frontier-intelligence-efficiency/">How GPT-5.6 fuses frontier intelligence with frontier ...</a></li>
<li><a href="https://openai.com/index/gpt-5-6/">GPT-5.6: Frontier intelligence that scales with your ambition</a></li>

</ul>
</details>

**标签**: `#AI`, `#OpenAI`, `#GPT-5.6`, `#efficiency`, `#inference`

---

<a id="item-2"></a>
## [TurboFieldfare 在 Mac 上用 2GB 内存运行 Gemma 4 26B](https://github.com/drumih/turbo-fieldfare) ⭐️ 8.0/10

TurboFieldfare 是一个开源的 Swift/Metal 推理引擎，通过从 SSD 流式传输路由专家，仅用约 2 GB 内存即可在任何 M 系列 Mac 上运行 4 位量化的 Gemma 4 26B-A4B-IT 模型。 这使得在内存受限的 Mac（如 8 GB）上运行 260 亿参数模型成为可能，降低了大型语言模型在消费级硬件上的使用门槛。其创新的 SSD 流式传输方法可能影响未来的推理优化方向。 模型的 4 位量化权重约 14 GB，但 TurboFieldfare 仅将共享层和 KV 缓存保留在 RAM 中，通过小型专家缓存和有界并行 pread 从 SSD 流式传输路由专家。在 8 GB M2 MacBook Air 上达到 5–6 tok/s，在 M5 MacBook Pro 上达到 31–35 tok/s。

hackernews · gitpusher42 · 7月29日 15:05 · [社区讨论](https://news.ycombinator.com/item?id=49098510)

**背景**: Gemma 4 是 Google DeepMind 的开源权重语言模型系列，其中 26B-A4B 变体采用混合专家（MoE）架构，每个 token 仅激活部分专家。传统推理会将所有权重加载到 RAM，使得大模型在低内存设备上不实用。TurboFieldfare 利用 MoE 结构，仅加载共享权重并按需从 SSD 缓存专家。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/drumih/turbo-fieldfare">GitHub - drumih/turbo-fieldfare: Gemma 4 26B-A4B inference in ...</a></li>
<li><a href="https://news.ycombinator.com/item?id=49098510">Show HN: Open-source engine running Gemma 4 26B in 2 GB RAM ...</a></li>

</ul>
</details>

**社区讨论**: 评论者称赞了这种方法，有人指出这是第二次在 HN 上看到，并质疑为什么需要完整加载模型。讨论了与 llama.cpp 的 mmap 的技术对比，一位用户提供了针对旧版 macOS 的解决方法。另一位开发者提到了一个用于 DiffusionGemma 的互补项目。

**标签**: `#on-device AI`, `#inference optimization`, `#Gemma`, `#Mac`, `#open-source`

---

<a id="item-3"></a>
## [Mitchell Hashimoto 推出 Superlogical，打造可组合终端应用](https://www.superlogical.com/) ⭐️ 8.0/10

Mitchell Hashimoto 宣布成立新公司 Superlogical，将在开源 libghostty 库之上构建可组合的终端应用。他还将 Ghostty 的所有权转让给了一个非营利组织。 这很重要，因为 Mitchell Hashimoto 是科技界的知名人物，他基于开源构建商业产品的方式可能成为可持续开源开发的典范。同时，它为终端应用带来了可组合性，可能实现更丰富的集成。 Superlogical 将把 libghostty 作为公共构建块，使用与其他人相同的 MIT 许可组件，并将上游共享终端工作。libghostty 是一个跨平台、零依赖的 C 和 Zig 库，用于构建终端模拟器。

hackernews · yan · 7月29日 15:41 · [社区讨论](https://news.ycombinator.com/item?id=49098965)

**背景**: Ghostty 是一个快速、功能丰富的终端模拟器，其共享核心 libghostty 用 Zig 编写。Mitchell Hashimoto 是 HashiCorp 的联合创始人，以创建 Vagrant 和 Terraform 等流行开源工具而闻名。可组合终端应用允许不同的终端组件组合和重用，类似于 OLE/COM 支持文档嵌入的方式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/ghostty-org/ghostty">GitHub - ghostty-org/ghostty: Ghostty is a fast, feature-rich, and...</a></li>
<li><a href="https://ghostty.org/docs/about">About Ghostty</a></li>

</ul>
</details>

**社区讨论**: 社区反应积极，一位评论者称赞将 Ghostty 转让给非营利组织以及开源依赖模型。另一位评论者将其与 OLE/COM 相提并论，认为有潜力实现丰富的集成，但也指出了历史上的复杂性。少数用户对晦涩的标题表示不满。

**标签**: `#terminal`, `#open source`, `#startup`, `#Mitchell Hashimoto`, `#Ghostty`

---

<a id="item-4"></a>
## [Kimi 推出 K3-256k：半价同性能](https://www.kimi.com/code/docs/en/kimi-code/models) ⭐️ 8.0/10

Kimi 发布了 K3-256k 模型，该模型拥有 256k 上下文窗口，在大多数使用场景下性能与 1M 上下文版本的 K3 相当，但价格减半。 此举通过提供更便宜的替代方案来满足大多数实际需求，加速了大语言模型的商品化进程，给 OpenAI 等竞争对手带来了定价压力。 K3-256k 的配额消耗约为 1M 版本的一半；在 Moderato 套餐中，上下文限制为 256k，更高套餐才支持 1M 上下文。

hackernews · monneyboi · 7月29日 19:25 · [社区讨论](https://news.ycombinator.com/item?id=49101852)

**背景**: Kimi K3 是 Moonshot AI 推出的 2.8 万亿参数开源多模态推理模型，最初提供 1M token 上下文窗口。许多用户认为 256k 上下文对大多数任务已足够，因此低成本版本很有吸引力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.kimi.com/code/docs/en/kimi-code/models">Model Configuration | Kimi Code Docs</a></li>
<li><a href="https://openrouter.ai/moonshotai/kimi-k3">Kimi K3 - API Pricing & Benchmarks | OpenRouter</a></li>
<li><a href="https://www.kimi.com/blog/kimi-k3">Kimi K3 Tech Blog: Open Frontier Intelligence</a></li>

</ul>
</details>

**社区讨论**: Hacker News 社区称赞这一定价举措“巨大”，并指出大语言模型正迅速商品化。一些用户分享了基准测试，显示 K3 尽管吞吐量较慢，但质量有优势。

**标签**: `#LLM`, `#context window`, `#pricing`, `#commoditization`, `#Kimi`

---

<a id="item-5"></a>
## [长篇政策文档无法可靠约束 LLM 智能体](https://arxiv.org/abs/2607.25398) ⭐️ 8.0/10

一篇名为《Handbook.md》的研究论文表明，长篇政策文档无法可靠地约束 LLM 智能体，提供了实证证据，证明即使拥有大上下文窗口的模型也无法始终遵循冗长的指令。 这一发现挑战了长上下文 LLM 能够有效作为遵循复杂策略的智能体的假设，凸显了在需要严格遵守详细指南的实际应用中部署智能 AI 的关键瓶颈。 该论文得到了社区轶事的证实，例如用户报告称 Claude 在执行任务约 10 分钟后会忽略 CLAUDE.md 文件中的指令，而内联提示效果更好。该基准测试可能测试模型遵循多页政策文档的能力。

hackernews · spIrr · 7月29日 13:01 · [社区讨论](https://news.ycombinator.com/item?id=49096969)

**背景**: LLM 智能体是使用大型语言模型自主执行任务的 AI 系统，通常由政策文档或指令指导。长上下文模型声称能处理多达数百万个 token，但 LongBench v2 等基准测试显示，实际长上下文任务表现差异很大。上下文窗口限制指的是模型无法有效利用长输入中的所有 token，导致性能下降。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.geeksforgeeks.org/artificial-intelligence/llm-agents/">LLM Agents - GeeksforGeeks</a></li>
<li><a href="https://atlan.com/know/llm-context-window-limitations/">LLM Context Window Limitations in 2026</a></li>
<li><a href="https://longbench2.github.io/">LongBench v2</a></li>

</ul>
</details>

**社区讨论**: 社区评论普遍认同该论文的发现，用户分享了模型随时间推移忽略长指令的轶事。一些人建议本地推理可以缓解问题，而另一些人指出人类也难以处理长篇政策文档，因此这一限制可能是根本性的。

**标签**: `#LLM`, `#long-context`, `#AI agents`, `#benchmark`, `#reliability`

---

<a id="item-6"></a>
## [AI 蠕虫通过 Microsoft Copilot for Word 自我传播](https://enklypesalt.com/posts/context-collapse-part3-ai-worming-through-word/) ⭐️ 8.0/10

研究员 Håkon Måløy 展示了一种新型提示注入攻击，将 Microsoft Copilot for Word 转变为自我复制的 AI 蠕虫：隐藏在共享文档中的恶意指令使 Copilot 修改文档并将攻击传播到新文件。 该攻击利用了 LLM 无法区分指令与数据的根本缺陷，对数百万依赖生产力软件中 AI 助手的用户构成严重安全风险。它凸显了在 AI 蠕虫广泛传播之前迫切需要稳健的缓解措施。 该蠕虫利用嵌入文档内容的间接提示注入，微软已承认该漏洞但目前尚无稳健的缓解措施。攻击可通过共享文档、电子邮件及其他 Copilot 集成的工作流传播。

hackernews · Canopy9560 · 7月29日 11:44 · [社区讨论](https://news.ycombinator.com/item?id=49096188)

**背景**: 提示注入是一种网络安全利用手段，恶意输入导致 LLM 产生意外行为并绕过安全措施。AI 蠕虫是利用基于 LLM 的系统自我传播的恶意软件，通过代理间交互扩散。该研究建立在先前工作（如 Morris II）之上，后者展示了 AI 邮件助手中的自我复制提示。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://enklypesalt.com/posts/context-collapse-part3-ai-worming-through-word/">Context Collapse, Part 3 - AI Worming through Word | En Klype Salt</a></li>
<li><a href="https://en.wikipedia.org/wiki/Prompt_injection_attack">Prompt injection attack</a></li>

</ul>
</details>

**社区讨论**: 评论者表示担忧，认为在 AI 系统停止混淆指令与数据之前，这类漏洞从根本上无法修复。一些用户已卸载 Copilot 以保护数据，另一些人则强调了现实攻击场景，如 GitHub 仓库中的恶意评论可能窃取凭证。

**标签**: `#AI security`, `#prompt injection`, `#Copilot`, `#cybersecurity`, `#LLM vulnerabilities`

---

<a id="item-7"></a>
## [Godot VR 游戏发布与移植 PSVR2 的经验总结](https://www.claire-blackshaw.com/blog/2026/07/shipping-godot-vr-and-porting-to-psvr2-a-partial-post-mortem/) ⭐️ 8.0/10

一位开发者发布了一篇详细的经验总结，讲述了发布一款商业 Godot VR 游戏（Augmental Puzzles）并将其移植到 PSVR2 的过程，揭示了引擎层面的重大挑战和解决方案。 这篇经验总结提供了关于使用 Godot 进行商业 VR 开发的实用困难，特别是在 PSVR2 等主机平台上的罕见而具体的见解，可以帮助其他开发者避免类似陷阱。 开发者支付了大约 8 万英镑的“早期采用者税”，做了在 Unity 上不需要的引擎工作，并修复了 Label3D 每个字形材质创建导致 VR 帧率尖峰的问题，用自定义的 FastText 系统（使用 GPU 资源）替代了它。

hackernews · ibobev · 7月29日 12:48 · [社区讨论](https://news.ycombinator.com/item?id=49096811)

**背景**: Godot 是一个开源游戏引擎，支持 VR 开发，但其 VR 工具和主机支持不如 Unity 或 Unreal 等专有引擎成熟。PSVR2 移植涉及平台特定的限制，如统一内存处理和认证要求。Godot 中的资源系统是管理纹理和网格等资产的主要方式，但如果处理不当，可能会引入性能问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Godot_(game_engine)">Godot (game engine)</a></li>
<li><a href="https://docs.godotengine.org/en/stable/tutorials/scripting/resources.html">Resources — Godot Engine (stable) documentation in English</a></li>

</ul>
</details>

**社区讨论**: 评论者对 Godot 的性能和资源管理表示沮丧，一位开发者指出由于性能问题，他们不得不将大部分代码转移到纯 C#并放弃 Godot 的 Jolt 物理引擎。另一位评论者希望了解更多关于 POSIX 为何有问题以及资源管理如何与统一内存交互的细节。

**标签**: `#Godot`, `#VR`, `#PSVR2`, `#game development`, `#porting`

---

<a id="item-8"></a>
## [马修·格林：AI 驱动的密码分析正逢后量子时代](https://simonwillison.net/2026/Jul/29/matthew-green/#atom-everything) ⭐️ 8.0/10

知名密码学家马修·格林评论称，当前向后量子密码学的过渡时期正是 AI 驱动密码分析增强新算法信心的理想时机，并提及 Anthropic 最近发现 HAWK 签名方案弱点的研究。 该评论突出了一个独特机遇：AI 密码分析可以在新后量子算法广泛部署前对其进行严格测试和验证，从而可能避免未来的安全漏洞。它强调了 AI 在密码学研究中日益重要的作用，以及在 NIST 标准化过程中进行稳健分析的迫切需求。 格林特别提到了 HAWK（一种 NIST 正在考虑的基于格的签名方案），并引用了 Impagliazzo 的“Minicrypt”世界（其中公钥密码可能不存在）。他指出，如果 AI 成功削弱了困难问题，可能导致 Minicrypt 情景，但最佳情况是对所选问题获得真正的信心。

rss · Simon Willison · 7月29日 18:18

**背景**: 后量子密码学旨在开发能够抵御未来量子计算机攻击的算法，量子计算机可能破解 RSA 和 ECC 等广泛使用的方案。NIST 目前正在标准化新的后量子算法，包括基于格的签名方案 HAWK。AI 驱动的密码分析利用机器学习寻找密码算法中的弱点，Anthropic 的 Claude Mythos 模型最近发现了 HAWK 的一个结构性弱点。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://fourweekmba.com/ai-anthropic-claude-mythos-hawk-cryptanalysis-compute/">Claude Mythos Preview Finds a Real Weakness in HAWK, the Post ...</a></li>
<li><a href="https://thehackernews.com/2026/07/claude-ai-just-cracked-post-quantum.html">Claude AI Just Cracked a Post-Quantum Test Scheme and Found a ...</a></li>
<li><a href="https://blog.computationalcomplexity.org/2004/06/impagliazzos-five-worlds.html">Computational Complexity: Impagliazzo's Five Worlds</a></li>

</ul>
</details>

**社区讨论**: 输入中未提供社区讨论内容，因此该字段留空。

**标签**: `#cryptography`, `#post-quantum`, `#AI`, `#cryptanalysis`, `#security`

---

<a id="item-9"></a>
## [OpenAI 向 10 万名研究人员免费提供 ChatGPT](https://openai.com/index/chatgpt-for-academic-researchers) ⭐️ 8.0/10

OpenAI 宣布将向 10 万名学术研究人员免费提供其最先进的 ChatGPT 模型，以加速科学发现。 这一举措通过为科学家提供强大的 AI 工具用于数据分析、文献综述和假设生成，可能显著加速各学科的研究，从而在医学、气候科学等领域带来突破。 该优惠包括访问 OpenAI 最先进的模型，但未披露具体模型名称和使用限制。研究人员必须通过 OpenAI 的项目申请才能获得访问权限。

rss · OpenAI Blog · 7月29日 10:00

**背景**: ChatGPT 是一种大型语言模型，能够理解和生成类似人类的文本。学术研究人员通常因成本问题无法使用尖端 AI，限制了他们在蛋白质折叠预测或药物发现等复杂任务中利用 AI 的能力。

**标签**: `#AI`, `#OpenAI`, `#Scientific Research`, `#Education`

---

<a id="item-10"></a>
## [使用 Vulkan 在边缘设备上进行厂商无关的 ML 推理](https://www.reddit.com/r/MachineLearning/comments/1v9s4mz/vendoragnostic_ml_inference_on_production_edge/) ⭐️ 8.0/10

PostSlate 使用 ncnn 的 Vulkan 后端在生产边缘设备上实现了厂商无关的 ML 推理，在人脸检测和嵌入模型上相比 ONNX CPU 获得了 10 倍的加速。 这种方法消除了对 CUDA 等厂商特定运行时的依赖，使得跨多种硬件（NVIDIA、AMD、Intel、Apple Silicon）的高效设备端 ML 推理成为可能，且无需用户安装额外驱动。 在 RTX 4070 上使用 fp16，ArcFace R50 运行时间为 3 毫秒（ONNX CPU 为 30 毫秒），SCRFD 为 2.5 毫秒（ONNX CPU 为 25 毫秒）。模型大小也从 174 MB（ONNX fp32）减半至 87 MB（ncnn fp16）。

reddit · r/MachineLearning · /u/ppchaos · 7月29日 10:22

**背景**: ncnn 是一个针对移动和嵌入式平台优化的高性能神经网络推理框架，其 Vulkan 后端利用现有的 GPU 驱动。Vulkan 是一个跨平台 GPU API，几乎可以在所有现代 GPU 上运行，因此非常适合厂商无关的部署。ONNX Runtime 是一个流行的跨平台推理引擎，但通常依赖 CPU 或特定厂商的执行提供程序。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/Tencent/ncnn/wiki/vulkan-notes">vulkan notes · Tencent/ncnn Wiki · GitHub</a></li>
<li><a href="https://github.com/Tencent/ncnn/wiki/FAQ-ncnn-vulkan">FAQ ncnn vulkan · Tencent/ncnn Wiki · GitHub</a></li>
<li><a href="https://docs.vulkan.org/tutorial/latest/ML_Inference/Desktop_Applications/03_practical_implementation.html">CPU Baseline Implementation :: Vulkan Documentation Project</a></li>

</ul>
</details>

**社区讨论**: Reddit 讨论称赞了这种实用方法，并指出 Vulkan 的普遍性是一个关键优势。一些评论者讨论了移动 GPU 上的潜在限制，以及 ncnn 与其他框架（如 TensorRT 或 CoreML）之间的权衡。

**标签**: `#ML inference`, `#Vulkan`, `#edge computing`, `#ncnn`, `#vendor-agnostic`

---

<a id="item-11"></a>
## [Claude 共享对话及 Artifacts 遭谷歌索引，Anthropic 称符合设计](https://thenextweb.com/news/claude-shared-chats-artifacts-google-search-indexed) ⭐️ 8.0/10

上周末，谷歌索引了 Claude 用户创建的共享对话和 Artifacts 链接，导致医疗记录、公司文件等敏感数据公开暴露。Anthropic 表示系统未被入侵，索引行为符合设计，但已阻止新的索引。 此事件凸显了 AI 平台中用户共享内容被公开搜索到的反复出现的隐私缺陷，影响数百万用户。它强调了在共享 AI 生成内容时需要更好的默认隐私控制和用户意识。 类似事件在 2025 年 9 月已发生，近 600 条 Claude 对话被索引，ChatGPT 和 Grok 也曾出现同样问题。Anthropic 于周一下午阻止了新的索引，但已索引的链接仍可访问；用户可在设置中撤销已共享链接。

telegram · zaihuapd · 7月29日 02:40

**背景**: Claude 的共享对话功能允许用户创建对话快照并通过直接链接分享。Artifacts 是 Claude 生成的交互式代码预览或独立内容。当用户公开分享这些链接时，它们可能被搜索引擎爬虫发现，导致意外暴露。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thecybersecguru.com/news/claude-shared-chats-google-search-privacy/">Claude Shared Chats Indexed by Search Engines Raise Privacy ...</a></li>
<li><a href="https://www.pcmag.com/news/claude-chats-popped-up-in-google-search-results-see-if-yours-are-public">Claude Chats Popped Up in Google Search Results. How to See ...</a></li>
<li><a href="https://support.claude.com/en/articles/10593882-share-and-unshare-chats">Share and unshare chats | Claude Help Center</a></li>

</ul>
</details>

**标签**: `#Claude`, `#privacy`, `#security`, `#AI`, `#data exposure`

---

<a id="item-12"></a>
## [俄罗斯指控 Telegram 创始人杜罗夫协助恐怖活动](https://www.interfax.ru/russia/1106228) ⭐️ 8.0/10

俄罗斯联邦安全局（FSB）依据《刑法》第 205.1 条对 Telegram 创始人帕维尔·杜罗夫提起协助恐怖活动的刑事指控，并将其列入国际通缉名单。 此举加剧了俄罗斯政府与全球主要通讯平台 Telegram 之间的冲突，可能影响互联网自由和隐私权。同时，它为追究科技高管对其平台上用户生成内容的刑事责任开创了先例。 FSB 指控 Telegram 管理层拒绝删除被乌克兰情报机构及恐怖组织用于协调袭击的频道和机器人，导致人员伤亡和数十亿卢布损失。这些指控是在俄罗斯对 Telegram 实施更广泛限制的背景下提出的。

telegram · zaihuapd · 7月29日 05:56

**背景**: Telegram 是一款以强加密和隐私保护著称的广泛使用的通讯应用。帕维尔·杜罗夫还创立了俄罗斯社交网络 VK，他在 2014 年因与当局发生争执而离开俄罗斯。俄罗斯《刑法》第 205.1 条将协助恐怖活动（包括招募和资助）定为犯罪。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://tass.com/society/2166649">Russia’s FSB charges Telegram co-founder Durov with... - TASS</a></li>
<li><a href="https://www.bbc.com/news/articles/cj4kexqkpzno">Russia charges Telegram founder Pavel Durov with facilitating ...</a></li>
<li><a href="https://abcnews.com/International/wireStory/russia-charges-telegram-founder-pavel-durov-aiding-terrorism-135179973">Russia charges Telegram founder with aiding terrorism and ...</a></li>

</ul>
</details>

**标签**: `#Telegram`, `#Pavel Durov`, `#Russia`, `#terrorism`, `#international law`

---

<a id="item-13"></a>
## [报告称 Hugging Face 被广泛用于生成深度伪造裸照](https://www.theverge.com/ai-artificial-intelligence/971723/hugging-face-nudify-deepfake-undress-women-children) ⭐️ 8.0/10

欧洲非营利组织 AI Forensics 于 7 月 28 日发布的报告发现，Hugging Face 平台被广泛用于生成非自愿的深度伪造裸照，测试请求中 73% 涉及性内容，近 7% 针对儿童。 这凸显了 AI 模型托管平台在安全方面的严重缺陷，Hugging Face 的政策虽禁止此类内容但缺乏有效执行，可能导致包括儿童剥削在内的广泛滥用风险。 研究人员设置的蜜罐在 7 天内收到超过 1000 条请求，发现排名前九的图像编辑模型中有七个能通过简单提示轻松为女性“脱衣”，无需越狱。

telegram · zaihuapd · 7月29日 08:20

**背景**: Hugging Face 是一个流行的开源 AI 平台，用户可以在上面分享和托管机器学习模型。深度伪造色情内容利用 AI 未经同意制作虚假裸照，常针对女性和未成年人。报告呼吁 Hugging Face 增加提示词过滤和输出扫描机制，以阻止有害图像生成。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Hugging_Face">Hugging Face - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Deepfake_pornography">Deepfake pornography - Wikipedia</a></li>
<li><a href="https://aiforensics.org/">AIForensics</a></li>

</ul>
</details>

**标签**: `#AI ethics`, `#deepfakes`, `#content moderation`, `#Hugging Face`, `#safety`

---

<a id="item-14"></a>
## [月之暗面融资 35 亿美元，估值达 350 亿美元](https://www.bloomberg.com/news/articles/2026-07-29/china-s-moonshot-ai-passes-funding-goal-to-hit-35-billion-value) ⭐️ 8.0/10

月之暗面完成了一轮 35 亿美元的融资，投后估值达 350 亿美元，远超最初 10 亿至 20 亿美元的目标，这得益于其 Kimi K3 模型的成功。该公司已启动新一轮融资，投前估值 500 亿美元，并计划最早今年内在香港 IPO。 这一巨额融资轮表明，中国 AI 初创公司正在缩小与 OpenAI 和 Anthropic 等美国领导者的差距，重塑全球 AI 竞争格局。Kimi K3 模型的性能引发了科技股抛售，让人联想到“DeepSeek 时刻”，凸显了开放权重模型的颠覆性潜力。 Kimi K3 是一个 2.8 万亿参数的开源权重模型，具有原生多模态能力和 100 万 token 的上下文窗口，基于 Kimi Delta Attention 和 Attention Residuals 构建。月之暗面 6 月的年化经常性收入达到 3 亿美元，K3 发布后日销售额增长了至少 6 倍。

telegram · zaihuapd · 7月29日 10:12

**背景**: 月之暗面是中国“AI 六虎”之一，是一组领先的 AI 初创公司。“DeepSeek 时刻”指的是 DeepSeek-R1（一个开源模型）在关键基准测试上与专有模型匹敌，标志着 AI 发展的转变。Kimi K3 是世界上首个开放的 3T 级模型，专为长周期编程、深度推理等前沿智能任务设计。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/MoonshotAI/Kimi-K3">GitHub - MoonshotAI/Kimi-K3: Open Frontier Intelligence</a></li>
<li><a href="https://www.cnbc.com/2026/07/17/moonshot-ai-kimi-k3-model-openai-anthropic-china.html">China's Moonshot AI unveils Kimi K3 that rivals OpenAI, Anthropic</a></li>
<li><a href="https://en.wikipedia.org/wiki/Moonshot_AI">Moonshot AI - Wikipedia</a></li>

</ul>
</details>

**标签**: `#AI`, `#funding`, `#Moonshot AI`, `#Kimi K3`, `#China`

---

<a id="item-15"></a>
## [中国起草反网络暴力法，AI 网暴被纳入规制](https://mp.weixin.qq.com/s/PrzKFhbwjgFEGBPADvFD6Q) ⭐️ 8.0/10

2026 年 7 月 29 日，国家互联网信息办公室公布《反网络暴力法（征求意见稿）》，专门对利用 AI 技术制作、传播网络暴力信息作出规制。 这是中国首部专门针对网络暴力的法律，明确将 AI 生成的网暴内容纳入规制，为 AI 治理和平台责任树立了先例。 草案共七章六十条，要求平台建立监测识别机制和防护功能，并引入人格权侵害禁令和精神损害赔偿。

telegram · zaihuapd · 7月29日 10:59

**背景**: 随着深度伪造等 AI 工具和人肉搜索等行为的泛滥，中国网络暴力问题日益严重。此前相关法律较为分散，各界呼吁专门立法。草案在此前规定和司法解释基础上形成。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://m.mp.oeeee.com/a/BAAFRD0000202607291634950.html">多类 网 暴 行为拟被明确立 法 惩治！ 南都曾曝光“人肉开盒”乱象 | 南都N视频</a></li>
<li><a href="https://www.court.gov.cn/zixun/xiangqing/492351.html">专访周加海：依法严惩网络暴力违法犯罪 积极应对人工智能法律治理新挑...</a></li>

</ul>
</details>

**标签**: `#AI regulation`, `#cyberbullying`, `#internet law`, `#China`, `#AI ethics`

---