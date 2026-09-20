---
layout: default
title: "Daily-Summary: 2026-09-20 (ZH)"
date: 2026-09-20
lang: zh
---

> 从 42 条内容中筛选出 7 条重要资讯。

---

1. [ChatGPT 通过 __obi 广告 Cookie 追踪用户跨站活动](#item-1) ⭐️ 8.0/10
2. [Qwen Image 2.1：7B 开源权重文生图模型，支持原生透明](#item-2) ⭐️ 8.0/10
3. [美国撤销发电厂气候污染限制](#item-3) ⭐️ 8.0/10
4. [去污染报告无法解决基准污染，作者提出由评估方控制测试的新方案](#item-4) ⭐️ 8.0/10
5. [美军因 AI 编造情报差点登船拦截中国船只](#item-5) ⭐️ 8.0/10
6. [长鑫科技第五代 DRAM 技术平台正式量产](#item-6) ⭐️ 8.0/10
7. [斯坦福研究：大脑实际上由两个独立器官构成](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [ChatGPT 通过 __obi 广告 Cookie 追踪用户跨站活动](https://www.buchodi.com/chatgpt-now-knows-what-you-do-on-other-websites-via-ad-collector/) ⭐️ 8.0/10

OpenAI 部署了一个名为 __obi 的跨站追踪 Cookie，它会跟随已登录的 ChatGPT 用户进入广告主网站，使 OpenAI 能够将用户的浏览和购买行为关联回其 ChatGPT 账户。该机制已在手机上复现，并与数月流量数据交叉验证，覆盖 936 个广告主像素和 1,029 个主机名。 这相当于把标准广告技术追踪应用到用户对隐私有强烈期待的 AI 聊天产品上，可能将敏感对话和浏览习惯暴露于用户画像之中。这可能加剧欧盟的监管审查，并促使用户转向 Firefox、Brave 和 Safari 等注重隐私的浏览器。 __obi Cookie 设置在 .openai.com 域下，有效期为一年，并绑定到已登录的 ChatGPT 账户；任何在 ChatGPT 上购买广告的广告主都会在自己的网站上安装 OpenAI 代码，该代码会将 __obi 连同页面数据一起发送回 OpenAI。浏览器防护情况不一：Firefox、Brave 和 Safari 会阻止该机制，而 Chrome 和 Edge 不会。

hackernews · lmbbuchodi · 9月20日 15:18 · [社区讨论](https://news.ycombinator.com/item?id=49776729)

**背景**: 广告技术追踪通常通过 Cookie 和像素实现，让广告主能够跨网站跟踪用户，常见机制包括实时竞价（RTB）。OpenAI 的 __obi Cookie 是一种签名标识符，将这一模式延伸到了 ChatGPT，意味着 Meta 和 Google 使用的同类追踪基础设施如今也被用于 AI 助手。用户通常认为 AI 对话是私密的，因此这种跨站关联尤其引人关注。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ai-tldr.dev/releases/openai-obi-ad-tracker/">OpenAI's __obi cookie — ChatGPT accounts tracked… | AI/TLDR</a></li>
<li><a href="https://www.buchodi.com/chatgpt-now-knows-what-you-do-on-other-websites-via-ad-collector/">ChatGPT now knows what you do on other websites via ad collector</a></li>
<li><a href="https://www.sekoia.com/blog/sold-to-the-highest-bidder-the-escalation-of-adint-from-geolocation-tracking-to-intrusion-vector">ADINT: From Ad -Based Geolocation Tracking to Intrusion Vector</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍对此做法感到不适，有人指出该机制虽是标准广告技术，但将其用于 AI 聊天产品尚无先例。其他人强调 Firefox、Brave 和 Safari 会阻止该机制而 Chrome 和 Edge 不会，称赞欧盟立法对抗此类做法，并批评付费订阅后仍被追踪。

**标签**: `#privacy`, `#adtech`, `#ChatGPT`, `#tracking`, `#AI ethics`

---

<a id="item-2"></a>
## [Qwen Image 2.1：7B 开源权重文生图模型，支持原生透明](https://qwen.ai/blog?id=qwen-image-2.1) ⭐️ 8.0/10

Qwen 发布了 Qwen Image 2.1，这是一个统一的文生图生成与图像编辑模型，其视觉生成部分仅有 7B 参数（32 层 Single-Stream DiT），相比 Qwen-Image 1 的 20B 参数大幅缩小。它带来了四项关键改进，包括原生支持生成和编辑透明图像，以及显著提升的文本渲染能力。 该模型仅 7B 的紧凑体积让高质量本地图像生成更易普及，而其强大的文本渲染能力为开源权重模型树立了新标杆，这对构建提示词到 UI 或设计工具的设计师和开发者尤为重要。不过，相比此前采用 Apache 许可的 Qwen 模型，其更严格的许可证可能限制商业采用和微调。 Qwen Image 2.1 在单一检查点中统一了文生图生成与图像编辑，其文本编码器最多可读取 10 个图像输入（角色、产品、背景板、风格参考），并以 VAE 潜变量的形式拼接进序列。该模型采用的许可证比早期 Qwen 模型的 Apache 许可更为严格，这是商业使用中一个值得注意的限制。

hackernews · jmillikin · 9月20日 13:09 · [社区讨论](https://news.ycombinator.com/item?id=49775499)

**背景**: 文生图模型根据文本提示生成图像，而开源权重模型会在许可证下公开其训练好的参数供下载。Qwen-Image 1 是一个 20B 的 MMDiT 基础模型，以复杂文本渲染和精确编辑（尤其是中文）著称。Qwen Image 2.1 是后续版本，将视觉生成部分缩小到 7B，同时新增了原生透明支持，这是少数竞争对手才具备的功能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/QwenLM/Qwen-Image-2.1">GitHub - QwenLM/Qwen-Image-2.1: Qwen's most powerful open ...</a></li>
<li><a href="https://qwen.ai/blog?id=qwen-image-2.1">Qwen-Image-2.1: Compact, Efficient, and Unified Image Creation</a></li>
<li><a href="https://blog.comfy.org/p/qwen-image-21-in-comfyui-open-weight">Qwen- Image -2.1 in ComfyUI: Open-Weight Image Generation and...</a></li>

</ul>
</details>

**社区讨论**: 评论者称赞该模型更小的 7B 体积和原生透明支持，有人指出其文本渲染“目前比开源权重市场上的任何其他模型都好得多”。不过，多位用户对相比此前 Apache 许可的 Qwen 模型更为严格的许可证表示担忧，还有人讨论了如何在本地运行该模型，并将本地图像生成与本地代码生成进行了对比，认为前者表现更佳。

**标签**: `#text-to-image`, `#open-weight`, `#Qwen`, `#AI model`, `#licensing`

---

<a id="item-3"></a>
## [美国撤销发电厂气候污染限制](https://text.hrw.org/news/2026/09/17/us-revokes-limits-on-power-plants-climate-pollution) ⭐️ 8.0/10

美国撤销了对发电厂气候污染的限制，这一政策举措推翻了 2024 年出台的、原本要求现有和新建发电厂最终实施碳捕集的法规。人权观察于 2026 年 9 月 17 日报道了这一决定，并在 Hacker News 上引发了热烈讨论，获得 202 分和 204 条评论。 这一撤销可能推迟现有燃煤电厂的关闭，并减缓向清洁能源的转型，对美国温室气体排放和全球气候目标产生重大影响。它还会影响可再生能源行业的经济格局，该行业已成为投资太阳能、风能和电池的国家的重要就业和出口部门。 2024 年的原始规则似乎最终要求实施碳捕集，但目前尚不清楚它对现有运行或新建电厂的实际影响有多大。评论者指出，燃煤电厂在经济上已经处于劣势，因此主要影响可能是推迟关闭，而非允许新建。

hackernews · DeepLogin · 9月20日 17:19 · [社区讨论](https://news.ycombinator.com/item?id=49777841)

**背景**: 拜登政府时期的美国环境保护署于 2024 年敲定规则，要求现有燃煤电厂和新建天然气电厂最终捕集碳排放或关闭。碳捕集是指在二氧化碳进入大气之前将其捕获并封存于地下。特朗普政府已着手废除多项气候法规，理由是这些法规给能源行业带来了过高成本。

**社区讨论**: Hacker News 的评论者大多批评这一撤销，认为投资太阳能、风能和电池能带来经济增长，而天然气是唯一仍有竞争力的化石燃料且成本正在上升。一些人指出推迟燃煤电厂关闭是荒谬的，还有用户提问为什么大多数美国郊区独栋住宅没有使用屋顶太阳能，尽管它们看起来非常适合。

**标签**: `#climate policy`, `#energy`, `#environment`, `#politics`, `#sustainability`

---

<a id="item-4"></a>
## [去污染报告无法解决基准污染，作者提出由评估方控制测试的新方案](https://www.reddit.com/r/MachineLearning/comments/1wlimaj/why_decontamination_reports_cant_fix_benchmark/) ⭐️ 8.0/10

一篇 Reddit r/MachineLearning 帖子指出，去污染报告无法解决基准污染，原因有三：实验室自己检查自己、训练语料因版权诉讼风险无法公开、n-gram 匹配会漏掉改写、论坛攻略、GitHub 解答和合成数据。作者建议翻转思路，让评估方控制测试——提交方永远拿不到标签、评估在无网络环境下运行、评估方从指定 commit 自行构建代码、测试数据在提交冻结后生成——并已为表格模型搭建了一个小型版本。 基准污染会削弱 AI 评估的有效性，而这篇帖子将问题与 OpenAI 二月份停止报告 SWE-bench Verified 的决定联系起来——当时进展在六个月内仅提升六个点。如果去污染报告在结构上就不充分，机器学习社区可能需要采用由评估方控制、可复现的测试，作为可信基准结果的新标准。 作者指出，承诺方案和私有集合交集的作用没有看起来那么大，因为它们只能证明实验室所声明的语料情况，而非模型实际训练所用的数据，而且训练证明方案已被证明可以被伪造。帖子明确说明了它未能证明的内容：基准本身是否优秀、隐藏测试集是否无法通过反复提交被“挤”出来、资助方是否泄露了标签、以及第三方能否在没有数据的情况下重新运行——其中反复提交这一缺口被列为最需要优先解决的。

reddit · r/MachineLearning · /u/NoahPersaud · 9月20日 14:31

**背景**: 基准污染是指评估基准的答案出现在模型训练数据中，从而抬高分数并掩盖真实能力的提升。SWE-bench Verified 是经过人工验证的 500 个样本子集，用于测试 AI 模型解决来自流行开源 Python 仓库的真实 GitHub 问题的能力，要求模型阅读问题、理解代码库并生成可用的补丁。去污染报告是业界常见的应对方式，即实验室在训练数据中搜索基准内容并报告未发现污染。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://epoch.ai/benchmarks/swe-bench-verified">SWE-bench Verified | Epoch AI</a></li>
<li><a href="https://www.swebench.com/">SWE-bench Leaderboards</a></li>
<li><a href="https://www.deeplearning.ai/the-batch/the-problem-with-benchmark-contamination-in-ai/">The Problem with Benchmark Contamination in AI</a></li>

</ul>
</details>

**标签**: `#benchmark contamination`, `#ML evaluation`, `#decontamination`, `#SWE-bench`, `#AI research`

---

<a id="item-5"></a>
## [美军因 AI 编造情报差点登船拦截中国船只](https://www.cnn.com/2026/09/18/politics/us-military-ai-false-intelligence-china-ship) ⭐️ 8.0/10

据 CNN 9 月 18 日报道，今年春天美军一项针对中国船只的拦截行动在军机已经升空后才被叫停，而驱动这次行动的核心情报竟是一个 AI 聊天机器人凭空编造的。美国特种作战司令部的一名情报分析员用 AI 聊天机器人融合公开来源情报与机密信号情报，机器人错误识别了船上的货物清单，随后该分析员又用 AI 把错误结论包装成格式规范的正式情报报告并分发至各指挥层级。 这是一起罕见的真实案例，显示 AI 幻觉直接进入了高风险的军事决策流程，说明生成式 AI 能把单个分析员的错误放大为涉及武装登船的作战计划。此事很可能加剧外界对国防与情报工作流中使用 AI 的审视，因为看似可信的编造内容可能带来地缘政治乃至生死攸关的后果。 报道称，该分析员通过聊天机器人将公开来源情报（OSINT）与机密信号情报（SIGINT）融合分析，直到行动前夕官员们深挖报告来源时，才发现整份报告由 AI 生成、货物信息是错的。报道援引四名知情人士，其中两人称武装人员已准备登船、军机已经起飞。

telegram · zaihuapd · 9月20日 03:07

**背景**: AI 幻觉指生成式模型输出被当作事实的虚假或误导性信息，且往往表述流畅、上下文连贯，令人难以察觉。公开来源情报（OSINT）是对公开可得信息的分析，信号情报（SIGINT）则来自通信拦截和电子信号，将两者融合是情报工作的核心任务之一。美国特种作战司令部（USSOCOM）负责统筹各军种的特种作战能力，其情报流程本应依赖经过核实、有来源的报告，而非未经审查的机器输出。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)">Hallucination (artificial intelligence) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Open-source_intelligence">Open - source intelligence - Wikipedia</a></li>
<li><a href="https://www.usa.gov/agencies/u-s-special-operations-command">U . S . Special Operations Command | USAGov</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#national security`, `#military AI`, `#hallucination`, `#intelligence analysis`

---

<a id="item-6"></a>
## [长鑫科技第五代 DRAM 技术平台正式量产](https://m.thepaper.cn/newsDetail_forward_34108116) ⭐️ 8.0/10

9 月 20 日，在 2026 世界制造业大会上，长鑫科技（CXMT）宣布其第五代（G5）DRAM 技术平台正式量产，基于该平台打造的 24GB LPDDR5X 产品已进入量产，并全面进入国产主流旗舰手机。 这标志着中国本土半导体产业的重要里程碑，长鑫科技正在缩小与全球领先 DRAM 厂商的工艺差距，并减少国产旗舰手机对外国存储供应商的依赖。24GB LPDDR5X 在国产旗舰机上的量产落地，显示出其在先进存储领域的竞争力不断增强，并对供应链地缘政治产生影响。 G5 平台采用四重曝光（SAQP）技术，将内存阵列有源区半间距缩至 11.95 纳米，存储器电容深宽比达 45:1，核心动能区高度降至 6762 纳米，在同等条件下每张晶圆产出较上一代提升 50%以上。

telegram · zaihuapd · 9月20日 05:19

**背景**: DRAM 是用于设备运行数据的主要易失性存储器类型，而 LPDDR5X 是专为智能手机等移动设备设计的 LPDDR5 标准的增强低功耗版本。DRAM 工艺微缩部分以有源区半间距衡量，即内存阵列特征之间最小半间距，而电容深宽比则描述深孔存储电容的高宽比例；数值越高意味着在相同面积内可集成更多存储容量。长鑫科技是中国最大的 DRAM 制造商，其 G5 平台是迄今为止最先进的一代产品。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cxmt.com/en/news/info_22.html">CXMT Announces Mass Production of 5th-Generation DRAM ... - CXMT</a></li>
<li><a href="https://agenccy.ai/news/cxmt-reached-1195-nm-half-pitch-with-quadruple-patterning/">CXMT Says Its G5 DRAM Hit 11.95 nm Half - Pitch</a></li>
<li><a href="https://www.globaltimes.cn/page/202609/1370944.shtml">Chinese chipmaker CXMT's 5th-generation memory -chip platform...</a></li>

</ul>
</details>

**标签**: `#semiconductors`, `#DRAM`, `#LPDDR5X`, `#CXMT`, `#hardware`

---

<a id="item-7"></a>
## [斯坦福研究：大脑实际上由两个独立器官构成](https://www.solidot.org/story?sid=85426) ⭐️ 8.0/10

斯坦福大学医学院的研究人员发现，大脑实际上由两个在数亿年间独立演化的不同器官构成，推翻了长期以来认为所有脑区都源自单一祖细胞的模型。通过观察发育中的小鼠胚胎，他们识别出两种不同的脑祖细胞群：一种表达 Otx2 基因，发育成前脑和中脑；另一种表达 Gbx2 基因，发育成后脑。 这一发现挑战了数百年来关于大脑生物学的认知，可能重塑神经科学家对大脑发育、演化和疾病的理解，并有望解释为何某些疾病只影响特定脑区。它还可能为研究人类认知的演化起源以及开发针对特定脑区的神经治疗方法开辟新途径。 这两类祖细胞群从不重叠，在发育的最早阶段彼此就是互斥的，其中 Otx2 标记前脑和中脑，Gbx2 标记后脑。该研究是在发育中的小鼠胚胎上进行的，并发表在《自然》杂志上，因此是否适用于人类仍有待验证。

telegram · zaihuapd · 9月20日 12:11

**背景**: 数百年来，科学家一直将大脑视为一个单一的连续器官，在胚胎发育过程中源自同一类祖细胞群。祖细胞是能够分化成更专门化细胞类型的早期胚胎细胞，而 Otx2 和 Gbx2 这类转录因子是调控发育过程中哪些基因被开启的蛋白质。这项新研究则表明，大脑中负责心跳、呼吸等生理功能的较原始部分，与赋予人类诗歌创作和数学运算等独特能力的部分，实际上源自不同的演化谱系。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://med.stanford.edu/news/all-news/2026/09/two-separate-brains.html">Human brain is two separate organs, Stanford Medicine-led research...</a></li>
<li><a href="https://www.sciencealert.com/the-human-brain-has-two-distinct-origins-scientists-discover">Textbook Rewrite: The Human Brain Has Two Distinct... : ScienceAlert</a></li>
<li><a href="https://neurosciencenews.com/brain-separate-organs-evolution-31219/">The Brain Is Two Separate Organs Joined by... - Neuroscience News</a></li>

</ul>
</details>

**标签**: `#neuroscience`, `#brain-development`, `#evolutionary-biology`, `#stem-cells`, `#research-breakthrough`

---