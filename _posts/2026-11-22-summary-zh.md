---
layout: default
title: "Daily-Summary: 2026-11-22 (ZH)"
date: 2026-11-22
lang: zh
---

> 从 34 条内容中筛选出 6 条重要资讯。

---

1. [Lean 形式化声称验证黎曼猜想](#item-1) ⭐️ 10.0/10
2. [GPGME 严重双重释放漏洞可导致 GnuPG 生态远程代码执行](#item-2) ⭐️ 8.0/10
3. [台积电暂停对中国企业 16nm 及以下芯片订单](#item-3) ⭐️ 8.0/10
4. [微软通过 USB4 RDMA 实现多台 PC 协同运行 AI 模型](#item-4) ⭐️ 8.0/10
5. [浙江大学在超导芯片上首次真机实现量子随机存储器 QRAM](#item-5) ⭐️ 8.0/10
6. [口服 daraxonrasib 联合化疗一线治疗胰腺癌客观缓解率达 60.7%](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Lean 形式化声称验证黎曼猜想](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) ⭐️ 10.0/10

2026 年 11 月 20 日，Levent Alpöge 发布了黎曼猜想的 Lean 形式化证明，代码库约 1700 万行。次日，Lean FRO 与 Mathlib Initiative 联合认证该命题与证明均正确，社区确认其命题与 Mathlib 的 RiemannHypothesis 一致，且多个独立证明检查器验证了证明的有效性。 这是数学与 AI 辅助形式化验证领域的开创性里程碑，表明重大未解决问题可以通过机器可检查的证明进行形式化验证。这可能加速形式化方法在数学中的采用，并为 AI 生成证明的可靠性树立新标准。 证明的有效性依赖于多个独立证明检查器（包括 con-leche 和 con-ron）的独立性，这些检查器自身具有一致性证明；若黎曼猜想为假，则所有内核中必须存在同时影响一致性证明和 RH 证明本身的漏洞。形式化过程中还有人类专家参与，降低了未检测到错误的可能性。

hackernews · g-b-r · 11月21日 14:36 · [社区讨论](https://news.ycombinator.com/item?id=50589618)

**背景**: 黎曼猜想由 Bernhard Riemann 于 1859 年提出，断言黎曼 ζ 函数的所有非平凡零点的实部均为 1/2，是克雷数学研究所的千禧年大奖难题之一。Lean 是一个交互式定理证明器，允许数学家编写由计算机验证的形式化证明，弥合了交互式与自动化定理证明之间的差距。Mathlib 是 Lean 的社区驱动形式化数学库，为此类形式化提供所需的基础定义和定理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Riemann_hypothesis">Riemann hypothesis - Wikipedia</a></li>
<li><a href="https://leanprover.github.io/theorem_proving_in_lean/introduction.html">1. Introduction — Theorem Proving in Lean 3 (outdated)...</a></li>
<li><a href="https://www.claymath.org/millennium/riemann-hypothesis/">Riemann Hypothesis - Clay Mathematics Institute</a></li>

</ul>
</details>

**社区讨论**: 社区讨论既兴奋又谨慎：一些评论者指出，由于存在多个独立检查器，漏洞导致证明无效的概率现已微乎其微；另一些人则提到，此前一个关于 Collatz 猜想的虚假反证曾通过某个独立检查器，强调人工监督的重要性。还有人认识到，该形式化涉及大量现代数学内容，是数学基础领域的重大成果，并赞扬 Levent Alpöge 在引导 Claude 生成证明方面的才华。

**标签**: `#Lean`, `#Riemann Hypothesis`, `#formal verification`, `#AI for math`, `#mathematics`

---

<a id="item-2"></a>
## [GPGME 严重双重释放漏洞可导致 GnuPG 生态远程代码执行](https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html) ⭐️ 8.0/10

GnuPG 项目披露了 CVE-2026-129975，这是 GPGME（应用程序与 GnuPG 交互所用的库）中的一个严重双重释放漏洞。一个包含精心构造的超长用户 ID 的恶意 OpenPGP 密钥可触发该漏洞，为此已发布 Gpg4win、GnuPG Desktop 和 GnuPG VS-Desktop 的新版本。 由于 GPGME 被广泛软件使用——包括大多数邮件客户端、许多 XMPP 客户端、Samba 和 Flatpak——该漏洞可能影响大量应用程序，并可能泄露敏感数据。此次披露也凸显了人们对 C/C++ 代码库内存安全问题的持续担忧，以及上游协调修复的重要性。 该漏洞在技术上是一个双重释放，而非完整的 RCE 利用链，但它可能导致内存破坏和潜在的代码执行。所有使用 2.3.0 之前版本 GPGME 的软件，无论是作为共享库、DLL 还是静态链接，均受影响。

hackernews · gdgghhhhh · 11月21日 08:32 · [社区讨论](https://news.ycombinator.com/item?id=50587208)

**背景**: GPGME（GnuPG Made Easy）是一个库，为应用程序提供高级 API，以便使用 GnuPG 进行加密、解密、签名和密钥管理。双重释放是指程序两次释放同一块内存，这可能导致内存破坏并被攻击者利用。OpenPGP 密钥包含用户 ID，而精心构造的超长用户 ID 可触发 GPGME 解析代码中的该缺陷。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html">[Announce] GnuPG Security Advisory for GPGME (T8557,CVE-2026 ...</a></li>
<li><a href="https://thehackernews.com/2026/11/gnupg-warns-critical-gpgme-flaw-could.html">GnuPG Warns Critical GPGME Flaw Could Expose App Data via ...</a></li>
<li><a href="https://news.lavx.hu/article/gnupg-patches-critical-gpgme-flaw-triggered-by-malicious-openpgp-keys">GnuPG patches critical GPGME flaw triggered by malicious ...</a></li>

</ul>
</details>

**社区讨论**: 评论者指出，Red Hat 五年前似乎在其打包中修复了此问题，但上游遗漏了该修复。一些人批评 RCE 标签夸大其词，因为这是一个双重释放漏洞，而另一些人则认为应使用 Rust 等内存安全语言替代 C/C++。披露时间线也被讨论，GitLab 因 Ruby2Shell 漏洞而加速了补丁发布。

**标签**: `#security`, `#gnupg`, `#vulnerability`, `#rce`, `#memory-safety`

---

<a id="item-3"></a>
## [台积电暂停对中国企业 16nm 及以下芯片订单](https://appleinsider.com/articles/26/11/20/apple-supplier-tsmc-cuts-off-china-chip-orders-amid-tighter-export-controls) ⭐️ 8.0/10

台积电已通知客户暂停接受中国公司 16nm 及以下先进制程的订单，根据收紧后的美国半导体出口新规，除非事先取得美国出口许可或豁免，否则不得供货。此前台积电可自行评估客户设计是否符合豁免条件，现在则须客户提前申请。 此举严重影响中国企业获取先进半导体的能力，迫使它们依赖 28nm、40nm 等旧制程，并限制其构建需要高带宽内存的 AI 数据中心。这凸显了中美科技紧张局势的升级，并可能重塑全球半导体供应链。 中国企业将只能使用 28nm、40nm 等旧制程，这些制程无法支持 AI 数据中心所需的高带宽内存（HBM）。美国获批名单中有苹果、AMD、英伟达，但尚无中国公司获得批准。

telegram · zaihuapd · 11月21日 02:01

**背景**: 台积电是全球最大的芯片代工厂，为苹果、英伟达等公司生产先进处理器。16nm 制程是许多高性能芯片的关键技术，而 HBM 是 AI 加速器的重要内存技术。美国出口管制旨在限制中国获取先进半导体和 AI 能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.21ic.com/a/985500.html">为 什 么 HBM 高 带 宽 内 存 很重要？ 看完你就懂了 - 21ic电子网</a></li>
<li><a href="https://ee.ofweek.com/2023-02/ART-8420-2816-30586487.html">芯 片 制 程 背后的秘密：三星、台积电的3nm... - OFweek电子工 程 网</a></li>

</ul>
</details>

**标签**: `#semiconductors`, `#export-controls`, `#TSMC`, `#AI-hardware`, `#supply-chain`

---

<a id="item-4"></a>
## [微软通过 USB4 RDMA 实现多台 PC 协同运行 AI 模型](https://videocardz.com/newz/microsoft-brings-rdma-over-usb4-to-windows-allowing-multiple-pcs-to-run-one-local-ai-model) ⭐️ 8.0/10

微软发布了 Windows 的 RDMA over USB4 开发者预览，允许多台 PC 共享内存和 GPU 资源来运行同一个本地 AI 模型。演示中，三台搭载 AMD Ryzen AI Max+ 395 的系统以 4-bit 量化运行 Qwen3-235B-A22B，速度约为每秒 18.5 个 token，该功能将通过 Windows Insider 推送。 这项技术意义重大，因为它利用标准 USB4 连接在消费级 PC 之间实现分布式 AI 推理，无需专用高速网卡或交换机等网络硬件。这可以降低本地运行大语言模型的门槛，使没有数据中心基础设施的爱好者和中小型组织也能使用。 演示使用三台 AMD Ryzen AI Max+ 395 系统，运行 4-bit 量化的 Qwen3-235B-A22B，达到约 18.5 token/s。该技术目前为开发者预览，将通过 Windows Insider 实验频道提供；尚未公布正式版发布时间。

telegram · zaihuapd · 11月21日 06:13

**背景**: RDMA（远程直接内存访问）允许计算机直接访问彼此的内存而无需 CPU 参与，传统上用于高性能计算和数据中心，通过 InfiniBand 等专用网络实现。USB4 是一种高速消费级连接标准，可承载 PCIe 和 DisplayPort 信号，此处被用作 RDMA 的传输通道。Qwen3-235B-A22B 是阿里巴巴 Qwen 团队开发的大型混合专家（MoE）语言模型，每次前向传播激活 220 亿参数。AMD Ryzen AI Max+ 395 是一款强大的 APU，拥有 16 个 Zen 5 核心和集成 Radeon 显卡，专为 AI PC 设计。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://shiftdelete.net/windows-usb4-rdma-pc-kumesi-yapay-zeka">Windows 'ta USB 4 ile PC Kümesi: Büyük Yapay Zeka Modelleri</a></li>
<li><a href="https://www.cozumpark.com/windows-11e-usb4-rdma-destegi-geliyor-birden-fazla-bilgisayarin-gucu-birlesecek/">Windows 11'e USB 4 RDMA Desteği Geliyor: Birden... - ÇözümPark</a></li>
<li><a href="https://langdb.ai/app/models/qwen3-235b-a22b/">qwen 3 - 235 b - a 22 b by deepinfra | AI Model Pricing... | LangDB</a></li>
<li><a href="https://www.amd.com/en/products/processors/laptop/ryzen/ai-300-series/amd-ryzen-ai-max-plus-395.html">AMD Ryzen™ AI Max+ 395</a></li>

</ul>
</details>

**标签**: `#RDMA`, `#USB4`, `#local AI`, `#distributed inference`, `#Microsoft Windows`

---

<a id="item-5"></a>
## [浙江大学在超导芯片上首次真机实现量子随机存储器 QRAM](https://finance.sina.com.cn/stock/2026-11-21/doc-iniznhsk3530826.shtml) ⭐️ 8.0/10

浙江大学团队在自主制备的超导量子芯片「天目 2 号」上，全球首次真机实现量子随机存储器 QRAM，成果发表于《自然·物理》。该原型调取 4 位和 8 位数据的准确率分别为 80.9% 和 60.4%，线路深度较未优化方案降低 30% 以上。 QRAM 常被比作量子计算机的「高速内存」，是量子算法高效读取经典或量子数据的关键组件，因此真机原型的落地意味着从理论向实用量子计算迈出了实质性一步。该成果在国产超导处理器上实现，也反映出中国量子硬件生态的进展。 该演示仍局限于 4 位和 8 位数据调取的小规模原型，8 位时 60.4% 的准确率说明规模化仍是挑战。值得注意的是，团队首次验证了该架构具备局部抗噪特性，下一步将推进 QRAM 的规模化研究。

telegram · zaihuapd · 11月21日 08:31

**背景**: QRAM 是经典随机存储器的量子对应物，它用量子比特来寻址处于叠加态的内存单元，使量子计算机能够并行读取大量数据。为降低朴素设计带来的巨大开关与退相干开销，研究者提出了 bucket-brigade 等架构，但此前 QRAM 一直未在真实量子硬件上得到演示。天目 2 号所采用的超导量子比特，是当前构建量子处理器的主流技术路线之一。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/pdf/2305.10310v1">QRAM : A Survey and Critique</a></li>
<li><a href="https://www.emergentmind.com/topics/quantum-random-access-memory-qram">Quantum Random Access Memory ( qRAM )</a></li>
<li><a href="https://phys.org/news/2026-11-quantum-teleportation-method-weaker-entanglement.html">Quantum teleportation method uses weaker entanglement to transfer...</a></li>

</ul>
</details>

**标签**: `#quantum computing`, `#QRAM`, `#superconducting qubits`, `#hardware`, `#research breakthrough`

---

<a id="item-6"></a>
## [口服 daraxonrasib 联合化疗一线治疗胰腺癌客观缓解率达 60.7%](https://event.eortc.org/ena2026/2026/11/20/metastatic-pancreatic-cancer-responds-well-to-initial-treatment/) ⭐️ 8.0/10

在 2026 年 ENA 大会上，late-breaking 数据显示，口服 RAS(ON)多选择性抑制剂 daraxonrasib 联合吉西他滨/白蛋白紫杉醇，在 61 例既往未治疗的转移性胰腺癌患者中，确认客观缓解率达 60.7%，完全缓解率达 8.2%。 这是一个重要的临床里程碑，因为转移性胰腺癌素来致命且缺乏有效的靶向治疗选择；若在 III 期试验中得到验证，这种一线口服 RAS 抑制剂的高缓解率可能重塑治疗格局。 该研究为单臂 I/II 期试验，未设化疗对照组，研究者强调疗效对比需等待正在进行的 III 期试验；化疗的历史参照为 1 年生存率 22%–48%（MPACT 试验 35%，mFOLFIRINOX 48%），因此称其“远高于化疗”为时尚早。

telegram · zaihuapd · 11月21日 11:24

**背景**: Daraxonrasib（RMC-6236）是一种口服 RAS(ON)多选择性抑制剂，作用于活跃态 RAS，覆盖多种 KRAS/NRAS 突变，不同于仅针对单一突变的 G12C 抑制剂。该药已于 8 月 26 日获 FDA 批准（商品名 RASONQUE），用于既往治疗后的患者，依据是 III 期 RMC-302 试验，中位总生存期为 13.2 个月对 6.7 个月。胰腺癌中超过 90%的病例由 RAS 突变驱动，因此 RAS 是关键治疗靶点。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://hcp.rasonque.com/ras-on/moa">Mechanism of action | RASONQUE™ (daraxonrasib) | HCP</a></li>
<li><a href="https://ascopost.com/videos/asco-2026/brian-m-wolpin-and-eileen-m-oreilly-on-daraxonrasib-in-previously-treated-metastatic-pancreatic-cancer/">Brian M Wolpin and Eileen M OReilly on Daraxonrasib in Previously...</a></li>
<li><a href="https://www.nejm.org/doi/full/10.1056/NEJMoa1304369">Increased Survival in Pancreatic Cancer with nab-Paclitaxel ...</a></li>

</ul>
</details>

**标签**: `#oncology`, `#pancreatic-cancer`, `#RAS-inhibitor`, `#clinical-trials`, `#drug-development`

---