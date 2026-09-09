---
layout: default
title: "Daily-Summary: 2026-09-09 (ZH)"
date: 2026-09-09
lang: zh
---

> 从 55 条内容中筛选出 15 条重要资讯。

---

1. [OpenAI 声称用未发布模型解决纳维-斯托克斯问题](#item-1) ⭐️ 10.0/10
2. [OpenAI 发布 GPT-6 Astra：面向商业的新一代 AI 模型](#item-2) ⭐️ 9.0/10
3. [vLLM v0.29.0：Model Runner V2 成为默认，新增模型与性能提升](#item-3) ⭐️ 8.0/10
4. [Hugging Face Transformers v5.17.0 新增 780B 参数 MoE 模型 HYV4](#item-4) ⭐️ 8.0/10
5. [苹果发布首款折叠屏 iPhone——iPhone Duo](#item-5) ⭐️ 8.0/10
6. [Shopify 收购 Tailwind CSS，应对 AI 驱动的业务挑战](#item-6) ⭐️ 8.0/10
7. [Qwen 3.8 可能蒸馏 GPT-5.5 Pro 的推理痕迹](#item-7) ⭐️ 8.0/10
8. [研究人员详述谷歌广告恶意软件绕过方法](#item-8) ⭐️ 8.0/10
9. [WordPress 联合创始人 Matt Mullenweg 被 Automattic 董事会安排带薪休假](#item-9) ⭐️ 8.0/10
10. [机器人推理：端侧与数据中心之争](#item-10) ⭐️ 8.0/10
11. [保罗·克里斯蒂亚诺加入 OpenAI 基金会董事会及安全委员会](#item-11) ⭐️ 8.0/10
12. [IBM 发布 SOTA Granite 时间序列 PatchTST-FM-r2 模型，采用商用友好许可证](#item-12) ⭐️ 8.0/10
13. [DeepSeek 将发布 V4.1 Flash，V4 Pro 请求将路由至此](#item-13) ⭐️ 8.0/10
14. [五角大楼要求 OpenAI 开发少拒绝军事命令的 AI](#item-14) ⭐️ 8.0/10
15. [OpenAI 将 AI 用于芯片设计，称成本低于开源模型](#item-15) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenAI 声称用未发布模型解决纳维-斯托克斯问题](https://simonwillison.net/2026/Sep/8/on-navier-stokes/) ⭐️ 10.0/10

2026 年 9 月 8 日，OpenAI 宣布其未发布的内部模型，利用约一万个 AI 智能体集群，对纳维-斯托克斯存在性与光滑性问题（千禧年大奖难题之一）提出了一个反例。该结果已在 Lean 证明助手中形式化，但尚未经过外部数学家或克莱数学研究所的验证。 如果得到验证，这将是首个由人工智能发现的千禧年大奖难题解决方案，标志着数学研究的范式转变。同时，由于该公告与来自 Anthropic 和纽约大学的研究人员陷入优先权争议，它也引发了对研究伦理和 AI 公司间竞争动态的重大关切。 OpenAI 表示，在所有尝试的问题中，智能体共发送了 490 万条消息，使用了约 3000 亿个输出令牌，其中仅纳维-斯托克斯解决方案就消耗了 1300 亿个令牌。该方法基于 Diego Córdoba 和 Luis Martínez-Zoroa 在 2023 年提出的用于在相关流体方程中寻找爆破现象的技术，并且 OpenAI 表示如果被授予 100 万美元的克莱千禧年奖，它将拒绝接受。

rss · Simon Willison · 9月8日 23:55

**背景**: 纳维-斯托克斯存在性与光滑性问题询问的是，描述流体运动的纳维-斯托克斯方程的解在三维空间中是否总是光滑且全局存在的。这是克莱数学研究所在 2000 年设立的七个千禧年大奖难题之一，每个难题悬赏 100 万美元。截至 2026 年，只有庞加莱猜想被正式解决，纳维-斯托克斯问题仍然是数学和物理学中的一个重大未解挑战。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Navier-Stokes_existence_and_smoothness_problem">Navier-Stokes existence and smoothness problem</a></li>
<li><a href="https://en.wikipedia.org/wiki/Millennium_Prize_Problems">Millennium Prize Problems</a></li>
<li><a href="https://www.neowin.net/news/openai-says-its-unreleased-ai-model-has-solved-a-1-million-millennium-prize-problem/">OpenAI says its unreleased AI model has solved a $1 million Millennium Prize problem - Neowin</a></li>

</ul>
</details>

**社区讨论**: 提供的内容不包含社区评论，但从所描述的优先权争议中可以看出争议性，Tristan Buckmaster 指责 OpenAI 可能在没有适当归属的情况下使用了他和 Levent Alpöge 的工作。讨论可能集中在解决方案的有效性、OpenAI 竞争行为的伦理以及对数学界的影响上。

**标签**: `#AI`, `#mathematics`, `#OpenAI`, `#Navier-Stokes`, `#Millennium Prize`

---

<a id="item-2"></a>
## [OpenAI 发布 GPT-6 Astra：面向商业的新一代 AI 模型](https://openai.com/index/gpt-6-astra-next-generation-work) ⭐️ 9.0/10

OpenAI 发布了 GPT-6 Astra，这是其面向商业领域最强大的模型，具备高级推理、计算机使用能力以及更强的写作和设计判断力。该模型于 2026 年 9 月 3 日向获批用户初步开放，次日全面可用。 GPT-6 Astra 代表了企业级 AI 应用能力的重大飞跃，可能改变企业处理编码、网络安全和科学研究等复杂任务的方式。其先进的计算机使用和推理能力可能为职场中 AI 驱动的生产力树立新标准。 OpenAI 披露，GPT-6 Astra 与前代模型相比，思维链（CoT）的可监测性出现“显著”下降，因为模型越来越能控制自身的推理过程，并能在更少甚至无需语言化推理的情况下完成复杂任务。官方开发文档还提醒，Astra 的代理间消息可能出现语法或空格错误，外部评估发现其原始推理更加压缩，含义不清的短语有所增加。

rss · OpenAI Blog · 9月9日 11:00

**背景**: GPT-6 Astra 是 OpenAI 开发的大型语言模型，建立在之前 GPT 系列的基础上。它专为商业用途设计，具备计算机使用（与图形用户界面交互）、编码和高级推理等能力。该模型的发布延续了 OpenAI 早期在计算机使用代理方面的工作，这些代理结合视觉与强化学习来操作 GUI。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/GPT-6_Astra">GPT-6 Astra - Wikipedia</a></li>
<li><a href="https://openai.com/index/gpt-6-astra/">GPT-6 Astra: A new generation of intelligence | OpenAI</a></li>
<li><a href="https://openai.com/index/gpt-6-astra-next-generation-work/">GPT‑6 Astra: The next generation in intelligence for work</a></li>

</ul>
</details>

**社区讨论**: Hacker News 和 Telegram 上的社区评论反应不一。一些用户对计算机使用演示（尤其是 MSPAINT 示例）表示惊叹，而另一些用户则注意到更新后性能似乎下降，并将其与之前的模型进行比较。此外，还有关于思维链推理及其对模型透明度影响的技术讨论。

**标签**: `#OpenAI`, `#GPT-6`, `#AI model`, `#business AI`, `#announcement`

---

<a id="item-3"></a>
## [vLLM v0.29.0：Model Runner V2 成为默认，新增模型与性能提升](https://github.com/vllm-project/vllm/releases/tag/v0.29.0) ⭐️ 8.0/10

vLLM v0.29.0 发布，包含来自 277 位贡献者的 594 次提交，将 Model Runner V2 设为所有模型的默认运行器。新增了对 Hy4-preview 和 Qwen3.8-Flash-Next 等模型的支持，并为 Kimi-K3 和 DeepSeek V4 带来了性能改进。 此次发布标志着 vLLM（一个广泛使用的 LLM 推理引擎）在架构上的重要里程碑，全面过渡到 Model Runner V2，该版本承诺提供更好的模块化和性能。新增的模型支持和优化将通过为前沿模型提供更快、更高效的推理，惠及 AI/ML 社区。 Model Runner V2 现在包含用于 KV 缓存自动调整大小的 CUDA 图内存分析、批量分片采样以减少每步 logits 内存，并支持 prompt embeds 和投机解码。新默认设置包括为 TP CUDA 组启用 FlashInfer 全归约和确定性前缀缓存 NONE_HASH，同时移除了一些已弃用的功能。

github · khluu · 9月9日 08:54

**背景**: vLLM 是一个用于快速 LLM 推理和服务的开源库，采用 PagedAttention 和连续批处理等技术。Model Runner V2 是 vLLM 推理核心的模块化重新设计，旨在提高性能和可维护性。投机解码方法（如 MTP，多令牌预测）利用模型自身的头部预测多个未来令牌，从而加速推理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/vllm-project/vllm/releases">Releases · vllm -project/ vllm</a></li>
<li><a href="https://zenn.dev/tosshi/articles/f540eb0cad3901">vLLM Model Runner V 2 - モジュラーで高速な推論コアの再設計</a></li>
<li><a href="https://vllm.ai/blog/2026-08-23-speculative-decoding-amd-gpus">Exploring Speculative Decoding in vLLM on AMD GPUs | vLLM Blog</a></li>

</ul>
</details>

**标签**: `#vLLM`, `#LLM inference`, `#release`, `#AI/ML`, `#open source`

---

<a id="item-4"></a>
## [Hugging Face Transformers v5.17.0 新增 780B 参数 MoE 模型 HYV4](https://github.com/huggingface/transformers/releases/tag/v5.17.0) ⭐️ 8.0/10

Hugging Face Transformers v5.17.0 已发布，新增了对 HYV4 的支持，这是一个 780B 参数的混合专家语言模型，每个 token 激活 49B 参数。该版本还引入了 VibeVoice、NeoMME 和 Fun-ASR-Nano 模型。 此次发布对机器学习社区意义重大，因为它将具有新颖注意力机制的先进 780B 参数 MoE 模型集成到广泛使用的 Transformers 库中，使研究人员和开发者能够试验最先进的架构。同时，VibeVoice 和 NeoMME 等多样化模型的加入也扩展了库在语音合成和多模态理解方面的能力。 HYV4 具有多头潜在注意力 (MLA)、结合 IndexShare 的 DeepSeek 稀疏注意力 (DSA)、带可学习注意力汇点的门控 MLA 以及独立超连接 (iHC)。实现不执行多 token 预测 (MTP) 层，但发布的检查点保留这些权重，以便其他运行时用于投机解码。

github · vasqu · 9月9日 15:42

**背景**: 混合专家 (MoE) 模型通过将 token 路由到部分专家，在不按比例增加计算量的情况下扩展参数。多头潜在注意力 (MLA) 在 DeepSeek-V2 中引入，将键和值压缩到低秩潜在空间以减少 KV 缓存。DeepSeek 稀疏注意力 (DSA) 使用轻量级索引器选择 top-k 键，而 IndexShare 跨层重用索引器选择以提高效率。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://shreyansh26.github.io/post/2025-11-08_multihead-latent-attention/">Understanding Multi - Head Latent Attention ( MLA ) | Shreyansh Singh</a></li>
<li><a href="https://arxiv.org/abs/2512.02556">[2512.02556] DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models</a></li>
<li><a href="https://sebastianraschka.com/blog/2026/glm-5-2-indexshare.html">GLM-5.2 IndexShare Architecture Note | Sebastian Raschka, PhD</a></li>

</ul>
</details>

**标签**: `#transformers`, `#large language models`, `#mixture-of-experts`, `#release`, `#AI/ML`

---

<a id="item-5"></a>
## [苹果发布首款折叠屏 iPhone——iPhone Duo](https://www.apple.com/iphone-duo/) ⭐️ 8.0/10

苹果在 9 月 9 日的发布会上宣布了其首款折叠屏 iPhone，命名为 iPhone Duo。该设备预计起售价为 2000 美元，最早将于 10 月发售。 这标志着苹果正式进入折叠屏智能手机市场，是多年传闻后的重大转变。它可能重塑消费者预期，并加剧与其他折叠屏设备的竞争。 iPhone Duo 强调双屏设计，根据早期上手体验，屏幕没有可见折痕。其权衡之处包括外屏可能较为局促，以及高达 2000 美元的售价。

hackernews · thecosmicfrog · 9月9日 18:15 · [社区讨论](https://news.ycombinator.com/item?id=49630931)

**背景**: 折叠屏手机已存在多年，但至少从 2016 年起就有传闻称苹果在研发此类产品。iPhone Duo 的名称强调其双屏特性，与此前“iPhone Ultra”的猜测有所不同。该设备旨在提供更大屏幕的同时保持便携性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.macrumors.com/2026/09/09/iphone-duo-start-at-2000/">Foldable iPhone Duo Will Start at $2,000, Won't Launch Until at Least October - MacRumors</a></li>
<li><a href="https://www.tomsguide.com/phones/iphones/iphone-duo-is-apples-first-foldable-usd2-000-price-release-date-as-early-as-october">iPhone Duo is reportedly Apple's first foldable — $2,000 price, release date 'as early as October' | Tom's Guide</a></li>
<li><a href="https://en.wikipedia.org/wiki/IPhone_Duo">iPhone Duo - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区评论反应不一：有人称赞设计和无折痕，也有人批评发布会风格以及手机越做越大的趋势。此外，还有人对苹果内部的多层整合流程感到好奇。

**标签**: `#Apple`, `#iPhone`, `#folding phone`, `#product launch`, `#hardware`

---

<a id="item-6"></a>
## [Shopify 收购 Tailwind CSS，应对 AI 驱动的业务挑战](https://tailwindcss.com/blog/tailwind-is-joining-shopify) ⭐️ 8.0/10

Shopify 已收购 Tailwind Labs，即广受欢迎的 utility-first CSS 框架 Tailwind CSS 背后的公司，这一消息在 Tailwind CSS 官方博客上宣布。此次收购正值 Tailwind 的业务模式受到 AI 的严重冲击，文档流量下降 40%，并进行了大规模裁员。 此次收购凸显了 AI 对开发者工具和商业模式日益增长的影响，即使是广泛采用的开源项目也面临变现挑战。这也表明 Shopify 有意加强其 Web 开发生态系统，并可能将 Tailwind 集成到其平台中。 Tailwind CSS 是一个 utility-first CSS 框架，提供低层级的工具类，可直接在标记中构建自定义设计。此次收购包括 Tailwind 品牌和团队，但付费模板服务 Tailwind Plus 的未来仍不确定，因为团队将不再添加新内容。

hackernews · EdwinHoksberg · 9月9日 13:27 · [社区讨论](https://news.ycombinator.com/item?id=49626190)

**背景**: Tailwind CSS 是一个流行的开源 CSS 框架，因其 utility-first 方法而广受欢迎，允许开发者无需离开 HTML 即可为网站设置样式。Shopify 是领先的电子商务平台，为在线商店提供工具，并越来越多地将 AI 功能集成到其产品中。此次收购反映了 AI 工具正在颠覆传统 Web 开发工作流程和商业模式的更广泛趋势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://tailwindcss.com/">Tailwind CSS - Rapidly build modern websites without ever leaving...</a></li>
<li><a href="https://github.com/tailwindlabs/tailwindcss">GitHub - tailwindlabs/tailwindcss: A utility - first CSS framework for...</a></li>
<li><a href="https://www.shopify.com/">Shopify : The All-in-One Commerce Platform for Businesses - Shopify</a></li>

</ul>
</details>

**社区讨论**: 社区成员表达了复杂的情绪，一些人对 Tailwind Plus 的结束感到难过，但承认鉴于 AI 的影响这是不可避免的。其他人质疑在新项目中使用 Tailwind 的必要性，建议使用具有现代特性的原生 CSS 可能就足够了，而一些人则称赞此次收购对团队和品牌来说是积极的举措。

**标签**: `#acquisition`, `#CSS`, `#web development`, `#AI impact`, `#Shopify`

---

<a id="item-7"></a>
## [Qwen 3.8 可能蒸馏 GPT-5.5 Pro 的推理痕迹](https://gist.github.com/wsxiaoys/e0286dc6bb624ff5fdf49e7f4c528ba3) ⭐️ 8.0/10

一份 gist 声称 Qwen 3.8 的推理预填充与 GPT-5.5 Pro 高度相似，暗示可能存在蒸馏。该分析使用一种技术恢复前沿模型的隐藏思维链，并比较了初始推理步骤。 这引发了对中国 AI 实验室是否从专有模型进行蒸馏的担忧，可能带来法律和伦理影响。同时，它也凸显了推理痕迹分析在检测模型模仿方面日益重要的作用。 该技术描述于 stolen-thoughts.com 上的一篇论文中，可恢复 OpenAI 和 Anthropic 模型的可读思维链。作者使用最先进的模型运行基准测试，提取其思维链的前 1%，并将其作为开源模型推理的前缀。

hackernews · wsxiaoys · 9月9日 17:24 · [社区讨论](https://news.ycombinator.com/item?id=49630026)

**背景**: LLM 推理分为两个阶段：预填充（prefill），并行处理提示词；解码（decode），逐个生成 token。模型蒸馏将知识从大型“教师”模型转移到较小的“学生”模型，通常使用教师模型的输出作为训练数据。“窃取思维”技术利用漏洞从专有模型中提取隐藏的推理痕迹。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://redis.io/blog/prefill-vs-decode/">Prefill vs Decode: LLM Inference Phases Explained</a></li>
<li><a href="https://en.wikipedia.org/wiki/Model_distillation">Model distillation</a></li>

</ul>
</details>

**社区讨论**: 评论者就方法论展开辩论，指出唯一可访问的 GPT-5.5 思维来自“窃取思维”论文，而 Qwen 3.8 在其发布后训练，因此可能见过这些特定痕迹。有人质疑原始推理 token 是否可访问，也有人认为重叠可能源于共享的基准测试解决方案，而非蒸馏。

**标签**: `#AI`, `#LLM`, `#distillation`, `#reasoning`, `#Qwen`

---

<a id="item-8"></a>
## [研究人员详述谷歌广告恶意软件绕过方法](https://xlii.space/eng/malicious-software-on-google-ads/) ⭐️ 8.0/10

一名安全研究人员发布了一篇详细文章，讲述他们如何绕过谷歌广告的审核流程来分发恶意软件，凸显了自动化内容审核的系统性缺陷。这篇题为《我如何在谷歌广告上投放恶意软件》的文章展示了一种针对该平台的实际攻击途径。 这一揭露意义重大，因为它暴露了全球最大广告平台之一的关键安全弱点，可能影响数百万遇到恶意广告的用户。它凸显了在复杂网络威胁面前自动化审核日益严峻的挑战，促使人们呼吁加强人工监督和透明度。 该研究人员的账户在问题在 Hacker News 上获得关注后被恢复，表明只有在公众抗议后才触发了人工审核。文章可能详细介绍了诸如伪装（cloaking）等具体技术，即向审核者隐藏恶意内容，以及使用看似合法的页面来逃避检测。

hackernews · xlii · 9月9日 11:43 · [社区讨论](https://news.ycombinator.com/item?id=49624856)

**背景**: 恶意广告（malvertising）是一种将恶意代码注入数字广告的网络攻击技术。攻击者经常利用广告网络的自动化审核系统，通过伪装技术向审核者展示良性内容，同时向真实用户提供恶意软件。谷歌广告与许多平台一样，严重依赖自动化系统来审查广告，这可能会被坚定的攻击者绕过。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.crowdstrike.com/en-us/cybersecurity-101/malware/malvertising/">Malvertising : Examples & How to Avoid It | CrowdStrike</a></li>
<li><a href="https://www.okta.com/sg/identity-101/malvertising/">Malvertising : Definition, Techniques & Defense - Okta SG</a></li>
<li><a href="https://www.xcitium.com/malvertising/">Protect Your Business from Malvertising Threats</a></li>

</ul>
</details>

**社区讨论**: 社区评论表达了对谷歌自动化系统的不满，一位用户指出他们在 YouTube 上看到的每个广告都是骗局。另一位评论者分享了一个个人故事，他们合法的谷歌地图编辑被自动化审核拒绝，凸显了缺乏人工监督的普遍问题。研究人员的更新透露，他们的账户仅在问题在 Hacker News 上引起关注后才被恢复，引发了关于需要更好升级路径的讨论。

**标签**: `#security`, `#google ads`, `#malware`, `#online advertising`, `#automated moderation`

---

<a id="item-9"></a>
## [WordPress 联合创始人 Matt Mullenweg 被 Automattic 董事会安排带薪休假](https://www.404media.co/wordpress-automattic-ceo-matt-mullenweg-put-on-leave-of-absence/) ⭐️ 8.0/10

Automattic 董事会投票决定让 CEO 兼 WordPress 联合创始人 Matt Mullenweg 带薪休假，他对此表示反对。这一决定在内部宣布，Mullenweg 指责董事会背着他密谋。 Automattic 通过 WordPress 支撑着互联网的很大一部分，此次领导层变动可能对开源生态系统和公司方向产生深远影响。这标志着治理可能发生转变，鉴于 Mullenweg 历史上的控制力，可能引发法律或运营冲突。 Mullenweg 在公司范围的 Slack 中声称，CFO Mark Davies 与董事会成员 Ann Dunwoody、Toni Schneider 和 Sue Decker 密谋让他休假；他投了反对票。他还提到将无法参加即将举行的 ELT（高管领导团队）会议，表明过渡突然。

hackernews · doener · 9月9日 21:28 · [社区讨论](https://news.ycombinator.com/item?id=49634650)

**背景**: Automattic 是 WordPress 背后的商业实体，WordPress 是支撑超过 40%网站的开源内容管理系统。Mullenweg 自 2003 年联合创立 WordPress 以来一直是核心人物，但他的领导力近期因一系列有争议的决定而受到批评，包括与 WP Engine 的法律纠纷。

**社区讨论**: 评论者普遍认为这次休假是积极的一步，许多人指出 Mullenweg 近期的古怪行为和自找的错误。一些人对他可能的反应以及移除其控制权的难度表示担忧，而另一些人则强调 WordPress 社区的戏剧性。

**标签**: `#WordPress`, `#Automattic`, `#leadership`, `#tech-news`

---

<a id="item-10"></a>
## [机器人推理：端侧与数据中心之争](https://newsletter.semianalysis.com/p/where-does-a-robot-think-on-device) ⭐️ 8.0/10

SemiAnalysis 的文章探讨了机器人技术中 AI 推理应发生在何处的架构决策，比较了端侧与数据中心两种方法。文章强调了这一关键选择的权衡和未来方向。 这一决策影响机器人系统的延迟、可靠性和成本，进而影响从自动驾驶汽车到工厂机器人的设计。随着机器人 AI 的规模化，选择正确的推理位置对性能和实用性至关重要。 文章可能讨论模型大小、网络带宽和控制回路需求等技术细节。它也可能涵盖结合边缘和云推理的混合方法，以平衡权衡。

rss · Semianalysis · 9月9日 20:53

**背景**: 机器人中的 AI 推理可以在设备端（边缘）或数据中心运行。端侧推理提供低延迟且无需连接，但受硬件限制。数据中心推理提供更多计算能力，但引入延迟并需要可靠连接。选择取决于机器人的任务、环境和性能要求。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://haink.org/physical-ai/edge-inference">Edge AI Inference for Robotics — On - Device Models | Haink</a></li>
<li><a href="https://haink.org/knowledge/physical-ai/edge-ai-for-robotics">Edge AI for Robotics — On - Device Inference Guide | Haink</a></li>
<li><a href="https://nalinraut.github.io/blog/2026/inferential/?trk=public_post_comment-text">Inferential - Centralized Inference Orchestration for Factory Robotics</a></li>

</ul>
</details>

**标签**: `#robotics`, `#AI inference`, `#edge computing`, `#datacenter`, `#architecture`

---

<a id="item-11"></a>
## [保罗·克里斯蒂亚诺加入 OpenAI 基金会董事会及安全委员会](https://openai.com/index/paul-christiano-joins-openai-foundation-board) ⭐️ 8.0/10

著名 AI 对齐研究员保罗·克里斯蒂亚诺已加入 OpenAI 基金会董事会及其安全与安保委员会。这一任命在 OpenAI 官方网站上公布。 克里斯蒂亚诺的任命表明 OpenAI 持续致力于 AI 安全与对齐，这在先进 AI 系统能力日益增强的背景下至关重要。他的专业知识有望加强治理和安全监督，可能影响行业标准。 克里斯蒂亚诺以其在人类反馈强化学习（RLHF）和 AI 对齐研究方面的工作而闻名。他将在安全与安保委员会任职，该委员会负责监督 OpenAI 的安全实践和风险评估。

rss · OpenAI Blog · 9月9日 17:00

**背景**: AI 对齐旨在引导 AI 系统朝着预期目标和伦理原则发展。它是 AI 安全的一个子领域，解决奖励黑客和意外行为等挑战。OpenAI 的治理结构包括一个非营利基金会，负责监督其营利性部门，董事会成员在制定安全政策方面发挥关键作用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/AI_alignment">AI alignment</a></li>
<li><a href="https://openai.com/our-structure/">Our Structure | OpenAI</a></li>

</ul>
</details>

**标签**: `#AI alignment`, `#OpenAI`, `#AI safety`, `#board appointment`

---

<a id="item-12"></a>
## [IBM 发布 SOTA Granite 时间序列 PatchTST-FM-r2 模型，采用商用友好许可证](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series) ⭐️ 8.0/10

IBM 于 2026 年 9 月 9 日发布了 Granite Time Series PatchTST-FM-r2，这是一个约 3.85 亿参数的最先进零样本时间序列预测模型。该模型采用 Apache 2.0 和 Linux 基金会 OpenMDW 1.0 双重许可，具有商用友好性。 此次发布提供了一个强大且可商用的时间序列基础模型，使企业能够无许可障碍地利用先进的预测能力。这巩固了 IBM 在应用机器学习生态系统中的地位，并可能加速时间序列基础模型在行业中的采用。 该模型基于 PatchTST（Patch 时间序列 Transformer）架构，并在其前身 PatchTST-FM-r1 的基础上进行了改进，包括更新的架构、更大的预训练语料库、概率预测以及缺失值插补支持。它专为多变量预测设计，可针对多种任务进行微调，而无需大量重新训练。

rss · Hugging Face Blog · 9月9日 15:36

**背景**: 时间序列基础模型是在大型数据集上预训练的，能够以最少微调执行预测等任务，类似于语言基础模型。PatchTST 是一种知名架构，它将时间序列分割成补丁，以便高效地进行 Transformer 处理。IBM 的 Granite 时间序列系列包括 TinyTimeMixers（TTM）等紧凑型开源模型，此次新发布以更大的最先进模型扩展了该系列。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series">IBM releases SOTA Granite Time Series PatchTST - FM - r 2 model with...</a></li>
<li><a href="https://www.unite.ai/ibm-releases-granite-patchtst-fm-r2-zero-shot-time-series-model/">IBM Releases Granite PatchTST - FM - R 2 Zero-Shot Time Series Model</a></li>
<li><a href="https://business20channel.tv/ibm-granite-time-series-ai-model-opens-commercial-use-in-2026-09-09-2026">IBM Granite Time Series AI Model Announced for Commercial Use in...</a></li>

</ul>
</details>

**标签**: `#time series`, `#foundation model`, `#IBM`, `#machine learning`, `#open source`

---

<a id="item-13"></a>
## [DeepSeek 将发布 V4.1 Flash，V4 Pro 请求将路由至此](https://platform.deepseek.com/usage) ⭐️ 8.0/10

DeepSeek 宣布将于北京时间 2026 年 9 月 10 日前后正式发布 V4.1 Flash 模型。上线后，所有对 V4 Pro 的请求将路由到 V4.1 Flash，并按 V4.1 Flash 单价计费，直至 V4.1 Pro 发布。 这标志着 DeepSeek 模型产品线的战略转变，因为 V4.1 Flash 据称在性能、费用、速度、总用时等各项指标上全面超越 V4 Pro。将 V4 Pro 请求自动路由到新模型可能显著影响用户的成本和体验，也预示着 AI 模型向更高效、更具成本效益方向发展的趋势。 V4.1 Flash 基于 V4 Flash 构建，后者总参数为 2840 亿，通过混合专家（MoE）每个 token 激活约 130 亿参数，而 V4 Pro 总参数达 1.6 万亿（约激活 490 亿）。路由将自动进行，计费将遵循 V4.1 Flash 的定价，鉴于其规模更小，预计价格更低。

telegram · zaihuapd · 9月9日 07:18

**背景**: DeepSeek 是一家以开源权重模型闻名的 AI 模型提供商。V4 系列包括 V4 Pro 和 V4 Flash，其中 Flash 变体旨在提供更快、更便宜的推理。模型路由是一种将请求自动发送到最合适模型以优化成本和性能的技术。这一公告表明 DeepSeek 相信 V4.1 Flash 可以在过渡期内作为 V4 Pro 的直接替代品。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash">deepseek -ai/ DeepSeek - V 4 - Flash · Hugging Face</a></li>
<li><a href="https://deepseek.ai/deepseek-v4">DeepSeek V 4 Explained: V 4 -Pro 1.6T vs V 4 - Flash 284B (2026)</a></li>
<li><a href="https://www.geeky-gadgets.com/deepseek-v4-1-flash-review/">DeepSeek V 4 . 1 Flash Review and Performance Test - Geeky Gadgets</a></li>

</ul>
</details>

**标签**: `#DeepSeek`, `#AI model`, `#V4.1 Flash`, `#release`, `#routing`

---

<a id="item-14"></a>
## [五角大楼要求 OpenAI 开发少拒绝军事命令的 AI](https://theintercept.com/2026/09/08/pentagon-openai-military-contract/) ⭐️ 8.0/10

根据信息自由法案诉讼泄露的文件显示，五角大楼要求 OpenAI 开发一个对军事命令“最低拒绝率”的 AI 版本，作为合同修改 P00003 的一部分。OpenAI 和五角大楼均否认最终合同包含此类措辞，称泄露文件为草稿。 这一事件凸显了 AI 公司与军方合作中的伦理紧张关系，尤其是 OpenAI 已偏离其最初的非营利使命。关于合同措辞的争议可能影响公众信任，并为 AI 在国防领域的应用开创先例。 泄露文件标记为“P00003”，是 2025 年 6 月宣布的五角大楼与 OpenAI 之间 2 亿美元合同的更新。OpenAI 发言人 Nate Evans 表示，公司从未同意“最低拒绝率”条款，已执行的合同中不包含此类措辞。

telegram · zaihuapd · 9月9日 09:02

**背景**: OpenAI 以其 ChatGPT 和 GPT 模型闻名，尽管其最初的非营利章程强调安全和广泛利益，但已越来越多地涉足军事和国防领域。五角大楼一直寻求将 AI 整合到各种行动中，拒绝率指的是 AI 系统拒绝遵循用户命令的频率，在军事环境中，命令必须快速可靠地执行，因此拒绝率可能成为问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://theintercept.com/2026/09/08/pentagon-openai-military-contract/">The Pentagon Asked OpenAI for Artificial Intelligence Designed to...</a></li>
<li><a href="https://www.cnbc.com/2025/06/16/openai-wins-200-million-us-defense-contract.html">cnbc.com/2025/06/16/ openai -wins-200-million- us - defense - contract ....</a></li>
<li><a href="https://hundredtabs.com/blog/anthropic-openai-military-ai-ethics-2026">Anthropic Refused Military Weapons and Got Banned. OpenAI Said...</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#military AI`, `#ethics`, `#contracts`, `#leak`

---

<a id="item-15"></a>
## [OpenAI 将 AI 用于芯片设计，称成本低于开源模型](https://www.reuters.com/world/china/openai-offers-ai-chip-design-touts-cost-advantage-over-open-source-cfo-says-2026-09-09/) ⭐️ 8.0/10

OpenAI 首席财务官萨拉·弗里尔宣布，公司正将 AI 应用于芯片设计、生命科学和金融服务，并声称在云端部署低价 Luna 模型的成本低于中国开源替代方案。OpenAI 还表示，其自研 Jalapeno 芯片在 9 个月内完成设计定稿，Luna 降价 80% 后使用量增加约 10 倍。 这标志着 OpenAI 在 AI 硬件垂直整合方面迈出重要一步，可能减少对外部芯片供应商的依赖并降低推理成本。同时，这也加剧了与开源模型提供商的竞争，因为 OpenAI 利用专有 AI 加速芯片开发并以价格优势压制对手。 Jalapeno 芯片是与博通合作打造，是 OpenAI 首款定制推理加速器，围绕其模型和服务需求设计。Luna（GPT-5.6 Luna）于 2026 年 7 月 9 日发布，每百万输入 token 收费 1 美元，专为高吞吐、低延迟任务优化；降价 80% 后，使用量增加约 10 倍。

telegram · zaihuapd · 9月9日 13:06

**背景**: OpenAI 主要以开发大型语言模型闻名，现正扩展至定制芯片领域，以优化推理性能并降低成本。定制推理芯片是专为加速 AI 模型执行而设计的专用硬件，比通用 GPU 具有更高效率。此举反映了 AI 公司设计定制硬件以获取竞争优势的行业趋势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.pebblous.ai/blog/openai-jalapeno-chip/en/">OpenAI Jalapeño : 9-Month Custom Inference Chip | Pebblous</a></li>
<li><a href="https://signalsinbox.com/blogs/news/ai-chips-openai-jalapeno">What is OpenAI 's Jalapeño chip exactly? – Signals Inbox</a></li>
<li><a href="https://openrouter.ai/openai/gpt-5.6-luna">GPT-5.6 Luna - API Pricing & Benchmarks | OpenRouter</a></li>

</ul>
</details>

**标签**: `#AI hardware`, `#OpenAI`, `#chip design`, `#cost advantage`, `#AI industry`

---