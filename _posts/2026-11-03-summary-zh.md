---
layout: default
title: "Daily-Summary: 2026-11-03 (ZH)"
date: 2026-11-03
lang: zh
---

> 从 70 条内容中筛选出 11 条重要资讯。

---

1. [MIT CSAIL 的 Astra 编辑 Qwen 权重以提升数学性能](#item-1) ⭐️ 9.0/10
2. [Linux 内核 IPv4 TCP 高危释放后使用漏洞（CVE-2026-98432）需立即修补](#item-2) ⭐️ 9.0/10
3. [vLLM v0.33.0rc3：升级 PyTorch 2.14、仅支持 CUDA 13.0 并新增多款模型](#item-3) ⭐️ 8.0/10
4. [Subvocal 智能眼镜利用射频传感将无声语音解码为文本](#item-4) ⭐️ 8.0/10
5. [陶哲轩在 AI 时代倡导“无我数学”](#item-5) ⭐️ 8.0/10
6. [Ubuntu 近三周仍未修复严重 Linux 内核 0day 远程代码执行漏洞](#item-6) ⭐️ 8.0/10
7. [欧洲超市冷柜遭第二起疑似网络攻击](#item-7) ⭐️ 8.0/10
8. [OpenAI 构建 Pando：面向 Codex 规模开发的 Git 兼容后端](#item-8) ⭐️ 8.0/10
9. [ChatGPT 分享链接漏洞可致账号被接管](#item-9) ⭐️ 8.0/10
10. [WIRED：400 多个 AI 应用暗藏色情深伪功能](#item-10) ⭐️ 8.0/10
11. [Anthropic 前三季度营收 332 亿美元，净亏损 1040 亿美元](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [MIT CSAIL 的 Astra 编辑 Qwen 权重以提升数学性能](https://rikiyat.github.io/blog/weight-space-programming/) ⭐️ 9.0/10

MIT CSAIL 的研究人员报告称，前沿大语言模型 GPT-6 Astra 能够原生读取和写入神经网络权重，无需梯度下降或训练循环。通过仅修改 Qwen3.5-0.8B 约 0.016%的权重，Astra 将其 MATH-500 分数从 7.9%提升至 48.1%。 这展示了 AI 可解释性和模型编辑领域可能的范式转变，表明大语言模型可能直接理解和操纵其他模型的内部表示。如果得到验证，它可能实现更高效的模型改进，并引发关于递归自我完善的讨论。 Astra 通过从第 15 层和第 19 层的 64 个输出列中减去一个方向，识别并修复了小型推理模型中的循环失败，影响了 131,072 个权重。该干预仅涉及模型约 0.016%的权重，却使数学准确率提升了 5 倍。

hackernews · dbreunig · 11月2日 18:21 · [社区讨论](https://news.ycombinator.com/item?id=50341174)

**背景**: Qwen 是阿里云开发的一系列开放权重的大语言模型，其中 Qwen3.5-0.8B 是一个小型变体。模型编辑通常涉及重新训练或微调，但权重空间编程允许大语言模型直接操纵权重。递归自我完善是指 AI 系统提升自身能力，可能引发智能爆炸。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://explainx.ai/blog/weight-space-programming-gpt-6-astra-edits-qwen3-5-0-8b-weights-math-7-9-to-48-1-mit-csail-2026">GPT-6 Astra Edits Qwen Weights: MATH-500 7.9% to 48.1% ...</a></li>
<li><a href="https://venturebeat.com/technology/like-gene-editing-for-neural-networks-mit-researchers-used-gpt-6-astra-to-edit-qwens-open-weights-directly-boosting-math-performance">VentureBeat‘Like gene editing for neural networks’: MIT ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Recursive_self-improvement">Recursive self - improvement - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者对 Astra 的能力表示震惊和敬畏，一些人推测这可能是一种涌现能力，或是为了递归自我完善而用神经权重数据训练的结果。其他人指出大语言模型能快速掌握复杂系统，并讨论了权重编辑的技术细节。

**标签**: `#LLM`, `#model editing`, `#interpretability`, `#Qwen`, `#recursive self-improvement`

---

<a id="item-2"></a>
## [Linux 内核 IPv4 TCP 高危释放后使用漏洞（CVE-2026-98432）需立即修补](https://t.me/zaihuapd/44866) ⭐️ 9.0/10

Linux 内核 IPv4 TCP 栈中发现一个高危释放后使用漏洞（CVE-2026-98432），未经认证的远程攻击者无需用户交互即可利用。Anthropic 已公布针对 MPTCP 监听端口的远程代码执行利用示例。 该漏洞可远程利用且已有公开利用代码，对任何暴露于网络的 Linux 服务器构成严重风险。Go 安全团队警告称，自 Go 1.24 起 Linux 上默认启用 MPTCP，这意味着许多生产环境中的 Go 服务在管理员不知情的情况下处于暴露状态，显著扩大了攻击面。 该漏洞不仅影响 MPTCP 场景；即使没有 MPTCP 监听的服务也可能受到类似攻击。Go 1.24 及更高版本在 Linux 上会自动为 TCP 监听器启用 MPTCP（如果内核支持），因此管理员应检查并在不需要时禁用 MPTCP，并及时应用内核更新。

telegram · zaihuapd · 11月3日 02:37

**背景**: 释放后使用漏洞是指程序在释放内存后继续使用指向该内存的指针，可能导致任意代码执行或崩溃。MPTCP（多路径 TCP）是标准 TCP 的扩展，允许设备在单个连接中同时使用多个网络接口，以提高吞吐量和可靠性。自 Go 1.24 起，Go 的 net 包在 Linux 上默认对监听器启用 MPTCP，这意味着许多基于 Go 的网络服务可能在不知情的情况下暴露了 MPTCP 端点。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/golang/go/issues/82717">proposal: net: Disable MPTCP by default · Issue #82717 · golang/ go</a></li>
<li><a href="https://www.bleepingcomputer.com/news/security/critical-linux-kernel-flaw-allows-remote-root-attacks-on-mptcp-servers/">Critical Linux kernel flaw allows remote root attacks on MPTCP servers</a></li>
<li><a href="https://docs.kernel.org/networking/mptcp.html">Multipath TCP ( MPTCP ) — The Linux Kernel documentation</a></li>

</ul>
</details>

**标签**: `#linux-kernel`, `#security`, `#vulnerability`, `#tcp`, `#go`

---

<a id="item-3"></a>
## [vLLM v0.33.0rc3：升级 PyTorch 2.14、仅支持 CUDA 13.0 并新增多款模型](https://github.com/vllm-project/vllm/releases/tag/v0.33.0rc3) ⭐️ 8.0/10

vLLM 发布了 v0.33.0rc3，这是一个包含 927 次提交、389 位贡献者的大型版本，新增了多款模型，升级至 PyTorch 2.14.0，放弃 CUDA 12.9 支持而仅提供 CUDA 13.0 的 wheel 和镜像，并引入了与 libtorch ABI 稳定的 CUDA wheel。 该版本对部署大语言模型的从业者影响显著，因为它为投机解码和 NVIDIA/AMD 硬件带来了性能提升，新增了模型支持并增强了 API，而仅支持 CUDA 13.0 的转变可能要求用户更新驱动和环境。 值得注意的技术细节包括移除了 Medusa 和 MLP 投机器，弃用了`--mamba-cache-mode`，新增了`/v1/decisions`端点，并且 NIXL 连接器需要 NIXL 1.5 或更新版本；该版本是候选版，用户应在生产部署前进行测试。

github · khluu · 11月2日 10:10

**背景**: vLLM 是一个开源的高吞吐量大语言模型推理和服务引擎。它依赖 PyTorch 和 CUDA 进行 GPU 加速，并支持投机解码等功能来加速生成。ABI 稳定的 wheel 意味着它可以与不同版本的 PyTorch 配合使用而无需重新编译，从而简化部署。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/vllm-project/vllm/issues/26946">[RFC]: Enable libtorch - ABI - stable vLLM cuda wheels · Issue #26946...</a></li>
<li><a href="https://docs.nvidia.com/cuda/archive/13.0.0/cuda-toolkit-release-notes/index.html">CUDA Toolkit 13.0 - Release Notes — Release Notes 13.0 ...</a></li>
<li><a href="https://huggingface.co/blog/moe">Mixture of Experts Explained - Hugging Face</a></li>

</ul>
</details>

**标签**: `#vllm`, `#llm-inference`, `#pytorch`, `#cuda`, `#model-serving`

---

<a id="item-4"></a>
## [Subvocal 智能眼镜利用射频传感将无声语音解码为文本](https://news.ycombinator.com/item?id=50340088) ⭐️ 8.0/10

The Subvocal Company（YC F26）由 Aarush 和 Arnav 创立，展示了一款智能眼镜，利用射频（RF）传感技术将无声口型或内部言语解码为文本，速度达到正常语速。团队在发现肌电（EMG）传感不实用后转向射频，经过大量模拟和原型制作，最终打造出内置天线的定制眼镜。 这项技术有望在公共或安静环境中实现隐蔽的免手文本输入，惠及无障碍用户和任何需要无声沟通的人。同时，它也引发了关于推断内部状态和持续传感可能性的重要隐私问题。 眼镜发射类似蓝牙的无线电波，穿过面部并被舌头、嘴唇和软腭的运动调制；基础模型将这些扰动解码为文本。系统即使在闭唇（内部言语）时也能工作，但由于面部解剖结构差异，跨用户泛化仍是一个挑战，需要大规模数据扩展。

hackernews · aarushyadav · 11月2日 17:16

**背景**: 无声语音识别旨在将默读或无声口型转换为数字输出，而不发出声音。先前的方法包括肌电电极（如 MIT 的 AlterEgo）和基于摄像头的唇读，但射频传感提供了一种非接触、保护隐私的替代方案，可以“看到”口腔内部。The Subvocal Company 是一家 YC 支持的初创公司，致力于开发用于无声语音转文本的智能眼镜。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://runany.dev/blog/subvocal/">Subvocal: glasses that type what you mouth silently</a></li>
<li><a href="https://en.wikipedia.org/wiki/Subvocal_recognition">Subvocal recognition - Wikipedia</a></li>
<li><a href="https://patents.google.com/patent/US12469488B2/en">US12469488B2 - Methods for non-audible speech ... - Google Patents</a></li>

</ul>
</details>

**社区讨论**: 评论者对这项技术在无障碍和免手计算方面的潜力表示兴奋，同时提出了关于眼镜适配不同脸型和信号处理负载（眼镜端还是应用端）的实际担忧。隐私是一个主要主题，涉及推理发生的位置、离线功能以及与 LipFlow 和 LipNet 等现有唇读项目的比较。

**标签**: `#smart-glasses`, `#silent-speech`, `#accessibility`, `#privacy`, `#human-computer-interaction`

---

<a id="item-5"></a>
## [陶哲轩在 AI 时代倡导“无我数学”](https://terrytao.wordpress.com/2026/11/02/egoless-mathematics-in-the-ai-era/) ⭐️ 8.0/10

陶哲轩于 2026 年 11 月 2 日发表了一篇题为“AI 时代的无我数学”的博客文章，反思 AI 如何改变数学实践，并主张一种将真理置于个人荣誉之上的方法。 作为顶尖数学家，陶哲轩的观点对于塑造数学界如何适应 AI 具有重要影响，可能影响关于合作、荣誉和数学家身份的规范。 这篇文章在 Hacker News 上引发了 86 条评论的实质性讨论，参与者就数学的人类价值与追求真理、职业的未来以及伦理影响展开了辩论。

hackernews · smilelamp · 11月2日 18:54 · [社区讨论](https://news.ycombinator.com/item?id=50341736)

**背景**: 陶哲轩被广泛认为是当代最伟大的数学家之一，以其在调和分析、偏微分方程和组合数学方面的工作而闻名。“无我”数学的概念源自“无我编程”，这是 Gerald Weinberg 在 1971 年著作《计算机编程心理学》中提出的理念，强调集体代码所有权和超脱个人荣誉。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nytimes.com/2015/07/26/magazine/the-singular-mind-of-terry-tao.html">The Singular Mind of Terry Tao - The New York Times</a></li>
<li><a href="https://www.flyingcoloursmaths.co.uk/the-egoless-mathematician/">The Egoless Mathematician | Flying Colours Maths</a></li>

</ul>
</details>

**社区讨论**: 评论者表达了多样化的观点：一些人认为人类追求本质上与个人理解和意义相关，而另一些人担心“无我”方法低估了数学的人文层面，可能损害这一职业。一位前数学博士指出，变得更加柏拉图主义使他们更不关心发现者是谁。

**标签**: `#mathematics`, `#AI`, `#philosophy`, `#future-of-work`, `#Terry Tao`

---

<a id="item-6"></a>
## [Ubuntu 近三周仍未修复严重 Linux 内核 0day 远程代码执行漏洞](https://freenode.net/article/ubuntu-lts-kernels-still-unfixed-for-critical-cve-2026-98432) ⭐️ 8.0/10

Ubuntu 至今仍未发布针对 CVE-2026-98432 的补丁，这是一个 CVSS 评分 9.8 的严重 Linux 内核 TCP 释放后使用漏洞，公开已近三周。该漏洞可被未经身份验证的远程攻击者利用执行代码，RHEL 及其他发行版也受影响。 这是一个可远程利用、无需认证的内核远程代码执行漏洞，影响广泛部署的 LTS 发行版，因此所有未打补丁的 Ubuntu 服务器和桌面都处于风险之中。此次延迟也引发了对 Ubuntu 安全响应流程的质疑，可能削弱用户对其 LTS 安全承诺的信任。 该漏洞是内核 IPv4 网络子系统中的释放后使用问题，由 TCP 连接请求处理过程中的竞态条件触发。Red Hat 已发布缓解措施，但表示只能降低而不能完全阻止暴露风险；而 Ubuntu 既未提供补丁，也未给出官方缓解指导。

hackernews · majorchord · 11月2日 18:39 · [社区讨论](https://news.ycombinator.com/item?id=50341462)

**背景**: 释放后使用漏洞是指内存已被释放但仍被引用，攻击者可借此破坏内核数据并可能以内核权限执行代码。CVE-2026-98432 被内核 CVE 团队评为 9.8 分（满分 10 分），且由于可通过 TCP 在无需认证的情况下触达，任何暴露的网络服务都可能成为攻击入口。Ubuntu LTS 版本广泛用于服务器和云环境，因此及时的内核补丁至关重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thehackernews.com/2026/10/linux-kernel-tcp-flaw-with-98-cvss.html">Linux Kernel TCP Flaw With 9.8 CVSS Score Affects Ubuntu, Red ...</a></li>
<li><a href="https://access.redhat.com/security/vulnerabilities/RHSB-2026-016">RHSB-2026-016 Use-after-free - kernel IPv4 (CVE-2026-98432 ...</a></li>
<li><a href="https://aviatrix.ai/threat-research-center/linux-kernel-tcp-flaw-98-cvss-cve-2026-98432-ubuntu-rhel/">CVE-2026-98432: Linux Kernel TCP 9.8 CVSS Flaw Hits Ubuntu ...</a></li>

</ul>
</details>

**社区讨论**: 评论者指出了一条具体的 iptables/nftables raw PREROUTING 规则，利用 u32 匹配在流量到达内核前丢弃攻击包，并质疑 Ubuntu 为何对补丁和缓解措施都保持沉默。还有人提出更广泛的担忧：消费级路由器内核从未获得安全更新，以及 LLM 正让低技能攻击者获得国家级水平的利用工具；也有人认为该消息来源只是搭在被盗 IRC 网络上的博客，可信度不足。

**标签**: `#linux-kernel`, `#security`, `#cve`, `#ubuntu`, `#0day`

---

<a id="item-7"></a>
## [欧洲超市冷柜遭第二起疑似网络攻击](https://www.theguardian.com/world/2026/nov/02/supermarket-freezers-across-europe-hit-by-second-suspected-cyber-attack) ⭐️ 8.0/10

三周内发生的第二起疑似网络攻击扰乱了欧洲多国超市的冷冻和制冷系统，比利时、爱沙尼亚、爱尔兰、卢森堡和瑞典的门店均报告了故障。爱尔兰 SuperValu 从 13 家门店下架了冷冻和冷藏食品，荷兰也有 17 家企业受到影响。 这是一起影响食品零售和供应链的真实 ICS/OT 安全事件，表明联网的制冷控制系统是极具吸引力且脆弱的目标。它引发担忧：类似弱点可能延伸到医院、交通系统和空中交通管制等更关键的基础设施。 攻击似乎集中在使用 4G 联网消费级路由器的门店，据报道供应商 Danfoss 在早前一次攻击后于 10 月 13 日建议荷兰客户断开系统连接。商用制冷远比家用冰箱复杂，涉及控制温度、除霜周期、报警和压缩机死区的中央管理单元。

hackernews · fergie · 11月2日 11:50 · [社区讨论](https://news.ycombinator.com/item?id=50335615)

**背景**: 工业控制系统（ICS）和运营技术（OT）是与物理世界交互的设备，支撑着能源、水务、食品和农业等关键基础设施。大型超市制冷系统由中央管理单元运行，远程监控和控制每台冷藏柜和冷冻柜，因此需要连接互联网。自 2022 年俄罗斯入侵乌克兰以来，当局尤其担心此类系统遭到国家支持的混合攻击。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cisa.gov/topics/industrial-control-systems">Industrial Control Systems | Cybersecurity and Infrastructure ...</a></li>
<li><a href="https://www.euronews.com/2026/11/02/why-are-supermarket-fridges-connected-to-the-internet">Supermarket hacks across Europe: why are fridges... | Euronews</a></li>
<li><a href="https://www.dw.com/en/european-supermarkets-targeted-in-second-reported-cyberattack/a-79831139">European supermarkets targeted in reported cyberattack</a></li>

</ul>
</details>

**社区讨论**: 有行业经验的评论者解释说，商用制冷控制远比家用冰箱复杂，并提到可调死区和压缩机行为。其他人警告这起事件是一次警示，呼吁保护新生儿监护病房、红绿灯和空中交通管制系统，还有人指出农村门店使用移动宽带上的消费级路由器可能是薄弱环节。

**标签**: `#cybersecurity`, `#ICS/OT security`, `#critical infrastructure`, `#retail technology`, `#supply chain`

---

<a id="item-8"></a>
## [OpenAI 构建 Pando：面向 Codex 规模开发的 Git 兼容后端](https://openai.com/index/scaling-git-at-openai) ⭐️ 8.0/10

OpenAI 开发了 Pando，这是一个自定义的 Git 兼容后端，旨在处理其 Codex 编码代理所支持的大规模开发。Pando 支持 OpenAI 单体仓库中的并发开发和更快的仓库操作，将推送延迟降低了近 5 倍，每天处理近 1 PB 的 Git 数据。 这很重要，因为像 Codex 这样的 AI 辅助开发工具会产生大量提交和并行工作，给传统 Git 基础设施带来压力。OpenAI 的方法展示了版本控制系统必须如何演进以支持代理规模的开发，从而影响其他组织构建开发者工具的方式。 Pando 与 Git 兼容，这意味着它保留了现有的 Git 工作流，同时提供了新的后端。它将推送延迟降低了近 5 倍，每天处理近 1 PB 的 Git 数据，满足了 AI 驱动开发的并发需求。

rss · OpenAI Blog · 11月2日 15:30

**背景**: Git 是一种分布式版本控制系统，广泛用于软件开发，但在处理超大仓库和高提交量时可能力不从心。OpenAI 的 Codex 是一个 AI 编码代理，可以并行运行多个代理，产生大量仓库活动。Pando 是 OpenAI 为这种新工作负载扩展 Git 的解决方案，类似于 GitHub 为代理规模开发重建其 Git 基础设施的努力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/scaling-git-at-openai/">Scaling Git at OpenAI</a></li>
<li><a href="https://thenewstack.io/openai-pando-git-backend/">OpenAI built itself a new Git backend, too - The New Stack</a></li>
<li><a href="https://github.blog/engineering/architecture-optimization/building-git-infrastructure-for-agent-scale-development/">Building Git infrastructure for agent-scale development</a></li>

</ul>
</details>

**标签**: `#git`, `#developer-tools`, `#infrastructure`, `#version-control`, `#scalability`

---

<a id="item-9"></a>
## [ChatGPT 分享链接漏洞可致账号被接管](https://www.parameter.ai/labs/we-found-a-gap-at-openai) ⭐️ 8.0/10

Parameter 研究团队发现 ChatGPT 分享链接功能存在漏洞，攻击者可在受害者已登录的会话中执行代码、读取私密对话并将数据外泄至外部服务器。OpenAI 已于 10 月 26 日修复该漏洞，将其定级为 P1，并支付了 5000 美元赏金。 这一键式账号接管漏洞影响了广泛使用的 AI 服务，凸显了 AI 聊天界面中预览功能和跨框架消息传递的安全风险。随着 AI 平台集成更丰富的内容渲染，该事件强调了健壮的沙箱和会话隔离的必要性。 该漏洞利用了预览功能与图表组件之间的消息处理缺陷，使代码能以 chatgpt.com 身份运行并访问未分享的对话。OpenAI 在两个版本的 Web 前端中修复了该问题，研究人员指出攻击仅需受害者打开恶意链接即可。

telegram · zaihuapd · 11月2日 10:24

**背景**: ChatGPT 的分享链接功能允许用户为对话生成公开 URL，其预览功能可渲染图表等富内容。跨框架消息传递（postMessage）常用于嵌入式框架间的通信，但若未正确验证，可能被利用来执行恶意代码。OpenAI 设有漏洞赏金计划，奖励负责任地披露漏洞的安全研究人员。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://explainx.ai/blog/chatgpt-share-link-account-takeover-mathlive-postmessage-csp-youtube-jsonp-fixed-oct-26-2026">ChatGPT Account Takeover via Share Link: P1 Bug, $5,000 ...</a></li>
<li><a href="https://labs.cloudsecurityalliance.org/research/csa-research-note-chatgpt-share-link-session-hijack-20261031/">One Click Into Someone Else’s ChatGPT: Cross-Frame Messaging ...</a></li>
<li><a href="https://openai.com/index/bug-bounty-program/">Announcing OpenAI’s Bug Bounty Program</a></li>

</ul>
</details>

**标签**: `#security`, `#ChatGPT`, `#vulnerability`, `#account takeover`, `#OpenAI`

---

<a id="item-10"></a>
## [WIRED：400 多个 AI 应用暗藏色情深伪功能](https://www.wired.com/story/hundreds-of-mundane-ai-apps-are-hiding-abusive-deepfake-features/) ⭐️ 8.0/10

WIRED 11 月 2 日发布的调查发现，一个由 400 多个关联应用和网站组成的网络，将色情深伪工具伪装成宠物画像、语言学习等无害 AI 工具，仅在特定条件下加载露骨界面。在 WIRED 联系后，苹果下架了 19 款应用，谷歌此前已移除 9 月仍在 Google Play 上架、累计下载超 35 万次的 27 款应用中的多数，Meta 则阻止了 209 款相关应用的广告投放。 这揭示了滥用性深伪工具如何通过伪装成普通应用绕过应用商店审核，触达数十万用户（包括未成年人）。它凸显了平台内容审核的漏洞，并引发了关于同意、基于图像的虐待以及苹果、谷歌和 Meta 在监管欺骗性 AI 内容方面责任的紧迫问题。 研究人员通过共享代码、域名和广告追踪将这些应用关联起来，报道依据中文代码、托管信息及一家香港注册公司将网络与中文开发者联系起来，但运营方未回应置评请求。苹果表示开发者在通过审核后替换了远端网页内容，这种手法使应用能在获批后改变功能。

telegram · zaihuapd · 11月2日 12:45

**背景**: 深度伪造（deepfake）通常指利用生成式 AI 合成的图像或视频，可在未经同意的情况下将他人面部叠加到露骨内容上。苹果 App Store 和 Google Play 等应用商店会在上架前审核应用，但开发者可通过加载审核后变化的远端网页内容来绕过审核。此案表明此类手法如何使大规模欺骗性应用网络在监管雷达下运作。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Generative_AI_pornography">Generative AI pornography - Wikipedia</a></li>
<li><a href="https://developer.apple.com/distribute/app-review/">App Review - Distribute - Apple Developer</a></li>

</ul>
</details>

**标签**: `#AI ethics`, `#deepfakes`, `#content moderation`, `#app store policy`, `#investigative journalism`

---

<a id="item-11"></a>
## [Anthropic 前三季度营收 332 亿美元，净亏损 1040 亿美元](https://www.cnbc.com/2026/11/02/anthropic-ant-s-1-quarter-financials.html) ⭐️ 8.0/10

Anthropic 于周一更新的 IPO 招股书披露，2026 年前三季度营收达到 332.4 亿美元，同比增长约 1200%，其中第三季度营收约 170 亿美元。同期公司净亏损为 1040 亿美元，而 2025 年同期亏损为 251 亿美元。 这份招股书罕见地展示了一家领先 AI 实验室的经济状况：营收爆发式增长，同时伴随巨额账面亏损和约 8954 亿美元的算力与基础设施承诺。这些数字将影响投资者和整个 AI 行业对前沿模型开发商资本密集度和风险状况的评估，尤其是在 Anthropic 上市之前。 Anthropic 表示，净亏损主要受可转换债券及衍生负债公允价值变动影响，并不完全代表实际经营现金消耗。约 8954 亿美元的采购及租赁承诺几乎全部用于算力和基础设施。

telegram · zaihuapd · 11月2日 15:12

**背景**: Anthropic 是一家 AI 安全与研究公司，开发 Claude 系列大语言模型，目前正在筹备 IPO。在公允价值会计下，可转换债券和衍生负债每个报告期都要重新计量；当公司估值上升时，这些负债的账面价值随之增加，从而产生大额非经营性亏损，可能掩盖实际经营表现。算力和基础设施承诺则是为确保数据中心容量和芯片供应而与云服务商等合作伙伴签订的长期合同义务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cnbc.com/2026/11/02/anthropic-ant-s-1-quarter-financials.html">Anthropic releases amended IPO prospectus with Q3 financials</a></li>
<li><a href="https://tech-insider.org/anthropic-ipo-prospectus-paradox-16-3b-sales-80b-loss-2026/">Anthropic IPO Prospectus : $16.3B Sales, $80B+ Loss [2026]</a></li>
<li><a href="https://www.thefortunepost.com/business-finance/anthropic-518-billion-ai-infrastructure-compute-commitments/">Anthropic ’s $518 Billion AI Infrastructure Bet... - The Fortune Post</a></li>

</ul>
</details>

**标签**: `#Anthropic`, `#AI industry`, `#IPO`, `#financials`, `#AI infrastructure`

---