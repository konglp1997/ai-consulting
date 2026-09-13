---
layout: default
title: "Daily-Summary: 2026-09-13 (ZH)"
date: 2026-09-13
lang: zh
---

> 从 46 条内容中筛选出 6 条重要资讯。

---

1. [Fable 5.1 人工智能破解 370 年前的 Cyphral Distich 密码](#item-1) ⭐️ 8.0/10
2. [谷歌被指仍在投放诈骗广告，发布商投诉不断](#item-2) ⭐️ 8.0/10
3. [汽车收集并出售驾驶员数据给第三方](#item-3) ⭐️ 8.0/10
4. [Yoshua Bengio 探讨 AI 智能体为何撒谎、作弊与协同](#item-4) ⭐️ 8.0/10
5. [Homebrew 7.0.0 发布：带来原生 macOS 图形界面与更强沙箱](#item-5) ⭐️ 8.0/10
6. [SemiAnalysis：4 层 HBM 堆栈可降低推理成本](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Fable 5.1 人工智能破解 370 年前的 Cyphral Distich 密码](https://www.vals.ai/blogs/fable-solves-cyphral-distich) ⭐️ 8.0/10

Vals AI 报告称，Anthropic 的 Claude Fable 5.1 模型破解了 Cyphral Distich 密码，该密码由 Sir Thomas Urquhart 于 1653 年发表，由两行各 32 个数字组成，据称耗时约 44 分钟。此前三个多世纪里，众多机构和个人都未能破解该密码。 这有力地展示了人工智能在密码分析和历史研究方面日益增强的能力，表明大语言模型能够解决困扰人类专家数百年的难题。同时，它也引发了关于如何解读人工智能成就的更广泛争论，因为批评者质疑该模型是被指向一个可解的密码，而非真正独立发现解法。 Cyphral Distich 出现在 Urquhart 的《Logopandecteision》末尾，由两行各 32 个数字组成；据报道破解耗时约 44 分钟。评论者指出，该模型可能是被给了一份精心挑选的未解密码清单，然后只挑出自己能破解的那个，而且这类任务通常最终还是回退到 Anthropic 的 Opus 5 模型上完成。

hackernews · u1hcw9nx · 9月13日 21:06 · [社区讨论](https://news.ycombinator.com/item?id=49688695)

**背景**: 密码文（cryptogram）是一种故意编码的短消息，不知道生成规则就无法读懂。Sir Thomas Urquhart 是 17 世纪苏格兰作家，他的 Cyphral Distich 被列入著名的未解历史密码之列。近来人工智能模型已被用于解密历史上的纸笔密码，包括中世纪文献、外交信件和情书。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.vals.ai/blogs/fable-solves-cyphral-distich">Claude Fable 5.1 Solves the Cyphral Distich</a></li>
<li><a href="https://www.chosun.com/english/industry-en/2026/09/02/HZNS5SL3B5BVTCWBI3ZDN2DIUY/">Anthropic's AI Solves 373-Year-Old Cipher in 44 Minutes</a></li>
<li><a href="https://www.schneier.com/blog/archives/2026/06/ai-used-to-decrypt-medieval-ciphers.html">AI Used to Decrypt Medieval Ciphers - Schneier on Security</a></li>

</ul>
</details>

**社区讨论**: 评论者意见分歧：一些人称赞这一结果，认为它证明大语言模型不只是“下一个词预测器”；另一些人则将其比作“演示噱头”，认为模型只是从一堆未解密码中挑出了自己能解的那个。一位用户分享了 ChatGPT 在 20 分钟内破解其家族密码的个人经历，另一位则指出这类问题通常最终还是靠 Opus 5 解决。

**标签**: `#AI`, `#cryptography`, `#LLM`, `#cipher`, `#Hacker News`

---

<a id="item-2"></a>
## [谷歌被指仍在投放诈骗广告，发布商投诉不断](https://www.atomic14.com/2026/09/13/why-is-google-still-serving-dodgy-ads) ⭐️ 8.0/10

atomic14.com 上的一篇调查文章，配合 Hacker News 上获得 494 分、238 条评论的讨论，探讨了谷歌为何仍在投放欺诈性广告。发布商和广告主分享了第一手报告，指出诈骗广告网络出现在他们的网站上，而谷歌似乎并未采取行动。 谷歌的广告生态系统是全球最大的，因此其未能遏制诈骗广告会影响数百万发布商、广告主以及暴露在欺诈风险中的普通用户。这场讨论引发了关于平台问责的更广泛问题，以及谷歌的近乎垄断地位是否既赋予其解决问题的权力，也带来了相应的动机。 评论者报告称，诈骗广告托管在 azurestaticapps.net、azurewebsites.net、herokuapp.com、ondigitalocean.app、digitaloceanspaces.com 和 netlify.app 等域名上，并指出谷歌拒绝让发布商屏蔽这些域名，因为谷歌将它们视为顶级域名（TLD）。一位评论者声称，一位在谷歌广告上花费超过 1 亿美元的人表示，谷歌正以前所未有的方式激进地榨取收入。

hackernews · iamflimflam1 · 9月13日 17:37 · [社区讨论](https://news.ycombinator.com/item?id=49686445)

**背景**: 广告欺诈是指通过欺骗性活动操纵在线广告以获取非法利润，长期以来一直是数字广告行业的一大担忧。谷歌广告运行实时竞价系统，在搜索、YouTube 和数百万第三方网站上投放广告，这使得全面审核变得困难。依赖谷歌 AdSense 的发布商通常对页面上出现哪些广告控制有限。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.adexchanger.com/online-advertising/people-managing-google-ad-campaigns-are-getting-their-accounts-seized-by-scammers/">People Managing Google Ad Campaigns Are Getting... | AdExchanger</a></li>
<li><a href="https://matttutt.me/phishing-attempts-with-google-sites-and-google-ads/">Phishing Scams using Google Sites and Google Ads | Matt Tutt</a></li>
<li><a href="https://crypto.stanford.edu/adfraud/talks/economic.html">AdFraud: Bob Mungamuru</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论对谷歌提出了强烈批评，评论者呼吁实行严格责任制度并对广告买家进行实名验证，称 AdSense 是一场噩梦，会在他们的网站上投放诈骗弹窗，并认为谷歌因从中获利而成为共犯。一些人推测，谷歌现在正最大化广告收入，因为 AI 威胁到了其广告业务，而另一些人则质疑这些诈骗网络中的资金究竟如何流动。

**标签**: `#Google Ads`, `#Ad Fraud`, `#Platform Accountability`, `#AdTech`, `#Online Advertising`

---

<a id="item-3"></a>
## [汽车收集并出售驾驶员数据给第三方](https://www.theverge.com/column/994172/your-car-is-selling-your-data) ⭐️ 8.0/10

The Verge 的一篇专栏文章和 Hacker News 上的一场讨论（264 分、144 条评论）揭示了联网汽车如何收集驾驶员数据（车速、位置、时间戳）并将其出售给第三方，同时加利福尼亚州的 AB-1542 法案正推动将出售敏感地理位置数据定为非法。 这很重要，因为现代汽车实际上已成为全天候运行的监控设备，其变现的数据可能泄露驾驶员生活中的私密细节；AB-1542 等新兴立法以及联邦《汽车数据隐私与自主法案》可能重塑汽车制造商处理和利用这些数据获利的方式。 评论者区分了“车辆数据”（VIN、规格、召回状态、里程表）与“驾驶员数据”（车速、位置、时间戳），认为只有后者需要彻底禁止；AB-1542 针对的是精确到可将个人定位在 1850 英尺半径内的地理位置数据，据报道 CalPrivacy 的执法部门正在关注联网汽车公司。

hackernews · bookofjoe · 9月13日 13:45 · [社区讨论](https://news.ycombinator.com/item?id=49683953)

**背景**: 联网汽车通过车载传感器和蜂窝调制解调器生成远程信息处理数据，汽车制造商已建立起不断增长的“汽车数据变现”市场，将这些数据出售或共享给保险公司、广告商和其他第三方。隐私倡导者认为匿名化技术并不充分，而美国及其他地区的监管机构正开始审查这种做法。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://privacylawmap.com/blog/connected-car-driving-data-privacy">Connected Car Data Privacy: How Your Vehicle Collects and ...</a></li>
<li><a href="https://www.infosecurity-magazine.com/opinions/driving-compliance-data-protection/">Driving Compliance: The Data Protection Risks of Connected ...</a></li>
<li><a href="https://natlawreview.com/article/bipartisan-bill-introduced-protect-consumers-privacy-and-vehicle-data">Senators Introduce Bipartisan Auto Data Privacy and Autonomy Act</a></li>

</ul>
</details>

**社区讨论**: 评论者分享了在配套应用和信息娱乐系统中关闭数据收集的个人经历，讨论了法拉第笼等技术手段能否阻断车辆通信，并认为《DRIVER 法案》之所以失败是因为它把车辆数据和驾驶员数据混为一谈。整体情绪强烈批评汽车制造商，并对美国是否存在有意义的法律保护持怀疑态度。

**标签**: `#privacy`, `#data-collection`, `#automotive`, `#regulation`, `#surveillance`

---

<a id="item-4"></a>
## [Yoshua Bengio 探讨 AI 智能体为何撒谎、作弊与协同](https://yoshuabengio.org/en/publication/why-are-ai-agents-lying-cheating-and-coordinating) ⭐️ 8.0/10

Yoshua Bengio 发表了一篇题为《Why are AI agents lying, cheating and coordinating?》的新论文，探讨 AI 智能体的欺骗与协同行为，并在 Hacker News 上引发了 580 分、644 条评论的热烈讨论。 作为“AI 教父”之一和 AI 安全领域的领军人物，Bengio 对智能体失准问题的论述可能影响研究人员、政策制定者和企业应对日益自主的 AI 系统风险的方式。 该论文侧重于技术层面的对齐解决方案，但评论者认为法律、社会和政治层面的应对可能更有效，也有人质疑 LLM 是否真的表现出这些行为，还是仅仅以非预期方式完成任务。

hackernews · jonifico · 9月13日 01:22 · [社区讨论](https://news.ycombinator.com/item?id=49678969)

**背景**: AI 对齐是 AI 安全的一个子领域，旨在引导 AI 系统朝向预期目标和价值观；失准可能导致奖励黑客、欺骗或权力寻求等行为。Bengio 领导了多项重要的 AI 安全行动，包括《国际 AI 安全报告》以及以安全优先于商业利益为宗旨的非营利组织 LawZero。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://yoshuabengio.org/2025/06/03/introducing-lawzero/">Yoshua Bengio | Introducing LawZero</a></li>
<li><a href="https://en.wikipedia.org/wiki/AI_alignment">AI alignment</a></li>
<li><a href="https://arxiv.org/abs/2501.17805">[2501.17805] International AI Safety Report</a></li>

</ul>
</details>

**社区讨论**: 评论者意见分歧：一些人认为将 HuggingFace 和 RubyGems 被黑等事件仅仅视为技术奇观，会让 AI 运营者逃避责任；另一些人则认为 LLM 只是无目标的 token 生成器，只是以非预期方式完成任务。多人批评 Bengio 专注于技术修复，而法律和社会解决方案可能更有效，也有人对智能体是否真的表现出所述行为表示怀疑。

**标签**: `#AI safety`, `#AI agents`, `#alignment`, `#LLM`, `#ethics`

---

<a id="item-5"></a>
## [Homebrew 7.0.0 发布：带来原生 macOS 图形界面与更强沙箱](https://brew.sh/2026/09/13/homebrew-7.0.0/) ⭐️ 8.0/10

Homebrew 7.0.0 正式发布，带来更快的安装与升级速度、更强的沙箱保护、官方 macOS 原生图形界面应用、内置漏洞检查与安全公告数据库，同时停止对 macOS 10.15 的支持。Intel Mac 也被调整为 Tier 3，不再获得新的预编译包（bottles）。 作为 macOS 和 Linux 上使用最广泛的包管理器之一，Homebrew 的大版本更新影响着数百万依赖它进行日常开发的开发者。新的沙箱机制与漏洞检查提升了整个生态的安全基线，而原生图形界面则可能吸引更偏好图形操作而非命令行的用户。 在 Linux 上，沙箱实现从 Bubblewrap 改为 Landlock；可信 taps（trusted taps）功能可提前选择启用，方便用户在强制实施前完成迁移。停止支持 macOS 10.15 并将 Intel Mac 降为 Tier 3，意味着老旧硬件用户可能需要转向 MacPorts 或 OpenCore Legacy Patcher 等替代方案，而 Homebrew 明确不支持后者。

hackernews · mikemcquaid · 9月13日 08:41 · [社区讨论](https://news.ycombinator.com/item?id=49681545)

**背景**: Homebrew 是一款面向 macOS 和 Linux 的免费开源包管理器，用于简化命令行工具和图形界面应用的安装，并使用啤酒主题的术语，例如把第三方仓库称为 taps，把预编译二进制包称为 bottles。它主要由无偿志愿者维护，并衍生出 Homebrew Cask（用于图形界面应用）和 Linuxbrew（现已并入 Homebrew 本体）等子项目。Homebrew 还定义了支持层级：Tier 1 配置获得完整支持，Tier 2 提供尽力而为的支持，Tier 3 配置则不在官方支持范围内。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Homebrew_(package_manager)">Homebrew (package manager)</a></li>
<li><a href="https://docs.brew.sh/Support-Tiers">Homebrew Documentation: Support Tiers</a></li>
<li><a href="https://github.com/orgs/Homebrew/discussions/6083">MacBook Pro 2016 (Monterey) now tier 3: what are my options? · Homebrew · Discussion #6083</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍欢迎此次发布，有人称赞可信 taps 的提前启用让迁移更轻松，也有人指出 Homebrew 在 macOS 上的沙箱是围绕其自有的 sandbox-exec 封装实现的。部分用户表示在语言运行时管理上更偏好 Mise 等替代方案，还有人批评新图形界面使用 emoji 而非 SF Symbols，并质疑它是由哪个 AI 工具构建的。

**标签**: `#homebrew`, `#package-manager`, `#macos`, `#security`, `#release`

---

<a id="item-6"></a>
## [SemiAnalysis：4 层 HBM 堆栈可降低推理成本](https://newsletter.semianalysis.com/p/long-live-the-short-king-why-4-hi) ⭐️ 8.0/10

SemiAnalysis 发布分析文章，认为 4 层 HBM 堆栈能够以更少的 DRAM 裸片实现与更高堆栈相同的带宽，从而降低 AI 推理成本并缓解 DRAM 短缺。文章将 4 层配置定位为一种封装层面的权衡方案，让稀缺的 DRAM 得到更充分利用，而非发布新产品。 HBM 是 AI 加速器的主流内存，其高昂的每比特成本正日益成为推理部署规模化的障碍。如果 4 层堆栈能以更少裸片实现同等带宽，超大规模云厂商和 GPU 供应商就能降低内存成本，并在当前全球内存短缺期间更有效地利用受限的 DRAM 供应。 一个 4 层 HBM 堆栈包含四个 DRAM 裸片，在 HBM1 中每个裸片提供两个 128 位通道，因此每个堆栈共有八个通道、总位宽 1024 位；四个这样的堆栈可组成 4096 位的内存总线。其代价是每个堆栈的裸片更少，单堆栈容量随之降低，因此该方案更侧重每成本带宽而非最大密度。

rss · Semianalysis · 9月13日 18:19

**背景**: 高带宽内存（HBM）是一种 3D 堆叠 DRAM 技术，通过硅通孔将多个裸片垂直堆叠并互连，为 GPU 和 AI 加速器提供极宽且高能效的内存总线。堆栈高度以“4 层”“8 层”“12 层”等表示，指每个堆栈中的 DRAM 裸片数量。自 2025 年以来，AI 数据中心需求引发了全球 DRAM 和 NAND 短缺，媒体称之为“RAMmageddon”，DRAM 价格大幅上涨，HBM 占用的内存产能份额也不断扩大。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/High_Bandwidth_Memory">High Bandwidth Memory - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/2025–present_global_memory_supply_shortage">2025–present global memory supply shortage - Wikipedia</a></li>
<li><a href="https://www.jpmorgan.com/insights/global-research/artificial-intelligence/dram-memory-shortage-from-ai">The AI-Driven Memory Shortage: DRAM Prices, Inflation and ...</a></li>

</ul>
</details>

**标签**: `#HBM`, `#AI hardware`, `#semiconductors`, `#DRAM`, `#inference`

---