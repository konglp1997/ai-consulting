---
layout: default
title: "Daily-Summary: 2026-11-26 (ZH)"
date: 2026-11-26
lang: zh
---

> 从 49 条内容中筛选出 9 条重要资讯。

---

1. [斯科特·阿伦森对 AI 矩阵乘法突破的反应](#item-1) ⭐️ 8.0/10
2. [1Password 披露安全事件：源代码被窃，恶意代码被推送](#item-2) ⭐️ 8.0/10
3. [GRH 的 Lean 验证从 1700 万行缩减至 7.6 万行](#item-3) ⭐️ 8.0/10
4. [Linux NFS 服务器曝出 12 年历史的预认证远程 root 漏洞](#item-4) ⭐️ 8.0/10
5. [多项式 Hirsch 猜想被证伪：简单多面体图直径可超多项式](#item-5) ⭐️ 8.0/10
6. [Google Research 发布关于整数分解和离散对数的“Cogentic”论文](#item-6) ⭐️ 8.0/10
7. [Minecraft Java 版曝高危 RCE 漏洞，恶意字体可执行任意代码](#item-7) ⭐️ 8.0/10
8. [美商务部被曝威胁英特尔交出 10%股权](#item-8) ⭐️ 8.0/10
9. [三星电子和 SK 海力士将采用长江存储的 Xtacking 芯片堆叠技术](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [斯科特·阿伦森对 AI 矩阵乘法突破的反应](https://scottaaronson.blog/?p=10379) ⭐️ 8.0/10

斯科特·阿伦森发表了一篇博客文章，对一项由 AI 驱动的重大数学突破表示震惊，该突破似乎是 OpenAI 声称的矩阵乘法指数恰好为 9/4 的证明，并在 Lean 中形式化。这篇文章在 Hacker News 上引发了超过 880 条评论的大规模讨论，辩论 AI 在数学领域进展的程度和影响。 如果得到证实，这将是 AI 首次解决理论计算机科学中的一个重大开放问题，为矩阵乘法复杂度建立了上界和下界。这标志着 AI 系统可能很快能够对纯数学做出基础性贡献，引发关于人类研究人员未来角色的深刻问题。 这一声称的结果来自 OpenAI 2026 年批量发布的数学手稿，尚未经过顶尖数学家的同行评审。即使正确，此类算法在实际中也不使用，因为大 O 符号隐藏的常数因子对当今计算机来说太大。

hackernews · Kotlopou · 11月25日 19:11 · [社区讨论](https://news.ycombinator.com/item?id=50646108)

**背景**: 矩阵乘法是计算机科学中的基础操作，其渐近复杂度的最优指数自 1969 年斯特拉森算法以来一直是一个重大开放问题。此前已知的最佳界限远非紧确，找到匹配的上界和下界将解决一个数十年之久的问题。斯科特·阿伦森是德克萨斯大学奥斯汀分校的著名理论计算机科学家和量子计算研究员，以其博客 Shtetl-Optimized 闻名。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Matrix_multiplication_exponent">Matrix multiplication exponent</a></li>
<li><a href="https://interestingengineering.com/culture/openai-exact-2-25-matrix-multiplication-exponent">OpenAI establishes exact 2.25 exponent for matrix multiplication</a></li>
<li><a href="https://aiweekly.co/alerts/aaronson-warns-ai-math-gains-threaten-human-relevance">Aaronson warns AI math gains threaten human relevance | AI Weekly</a></li>

</ul>
</details>

**社区讨论**: 评论者表达了敬畏与怀疑的混合情绪：一些人认为人类在进化上无法理解这种认知转变的规模，而另一些人则警告说，公理化数学的技能并不意味着 AI 能解决所有领域或构成生存风险。一个反复出现的担忧是缺乏关于计算成本的透明度，以及公司是否会继续资助这种投机性研究。

**标签**: `#AI`, `#mathematics`, `#research`, `#philosophy`, `#Hacker News`

---

<a id="item-2"></a>
## [1Password 披露安全事件：源代码被窃，恶意代码被推送](https://1password.com/blog/update-on-nov-2026-security-incident) ⭐️ 8.0/10

1Password 披露了一起安全事件，攻击者入侵了一名员工的笔记本电脑，利用该账户访问了私有源代码仓库，并试图向后端服务推送恶意代码。公司表示客户密码库未被访问，仍然安全。 这一事件凸显了 SaaS 提供商面临的供应链攻击风险：一台被入侵的员工笔记本电脑就可能导致代码被注入生产系统。对于被数百万人信任的密码管理器而言，此类入侵会削弱人们对云安全的信心，并引发对 CI/CD 管道防护的质疑。 攻击者从私有仓库复制了源代码，并试图向后端服务推送恶意代码，这些代码下载了管理数据。1Password 尚未明确说明分支保护规则是否被绕过或缺失，受影响数据的完整范围仍在调查中。

hackernews · lxhrstn · 11月25日 17:18 · [社区讨论](https://news.ycombinator.com/item?id=50644817)

**背景**: 1Password 是一款广泛使用的密码管理器，将加密密码库存储在本地或云端。SaaS 供应链攻击利用第三方代码、OAuth 令牌和 API 集成在云应用间横向移动。2023 年，1Password 曾遭遇与 Okta 支持系统入侵相关的事件，凸显了身份与访问管理领域反复出现的风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://1password.com/blog/update-on-nov-2026-security-incident">Update on a security incident involving 1Password’s backend ...</a></li>
<li><a href="https://1password.com/blog/okta-incident">Okta Support System incident and 1Password</a></li>
<li><a href="https://onerep.com/blog/1password-breach-what-happened-and-how-to-stay-safe">1Password Breach: 2023–2025 Incidents And How To Stay Safe</a></li>

</ul>
</details>

**社区讨论**: 评论者对此事件表示严重关切，tptacek 指出员工笔记本电脑被入侵是 SaaS 泄露的标准模式，代码推送权限是关键攻击向量。其他人质疑为何分支保护规则未能阻止恶意代码推送，并担心被盗源代码可能助长未来攻击，而一些长期用户则重申他们更倾向于仅本地密码库。

**标签**: `#security`, `#1Password`, `#supply-chain`, `#SaaS`, `#incident`

---

<a id="item-3"></a>
## [GRH 的 Lean 验证从 1700 万行缩减至 7.6 万行](https://github.com/lsernau/grh-lean) ⭐️ 8.0/10

一个更短、更易读的广义黎曼猜想（GRH）Lean 验证版本已发布，将证明从约 1700 万行缩减至约 7.6 万行，减少了 99.56%。新版本清晰区分了已知数学与新数学，并附有贯穿始终的人类可读文档。 证明规模的急剧缩减使这一重大形式化成果更易于消化，可能帮助数学家真正理解核心论证，回应了“巨型证明只验证而无洞见”的担忧。这也引发了关于 LLM 辅助的证明精简能否同时产出紧凑且可解释的形式化证明的讨论。 从约 1700 万行到约 7.6 万行的缩减意味着证明规模减少了 99.56%，且仓库明确标注了哪些部分对应已知数学、哪些对应新数学。社区成员指出，更易读的版本包含大量人类可读文档，应能极大帮助理解该证明。

hackernews · nb-t · 11月25日 21:48 · [社区讨论](https://news.ycombinator.com/item?id=50648050)

**背景**: 广义黎曼猜想是数论中一个重要的未解猜想，它将黎曼猜想推广到更广泛的一类 L 函数，包括狄利克雷 L 函数。Lean 是一个开源证明助手和编程语言，用于形式验证，其中定理以机器可检查的方式陈述和证明。在 Lean 中形式化深奥数学可能产生庞大的证明脚本，近期研究已探索使用大语言模型辅助形式化并压缩或“精简”证明。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Generalized_Riemann_hypothesis">Generalized Riemann hypothesis</a></li>
<li><a href="https://www.itechguides.com/where-is-mathematics-going-large-language-models-and-the-lean-proof-assistant/">Where Is Mathematics Going? LLMs and Lean Proof Assistant</a></li>

</ul>
</details>

**社区讨论**: 评论者赞扬了更清晰的已知与新数学划分以及人类可读文档，其中一人强调了 99.56%的缩减。其他人则希望看到一篇传统数学论文或会议报告来解释核心论证，还有人问这是否挑战了陶哲轩近期关于“巨型证明缺乏洞见是个问题”的观点——他们想知道更聪明的 LLM 现在能否精简并解释证明。

**标签**: `#Lean`, `#formal verification`, `#mathematics`, `#GRH`, `#LLM-assisted proofs`

---

<a id="item-4"></a>
## [Linux NFS 服务器曝出 12 年历史的预认证远程 root 漏洞](https://opensec.in/blog/nfs2root-cve-2026-99362) ⭐️ 8.0/10

OpenSec 披露了 NFS2ROOT（CVE-2026-99362），这是 Linux 内核 NFSv4.1 服务器中的一个预认证堆溢出漏洞，自 Linux 3.16 起就存在，CVSS 评分为 9.8。该漏洞允许 tcp/2049 上的未认证客户端破坏内核内存并获取 root 权限，不过上游已在数月前完成修补。 核心内核子系统中的预认证远程 root 漏洞是一个严重问题，具有广泛的影响潜力，会影响任何运行未修补 NFS 服务器的系统。它凸显了将复杂的 C 代码暴露给不可信网络的风险，并强调了及时更新内核的重要性。 该漏洞是 NFSv4.1 服务器中的堆溢出，可通过 tcp/2049 在无需认证的情况下触发，目前尚无公开的 PoC。缓解措施包括通过 /proc/fs/nfsd/versions 禁用 NFS 4.1/4.2，或应用基于 XDP 的防火墙规则，但最可靠的修复方式是修补内核。

hackernews · dm · 11月25日 20:35 · [社区讨论](https://news.ycombinator.com/item?id=50647161)

**背景**: NFS（网络文件系统）是一种广泛使用的网络文件共享协议，Linux 内核的 NFS 服务器（nfsd）实现了该协议。NFSv4.1 及更高版本增加了会话和并行数据访问等功能，但也扩大了攻击面。预认证意味着攻击者可以在任何认证之前利用该漏洞，而远程 root 意味着他们可以完全控制服务器。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://opensec.in/blog/nfs2root-cve-2026-99362">NFS2ROOT (CVE-2026-99362): pre-auth root in Linux nfsd | OpenSec</a></li>
<li><a href="https://breachnews.com/research/nfs2root-cve-2026-99362-linux-nfsd-pre-auth-root/">NFS2ROOT CVE-2026-99362: Linux nfsd Root Bug Patched</a></li>

</ul>
</details>

**社区讨论**: 评论者分享了实用的缓解措施，例如通过 /proc/fs/nfsd/versions 禁用 NFS 4.1/4.2，以及使用 yeet 项目中基于 XDP 的防火墙规则。一些人指出缺乏公开的 PoC 且 NFS 很少暴露在互联网上，而另一些人则借此漏洞主张采用 seL4 等形式化验证内核，并反对将 C 代码暴露给不可信网络。

**标签**: `#security`, `#linux-kernel`, `#nfs`, `#vulnerability`, `#mitigation`

---

<a id="item-5"></a>
## [多项式 Hirsch 猜想被证伪：简单多面体图直径可超多项式](https://github.com/openai/math/blob/main/preprints/Superpolynomial-graph-diameter-of-simple-polytopes-November-24-2026/paper.pdf) ⭐️ 8.0/10

OpenAI 数学 GitHub 仓库上发布的一篇预印本通过构造简单多面体，证明其图直径的增长速度超过面数的任意固定多项式，从而证伪了多项式 Hirsch 猜想。 这一结果排除了存在沿边枢轴的多项式时间单纯形算法的可能性，加深了我们对线性规划复杂度及单纯形法局限性的理解。 该构造给出了一个恰有 n 个面、维度为次多项式的有界简单有理多面体，其图直径的增长速度超过 n 的任意固定幂次，并且建立在 2010 年对原始 Hirsch 猜想的反例基础之上。

hackernews · acossta · 11月25日 17:34 · [社区讨论](https://news.ycombinator.com/item?id=50644980)

**背景**: Hirsch 猜想于 1957 年提出，断言 n 个面、d 维的多面体中任意两个顶点之间都存在长度不超过 n−d 的边路径；该猜想于 2010 年被 Francisco Santos 证伪。多项式 Hirsch 猜想则放宽要求，仅要求直径被 n 和 d 的某个多项式所界定，若成立则意味着存在多项式时间的单纯形算法。由 Dantzig 提出的单纯形法通过沿可行多面体的边移动来求解线性规划，其最坏情况复杂度与多面体的直径密切相关。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Polynomial_Hirsch_conjecture">Polynomial Hirsch conjecture</a></li>
<li><a href="https://www.baeldung.com/cs/simplex-algorithm-linear-programming">Introduction to the Simplex Algorithm | Baeldung on Computer Science</a></li>

</ul>
</details>

**社区讨论**: 评论者澄清该结果意味着不存在多项式时间的单纯形算法，并指出原始猜想已于 2010 年被证伪，因此这更像是一个后续的“扫尾”结果。有人询问证明是否是构造性的，也有人对数学和算法的未来进行了更广泛的推测。

**标签**: `#mathematics`, `#linear-programming`, `#complexity-theory`, `#polytopes`, `#algorithms`

---

<a id="item-6"></a>
## [Google Research 发布关于整数分解和离散对数的“Cogentic”论文](https://github.com/google-research/google-research/tree/master/cogentic_research_papers) ⭐️ 8.0/10

Google Research 在其 GitHub 仓库中发布了一组名为“Cogentic”的论文，涵盖整数分解、离散对数及相关数学主题。此次发布引发了关于 AI 在数学发现中日益增长的作用的讨论，社区成员指出有传言称这只是“更大事物的冰山一角”。 整数分解和离散对数是 RSA 和 Diffie-Hellman 等广泛使用的密码系统安全性的基础，因此这些领域的任何新研究都备受关注。如果 AI 驱动的方法能在这些问题上取得进展，可能对密码学和网络安全产生深远影响。 该 GitHub 目录包含多篇论文，其中一篇关于“边缘重建”，但内容本身是一个仓库链接而非详细论文，社区对实际结果提出了疑问。一些评论者还指出，学术激励可能鼓励将结果拆分成多篇论文。

hackernews · rgwohlbold · 11月25日 13:33 · [社区讨论](https://news.ycombinator.com/item?id=50642086)

**背景**: 整数分解是将一个数分解为质因数的难题，其假定的困难性是 RSA 加密的基础。离散对数问题是群论中的一个相关问题，用于 Diffie-Hellman 和 ElGamal 等密码系统。近期 AI 在数学领域的进展，如 AlphaGo 和大型语言模型，让人们希望 AI 能帮助解决长期存在的开放问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=50642086">Google releases Cogentic papers on integer factorization , discrete...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Discrete_logarithm_problem">Discrete logarithm problem</a></li>
<li><a href="https://github.com/google-research/google-research/blob/master/cogentic_research_papers/edge_reconstruction/paper.pdf">github.com/ google - research / google - research /blob/master/ cogentic ...</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论（461 分，341 条评论）显示出强烈参与，用户们争论 AI 是否正在推动数学发现的新时代。一些评论者对突破的速度感到兴奋，而另一些人则持怀疑态度，指出此次发布只是一个 GitHub 目录，并质疑其实际意义。少数人还讨论了市场的平淡反应以及学术激励的作用。

**标签**: `#cryptography`, `#integer-factorization`, `#discrete-log`, `#AI-for-math`, `#Google-Research`

---

<a id="item-7"></a>
## [Minecraft Java 版曝高危 RCE 漏洞，恶意字体可执行任意代码](https://github.com/bikini/minecraft2shell) ⭐️ 8.0/10

11 月 22 日公开的 minecraft2shell 概念验证显示，服务器资源包中特制的 TrueType 字体可触发 FreeType 2.14.3 及更早版本的越界写漏洞，在 Windows 客户端上导致 Minecraft Java 版 26.3 执行任意代码。受影响版本包括 1.20.5 至 1.21.10 以及 26.1 至 26.4 快照，而 1.20.4 及更早版本和基岩版不受影响。 这是全球最受欢迎游戏之一中的高危远程代码执行漏洞，由于 Mojang 仍捆绑存在漏洞的 lwjgl-freetype 3.4.3 且暂无官方补丁，数百万玩家（尤其是加入多人服务器的玩家）面临风险。公开的概念验证降低了利用门槛，因此服务器运营者和玩家都亟需采取缓解措施。 该漏洞源于 FreeType 字体解析中的原生越界写，利用要求客户端从服务器加载恶意资源包。11 月 24 日发布的社区修复 m2sfix 1.0.0 通过 Java agent 或 mod 关闭字体 hinting，但建议用户在官方补丁发布前不要添加资源包，并将服务器资源包权限设为“禁用”。

telegram · zaihuapd · 11月25日 12:46

**背景**: FreeType 是一个广泛使用的开源字体渲染库，其解析逻辑中的缺陷可能允许攻击者破坏内存。Minecraft Java 版通过 LWJGL 绑定使用 FreeType 进行字体渲染，自 1.20.5 版本起支持服务器提供的资源包，其中可包含自定义字体。这意味着恶意服务器可以传递特制字体，在客户端利用 FreeType 漏洞，实现远程代码执行，而用户除了加入服务器外无需任何交互。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.secpod.com/learn/security-research/home-run-out-of-bounds-write-discovered-in-freetype">Home Run! Out - Of - Bounds Write Discovered In FreeType | SecPod</a></li>
<li><a href="https://seclists.org/oss-sec/2025/q1/218">oss-sec: Re: CVE -2025-27363: out of bounds write in FreeType ...</a></li>

</ul>
</details>

**标签**: `#security`, `#vulnerability`, `#Minecraft`, `#RCE`, `#FreeType`

---

<a id="item-8"></a>
## [美商务部被曝威胁英特尔交出 10%股权](https://www.wired.com/story/inside-trumps-demands-to-another-chips-ceo/) ⭐️ 8.0/10

法庭文件显示，2025 年 8 月美国商务部一名律师在与英特尔首席财务官的通话中称，不要“误以为这是一场谈判”，并警告董事会可以拒绝，但会面临无法预测的后果。几天后，英特尔董事会交出了美方要求的股份，特朗普总统随后宣布美国政府“完全拥有并控制英特尔 10%的股份”，且未为此支付任何费用，这批股份现值约 110 亿美元。 该报道表明美国政府并非通过谈判达成公平交易，而是以胁迫手段获取一家领先半导体公司的股权，这引发了对公司治理、私有财产权以及国家干预战略行业先例的严重质疑。此举可能重塑芯片制造商及其他涉及国家安全的敏感企业与政府互动的方式。 报道中的 10%股权价值约 110 亿美元，且据称政府未支付任何对价；而英特尔 2025 年 8 月 22 日的官方公告描述的是另一种安排——以每股 20.47 美元购买 4.333 亿股新股，投资额 89 亿美元，相当于 9.9%的被动股权且不获得董事会席位。两种说法之间的差异是争议的关键点。

telegram · zaihuapd · 11月25日 13:25

**背景**: 英特尔是少数能够进行先进半导体制造的公司之一，美国政府日益将芯片生产视为国家安全优先事项，并通过《芯片法案》提供补贴。美国政府持有私营公司股权在美国并不常见，但特朗普政府近期已在多家公司中持股。WIRED 的报道基于法庭文件，描述了英特尔领导层所面临的幕后压力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.intel.com/content/www/us/en/newsroom/news/corporate/intel-and-trump-administration-reach-historic-agreement.html">Intel and Trump Administration Reach Historic Agreement to ...</a></li>
<li><a href="https://www.sec.gov/Archives/edgar/data/50863/000005086325000129/intc-20250822.htm">intc-20250822 - SEC.gov</a></li>
<li><a href="https://www.thomasnet.com/insights/intel-u-s-government-equity-stake/">U.S. Government Takes $8.9B Equity Stake in Intel - Thomasnet</a></li>

</ul>
</details>

**标签**: `#Intel`, `#US government`, `#semiconductors`, `#corporate governance`, `#national security`

---

<a id="item-9"></a>
## [三星电子和 SK 海力士将采用长江存储的 Xtacking 芯片堆叠技术](https://tech.ifeng.com/c/8yLRPKxQy4L) ⭐️ 8.0/10

三星电子和 SK 海力士已通过交叉许可协议，同意在 3D NAND 闪存中采用长江存储 Xtacking 技术的部分内容。三方均对此拒绝置评，但有分析认为，与传统 NAND 制造工艺相比，键合技术优势明显。 这标志着全球两大存储芯片制造商对长江存储混合键合方案的显著认可，可能预示着 3D NAND 制造方式的转变，并增强长江存储在全球半导体供应链中的地位。此举可能加速行业向混合键合架构转型，以实现更高密度和性能。 Xtacking 将存储单元晶圆与外围逻辑电路分离，使两者可以独立制造和优化；第四代技术采用混合键合将两者结合。据 Omdia 分析，这使得厂商可以自行生产存储阵列，同时将逻辑电路交由晶圆代工厂采用更先进制程生产。

telegram · zaihuapd · 11月25日 14:33

**背景**: 3D NAND 闪存通过垂直堆叠存储单元来实现更高的存储密度。长江存储的 Xtacking 技术于 2019 年首次量产，采用混合键合将两片独立晶圆（一片用于存储单元，一片用于逻辑电路）连接起来，相比传统单片制造工艺可实现更快的速度和更高的密度。混合键合是一种利用嵌入式金属凸块在两片硅晶圆之间形成永久电学连接的技术，正被半导体行业日益广泛采用，包括美光计划在未来的 400 层 3D NAND 中使用该技术。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.techpowerup.com/354167/micron-plans-400-layer-3d-nand-with-wafer-to-wafer-bonding-in-2027">Micron Plans 400-Layer 3 D NAND with Wafer-to-Wafer Bonding in 2027</a></li>
<li><a href="https://eu.36kr.com/en/p/3457901637244553">Hybrid Bonding : The Hottest Topic in [Relevant Industry]</a></li>
<li><a href="https://en.wikipedia.org/wiki/Cross-licensing">Cross - licensing - Wikipedia</a></li>

</ul>
</details>

**标签**: `#semiconductors`, `#3D NAND`, `#YMTC`, `#hybrid bonding`, `#memory technology`

---