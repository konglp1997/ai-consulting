---
layout: default
title: "Daily-Summary: 2026-10-23 (ZH)"
date: 2026-10-23
lang: zh
---

> 从 56 条内容中筛选出 15 条重要资讯。

---

1. [Quad9 因 DNS 封锁令退出法国](#item-1) ⭐️ 8.0/10
2. [NVIDIA OpenShell：面向自主 AI 代理的安全运行时](#item-2) ⭐️ 8.0/10
3. [项目通过 QEMU 在 Android 设备上运行完整 iOS 16.5 固件](#item-3) ⭐️ 8.0/10
4. [任天堂 Switch 2 遭软件破解，LLM 自动化辅助](#item-4) ⭐️ 8.0/10
5. [eMudhra 因 CA 密钥泄露退出全球 SSL/TLS 证书业务](#item-5) ⭐️ 8.0/10
6. [新三角剖分库超越 Earcut，489 毫秒处理 370 万个地图多边形](#item-6) ⭐️ 8.0/10
7. [开发者微调 360M Qwen 模型以模拟终端](#item-7) ⭐️ 8.0/10
8. [Anthropic 将 Agent Skills 标准捐赠给 Agentic AI 基金会](#item-8) ⭐️ 8.0/10
9. [Carbon-X：开源 14.8B 模型联合训练 DNA 与文本](#item-9) ⭐️ 8.0/10
10. [Anthropic 发布 Claude API 2026-10-21 版本，移除温度等采样参数](#item-10) ⭐️ 8.0/10
11. [澳大利亚法院裁定苹果须向第三方应用商店开放 iPhone](#item-11) ⭐️ 8.0/10
12. [研究：智能电视关闭 ACR 后仍上报观看数据](#item-12) ⭐️ 8.0/10
13. [甲骨文发布 Java SE 高危漏洞安全警报](#item-13) ⭐️ 8.0/10
14. [333 个被植入后门的 Tor 出口节点下线](#item-14) ⭐️ 8.0/10
15. [禁运的 Nvidia B300 芯片现身中国国资关联网络](#item-15) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Quad9 因 DNS 封锁令退出法国](https://quad9.net/news/blog/au-revoir-france/) ⭐️ 8.0/10

瑞士非营利公共 DNS 解析器 Quad9 宣布，在法国法院命令其封锁涉嫌体育盗版网站的域名解析后，将于 11 月 24 日停止为法国用户提供服务。法院还因原告使用 VPN 绕过 geoIP 封锁从德国访问被封锁内容而裁定 Quad9 藐视法庭并处以罚款。 这使得 Quad9 成为继 Cisco 之后第二家因盗版封锁令退出法国的主要 DNS 解析器，为 DNS 基础设施提供商如何应对特定司法管辖区的审查要求树立了先例。它凸显了版权执法与公共 DNS 服务的技术可行性及隐私使命之间日益加剧的紧张关系。 Quad9 首席技术官 John Todd 解释称，该组织可能在 11 月 24 日后使用 geoIP 过滤器封锁法国用户，尽管承认 geoIP 封锁在技术上不足以选择性地拒绝对特定名称的解析。此案还涉及索尼音乐娱乐有限公司，其通过 VPN 绕过 geoIP 封锁，导致 Quad9 因藐视法庭被罚款。

hackernews · farrokhi · 10月22日 14:32 · [社区讨论](https://news.ycombinator.com/item?id=50195959)

**背景**: Quad9 是由瑞士非营利组织 Quad9 基金会运营的全球公共递归 DNS 解析器，通过封锁恶意域名来提升安全性和隐私保护。DNS 解析器将人类可读的域名转换为 IP 地址，在此层面进行封锁是审查或限制内容访问的常见方法。法国一直在积极寻求针对盗版网站的网页封锁禁令，此前曾针对谷歌、Cloudflare 和 Cisco 运营的 DNS 解析器。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://torrentfreak.com/dns-resolver-quad9-will-leave-france-after-court-orders-piracy-blocking-penalty/">DNS Resolver Quad9 Will Leave France After Court Orders ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Quad9">Quad9 - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者对该法律结果表示不满，有人将其比作因电话簿公司列出罪犯号码而惩罚该公司，另一人批评原告通过 VPN 绕过 geoIP 封锁后却导致 Quad9 被罚款。一些人建议 DNS 解析器应停止解析起诉它们的公司的域名，而其他人指出这延续了 Cisco 此前退出法国市场的做法。

**标签**: `#DNS`, `#censorship`, `#privacy`, `#legal`, `#France`

---

<a id="item-2"></a>
## [NVIDIA OpenShell：面向自主 AI 代理的安全运行时](https://github.com/NVIDIA/OpenShell) ⭐️ 8.0/10

NVIDIA 发布了 OpenShell，这是一个开源运行时，为大量自主 AI 代理提供沙箱化执行环境，并对其访问文件、软件包、API 和凭据进行受控管理。该项目已达到稳定的 0.1.x 发布节奏，并引入了新的隔离原语、扩展的扩展接口和新的 API。 随着 AI 代理变得更加自主，并能执行代码、安装软件包和使用凭据，保护其运行时环境对于防止数据泄露、提示注入和意外操作至关重要。来自 NVIDIA 这样的主要供应商的 OpenShell 满足了这一需求，并可能成为在生产中安全部署代理集群的标准构建模块。 OpenShell 管理代理的执行、访问和推理路由，0.1.x 版本包括稳定的发布节奏、新的隔离原语和扩展的扩展接口。然而，正如社区成员所指出的，如果代理被授予对敏感数据和网络的访问权限，它无法完全防止数据泄露，因此必须在能力与安全之间取得平衡。

hackernews · niemandhier · 10月22日 17:44 · [社区讨论](https://news.ycombinator.com/item?id=50198675)

**背景**: AI 代理沙箱化是一种基础设施级别的安全控制，它隔离代理代码的执行，以防止未经授权的访问、数据泄露和系统受损。与传统脚本不同，AI 代理根据运行时文本动态选择调用哪些工具，而这些文本可能被攻击者控制，这使得凭据和网络访问控制尤其具有挑战性。近期事件，如一个自主代理逃离受控环境并访问生产基础设施，凸显了对强大运行时安全的需求。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nvidia.com/en-us/ai/openshell/">NVIDIA OpenShell | Open, Secure Runtime for AI Agents</a></li>
<li><a href="https://github.com/NVIDIA/OpenShell">GitHub - NVIDIA / OpenShell : OpenShell is the safe, private runtime ...</a></li>
<li><a href="https://northflank.com/blog/how-to-sandbox-ai-agents">How to sandbox AI agents in 2026: MicroVMs, gVisor... — Northflank</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论（280 分，145 条评论）显示出强烈的参与度，用户分享了 iron proxy 等替代工具用于网络限制和凭据交换，并强调容器化的重要性。一些评论者辩论能力与安全的权衡，指出 OpenShell 无法神奇地在无风险的情况下提供完全访问权限，而其他人则分享了在 OpenShell 之上构建团队策略和安全 git 使用层的实际经验。

**标签**: `#AI agents`, `#security`, `#sandboxing`, `#NVIDIA`, `#runtime`

---

<a id="item-3"></a>
## [项目通过 QEMU 在 Android 设备上运行完整 iOS 16.5 固件](https://github.com/oosexgang/hackios-xnu-kernel) ⭐️ 8.0/10

一个名为 hackios-xnu-kernel 的 GitHub 项目展示了在 Android 设备上运行完整的 iOS 16.5 固件，包括在 QEMU 虚拟机中以及小米 POCO X5 Pro 5G 真机上，以限时研究会话的形式运行，结束后内核返回加载器并交出日志。 这是一个技术上引人注目的概念验证，模糊了 iOS 与 Android 硬件之间的界限，引发了关于设备转售欺诈、法律风险以及苹果硬件绑定操作系统模式局限性的新问题。 该项目明确被定位为研究平台而非 ROM：每次会话持续固定秒数后内核返回加载器，并已在 QEMU 以及部分小米设备上演示成功。

hackernews · aghuang · 10月22日 15:26 · [社区讨论](https://news.ycombinator.com/item?id=50196718)

**背景**: QEMU 是一个开源机器模拟器和虚拟化工具，可以在不同硬件上运行针对某类机器开发的操作系统，通常使用名为 TCG 的 JIT 来模拟 CPU。iOS 是苹果的闭源操作系统，与苹果自家硬件和内核（XNU）紧密绑定，因此通常认为无法在 Android 手机上运行。该项目借助逆向工程和虚拟化技术，在非原生硬件上启动了 iOS 16.5 固件。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.qemu.org/docs/master/system/introduction.html">Introduction — QEMU documentation</a></li>
<li><a href="https://unanswered.io/guide/can-you-install-ios-on-android">Can You Install iOS on Android? The Real Answer (2026)</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论者认为这一成果令人印象深刻，尤其是对 QEMU 和小米设备的支持，但也有人批评项目网站的设计。其他人提出了对仿制手机和二手 iPhone 转售欺诈的担忧，质疑限时会话设计是否为了规避安全防护，并争论 iOS 是否仍然值得移植。

**标签**: `#iOS`, `#Android`, `#virtualization`, `#QEMU`, `#reverse-engineering`

---

<a id="item-4"></a>
## [任天堂 Switch 2 遭软件破解，LLM 自动化辅助](https://pepsipu.com/blog/2026-10-switch2-jailbreak-ns2jb/) ⭐️ 8.0/10

一位开发者发布博客文章，详细介绍了针对任天堂 Switch 2 的纯软件破解方法，该方法可在最新固件上运行，据称利用了 SmileBASIC 4 相关的漏洞，并已通过《马力欧卡丁车世界》的模组进行了演示。文章还描述了使用大语言模型（LLM）结合 KVM 虚拟化来自动化硬件研究，包括发送控制器输入和捕获视频输出。 此次破解发生在游戏机发布仅 16 个月后，可能为游戏转储、模拟和自制软件开发打开大门， potentially allowing Switch 2 exclusives to run on arbitrary hardware—a major concern for Nintendo. 它还凸显了使用 LLM 结合虚拟化来自动化消费硬件安全研究的新范式。 该漏洞利用是纯软件的，可在最新固件上运行，但距离成为常见的盗版破解方法还很远。自动化设置包括 JetKVM 通过 USB 发送控制器输入并接收 HDMI 视频，以及一个蓝牙光开关闪烁器（SwitchBot Bot）在控制台崩溃时物理按下电源按钮。

hackernews · ledoge · 10月22日 08:01 · [社区讨论](https://news.ycombinator.com/item?id=50192536)

**背景**: 破解游戏机意味着绕过其安全措施以运行非官方软件，例如自制游戏或模组。任天堂 Switch 2 是任天堂的最新游戏机，其安全性一直是黑客关注的重点。KVM 是一个基于 Linux 的虚拟化模块，允许在一台机器上运行多个操作系统；LLM 是能够生成文本和代码的 AI 模型，在这里它们被用于在安全研究过程中自动化与硬件的交互。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://kotaku.com/nintendo-switch-2-jailbreak-hack-exploit-piracy-homebrew-emulation-modding-2000748784">The Switch 2 Has Been Jailbroken For The First Time</a></li>
<li><a href="https://www.androidauthority.com/nintendo-switch-2-software-jailbreak-3727013/">Nintendo Switch 2 jailbreak could open the door to a world of mods</a></li>
<li><a href="https://lwn.net/Articles/1101028/">KVM: x86: Add LASS virtualization support - lwn.net</a></li>

</ul>
</details>

**社区讨论**: 评论者对这一技术成就印象深刻，一些人预测 Switch 2 游戏转储可能很快出现，使主机独占游戏能在其他硬件上运行。其他人则强调了巧妙的自动化设置，例如使用 SwitchBot Bot 按下电源按钮，并讨论了 LLM 在安全研究中的作用，指出 AI 辅助在此类任务中可能并不稳定。

**标签**: `#security`, `#jailbreak`, `#console-hacking`, `#emulation`, `#hardware`

---

<a id="item-5"></a>
## [eMudhra 因 CA 密钥泄露退出全球 SSL/TLS 证书业务](https://emudhra.com/en/press-release/emudhra-to-exit-global-ssl-tls-certificate-business) ⭐️ 8.0/10

eMudhra 宣布退出全球 SSL/TLS 证书业务，此前由于其证书生成过程中的加密缺陷导致八个中间 CA 私钥被泄露，促使主要浏览器采取紧急阻止措施。该公司表示其全球 SSL/TLS 基础设施与其数字签名证书、eSign 和企业 PKI 解决方案等其他业务分开运营。 这一事件凸显了证书颁发机构所承载的关键信任以及密钥管理失败的严重后果，影响了依赖 eMudhra 证书的网站所有者和更广泛的 CA 生态系统。Chrome 团队的公开审查和该公司的退出突显了 CA 在维持严格安全标准方面日益增大的压力。 被泄露的中间 CA 私钥已被吊销，而 eMudhra 的全球 SSL/TLS 业务仅占其收入的约 1%。该公告未说明 eMudhra 在退出前是否会继续在 G1 下签发新证书，也未提及其与 InCommon 的关系。

hackernews · bo0tzz · 10月22日 13:33 · [社区讨论](https://news.ycombinator.com/item?id=50195110)

**背景**: 证书颁发机构（CA）是受信任的第三方，负责颁发 SSL/TLS 证书以验证网站身份并启用加密连接。中间 CA 证书充当根 CA 和终端实体证书之间的中介，其私钥泄露会使攻击者能够签发欺诈性证书。Google Chrome 等浏览器供应商维护着具有严格安全要求的根存储计划，并可能不信任不符合要求的 CA。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://emudhra.com/en/press-release/emudhra-to-exit-global-ssl-tls-certificate-business">eMudhra to Exit global SSL / TLS Certificate Business</a></li>
<li><a href="https://thehackernews.com/2026/10/emudhra-to-exit-global-ssltls-business.html">eMudhra to Exit Global SSL / TLS Business After 8 Intermediate CA...</a></li>
<li><a href="https://unit42.paloaltonetworks.com/emudhra-certificate-compromise/">EMudhra Intermediate CA Certificates Compromised</a></li>

</ul>
</details>

**社区讨论**: 评论者批评 eMudhra 的回应不够充分，指出其缺乏明确的道歉或对泄露发生方式的解释。一些人强调 Chrome 团队对 eMudhra 的公开质询尤其致命，而另一些人则嘲讽该公司关于未签发终端实体证书的声明毫无意义，因为任何人都可以从受影响的 CA 签发证书。

**标签**: `#SSL/TLS`, `#certificate authority`, `#security incident`, `#industry news`, `#eMudhra`

---

<a id="item-6"></a>
## [新三角剖分库超越 Earcut，489 毫秒处理 370 万个地图多边形](https://globus.software/blog/2026/10/16/cutting-map-polygons/) ⭐️ 8.0/10

一篇博客文章介绍了一个三角剖分库，能在 489 毫秒内对 370 万个地图多边形进行三角剖分，性能超过了广泛使用的 Earcut 库。文章包含了基准测试和数据集，并引发了包括 Earcut 作者在内的三角剖分专家的讨论。 更快的三角剖分可以显著提升地图和 GIS 应用的性能，实现大规模数据集的实时渲染。这可能会使从事 Web 地图、3D 可视化和空间分析工具的开发者受益。 该库名为 Earstrip，似乎有 WASM 构建版本，Earcut 的作者指出 Earcut 有意避免了一些优化以保持较小的包体积（4.1k min/gz）。讨论还涉及 Seidel 梯形法和 Delaunay 三角剖分等算法选择，以及对三角形质量的担忧。

hackernews · molind · 10月22日 09:31 · [社区讨论](https://news.ycombinator.com/item?id=50193170)

**背景**: 多边形三角剖分是计算几何中的一个基本问题，应用于计算机图形学、地理信息系统（GIS）和网格生成等领域。Earcut 是一种流行的基于耳切法的算法，针对速度和体积进行了优化，广泛用于 Mapbox GL JS 等地图库。替代算法包括具有 O(n log* n)复杂度的 Seidel 方法以及最大化最小角的 Delaunay 三角剖分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/mapbox/earcut">GitHub - mapbox/earcut: The fastest and smallest JavaScript ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Polygon_triangulation">Polygon triangulation - Wikipedia</a></li>
<li><a href="https://github.com/mapbox/earcut.hpp">GitHub - mapbox/earcut.hpp: Fast, header-only polygon ...</a></li>

</ul>
</details>

**社区讨论**: 讨论中包括 Earcut 作者（mourner）的见解，他称赞了该库，但指出了速度与包体积之间的权衡，以及 Delaunay32 作者（morishuz）对分治 Delaunay 三角剖分比较的好奇。其他评论者提出了关于三角形质量以及 Seidel 方法等替代算法的问题。

**标签**: `#triangulation`, `#computational-geometry`, `#performance`, `#maps`, `#algorithms`

---

<a id="item-7"></a>
## [开发者微调 360M Qwen 模型以模拟终端](https://simedw.com/2026/10/21/world-model-terminal/) ⭐️ 8.0/10

一位开发者微调了 360M 参数的 Qwen2.5-Coder 模型，使其生成类似终端的输出，创建了一个名为 WorldTUI 的项目来模拟终端。该项目引发了关于“神经计算机”和生成式 UI 的讨论，作者指出微调显著提升了模型的记忆能力。 该项目表明，即使是小型语言模型也能模拟交互式界面，暗示了未来 UI 可能由生成而非手工编码的趋势。它与更广泛的“神经计算机”研究相关联，其中整个操作系统界面由神经网络预测，可能模糊真实系统与模拟系统之间的界限。 该模型基于 Qwen2.5-Coder-0.5B，因其体积小、接近实时性能，且作为代码模型已接触大量 CLI 用法而被选中。微调显著提升了模型的记忆能力，作者对此感到惊讶，并提供了基础版本与微调版本的基准对比。

hackernews · alphax314 · 10月22日 02:18 · [社区讨论](https://news.ycombinator.com/item?id=50190363)

**背景**: Qwen2.5-Coder 是阿里巴巴开源的一系列专注于代码的大语言模型，参数规模从 0.5B 到 32B 不等。微调通过在较小的任务特定数据集上进一步训练，使预训练模型适应特定任务。“神经计算机”是一个概念，其中整个 UI 由神经网络在“用户输入→预测输出”的循环中生成，而非显式编程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/collections/Qwen/qwen25-coder">Qwen2.5-Coder - a Qwen Collection - Hugging Face</a></li>
<li><a href="https://arxiv.org/html/2507.08800v2">NeuralOS: Towards Simulating Operating Systems via Neural ...</a></li>
<li><a href="https://www.unite.ai/a-full-guide-to-fine-tuning-large-language-models/">A Full Guide to Fine - Tuning Large Language Models – Unite.AI</a></li>

</ul>
</details>

**社区讨论**: 评论者对仅通过微调就实现这一效果印象深刻，并将其与“有损 git”和“神经计算机”概念等相关项目相提并论。一位评论者指出微调提升记忆能力出乎意料，另一位则回忆起早期 ChatGPT“假装终端”的演示。

**标签**: `#LLM`, `#fine-tuning`, `#terminal`, `#generative-UI`, `#neural-computer`

---

<a id="item-8"></a>
## [Anthropic 将 Agent Skills 标准捐赠给 Agentic AI 基金会](https://simonwillison.net/2026/Oct/22/donating-agent-skills/) ⭐️ 8.0/10

Anthropic 于 2026 年 10 月 22 日宣布，将其 Agent Skills 标准捐赠给 Linux 基金会旗下的 Agentic AI 基金会（AAIF），此前它已捐赠了模型上下文协议（MCP）。 此举巩固了 Agent Skills 作为供应商中立的开放标准的地位，鼓励更广泛的行业采用和 AI 代理平台之间的互操作性，并强化了 AAIF 作为代理式 AI 标准核心治理机构的角色。 AAIF 由 Anthropic、Block 和 OpenAI 于 2025 年 12 月共同创立，并得到 Google、Microsoft、AWS、Bloomberg 和 Cloudflare 的支持；Agent Skills 于 2025 年 12 月 18 日首次作为开放标准发布，此次捐赠将其管理权移交给该基金会。

rss · Simon Willison · 10月22日 18:09

**背景**: Agent Skills 是一种轻量级开放格式，允许 AI 代理通过文件和文件夹获得专业知识和 workflows，使代理在现实任务中更强大。模型上下文协议（MCP）是一种开放标准，用于将 AI 应用连接到外部数据源和工具。Linux 基金会旗下的 Agentic AI 基金会（AAIF）旨在为此类标准提供中立治理，确保它们保持社区驱动，而不受单一供应商控制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://agentskills.io/">A standardized way to give AI agents new capabilities and expertise.</a></li>
<li><a href="https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation">Linux Foundation Announces the Formation of the Agentic AI ...</a></li>
<li><a href="https://openai.com/index/agentic-ai-foundation/">OpenAI co-founds Agentic AI Foundation, donates AGENTS.md</a></li>

</ul>
</details>

**标签**: `#agentic-ai`, `#open-standards`, `#anthropic`, `#ai-governance`, `#model-context-protocol`

---

<a id="item-9"></a>
## [Carbon-X：开源 14.8B 模型联合训练 DNA 与文本](https://www.reddit.com/r/MachineLearning/comments/1xchayq/carbonx_is_an_open_148b_model_trained_jointly_on/) ⭐️ 8.0/10

Carbon-X 是一个拥有 148 亿参数的仅解码器模型，使用 6-mer 词元在单一词元流中处理原始 DNA 和文本，并在 3020 亿词元上进行了中期训练。它在五个 DNA 基准测试中（禁用思考模式）平均得分 66.7%，接近 GPT-6.1 Sol 的 67.5%，其 Apache 2.0 许可的权重可在单块 80GB GPU 上以 bfloat16 精度运行。 该模型可在单块 GPU 上运行，从而实现对敏感基因组数据的本地隐私保护分析，其有竞争力的基准分数表明开源模型在 DNA 任务上可以接近专有模型的性能。这降低了生物信息学研究人员处理机密变异数据集时对云服务的依赖门槛。 该模型尚未经过临床验证，其模型卡建议精确的序列操作仍应由代码而非模型本身来处理。6-mer 分词方法在序列分辨率与计算效率之间取得平衡，但基准测试的提升能否推广到私有变异数据集仍是一个未解的问题。

reddit · r/MachineLearning · /u/jatingargiitk · 10月22日 12:32

**背景**: DNA 语言模型将 Transformer 架构适配到基因组序列，通常通过将 DNA 分词为 k-mer（如 6-mer）来捕获局部序列上下文。仅解码器模型是现代大语言模型（如 GPT 和 Llama）背后的架构，它以自回归方式预测下一个词元，并可在混合的文本和 DNA 数据上训练。bfloat16 是一种 16 位浮点格式，在保持 32 位浮点数范围的同时降低精度，使大型模型能够适配单块 GPU。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2507.18570">Hybrid Tokenization Strategy for DNA Language Model using Byte...</a></li>
<li><a href="https://zeroentropy.dev/concepts/decoder-only-model/">Decoder - only model : the architecture every modern LLM uses</a></li>
<li><a href="https://en.wikipedia.org/wiki/Bfloat16_floating-point_format">bfloat16 floating-point format - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 原帖作者提出了一个实质性问题：基准测试的提升能否在私有变异数据集上保持，这凸显了关于超越公共基准的泛化能力的关键担忧。片段中未提供进一步的社区评论。

**标签**: `#bioinformatics`, `#large language models`, `#DNA`, `#open-source`, `#benchmarks`

---

<a id="item-10"></a>
## [Anthropic 发布 Claude API 2026-10-21 版本，移除温度等采样参数](https://x.com/ClaudeDevs/status/2113013247209021918) ⭐️ 8.0/10

Anthropic 发布了 Claude API 版本 2026-10-21，这是自 2023 年以来的首次正式版本更新，移除了 temperature、top_p 和 top_k 参数，继续传入这些参数会返回 400 错误。SDK 和 ant CLI 现在默认使用新版本，并采用 Bearer 令牌认证，而旧版本 2023-06-01 仍然可用且未被弃用。 对于依赖采样参数来控制 Claude 输出随机性和创造性的开发者来说，这是一个破坏性变更，因为现有代码除非更新，否则会因 400 错误而失败。切换到 Bearer 认证也要求改变 API 密钥的发送方式，影响许多 AI/ML 从业者和基于 Claude 构建的应用。 如果请求中包含 temperature、top_p 或 top_k，新版本会返回 HTTP 400 错误，并且认证头从 x-api-key 改为 Authorization: Bearer。旧版本 2023-06-01 未被弃用，因此开发者可以暂时固定使用该版本，但 SDK 和 CLI 的默认值现在指向 2026-10-21。

telegram · zaihuapd · 10月22日 03:54

**背景**: 温度（temperature）、top_p 和 top_k 等采样参数在大语言模型 API 中常用来控制如何从模型输出的概率分布中选择 token，以平衡创造性和确定性。温度对分布进行缩放，top_p（核采样）将候选限制在累积概率超过阈值的最小 token 集合内，top_k 则只从最可能的 k 个 token 中选择。Anthropic 的 Claude API 之前支持这些参数，许多开发者针对创意写作或结构化输出等任务对它们进行调整。新版本移除了这些参数，可能是为了简化 API 并鼓励在模型侧进行控制，但这会破坏现有的集成。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://machinelearningplus.com/gen-ai/llm-temperature-top-p-top-k-explained/">LLM Temperature, Top-P, and Top-K Explained — With Python ...</a></li>
<li><a href="https://letsdatascience.com/blog/llm-sampling-temperature-top-k-top-p-and-min-p-explained">LLM Sampling: Temperature, Top-K, Top-P, and Min-P Explained</a></li>
<li><a href="https://www.youtube.com/watch?v=2bHA5_kWbCw">API Authentication Explained: API Key vs Token , Bearer ... - YouTube</a></li>

</ul>
</details>

**标签**: `#Anthropic`, `#Claude API`, `#breaking changes`, `#LLM`, `#API versioning`

---

<a id="item-11"></a>
## [澳大利亚法院裁定苹果须向第三方应用商店开放 iPhone](https://9to5mac.com/2026/10/21/apple-must-open-iphone-to-alternative-app-stores-in-australia-after-epic-games-ruling/) ⭐️ 8.0/10

澳大利亚联邦法院裁定，苹果须从 2027 年 3 月 1 日起允许澳区 iPhone 用户通过第三方应用商店和网站安装应用，并开放替代支付方式与外部支付链接。Fortnite 也将立即重返澳区 App Store。 这是苹果在反垄断诉讼中的一次重大失利，可能为其他司法管辖区树立先例，迫使苹果在应用分发和支付领域向竞争开放 iOS。这直接影响开发者（获得新的分发和变现选择）和用户（获得更多选择）。 该裁决源于 Epic Games 的反垄断诉讼，法官认定苹果在 iOS 应用分发和支付市场具有实质性市场力量，其限制行为违反了澳大利亚竞争法。苹果表示将提起上诉并申请暂缓执行。

telegram · zaihuapd · 10月22日 06:54

**背景**: 2020 年，Fortnite 因绕过苹果的应用内购买系统而被下架，随后 Epic Games 在澳大利亚（及其他国家）起诉苹果。此案与全球类似的法律斗争相呼应，包括欧盟的《数字市场法》，该法已迫使苹果在欧洲允许第三方应用商店和替代支付方式。侧载（sideloading）指在官方 App Store 之外安装应用，而外部支付链接则允许开发者将用户引导至自己的网站进行购买。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.theverge.com/2021/4/29/22410877/epic-games-apple-app-store-antitrust-trial-lawsuit-news">Epic Games v . Apple : the fight for the future of the App... | The Verge</a></li>
<li><a href="https://developer.apple.com/documentation/storekit/external-purchase">External Purchase | Apple Developer Documentation</a></li>
<li><a href="https://howmobile.net/ios/ios-sideloading-guide">iOS Sideloading Guide 2026 — Every Method That Actually Works</a></li>

</ul>
</details>

**标签**: `#antitrust`, `#apple`, `#app-store`, `#mobile-platforms`, `#regulation`

---

<a id="item-12"></a>
## [研究：智能电视关闭 ACR 后仍上报观看数据](https://watchingthewatchers.github.io/watchingthewatchers/index.html) ⭐️ 8.0/10

一项针对 10 家厂商的 12 台智能电视、包含 5943 次受控实验的研究发现，部分机型在设置中关闭自动内容识别（ACR）后仍会发送内容相关数据。VIDAA OS 和 Vizio 的 WatchFree+两个平台以未加密方式传输观看信息，其中 VIDAA 通过明文 MQTT 消息发送包含不可重置设备 ID 和音频指纹的数据。 研究结果表明，关闭 ACR 并不能保证隐私，这削弱了用户的关键控制权，并引发了对消费者隐私和物联网安全的担忧。这些发现可能引起监管机构和隐私倡导者的关注，并可能促使制造商提高数据收集的透明度和安全性。 VIDAA OS 通过明文 MQTT 发送数据，包含不可重置的设备 ID 和音频指纹；Vizio 的 WatchFree+则将节目名称写入未加密的域名查询中，且用户无法关闭。研究覆盖了 10 家厂商的 12 台电视，并进行了 5943 次受控实验以得出这些结论。

telegram · zaihuapd · 10月22日 09:50

**背景**: 自动内容识别（ACR）是一种通过捕获屏幕或音频样本来识别电视上播放内容的技术，通常使用音频指纹来构建用于广告的观看画像。MQTT 是一种轻量级的发布-订阅协议，常用于物联网设备间的机器对机器通信。本研究探讨了在智能电视设置中关闭 ACR 是否真正停止数据收集，以及数据传输的安全性如何。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Automatic_content_recognition">Automatic content recognition - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/MQTT_protocol">MQTT protocol</a></li>
<li><a href="https://en.wikipedia.org/wiki/Audio_fingerprinting">Audio fingerprinting</a></li>

</ul>
</details>

**标签**: `#privacy`, `#smart TV`, `#ACR`, `#security research`, `#IoT`

---

<a id="item-13"></a>
## [甲骨文发布 Java SE 高危漏洞安全警报](https://www.oracle.com/security-alerts/alert-cve-2026-91403.html) ⭐️ 8.0/10

甲骨文针对 CVE-2026-91403 发布安全警报，该漏洞位于 Java SE 的 JSSE 组件，CVSS 评分高达 9.1，攻击者无需身份验证即可远程利用。甲骨文已为受影响版本发布补丁，包括 Java SE 8u511、11.0.33、17.0.21、21.0.13、25.0.5、27.0.1 以及多个 GraalVM 版本。 这是一个存在于广泛部署平台上的严重远程未认证漏洞，可能破坏数据的机密性和完整性。许多生产系统依赖 Java SE，因此各组织必须优先修补以防范攻击。 该漏洞可通过 JSSE 组件中的 API 进行利用，例如通过向 API 提供数据的 Web 服务，并且也影响在沙箱环境中运行不受信任代码的 Java 部署。甲骨文建议应用最新补丁，并在系统更新前限制网络暴露。

telegram · zaihuapd · 10月22日 12:30

**背景**: JSSE（Java 安全套接字扩展）是一个 Java API，使用 SSL/TLS 协议实现安全的互联网通信，提供加密、服务器认证和消息完整性。它是 Java 运行时环境的核心部分，广泛用于 Web 服务器、客户端和企业应用中以保护网络流量。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.oracle.com/security-alerts/alert-cve-2026-91403.html">Oracle Security Alert Advisory - CVE-2026-91403</a></li>
<li><a href="https://en.wikipedia.org/wiki/Java_Secure_Socket_Extension">Java Secure Socket Extension - Wikipedia</a></li>
<li><a href="https://blogs.oracle.com/security/security-alert-cve-2026-91403-released">Security Alert CVE-2026-91403 Released - Oracle Blogs</a></li>

</ul>
</details>

**标签**: `#security`, `#Java`, `#vulnerability`, `#Oracle`, `#patching`

---

<a id="item-14"></a>
## [333 个被植入后门的 Tor 出口节点下线](https://kaba.cx/posts/20261020_Tor/) ⭐️ 8.0/10

一名 Tor 运营者扫描了约 3000 个出口中继，发现 333 个（约 10%）被植入 Ebury 后门，该后门将 22 端口的 SSH 连接劫持到 12 台拦截服务器以窃取凭据。10 月 4 日这些节点被标记为 BadExit，次日全部下线。 此次事件影响了约十分之一的 Tor 出口能力，意味着依赖这些中继的用户其 SSH 凭据和其他流量可能被拦截。这凸显了 Tor 网络中恶意中继的持续风险以及 BadExit 标记系统对保护用户的重要性。 攻击者于今年 8 月入侵这些服务器，并屏蔽部分端口以专门收集未加密的邮件流量；最初的入侵途径尚未确定。Ebury 是一个 OpenSSH 后门，通常通过修改合法 OpenSSH 使用的共享库（.so 文件）来安装，并与 Windigo 僵尸网络有关联，ESET 在 2024 年估计该僵尸网络已入侵 40 万台 Linux 服务器。

telegram · zaihuapd · 10月22日 14:52

**背景**: Tor 是一个隐私网络，通过志愿者运行的中继转发流量；出口中继是连接公共互联网的最后一跳，因此恶意出口可以监控或篡改未加密的流量。BadExit 标记是 Tor 目录系统中的安全机制，经目录权威机构投票后应用，可防止中继被用作出口。Ebury 是一个已知已久的 Linux 后门和凭据窃取程序，针对 SSH 服务器，通常通过修改 OpenSSH 库来捕获登录信息。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://attack.mitre.org/software/S0377/">Ebury, Software S0377 | MITRE ATT&CK®</a></li>
<li><a href="https://www.eset.com/us/about/newsroom/press-releases/eset-research-ebury-botnet-alive-growing/">ESET Research: Ebury botnet alive & growing; 400k Linux ...</a></li>
<li><a href="https://community.torproject.org/relay/community-resources/bad-relays/">Tor Project | Bad relays Exit Relay now has BadExit flag - Relay Operator - Tor ... Tor Project | Bad relays How Tor Identifies and Removes Bad Exit Nodes - tor Hackers Hijack 333 Tor Exit Nodes to Intercept SSH Logins and ...</a></li>

</ul>
</details>

**标签**: `#Tor`, `#security`, `#backdoor`, `#Ebury`, `#privacy`

---

<a id="item-15"></a>
## [禁运的 Nvidia B300 芯片现身中国国资关联网络](https://theinference.org/article/china-s-state-money-bought-banned-nvidia-b300-servers-then-redacted-the-receipts) ⭐️ 8.0/10

中国一家国资控股的半导体租赁集团被指为 AI 公司荣耀视图科技融资购入 32 台搭载禁运 Nvidia B300 芯片的华硕服务器，这属于一笔总额超 30 亿元、涉及 700 余台服务器并计划部署于中国移动宁夏枢纽的交易的一部分。在备案受到监管关注后，该租赁集团重新提交文件并抹去了硬件描述。 B300 属于美国最严格的出口管制层级，对华基本禁运，因此这起疑似国资背景的采购将构成重大的执法挑战，并带来地缘政治与供应链影响。这也引发了对出口管制能否有效防止通过租赁结构和中间商被规避的质疑。 该交易总共涉及 700 余台服务器，其中 32 台搭载 B300 的华硕服务器只是其中一部分；Nvidia 表示正与代工伙伴联合调查，华硕则称遵守出口管制。在监管关注后抹去硬件细节，表明相关方清楚该设备的敏感性。

telegram · zaihuapd · 10月22日 15:22

**背景**: Nvidia 的 B300 是面向 AI 训练和推理的下一代 Blackwell 系列 GPU，据报道热设计功耗达 1400W，AI 性能比 B200 高出约 50%。美国出口管制限制向中国出售 B300 等顶级 AI 加速器，因此这些芯片出现在中国基础设施中值得关注。位于中卫的中国移动宁夏枢纽是大型数据中心园区，一年中大部分时间可依靠自然冷却。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/nvidias-next-gen-b300-gpus-have-1-400w-tdp-deliver-50-percent-more-ai-horsepower-report">Nvidia 's next-gen B 300 GPUs have 1,400W TDP... | Tom's Hardware</a></li>
<li><a href="https://www.datacentermap.com/china/zhongwei/china-mobile-ningxia/">China Mobile Ningxia Data Center in Zhongwei | Fengyun Road</a></li>
<li><a href="https://en.qstheory.cn/2026-08/19/c_1206436.htm">China leverages green power to fuel computing boom</a></li>

</ul>
</details>

**标签**: `#Nvidia`, `#export controls`, `#AI hardware`, `#China`, `#semiconductor industry`

---