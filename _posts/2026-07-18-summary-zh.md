---
layout: default
title: "Daily-Summary: 2026-07-18 (ZH)"
date: 2026-07-18
lang: zh
---

> 从 47 条内容中筛选出 15 条重要资讯。

---

1. [LG 显示器通过 Windows Update 静默安装软件](#item-1) ⭐️ 9.0/10
2. [Kimi K3：一款高性价比的前沿 AI 模型](#item-2) ⭐️ 9.0/10
3. [香港宏福苑大火调查：627 页报告揭露承包商欺诈与监管崩溃](#item-3) ⭐️ 9.0/10
4. [GPT-5.6 Sol Pro 填补凸优化 30 年空白](#item-4) ⭐️ 8.0/10
5. [Stack Overflow 衰落可视化：AI 与政策变化](#item-5) ⭐️ 8.0/10
6. [PHK 回顾开源、自行车棚效应与 FreeBSD](#item-6) ⭐️ 8.0/10
7. [运河底部的计算机](#item-7) ⭐️ 8.0/10
8. [疑似 AI 垃圾作品赢得 DeepMind Kaggle 2.5 万美元大奖](#item-8) ⭐️ 8.0/10
9. [GPT-2 词元嵌入交互地图](#item-9) ⭐️ 8.0/10
10. [豆包手机放弃 GUI 自动化，要求超级应用提供 MCP](#item-10) ⭐️ 8.0/10
11. [Meta 拟向 Anthropic 出租 AI 算力，交易或达百亿美元](#item-11) ⭐️ 8.0/10
12. [台积电 A14 制程良率性能逼近 90%](#item-12) ⭐️ 8.0/10
13. [特朗普政府拟设类似 FINRA 的机构审查顶尖 AI 模型](#item-13) ⭐️ 8.0/10
14. [旧金山责令苹果谷歌下架“脱衣”应用](#item-14) ⭐️ 8.0/10
15. [美国要求分享韩国芯片商超额利润](#item-15) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [LG 显示器通过 Windows Update 静默安装软件](https://videocardz.com/newz/lg-monitors-silently-install-software-through-windows-update-without-user-consent) ⭐️ 9.0/10

LG 显示器被发现通过 Windows Update 在未经用户同意的情况下静默安装软件，该软件拥有完全的系统访问权限且无沙盒保护。 这构成了严重的安全和隐私风险，因为该软件行为类似恶意软件，影响广泛用户群体，并削弱了对 LG 和微软更新政策的信任。 该软件在通过 HDMI 连接 LG 显示器时自动安装，随系统启动运行，并被报告会显示 McAfee 推广弹窗。

hackernews · baranul · 7月18日 10:21 · [社区讨论](https://news.ycombinator.com/item?id=48956688)

**背景**: Windows Update 可以分发来自硬件制造商的驱动程序和软件更新。在此案例中，LG 利用设备元数据机制推送显示器应用安装程序，未经用户明确同意，这偏离了通常仅更新驱动的做法。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.pcgamer.com/hardware/gaming-monitors/it-looks-like-monitor-manufacturers-can-download-bloatware-without-consent-that-will-serve-you-pop-up-ads/">It looks like monitor manufacturers can download bloatware without ...</a></li>
<li><a href="https://windowsforum.com/threads/lg-and-alienware-monitor-apps-auto-installed-on-windows-with-mcafee-pop-ups.435799/">LG and Alienware Monitor Apps Auto-Installed on Windows With McAfee Pop ...</a></li>

</ul>
</details>

**社区讨论**: 社区评论表达了愤怒，称该行为类似恶意软件，并强调该软件拥有完全系统权限且无沙盒保护。用户还提供了通过组策略或设备安装设置禁用制造商应用自动下载的解决方法。

**标签**: `#security`, `#privacy`, `#Windows Update`, `#LG`, `#malware`

---

<a id="item-2"></a>
## [Kimi K3：一款高性价比的前沿 AI 模型](https://stephen.bochinski.dev/blog/2026/07/18/the-kimi-k3-moment/) ⭐️ 9.0/10

Moonshot AI 发布了 Kimi K3，这是一个拥有 2.8 万亿参数、具备原生视觉能力和 100 万 token 上下文窗口的前沿模型，其 API 价格远低于同类美国模型。 Kimi K3 的竞争性定价和开放权重可用性挑战了美国在前沿 AI 领域的主导地位，可能使先进 AI 能力更加普及，并引发国家安全担忧。 Kimi K3 采用 Kimi Delta Attention 和 Attention Residuals 以提高效率，其 API 价格为每百万 token 输入/输出 3/15 美元，而 ChatGPT 5.6 Sol 为 5/30 美元，Opus 4.8 为 5/25 美元。

hackernews · sbochins · 7月18日 17:32 · [社区讨论](https://news.ycombinator.com/item?id=48960218)

**背景**: 前沿 AI 模型是特定时期最先进的模型，通过海量数据训练，在众多任务上实现顶尖性能。知识蒸馏是一种将知识从大型教师模型转移到较小学生模型的技术，从而实现更经济的部署。像 Kimi K3 这样高性价比的前沿模型的出现，可能会改变竞争格局。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.kimi.com/blog/kimi-k3">Kimi K 3 Tech Blog: Open Frontier Intelligence</a></li>
<li><a href="https://platform.kimi.ai/docs/guide/kimi-k3-quickstart">Kimi K 3 - Kimi API Platform</a></li>
<li><a href="https://en.wikipedia.org/wiki/Knowledge_distillation">Knowledge distillation - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者就 Kimi K3 的性能是源于蒸馏还是独立创新展开辩论，有人认为蒸馏是不可避免的，美国实验室的主导地位始终是暂时的。另一些人则对国家安全影响以及政府可能对开放权重模型施加限制表示担忧，并将此情况比作 Napster 时代。

**标签**: `#AI`, `#open-source`, `#distillation`, `#national security`, `#frontier models`

---

<a id="item-3"></a>
## [香港宏福苑大火调查：627 页报告揭露承包商欺诈与监管崩溃](https://china.caixin.com/2026-07-17/102465415.html) ⭐️ 9.0/10

一份长达 627 页的调查报告显示，2025 年香港宏福苑大火中，总承建商蓄意使用非阻燃材料并提交伪造的防火证书，而多个政府部门未能进行有效检查，导致 168 人遇难。 该报告揭露了香港建筑安全监管的系统性失败，凸显了过度依赖行业自我规管的危险以及加强执法的必要性，对全球公共住房安全政策具有警示意义。 承包商使用了非阻燃安全网和易燃发泡胶板，拆除了楼梯间窗户，排空消防水箱并关闭了消防主电掣。房屋局独立审查组仅进行文件审查，并在巡查前提前通知承包商。

telegram · zaihuapd · 7月18日 10:01

**背景**: 火灾发生于 2025 年 11 月 26 日，当时香港大埔一个公共屋邨正在进行维修工程。非阻燃材料导致火势沿天井迅速蔓延，形成“火柱”，浓烟倒灌楼梯间，阻断逃生通道。调查由资深大律师杜淦堃领导的独立委员会进行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.21jingji.com/article/20260611/herald/57a7e06c3274028040d6e4cb826c1bfd.html">香港宏福苑大火后续：维修多环节造假，一公司6年洗钱超4000...</a></li>
<li><a href="https://zh-yue.wikipedia.org/wiki/獨立審查組">獨立審查組 - 維基百科，自由嘅百科全書</a></li>
<li><a href="https://zh.wikipedia.org/zh-hans/泡沫塑料">泡沫塑料 - 维基百科，自由的百科全书</a></li>

</ul>
</details>

**标签**: `#construction safety`, `#regulatory failure`, `#Hong Kong`, `#disaster investigation`, `#public safety`

---

<a id="item-4"></a>
## [GPT-5.6 Sol Pro 填补凸优化 30 年空白](https://old.reddit.com/r/math/comments/1uxj3cy/after_openais_cdc_proof_announcement_gpt56_used_a/) ⭐️ 8.0/10

OpenAI 的高能力 AI 模型 GPT-5.6 Sol Pro 生成了一个提示，解决了凸优化中一个长期悬而未决的问题，填补了该领域 30 年的空白。 这展示了 AI 在细分数学研究领域的潜力，可能加速优化理论及相关领域（如机器学习和运筹学）的进展。 该问题涉及球形域上凸 Lipschitz 函数优化时间复杂度的上界，通过变量替换等价于任何有界域。该证明使用 GPT-5.6 Sol Pro（而非 Ultra 变体）生成。

hackernews · mbustamanter · 7月18日 13:00 · [社区讨论](https://news.ycombinator.com/item?id=48957779)

**背景**: 凸优化是数学优化的一个子领域，专注于在凸集上最小化凸函数，许多问题有多项式时间算法。30 年空白指的是关于某些一阶方法最优收敛速度的一个未解猜想。GPT-5.6 Sol Pro 是 OpenAI 最高能力的模型层级，专为复杂推理和科学工作设计。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Convex_optimization">Convex optimization</a></li>
<li><a href="https://help.openai.com/en/articles/20001354-gpt-56-in-chatgpt">GPT - 5 . 6 in ChatGPT | OpenAI Help Center</a></li>
<li><a href="https://developer.puter.com/ai/openai/gpt-5.6-sol-pro/">GPT - 5 . 6 Sol Pro - API, Specs, Playground & Pricing - Puter Developer</a></li>

</ul>
</details>

**社区讨论**: 社区评论指出，解决的猜想虽小众但确实是贡献，AI 可能将数学研究从低垂果实转向需要新颖方法的问题。同时，人们对 Sol Pro 和 Ultra 变体之间的差异感到好奇。

**标签**: `#AI`, `#mathematics`, `#convex optimization`, `#machine learning`, `#research`

---

<a id="item-5"></a>
## [Stack Overflow 衰落可视化：AI 与政策变化](https://data.stackexchange.com/stackoverflow/query/1953768#graph) ⭐️ 8.0/10

Stack Exchange Data Explorer 上的一张图表显示 Stack Overflow 的活动随时间急剧下降，社区评论将其归因于 ChatGPT 等 AI 工具、排他性政策以及 2021 年被 Prosus 收购。 这一数据驱动的可视化突显了一个曾经占主导地位的开发者问答平台正在失去相关性，标志着开发者寻求帮助的方式正在发生更广泛的转变——转向 AI 和文档更完善的项目。 该图表在 2014 年左右达到峰值，远在 AI 成为主流之前，并在 Prosus 收购前出现了一个奇怪的峰值。社区成员指出，Stack Overflow 的严格审核和反对话立场赶走了用户。

hackernews · secretslol · 7月18日 11:12 · [社区讨论](https://news.ycombinator.com/item?id=48956949)

**背景**: Stack Overflow 成立于 2008 年，是程序员的首选问答网站。2021 年，它被 Prosus 以 18 亿美元收购。该网站长期执行严格的禁止离题讨论政策，一些人认为这扼杀了社区发展。ChatGPT 等 AI 编码助手的兴起进一步减少了对传统论坛的依赖。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://stackoverflow.blog/2021/06/02/prosus-acquires-stack-overflow/">Prosus ’s Acquisition of Stack Overflow : Our... - Stack Overflow</a></li>
<li><a href="https://techcrunch.com/2021/06/02/stack-overflow-acquired-by-prosus-for-a-reported-1-8-billion/">Stack Overflow acquired by Prosus for $1.8 billion | TechCrunch</a></li>
<li><a href="https://en.wikipedia.org/wiki/Stack_Overflow">Stack Overflow - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍认为 Stack Overflow 的衰落早于 AI，并将其排他性文化和 Prosus 收购列为关键因素。一些人认为该网站的严格审核和缺乏社区性扼杀了用户参与度，而另一些人则指出，更好的文档和 AI 工具现在提供了更优越的替代方案。

**标签**: `#Stack Overflow`, `#AI impact`, `#community management`, `#data visualization`, `#platform decline`

---

<a id="item-6"></a>
## [PHK 回顾开源、自行车棚效应与 FreeBSD](https://queue.acm.org/detail.cfm?id=3818307) ⭐️ 8.0/10

长期担任 FreeBSD 核心开发者的 Poul-Henning Kamp (PHK) 在 ACM Queue 上发表了一篇反思性文章，讨论了他数十年的开源经验、自行车棚效应现象以及软件开发格局的变化。 这篇文章提供了开源历史关键人物的独特见解，讨论了影响许多项目的自行车棚效应等治理挑战。它还涉及法规对 FOSS 的影响，与当前关于软件监管的辩论密切相关。 PHK 是 MD5crypt 密码哈希算法的创建者，该算法于 1994 年提交到 FreeBSD。文章包括对可逆决策的反思以及 FreeBSD 项目的演变。

hackernews · Ygg2 · 7月18日 17:27 · [社区讨论](https://news.ycombinator.com/item?id=48960155)

**背景**: 自行车棚效应，也称为琐事定律，描述了在琐碎问题上花费过多时间而忽视更重要问题的倾向。PHK 在开源社区推广了这个术语。FreeBSD 是一个免费的开源类 Unix 操作系统，PHK 几十年来一直是核心贡献者。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.thebehavioralscientist.com/glossary/bikeshedding">Bikeshedding - The Behavioral Scientist</a></li>

</ul>
</details>

**社区讨论**: 评论者讨论了可逆决策作为自行车棚效应的解决方案，有人建议琐碎的决定应由自愿者做出。另一位指出 PHK 创建了 MD5crypt。一些人讨论了年龄限制对 FOSS 的影响，而一位评论者幽默地指出，他们的团队用 JIRA 工单涂色取代了自行车棚效应。

**标签**: `#open source`, `#FreeBSD`, `#bikeshedding`, `#software engineering`, `#governance`

---

<a id="item-7"></a>
## [运河底部的计算机](https://negroniventurestudios.com/2026/07/18/the-computer-at-the-bottom-of-a-canal/) ⭐️ 8.0/10

一篇详细的历史文章讲述了一家苏格兰小公司设计的基于能力（capability）的计算机的故事，探讨了其技术优点以及为何最终败给了商品化硬件。 这篇文章揭示了一种优先考虑安全性和细粒度访问控制的替代硬件架构，在商品化曲线放缓、专用硬件再次变得可行的当下，为现代系统设计提供了启示。 这台计算机由格拉斯哥公司 Linn Products 设计，该公司以 Sondek LP12 唱盘机等高端音频设备闻名。该架构使用标记内存和硬件能力（capability）来实施访问控制，但最终被摩尔定律和商品化曲线所击败。

hackernews · Kudos · 7月18日 08:33 · [社区讨论](https://news.ycombinator.com/item?id=48956231)

**背景**: 能力机器（capability machine）是一种计算机架构，它使用硬件强制的能力（令牌）来授予对内存和其他资源的细粒度访问，而不是依赖基于软件的保护。在 20 世纪 70 年代和 80 年代，许多研究机器如 Intel iAPX 432 和 Cambridge CAP 探索了这种方法，但与商品化 CPU 相比，它们在复杂性和性能上存在困难。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Capability_Hardware_Enhanced_RISC_Instructions">Capability Hardware Enhanced RISC Instructions - Wikipedia</a></li>
<li><a href="https://homes.cs.washington.edu/~levy/capabook/Chapter1.pdf">Object- Based</a></li>

</ul>
</details>

**社区讨论**: 评论者指出，能力机器在当时是前沿技术，但被商品化曲线和摩尔定律所吞噬。一位评论者认为，商品化曲线现在可能已经结束，使得专用硬件再次变得可行，尤其是在 AI 减少了对稀缺程序员的需求的情况下。

**标签**: `#computer architecture`, `#capability machines`, `#history of computing`, `#hardware design`

---

<a id="item-8"></a>
## [疑似 AI 垃圾作品赢得 DeepMind Kaggle 2.5 万美元大奖](https://www.reddit.com/r/MachineLearning/comments/1uzyf66/did_blatant_ai_slop_just_win_a_25k_usd_deepmind/) ⭐️ 8.0/10

一篇 Reddit 帖子声称，在 Google DeepMind 赞助的 Kaggle 竞赛“衡量 AGI 进展——认知能力”中，一个毫无意义的 AI 提交作品赢得了 2.5 万美元大奖，并指出该提交包含无根据的主张和有缺陷的方法论。 这一指控引发了对高知名度 AI 竞赛中同行评审和评判公正性的严重担忧，可能削弱对基准评估的信任以及 DeepMind 等主要组织资助的 AI 研究的可信度。 据称该提交作品超出要求格式十倍，评审者未能进行粗略阅读；组织者坚持认为评审过程恰当，结果具有主观性。

reddit · r/MachineLearning · /u/TheWerkmeister · 7月18日 15:10

**背景**: Kaggle 竞赛通常由组织提出机器学习问题并提供现金奖励，通过指标或同行评审进行评判。DeepMind 竞赛旨在设计基于认知科学的新 AI 基准，以衡量 AGI 进展。“AI 垃圾”指缺乏实质内容、由 AI 生成的低质量内容。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/google-deepmind/measuring-agi-cognitive-framework/">Measuring Progress Towards AGI : A Cognitive Framework</a></li>
<li><a href="https://medium.com/global-maksimum-data-information-technologies/kaggle-handbook-fundamentals-to-survive-a-kaggle-shake-up-3dec0c085bc8">Kaggle Handbook: Fundamentals to Survive a Kaggle ... | Medium</a></li>
<li><a href="https://genpurpose.substack.com/p/research-slop">Research Slop - by Jess Holbrook - General Purpose</a></li>

</ul>
</details>

**社区讨论**: Reddit 讨论中批评声浪很高，许多用户对这样的作品能获奖表示难以置信，质疑评审者的能力和评审流程。部分评论者为组织者辩护，认为此类竞赛中主观性在所难免。

**标签**: `#AI ethics`, `#Kaggle`, `#DeepMind`, `#benchmarking`, `#research integrity`

---

<a id="item-9"></a>
## [GPT-2 词元嵌入交互地图](https://www.reddit.com/r/MachineLearning/comments/1v09muj/interactive_map_of_gpt2s_token_embedding_space/) ⭐️ 8.0/10

一位开发者利用 t-SNE 和最小生成树创建了 GPT-2-small 词元嵌入空间的交互式地图，用户无需运行模型即可点击任意词元并探索其最近邻。 该工具提供了一种直观的视觉方式来理解 GPT-2 如何组织词元关系，使研究人员、教育工作者和爱好者更容易理解大语言模型的内部机制。 该地图覆盖了 GPT-2-small 的 WTE（权重绑定嵌入）中的 32,070 个字母词元，使用 t-SNE 进行降维，边表示显示最近亲缘关系的最小生成树。它支持移动端，可双指缩放，并包含搜索框。

reddit · r/MachineLearning · /u/Limp-Contest-7309 · 7月18日 22:42

**背景**: 词元嵌入是语言模型（如 GPT-2）学习的词元（单词或子词）的稠密向量表示。t-SNE 是一种非线性降维技术，将高维向量映射到二维以便可视化，同时保留局部结构。最小生成树以最小总边权重连接所有点，揭示词元之间最直接的关系。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.datacamp.com/tutorial/introduction-t-sne">Introduction to t - SNE : Nonlinear Dimensionality Reduction and Data...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Minimum_spanning_tree">Minimum spanning tree</a></li>
<li><a href="https://huggingface.co/Aadit-032/LiteGPT-16M">Aadit-032/LiteGPT-16M · Hugging Face</a></li>

</ul>
</details>

**社区讨论**: 社区称赞该工具是一个出色的可视化和教育资源，许多人表示对类似 GPT-4 等更大模型的地图感兴趣。一些人讨论了选择 t-SNE 而非 UMAP 的原因，以及无上下文静态嵌入的局限性。

**标签**: `#GPT-2`, `#token embeddings`, `#visualization`, `#interpretability`, `#NLP`

---

<a id="item-10"></a>
## [豆包手机放弃 GUI 自动化，要求超级应用提供 MCP](https://www.latepost.com/news/dj_detail?id=3648) ⭐️ 8.0/10

豆包手机放弃了此前通过模拟点击来操控头部应用的 GUI 自动化方案，转而要求阿里、腾讯等超级应用自行提供 MCP 服务并开放数据与操控权限才能接入。其备货量从 3 万台提升至数十万台。 这一战略转变标志着 AI 手机与应用生态的交互方式发生重大变化，从侵入式自动化转向需要平台合作的标准化协议。这可能会重塑 AI 时代手机厂商与超级应用之间的权力平衡，对用户体验和数据控制产生深远影响。 豆包手机助手软件于 2025 年 7 月 15 日获得生成式人工智能服务备案，其首个技术预览版于 2025 年 12 月发布。此前版本曾因微信、淘宝等平台封禁而下线相关能力。

telegram · zaihuapd · 7月18日 00:29

**背景**: GUI 自动化通过读取屏幕并模拟点击来控制应用，这种方式较为脆弱且常违反应用服务条款。MCP（模型上下文协议）是一种开放标准，允许 AI 代理以结构化、授权的方式连接到数据源和工具，降低开发复杂性并提高可靠性。苹果、谷歌等巨头也在转向类似的、需要开发者授权的框架。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://modelcontextprotocol.io/">What is the Model Context Protocol ( MCP )? - Model Context Protocol</a></li>
<li><a href="https://mcp.so/">MCP .so - MCP Marketplace</a></li>
<li><a href="https://github.com/microsoft/playwright-mcp">GitHub - microsoft /playwright- mcp : Playwright MCP server · GitHub</a></li>

</ul>
</details>

**标签**: `#AI`, `#mobile`, `#MCP`, `#platform strategy`, `#ecosystem`

---

<a id="item-11"></a>
## [Meta 拟向 Anthropic 出租 AI 算力，交易或达百亿美元](https://www.nytimes.com/2026/07/17/technology/meta-anthropic-ai-computing-power.html) ⭐️ 8.0/10

Meta 正与 Anthropic 进行早期谈判，拟以两年 100 亿美元的潜在规模向其出租 AI 算力。Anthropic 于 2026 年 6 月提出该方案，Meta 正在评估。 这笔交易凸显了 AI 算力的极度稀缺性，以及 Meta 将其巨额数据中心投资（今年可能高达 1450 亿美元）货币化的战略。若达成协议，将为 Anthropic 提供关键算力资源，并为 Meta 开辟新的收入来源，以证明其资本支出的合理性。 该交易将涉及 Anthropic 按月付款，双方均可提前退出。谈判仍处于早期阶段，未必能最终成交。

telegram · zaihuapd · 7月18日 01:14

**背景**: AI 算力稀缺已成为 AI 发展的主要瓶颈，GPU 和数据中心容量的需求远超供给。Meta 一直在大力投资 AI 基础设施，向 Anthropic 等公司出租闲置算力有助于抵消成本。Anthropic 是一家领先的 AI 初创公司，专注于开发安全且强大的 AI 系统。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Anthropic">Anthropic - Wikipedia</a></li>
<li><a href="https://www.linkedin.com/pulse/ai-compute-scarcity-2025-how-gpus-power-cooling-de-castro-júnior-ovm1c">AI compute scarcity in 2025: how GPUs, power, and cooling...</a></li>
<li><a href="https://www.mindstudio.ai/blog/what-is-compute-as-asset-class-ai-infrastructure">What Is Compute as an Asset Class? Why AI ... | MindStudio</a></li>

</ul>
</details>

**标签**: `#AI`, `#Meta`, `#Anthropic`, `#cloud computing`, `#data centers`

---

<a id="item-12"></a>
## [台积电 A14 制程良率性能逼近 90%](https://www.tomshardware.com/tech-industry/semiconductors/tsmc-confirms-significant-yield-and-performance-improvements-in-a14-update-strong-interest-from-ai-hpc-and-smartphone-customers) ⭐️ 8.0/10

台积电宣布其 A14（1.4 纳米级）制程已实现接近 90%的目标性能和 256Mb SRAM 良率，较 4 月份的 85%和 80%以上显著提升，并获得了 AI、高性能计算和智能手机客户的强烈兴趣。 这一进展表明台积电 A14 制程有望提前于 2028 年量产，相比 N2 可在同功耗下提升 10%-15%性能或同频率下降低 25%-30%功耗，将惠及未来 AI 和移动芯片。 A14 采用第二代 GAA 纳米片晶体管，可沿用 N2 积累的经验，逻辑晶体管密度提高 23%。若客户设计及时完成，台积电可能提前量产。

telegram · zaihuapd · 7月18日 05:00

**背景**: GAA（全环绕栅极）纳米片晶体管是 FinFET 的继任者，提供更好的静电控制和可扩展性。SRAM 良率是衡量制程成熟度的关键指标，因为大型 SRAM 阵列对缺陷敏感。台积电 A14 是 1.4 纳米级节点，预计 2028 年接替 N2（2 纳米级）。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.163.com/dy/article/I1FRKMC90511CPMT.html">FinFET接班人，详解 GAA 的机遇和挑战|栅极|电容|fet...</a></li>
<li><a href="https://mp.ofweek.com/ee/a256714604647">每片晶圆30万元也照买！ 苹果抢占 1 . 4 纳 米 制 程 深层布局曝光 - 维科号V</a></li>

</ul>
</details>

**标签**: `#semiconductors`, `#TSMC`, `#A14`, `#manufacturing`, `#AI`

---

<a id="item-13"></a>
## [特朗普政府拟设类似 FINRA 的机构审查顶尖 AI 模型](https://www.bloomberg.com/news/articles/2026-07-17/us-considers-creating-finra-like-watchdog-to-vet-top-ai-models) ⭐️ 8.0/10

特朗普政府正考虑设立一个类似金融业监管局（FINRA）的独立监管机构，负责审查顶尖 AI 模型的安全性。该提案由财政部长斯科特·贝森特牵头，目前正由白宫幕僚长苏茜·威尔斯审阅。 这标志着 AI 监管可能发生重大转变，从临时性的政府干预转向结构化的、行业参与的监督模式。它可能为 AI 开发提供更清晰的安全标准，同时兼顾华尔街的网络安全担忧和硅谷对可预测规则的需求。 拟议的机构将向美国证券交易委员会（SEC）汇报，类似于 FINRA 的结构。该计划与 Google DeepMind 首席执行官德米斯·哈萨比斯提出的行业资助独立监管机构的建议方向一致，此前 Anthropic 和 OpenAI 曾因美国政府要求修改或推迟模型发布而提出异议。

telegram · zaihuapd · 7月18日 05:45

**背景**: FINRA 是一个私人自律组织，负责监管经纪公司和交易市场，并在 SEC 的监督下运作。目前，美国 AI 模型安全审查以临时方式进行，导致行业不满。拟议的类似 FINRA 的机构将为前沿 AI 模型在部署前提供正式、一致的评估框架。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.bloomberg.com/news/articles/2026-07-17/us-considers-creating-finra-like-watchdog-to-vet-top-ai-models">US Considers Creating Finra - Like Watchdog to Vet Top AI Models</a></li>
<li><a href="https://en.wikipedia.org/wiki/FINRA">FINRA</a></li>
<li><a href="https://digg.com/tech/a17qm4rx">Trump administration plans SEC- regulated FINRA -style watchdog for...</a></li>

</ul>
</details>

**社区讨论**: 网络反应不一，一些人认为该提案是权力争夺或混乱的组织架构，而另一些人则认为这是迈向结构化 AI 监管的必要步骤。批评者将矛头指向 Dario Amodei 等人，反映出对 AI 监管的两极分化看法。

**标签**: `#AI regulation`, `#government policy`, `#AI safety`, `#tech industry`, `#cybersecurity`

---

<a id="item-14"></a>
## [旧金山责令苹果谷歌下架“脱衣”应用](https://techcrunch.com/2026/07/17/apple-and-google-ordered-to-purge-nudify-apps-from-app-stores/) ⭐️ 8.0/10

旧金山市检察长邱信福致函要求苹果和谷歌从其应用商店中下架数十款利用人工智能技术将照片中人物“脱衣”、生成非自愿亲密深度伪造图像的“nudify”应用。 这一监管行动针对主要科技平台托管助长基于图像的性虐待应用的行为，可能为应用商店责任和 AI 伦理执法开创先例。 信件称，尽管科技透明项目今年 1 月和 4 月已多次发出警告，苹果和谷歌仍可能从这些应用中获利数百万美元。苹果回应称已下架 3 款应用并终止相关开发者账号，谷歌则表示已暂停被点名的 5 款 Play 应用。

telegram · zaihuapd · 7月18日 08:45

**背景**: Nudify 应用利用 AI 技术从真实人物的照片中数字移除衣物，未经同意生成合成裸体图像，这是一种非自愿合成亲密图像（NSII）。此类深度伪造技术引发了严重的伦理和法律问题，尤其是在隐私和性虐待方面。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.isdglobal.org/wp-content/uploads/2026/07/Mapping-the-Nudify-Tools-Ecosystem.pdf">Mapping the ‘ Nudify ’</a></li>
<li><a href="https://www.newamerica.org/insights/a-weapon-against-women-in-politics/defining-nonconsensual-synthetic-intimate-imagery/">Defining Nonconsensual Synthetic Intimate Imagery - New America</a></li>

</ul>
</details>

**标签**: `#AI ethics`, `#deepfake`, `#app store regulation`, `#privacy`, `#tech policy`

---

<a id="item-15"></a>
## [美国要求分享韩国芯片商超额利润](https://www.koreatimes.co.kr/business/tech-science/20260716/us-seeks-share-of-korean-chipmakers-excess-profits-source) ⭐️ 8.0/10

据报道，美国正寻求分享韩国半导体企业因 AI 芯片需求激增而获得的超额利润。美国副贸易代表认为，美方企业大量采购韩国半导体，理应分得部分利润。 这一要求可能重塑全球半导体供应链，并影响美韩贸易关系，对 AI 行业具有深远影响。同时，它也引发了关于科技行业利润分享规范的讨论。 今年上半年韩国半导体出口达 1924.3 亿美元，同比增长 162.5%，其中对美出口增长 91.3%至 264 亿美元。美国商务部长近期再次呼吁三星和 SK 海力士在美建设存储芯片工厂。

telegram · zaihuapd · 7月18日 14:20

**背景**: 韩国是全球半导体制造领导者，尤其在 DRAM 和 NAND 闪存等存储芯片领域，这些芯片对 AI 应用至关重要。美国通过《芯片法案》推动国内芯片生产，同时寻求保障供应链。超额利润分享是一种企业将超出目标利润的部分与利益相关者分享的机制，但将其应用于国际层面尚属首次。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://zh.wikipedia.org/zh-hans/美國貿易代表處">美 国 贸 易 代 表 处 - 维基百科，自由的百科全书</a></li>
<li><a href="https://pchome.megatime.com.tw/news/cat3/20260715/78408223627994329005.html">SK 海 力 士 那斯達克募資265億美元 凸顯全球AI... - PChome Online 股市</a></li>

</ul>
</details>

**标签**: `#semiconductors`, `#geopolitics`, `#AI`, `#trade`, `#Korea`

---