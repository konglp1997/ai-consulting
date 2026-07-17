---
layout: default
title: "Daily-Summary: 2026-07-17 (ZH)"
date: 2026-07-17
lang: zh
---

> 从 40 条内容中筛选出 10 条重要资讯。

---

1. [Firefox 被编译为 WebAssembly 并在另一浏览器中运行](#item-1) ⭐️ 9.0/10
2. [Kimi K3 发布：开源 2.8T 模型，前端编程登顶 Arena](#item-2) ⭐️ 9.0/10
3. [华为昇腾 950 超节点亮相，算力达英伟达 6.7 倍](#item-3) ⭐️ 9.0/10
4. [首次在宜居带岩质行星上探测到大气层](#item-4) ⭐️ 8.0/10
5. [开源 AI 模型市场份额超越闭源模型](#item-5) ⭐️ 8.0/10
6. [EEG 研究显示大脑可同时编码两个语音流](#item-6) ⭐️ 8.0/10
7. [OpenAI CFO 提出“每美元有用智能”ROI 指标](#item-7) ⭐️ 8.0/10
8. [Prism 漏洞泄露未发表论文](#item-8) ⭐️ 8.0/10
9. [Truth Social 将向华尔街出售特朗普帖子的快速访问权限](#item-9) ⭐️ 8.0/10
10. [美议员要求封禁中国存储芯片并阻止其进入盟友供应链](#item-10) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Firefox 被编译为 WebAssembly 并在另一浏览器中运行](https://simonwillison.net/2026/Jul/16/firefox-in-webassembly/#atom-everything) ⭐️ 9.0/10

Puter 已将完整的 Firefox 浏览器（Gecko 引擎）编译为 WebAssembly，使其能够在另一个浏览器标签页中运行。该项目使用了 Claude Opus 和 Fable 代币进行 AI 辅助开发，并通过基于 WebSocket 的 Wisp 协议代理网络流量。 这是一项突破性的技术成就，展示了在另一个浏览器中运行完整浏览器的可行性，在云计算、测试和沙盒浏览方面具有潜在应用。它也展示了 AI 辅助编程在复杂工程项目中的强大能力。 WebAssembly 二进制文件（gecko.wasm）大小为 233MB，项目估计使用了价值 25,000 美元的 AI 代币，但由于订阅计划实际成本更低。网络流量通过 Wisp 协议经 Puter 服务器代理，演示支持 HTTPS 站点的端到端加密。

rss · Simon Willison · 7月16日 23:34

**背景**: WebAssembly（WASM）是一种低级二进制指令格式，可在现代浏览器中以接近原生的速度运行。传统上，浏览器是复杂的原生应用，由于安全和架构限制无法在其他浏览器内运行。Wisp 协议是一种轻量级协议，用于在单个 WebSocket 连接上代理 TCP/UDP 套接字，使浏览器沙箱中运行的代码能够访问网络。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/MercuryWorkshop/wisp-protocol">GitHub - MercuryWorkshop/wisp-protocol: Wisp is a low-overhead, easy to ...</a></li>
<li><a href="https://developer.puter.com/labs/firefox-wasm/">Firefox in WebAssembly</a></li>
<li><a href="https://simonwillison.net/2026/Jul/16/firefox-in-webassembly/">Firefox in WebAssembly</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论非常积极，许多人对这一技术壮举表示惊叹。一些评论者提出了将所有流量通过 Puter 服务器代理的成本问题，团队表示他们不得不扩展服务器以应对流量激增。

**标签**: `#WebAssembly`, `#Firefox`, `#Browser Engineering`, `#AI-Assisted Development`, `#Wisp Protocol`

---

<a id="item-2"></a>
## [Kimi K3 发布：开源 2.8T 模型，前端编程登顶 Arena](https://www.kimi.com/blog/kimi-k3) ⭐️ 9.0/10

月之暗面发布了 Kimi K3，这是全球首个开源的 2.8 万亿参数模型，在 Frontend Code Arena 中以 1679 分排名第一，超越 Claude Fable 5，从第 18 名跃升至榜首。 此次发布表明，开源模型在特定领域（如前端编程）能够与专有前沿模型竞争甚至超越，可能加速 AI 在 Web 开发中的采用和创新。 Kimi K3 基于 Kimi Delta Attention 和 Attention Residuals 架构，具备原生视觉能力和 100 万 token 上下文窗口，已在 Kimi.com、Kimi Work、Kimi Code 及 API 上线，缓存命中定价为每百万 token 0.30 美元。

telegram · zaihuapd · 7月17日 00:02

**背景**: Kimi Delta Attention (KDA) 是一种线性注意力机制，能够随上下文长度高效扩展；而 Attention Residuals 通过用输入相关的加权替代均匀残差累积，改善了深度方向的信息流动。Frontend Code Arena 是一个基准测试，评估 AI 模型在多个类别上的真实前端开发任务表现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/moonshot-releases-2-8-trillion-parameter-kimi-k3">China's 2.8-trillion-parameter Kimi K3 beats Claude Fable 5 in Frontend Code Arena benchmark— Moonshot AI delivers largest open-weight AI model ever, as China works around U.S. compute limits | Tom's Hardware</a></li>
<li><a href="https://arxiv.org/pdf/2510.26692">Kimi Linear: An Expressive, Efficient Attention Architecture</a></li>
<li><a href="https://arxiv.org/pdf/2603.15031">Attention Residuals</a></li>

</ul>
</details>

**社区讨论**: 社区评论聚焦于“鹈鹕基准测试”争议，有人质疑模型是否在训练数据中见过鹈鹕 SVG，还有人注意到 Kimi K3 似乎有 85 个 token 的隐藏系统提示。一位用户还指出，Kimi K3 比竞争对手便宜 5 倍，但也慢 2 倍。

**标签**: `#AI`, `#LLM`, `#open-source`, `#coding`, `#multimodal`

---

<a id="item-3"></a>
## [华为昇腾 950 超节点亮相，算力达英伟达 6.7 倍](https://www.ithome.com/0/978/019.htm) ⭐️ 9.0/10

华为在 2026 世界人工智能大会（WAIC）上首次公开亮相昇腾 950 超节点（Atlas 950 SuperPoD），宣称提供 1 EFLOPS FP8 和 2 EFLOPS FP4 算力，支持 1024 卡规模及 256 TB 全局统一内存，总算力达到英伟达 NVL144 系统的 6.7 倍。 这标志着 AI 硬件的重大突破，可能重塑竞争格局，为中国大规模 AI 训练提供英伟达主导的 GPU 集群的国产替代方案。 该超节点采用华为自研的灵衢互联协议和超节点架构实现 1024 卡扩展。此外，昇腾 384 超节点已在互联网、运营商、金融等行业商用落地 750 多套。

telegram · zaihuapd · 7月17日 10:27

**背景**: 超节点架构通过高速互联将数十或上百个 AI 芯片整合为一个逻辑单元，用于大模型训练。华为的灵衢协议支持 200 米以上可靠传输，时延低至 2.1 微秒，可支撑万卡集群。Atlas 950 SuperPoD 面向需要大规模 AI 算力的数据中心，同时展出的 Atlas 850E 风冷超节点无需液冷改造即可部署。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.itbear.com.cn/html/2025-09/960596.html">华为发布灵衢互联协议与系列超节点，引领AI算力基础设施新变革-人工智能-ITBear科技资讯</a></li>
<li><a href="https://www.huawei.com/en/news/2025/9/hc-xu-keynote-speech">Groundbreaking SuperPoD Interconnect: Leading a New... - Huawei</a></li>
<li><a href="https://cloud.ofweek.com/news/2025-12/ART-178800-8420-30675427.html">从炫技到务实， 超 节 点 的祛魅时刻 - OFweek云计算网</a></li>

</ul>
</details>

**标签**: `#AI Hardware`, `#Huawei`, `#Ascend`, `#Supercomputing`, `#WAIC`

---

<a id="item-4"></a>
## [首次在宜居带岩质行星上探测到大气层](https://www.bbc.com/news/articles/cy4kdd1e0ejo) ⭐️ 8.0/10

天文学家利用詹姆斯·韦伯太空望远镜在 LHS 1140b 上探测到了氦大气层，这是一颗质量约为地球 5.6 倍的岩质超级地球，位于距离地球 48 光年的红矮星宜居带内。这是首次在宜居带岩质行星上确认存在大气层。 这一发现挑战了此前认为红矮星周围的岩质行星因强烈恒星辐射和剥离作用而无法保留大气层的假设。它为研究太阳系外类地行星的宜居性和大气成分开辟了新的可能性。 该探测是通过地面 10,833 Å谱线的氦光谱学实现的，并经 JWST 观测验证。LHS 1140b 的半径比地球大约 70%，每 24.7 天绕其恒星公转一周，距离为 0.0946 天文单位。

hackernews · neversaydie · 7月17日 14:06 · [社区讨论](https://news.ycombinator.com/item?id=48947560)

**背景**: 红矮星比类太阳恒星温度更低且活动更剧烈，其宜居带非常靠近恒星，这通常会导致恒星风和辐射剥离大气层。LHS 1140b 于 2017 年由 MEarth 项目发现，最初被认为是迷你海王星的候选体，但 JWST 的发射光谱排除了这种可能。氦的探测表明该行星可能正在通过地质活动等方式补充其大气层。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/LHS_1140_b">LHS 1140 b - Wikipedia</a></li>
<li><a href="https://science.nasa.gov/exoplanet-catalog/lhs-1140-b/">LHS 1140 b - Science@NASA</a></li>
<li><a href="https://phys.org/news/2026-07-nearby-rocky-planet-replenishing-helium.html">Nearby rocky planet may be replenishing helium from atmosphere ...</a></li>

</ul>
</details>

**社区讨论**: 评论者对红矮星宜居带内的岩质行星能在强烈恒星剥离作用下保留大气层表示惊讶。一些人最初质疑其“类地”标签，认为它可能是迷你海王星，但 JWST 数据排除了这种可能。其他人则讨论了未来前往该行星的推进系统以及氦保留对逃逸速度的影响。

**标签**: `#exoplanets`, `#JWST`, `#atmosphere`, `#habitable zone`, `#red dwarf`

---

<a id="item-5"></a>
## [开源 AI 模型市场份额超越闭源模型](https://stateofopensource.ai/) ⭐️ 8.0/10

Mozilla 的一项新分析显示，开源 AI 模型在 OpenRouter 上的市场份额已超越闭源模型，四个月内从 40%增长到 63%，代币处理量增长近五倍。 这一转变威胁到 OpenAI 和 Anthropic 等主要 AI 公司的商业模式，因为开源模型降低了许可成本并支持设备端部署，可能重塑 AI 行业格局。 数据来自 OpenRouter，显示开源模型在 3 月 19 日处理了 8880 亿个代币，昨天处理了 4.19 万亿个代币，增长近 5 倍。该分析被批评为 LLM 生成且结构混乱。

hackernews · rellem · 7月17日 14:31 · [社区讨论](https://news.ycombinator.com/item?id=48947825)

**背景**: 开源 AI 模型是公开可用的模型，任何人都可以使用、修改和分发，与 GPT-4 等专有模型形成对比。OpenRouter 是一个将 API 请求路由到各种 LLM 的平台，提供使用数据。开源模型的兴起得益于其较低的成本和灵活性。

**社区讨论**: 评论者强调了开源模型的快速增长，一位用户指出四个月内代币量增长了 5 倍。有人推测这可能扼杀 OpenAI 和 Anthropic，而另一些人则批评 Mozilla 的分析是写得糟糕的 LLM 生成内容。

**标签**: `#open source`, `#AI`, `#LLMs`, `#market analysis`, `#Mozilla`

---

<a id="item-6"></a>
## [EEG 研究显示大脑可同时编码两个语音流](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3003876) ⭐️ 8.0/10

一项使用 EEG 的 PLOS Biology 研究发现，人脑可以同时编码两个不同的语音流，挑战了注意力严格串行的传统观点。 这一发现为现实中的多任务处理能力（如同时听两个对话）提供了神经基础，并可能为注意力障碍和认知训练的未来研究提供参考。 该研究使用 EEG 测量参与者同时听两个语音流时的大脑活动，发现即使注意力集中在一个流上，两个流都在神经活动中被编码。

hackernews · giuliomagnifico · 7月17日 05:51 · [社区讨论](https://news.ycombinator.com/item?id=48943745)

**背景**: EEG（脑电图）是一种非侵入性方法，能以毫秒级精度记录头皮电活动，非常适合研究实时大脑动态。传统的注意力模型假设大脑一次只处理一个信息流，但这项研究表明并行编码是可能的。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/EEG">EEG</a></li>

</ul>
</details>

**社区讨论**: 评论者分享了支持这一发现的个人轶事，例如理查德·费曼关于计数和阅读的实验、飞行员管理多个音频流，以及涉及双重注意力的正念练习。一些人指出，错误可能会在流之间“泄漏”，表明分离并不完美。

**标签**: `#neuroscience`, `#cognitive science`, `#speech processing`, `#multitasking`, `#attention`

---

<a id="item-7"></a>
## [OpenAI CFO 提出“每美元有用智能”ROI 指标](https://openai.com/index/a-scorecard-for-the-ai-age) ⭐️ 8.0/10

OpenAI 首席财务官 Sarah Friar 提出了一个四维记分卡来衡量 AI 投资回报率，核心指标是“每美元有用智能”，取代了用户数或 token 成本等传统指标。 该框架将企业 AI 评估从原始的 token 定价转向实际任务价值，通过为 AI 投资提供更清晰的商业案例，可能加速企业采用。 该记分卡包含四个维度：完成的有用工作量、每个成功任务的总成本、AI 输出的可靠性，以及随着使用增长每美元是否产生更多价值。Friar 指出，最低 token 单价不等于最低任务成本，并举例 GPT-5.6 Sol 在编码任务上比另一领先模型减少 54% 的输出 token。

telegram · OpenAI Blog · 7月17日 15:00

**背景**: 传统上，AI 投资回报率通过用户数或许可续费等采用指标来衡量，或者通过原始 token 成本来衡量。然而，这些指标未能捕捉到实际产生的价值。新指标“每美元有用智能”关注每个成功完成任务的成本，鼓励企业在考虑价格的同时也考虑模型能力和可靠性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://hix.ai/c/gpt-5-6-sol">GPT - 5 . 6 Sol | Try for Free | No Signup | HIX AI</a></li>
<li><a href="https://www.requesty.ai/models/openai-responses/gpt-5.6-sol">OpenAI Responses gpt - 5 . 6 - sol API Pricing & Cost: Context... | Requesty</a></li>

</ul>
</details>

**标签**: `#AI ROI`, `#OpenAI`, `#enterprise AI`, `#productivity metrics`, `#GPT-5.6`

---

<a id="item-8"></a>
## [Prism 漏洞泄露未发表论文](https://www.reddit.com/r/MachineLearning/comments/1uz75qt/prism_accidentally_leaked_d/) ⭐️ 8.0/10

Prism 的编译过程中的一个漏洞导致它返回其他用户的论文而非请求的论文，引发隐私事件。Prism 在首次报告后 10 分钟内关闭了网站。 此事件暴露了敏感的未发表研究，威胁到知识产权和对机器学习论文库的信任。它凸显了处理预发表作品的平台存在严重安全缺陷。 该漏洞最初在 Discord 和 Twitter 上被标记，Prism 迅速响应，将网站下线。用户担心自己的论文可能已被泄露给他人。

reddit · r/MachineLearning · /u/Few-Monitor5103 · 7月17日 17:59

**背景**: Prism 是一个用于编译和分享机器学习论文的平台，常用于预发表草稿。编译漏洞错误地将一个用户的论文提供给另一个用户，表明访问控制或数据隔离存在缺陷。

**社区讨论**: Reddit 社区对隐私和知识产权表示严重关切，许多人称赞快速响应，但担心潜在的泄露。一些用户呼吁提高透明度和进行安全审计。

**标签**: `#security`, `#privacy`, `#machine learning`, `#paper leak`, `#incident`

---

<a id="item-9"></a>
## [Truth Social 将向华尔街出售特朗普帖子的快速访问权限](https://www.cnn.com/2026/07/16/business/truth-social-data-wall-street) ⭐️ 8.0/10

特朗普媒体科技集团（TMTG）于 2026 年 7 月 16 日宣布，将于 2026 年 8 月 1 日推出 Truth API，这是一项付费数据服务，以毫秒级速度提供 Truth Social 上排名前 10 账号的实时帖子，目标客户为机构投资者，尤其是高频算法交易者。 此举引发了重大的伦理和监管担忧，因为特朗普总统经常使用 Truth Social 宣布政策决定，历史上曾多次引发股市和油市剧烈波动。出售此类影响市场信息的早期访问权限可能造成利益冲突，并可能助长市场操纵行为。 该 API 将提供排名前 10 账号的实时帖子，但 TMTG 未公布具体定价。CNN 此前报道称，特朗普曾利用 Truth Social 宣传自己刚买入股票的公司，凸显了该平台用于个人获利的潜在风险。

telegram · zaihuapd · 7月17日 01:02

**背景**: 高频交易（HFT）使用算法在毫秒级时间内执行交易，通常依赖低延迟数据源。Truth Social 已成为特朗普的主要沟通渠道，其关于关税、伊朗等问题的帖子曾引发市场波动。出售此类数据的独家访问权限模糊了总统职责与私人商业利益之间的界限。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.hindustantimes.com/world-news/us-news/trump-media-launches-truth-api-to-give-banks-faster-access-to-truth-social-posts-101784225959242.html">Trump Media launches Truth API to give banks... | Hindustan Times</a></li>
<li><a href="https://fisf.fudan.edu.cn/show-80-3700.html">施东辉： 高 频 交 易 ，天使还是魔鬼？ | 复旦大学国际金融学院(FISF)...</a></li>

</ul>
</details>

**标签**: `#Truth Social`, `#Trump`, `#financial markets`, `#data monetization`, `#ethics`

---

<a id="item-10"></a>
## [美议员要求封禁中国存储芯片并阻止其进入盟友供应链](https://www.tomshardware.com/pc-components/dram/lawmakers-want-us-government-to-ban-memory-chips-from-china-even-in-allied-supply-chains-citing-unacceptable-risk-to-national-economic-and-supply-chain-security) ⭐️ 8.0/10

美国众议院中国委员会主席 John Moolenaar 与民主党议员 George Whitesides 致信商务部长 Howard Lutnick，要求禁止美国公司采购中国存储芯片，包括将长鑫存储（CXMT）列入实体清单，并对长江存储（YMTC）施加额外限制。 此举可能严重扰乱全球半导体供应链，尤其是 AI 基础设施领域，并加速美中科技脱钩。同时，它向日本、韩国和欧盟等盟友施压，要求其与美国限制措施保持一致。 议员们指出，中国存储芯片制造商与中国军方关系密切，每笔采购都可能资助解放军发展军民两用技术。他们还敦促与盟友协调，防止中国制造商在盟友供应链中填补供应缺口。

telegram · zaihuapd · 7月17日 14:00

**背景**: 长鑫存储（CXMT）是中国领先的 DRAM 制造商，尚未被列入美国实体清单，这使其相对于长江存储（YMTC）和中芯国际（SMIC）等受制裁企业具有独特优势。长江存储是知名的 NAND 闪存生产商，以其 Xtacking 技术著称。美国日益限制中国半导体产业，以防止军事用途并减少战略依赖。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://gaohaojun.cn/Blog/2026/01/21/红色内存潮流长鑫存储的战略分析和围绕DRAM的地缘政治斗争/">内 存 的赤色潮流： 长 鑫 存 储 （ CXMT ... - Gao Haojun</a></li>
<li><a href="https://www.rfi.fr/cn/经贸/20260716-众议员致信美商务部长促禁购中国存储芯片-参议员提法案加强对中国在美制药业投资审查">rfi.fr/cn/经贸/20260716...</a></li>

</ul>
</details>

**标签**: `#semiconductors`, `#US-China trade`, `#supply chain security`, `#memory chips`, `#technology policy`

---