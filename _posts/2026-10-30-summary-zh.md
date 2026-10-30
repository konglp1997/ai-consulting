---
layout: default
title: "Daily-Summary: 2026-10-30 (ZH)"
date: 2026-10-30
lang: zh
---

> 从 63 条内容中筛选出 8 条重要资讯。

---

1. [币安遭遇 56 亿美元黑客攻击，数十亿资金被冻结](#item-1) ⭐️ 9.0/10
2. [Hugging Face Transformers v5.22.0 新增对 Mistral Large 4 的支持](#item-2) ⭐️ 8.0/10
3. [Mistral 开放 Mistral Large 4 权重并大幅下调 API 价格](#item-3) ⭐️ 8.0/10
4. [YC Labs 在《我的世界》和《Mindustry》中测试 LLM 智能体集群](#item-4) ⭐️ 8.0/10
5. [DoorDash 将以 170 亿美元收购 Instacart](#item-5) ⭐️ 8.0/10
6. [PHP2Shell 与 Linux XFRM 漏洞链攻击攻陷 25 台服务器，含美国政府系统](#item-6) ⭐️ 8.0/10
7. [范德瓦尔登数 w(2;3,21)=416 获 Lean 4 机器验证证明](#item-7) ⭐️ 8.0/10
8. [Anthropic 借助 Claude 用 Rust 重写 Messages API，CPU 用量降低 40-50%](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [币安遭遇 56 亿美元黑客攻击，数十亿资金被冻结](https://arkm.com/explorer/entity/21a94755-f604-45e5-9501-6542e23005e8) ⭐️ 9.0/10

全球最大加密货币交易所币安正在调查一起涉及高达 58 亿美元数字资产的大规模安全漏洞，据报道约 56 亿美元被盗。稳定币发行商 Circle 和 Tether 已冻结约 24 亿美元的被盗资金。 这可能是历史上最大的加密货币黑客事件，损失可能超过 2022 年 FTX 崩溃时的 45 亿美元，并引发了对中心化交易所安全性和可行性的严重质疑。该事件已引发加密货币市场暴跌，并可能加速监管机构对交易所托管实践的审查。 币安已暂停提现，其 SAFU 保险基金（仅持有约 10 亿美元 BTC）据报道已被耗尽。根据社区分享的交易链接，被冻结的资金包括以太坊上的 9.7115 亿 USDT、8.23 亿 USDC、波场上的 3.1273 亿 USDT 以及以太坊上的 1.75 亿 USDT。

hackernews · Tiberium · 10月29日 21:38 · [社区讨论](https://news.ycombinator.com/item?id=50296470)

**背景**: 像币安这样的中心化交易所（CEX）在热钱包和冷钱包中持有大量用户资金，使其成为黑客的主要目标。Tether 和 Circle 等稳定币发行商可以通过将地址列入黑名单来冻结其网络上的被盗资金，这是减少损失的关键工具。SAFU（用户安全资产基金）是币安的紧急保险基金，最初灵感来自一个模因，旨在极端情况下保护用户。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.bitcoin.com/security/inside-the-5-8b-binance-hack-whats-confirmed-and-what-isnt/">Inside the $5.8B Binance Hack: What’s Confirmed and What Isn’t</a></li>
<li><a href="https://www.bleepingcomputer.com/news/security/binance-probes-potential-58-billion-crypto-theft-hack/">Binance probes potential $5.8 billion crypto-theft hack</a></li>
<li><a href="https://coinpedia.org/news/binance-5-8-billion-hack-triggers-crypto-market-crash-what-really-happened/">Binance $5.8 Billion Hack Triggers Crypto Market Crash. What ...</a></li>

</ul>
</details>

**社区讨论**: 评论者对币安 SAFU 保险基金被耗尽表示震惊，指出 Circle 和 Tether 已冻结 24 亿美元，并将其与熊市末期 FTX 的崩溃相提并论。一些人认为这证明加密货币因中心化的出入口而失败，破坏了理论上的优势，而另一些人则讽刺地表示至少资金不受政府控制。

**标签**: `#cryptocurrency`, `#security`, `#binance`, `#hack`, `#blockchain`

---

<a id="item-2"></a>
## [Hugging Face Transformers v5.22.0 新增对 Mistral Large 4 的支持](https://github.com/huggingface/transformers/releases/tag/v5.22.0) ⭐️ 8.0/10

Hugging Face Transformers v5.22.0 新增对 Mistral Large 4 的支持，这是一个拥有 1 万亿参数、原生多模态的混合专家模型，每个 token 激活 520 亿参数。该版本还改进了 FP8 量化，包括为 FP8 权重上的适配器训练添加反向传播，以及分块专家反量化，使 MoE 反向传播在 8k token 时的峰值内存从约 28.9 GiB 降至 2.8 GiB。 此次发布使 Mistral 最大、能力最强的开放权重模型可以通过广泛使用的 Transformers 库访问，让研究人员和开发者能够试验前沿规模的多模态 MoE。FP8 训练改进降低了大 MoE 模型微调的内存门槛，可能加速 LoRA 等参数高效方法在量化权重上的应用。 Mistral Large 4 采用细粒度 MoE 架构，包含 128 个路由专家（每个 token 激活 4 个）和 1 个共享专家，支持 100 万 token 上下文窗口，并通过 Pixtral 风格的视觉编码器接受文本和图像输入。该模型以 Mistral Ecosystem Open-Weight License 发布，这是修改版 MIT 许可证，若运营模型即服务业务需获得单独的商业许可。

github · LysandreJik · 10月29日 14:15

**背景**: 混合专家（MoE）模型通过为每个 token 仅激活一小部分专家，将总参数量与每 token 计算量解耦，使超大规模模型能够高效运行。Mistral Large 4 在 Mistral 欧洲数据中心的 3800 块 NVIDIA Grace Blackwell GPU 上从头训练，并且是原生多模态的，意味着它在文本和图像上联合训练，而非事后添加视觉模块。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://localaimaster.com/models/mixtral-8x7b">Mixtral 8x7B: Run MoE Model Locally — Ollama... | Local AI Master</a></li>
<li><a href="https://www.theregister.com/on-prem/2024/03/18/nvidia-turns-up-the-ai-heat-with-1200w-blackwell-gpus/1215461">Nvidia turns up the AI heat with 1,200W Blackwell GPUs</a></li>
<li><a href="https://dev.to/vahid_aghajani_60ce9dbec9/vision-language-models-when-ai-learns-to-see-and-talk-part-3-of-3-51ig">Vision Language Models — When AI Learns to See... - DEV Community</a></li>

</ul>
</details>

**标签**: `#huggingface`, `#transformers`, `#mistral`, `#mixture-of-experts`, `#multimodal`, `#llm`

---

<a id="item-3"></a>
## [Mistral 开放 Mistral Large 4 权重并大幅下调 API 价格](https://mistral.ai/news/mistral-large-4-oss/) ⭐️ 8.0/10

Mistral 已在 Hugging Face 上以修改版 MIT 开放权重许可证发布了 Mistral Large 4（Le Chonk）的权重，这是一个 1 万亿参数的原生多模态模型，同时将 API 价格下调至每百万输入 token 0.7 美元和每百万输出 token 2.1 美元，约为预览版价格的一半。 这使得最大的开放权重模型之一可供自托管，可能重塑开放模型的竞争格局，并为欧洲公司提供一个强大的本土替代方案；激进的定价也给其他提供商带来压力，使 Mistral Large 4 适用于成本敏感的生产工作负载。 该许可证包含一项条款，要求任何模型即服务（Model-as-a-Service）业务必须获得单独的商业许可证，批评者认为这使得“开放权重”的标签具有误导性；该模型还提供 NVFP4 量化版本（Mistral-Large-4-1T-A52B-NVFP4）以实现高效推理，Mistral 声称在恶意网络请求上的平均拒绝率为 96.6%。

hackernews · kuberwastaken · 10月29日 14:13 · [社区讨论](https://news.ycombinator.com/item?id=50289418)

**背景**: 开放权重模型会发布其训练好的参数，供任何人下载和运行，但与开源模型不同，它们通常对商业使用有限制。法国 AI 公司 Mistral 一直是欧洲 LLM 领域的关键参与者，其 Large 系列与 OpenAI、Anthropic 的模型以及 Meta 的 Llama 等开放权重竞争对手展开竞争。开放权重与开源之间的区别很重要，因为它决定了企业能否在模型之上自由构建商业产品。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mistral.ai/news/mistral-large-4-oss/">Mistral Large 4 (Le Chonk) is now open weight | Mistral</a></li>
<li><a href="https://www.unite.ai/mistrals-1-trillion-parameter-le-chonk-checkpoint-lands-on-hugging-face/">Mistral ’s 1-Trillion-Parameter Le Chonk Checkpoint Lands on Hugging...</a></li>
<li><a href="https://docs.mistral.ai/inference/pricing">API pricing | Mistral Docs</a></li>

</ul>
</details>

**社区讨论**: 评论者就许可条款展开辩论，一人称由于 MaaS 商业限制，“开放权重”标签具有误导性，另一人则称赞 Mistral 是可靠的欧盟提供商。其他人强调了大幅降价——现在几乎是预览版成本的一半——使模型更具竞争力，还有一些人质疑拒绝率统计数据缺乏关于非恶意请求的背景信息。

**标签**: `#llm`, `#open-weights`, `#mistral`, `#licensing`, `#ai-pricing`

---

<a id="item-4"></a>
## [YC Labs 在《我的世界》和《Mindustry》中测试 LLM 智能体集群](https://labs.ycombinator.com/projects/games/index.html) ⭐️ 8.0/10

YC Labs 在《我的世界》和《Mindustry》中运行了 LLM 智能体集群，观察到官僚式过度协调、GPT 与 Claude 风险策略分歧以及对世界模型的需求等涌现行为。 该实验为多智能体 LLM 系统在开放式游戏环境中的行为提供了具体证据，突出了涌现的协调模式和模型特定的风险特征，可为未来多智能体 AI 系统的设计提供参考。 智能体表现出官僚倾向，例如花费 11 分钟为一块骨粉任命唯一的肥料操作员；GPT 智能体更具攻击性，而 Claude 智能体更偏向防御；一个阻止方块破坏的工具错误被 GPT 智能体诊断并找到解决方法，但几个 Claude 智能体认为破坏是不可能的。

hackernews · sandslash · 10月29日 21:40 · [社区讨论](https://news.ycombinator.com/item?id=50296486)

**背景**: 《我的世界》是一款沙盒游戏，玩家可以建造和探索，常被用作 AI 智能体的测试平台。《Mindustry》是一款结合塔防和工厂建造的游戏。LLM 智能体集群指多个大语言模型实例协调解决任务，而涌现行为是指从局部交互中出现复杂的系统级模式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mindustry">Mindustry - Wikipedia</a></li>
<li><a href="https://arxiv.org/html/2506.14496v1">LLM-Powered Swarms: A New Frontier or a Conceptual Stretch?</a></li>
<li><a href="https://arxiv.org/html/2408.04514v1">Emergence in Multi-Agent Systems: A Safety Perspective</a></li>

</ul>
</details>

**社区讨论**: 评论者认为智能体的官僚行为很幽默，将其比作道格拉斯·亚当斯的 B 方舟和超级严肃的资深工程师。一些人指出《我的世界》更多是机器人问题而非智能问题，另一些人强调需要世界模型，因为人类会快速解决饥饿等问题。

**标签**: `#multi-agent-systems`, `#LLM-agents`, `#Minecraft`, `#Mindustry`, `#emergent-behavior`

---

<a id="item-5"></a>
## [DoorDash 将以 170 亿美元收购 Instacart](https://about.doordash.com/en-us/news/doordash-to-acquire-instacart) ⭐️ 8.0/10

DoorDash 宣布将以 170 亿美元（合每股 65 美元）收购 Instacart，该交易需获得美国、加拿大和以色列的反垄断审查批准，审查可能持续至 2028 年。 此次合并将整合按需配送领域的两大主要参与者，可能重塑杂货配送领域与沃尔玛、亚马逊等巨头的竞争格局，并且是迄今为止 Y Combinator 公司之间规模最大的合并。 该交易价值 170 亿美元，每股价格为 65 美元；需要获得多个国家的监管批准，时间表可能延长至 2028 年，并可能促成 DashPass 和 Instacart+ 等联合订阅服务。

hackernews · WalterSobchak · 10月29日 12:33 · [社区讨论](https://news.ycombinator.com/item?id=50287919)

**背景**: DoorDash 是领先的食品配送平台，而 Instacart 是主要的杂货配送服务商。两家公司均通过 Y Combinator 创立（DoorDash 为 S13 批次，Instacart 为 S12 批次）。此次收购将标志着配送行业的重大整合，该行业一直因商业行为和反垄断问题而受到审查。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://finance.yahoo.com/markets/stocks/articles/doordash-acquires-instacart-17b-pending-191106721.html?fr=sycsrp_catchall">DoorDash Acquires Instacart for $17B, Pending Antitrust Review</a></li>
<li><a href="https://about.doordash.com/en-us/news/doordash-to-acquire-instacart">DoorDash to Acquire Instacart to Help Local Stores Win</a></li>
<li><a href="https://www.inc.com/amaya-nichole/doordash-17-billion-dollar-instacart-deal-save-members-100-million-dollars-bigger-risk-easy-miss/91426860">DoorDash's $17 Billion Instacart Deal Could Save Members $100 ...</a></li>

</ul>
</details>

**社区讨论**: 评论者对于 DoorDash 和 Instacart 在杂货配送领域重叠有限感到惊讶，一些人认为合并可能有助于它们与沃尔玛和亚马逊竞争。其他人则批评 DoorDash 的商业行为，指出其存在暗黑模式和对商家的恶劣对待，并质疑反垄断执法的有效性。

**标签**: `#acquisitions`, `#antitrust`, `#grocery-delivery`, `#doordash`, `#instacart`

---

<a id="item-6"></a>
## [PHP2Shell 与 Linux XFRM 漏洞链攻击攻陷 25 台服务器，含美国政府系统](https://dreamgroup.com/blog/chained-php2shell-exploit-roots-25-servers) ⭐️ 8.0/10

一个结合 PHP2Shell 漏洞与 Linux 内核 XFRM ESP-in-TCP 缺陷的链式利用攻击成功攻陷了 25 台服务器，其中包括美国政府所属系统。该攻击展示了如何将两个不同的漏洞串联起来以实现完全控制。 该事件凸显了 Linux 和 PHP 部署中默认启用过多攻击面的风险，并表明即使是防护严密的政府系统也可能通过链式漏洞被攻陷。它强调了组织审计并禁用不必要内核功能和服务的重要性。 该漏洞链利用了 PHP2Shell（可绕过 x86-64 系统上的 ASLR）以及一个 Linux 内核 XFRM 漏洞（CVE-2026-43284），后者涉及共享套接字缓冲区片段缺少写时复制保护。攻击仅需远程访问且无需凭据，被攻陷的服务器包括政府系统。

hackernews · 882542F3884314B · 10月29日 10:42 · [社区讨论](https://news.ycombinator.com/item?id=50286987)

**背景**: PHP2Shell 指的是一类 PHP 漏洞，允许攻击者执行任意 shell 命令，通常能绕过 ASLR 等保护。Linux 内核的 XFRM 子系统负责处理 IPsec，在许多发行版上默认启用，提供了较大的攻击面。链式利用结合多个弱点以达到单一漏洞无法实现的结果，例如从 Web 应用立足点提升到完全的 root 访问权限。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.recordedfuture.com/blog/php2shell-vulnerability-exploitation">PHP 2 Shell Exploitation : Two Critical PHP Flaws Explained</a></li>
<li><a href="https://mallory.ai/vulnerabilities/CVE-2026-43284">Dirty Frag: Linux XFRM ESP Shared Fragment In-Place... | Mallory</a></li>
<li><a href="https://nhimg.org/glossary/chained-exploit/">What Is Chained exploit? Definition & Examples - nhimg.org</a></li>

</ul>
</details>

**社区讨论**: 评论者就默认启用过多攻击面展开辩论，有人表示已禁用 mptcp 并质疑为何 XFRM 默认启用。其他人对漏洞利用的复杂性表示惊讶，根据配置细节推断防火墙供应商很可能是 Palo Alto Networks，并指出 Dream 公司由奥地利前总理塞巴斯蒂安·库尔茨领导。

**标签**: `#security`, `#exploits`, `#linux-kernel`, `#vulnerability-disclosure`, `#php`

---

<a id="item-7"></a>
## [范德瓦尔登数 w(2;3,21)=416 获 Lean 4 机器验证证明](https://www.reddit.com/r/MachineLearning/comments/1xivpue/w2321_416_a_van_der_waerden_number_conjectured_by/) ⭐️ 8.0/10

Kullmann 于 2010 年提出的猜想——范德瓦尔登数 w(2;3,21) 等于 416——现已通过 Lean 4 内核检查的证明得到证实，该证明由 Hupyy 的神经符号系统 LPM（Large Proof Model）生成。证明涵盖 209 个案例和 38,661,140 个叶公式，每个叶公式均由经过验证的 LRAT 检查器 cake_pr 反驳，并通过摘要与其 Lean 项绑定。 这解决了一个长期悬而未决的组合数学猜想，该猜想此前仍被列在 DeepMind 的 Formal Conjectures 清单上，表明 AI 辅助的神经符号系统能够为非平凡的数学结果生成完全形式化、机器检查的证明。这可能会加速形式化验证在组合数学中的应用，并激发更多关于 AI 驱动定理证明的研究。 该证明是一个 Lean 4 定理，涵盖 209 个案例和 38,661,140 个叶公式，每个反驳均由 cake_pr（在 CakeML 中验证的 LRAT 检查器）检查，并通过摘要与其 Lean 项绑定。提供了 13.6 GB 的证据包，包括 Lean 源代码、检查器记录和重放工具包，以供独立验证。

reddit · r/MachineLearning · /u/Rodriguez909 · 10月29日 20:46

**背景**: 范德瓦尔登定理指出，对于任意正整数 r 和 k，存在一个数 N，使得对 {1, ..., N} 的任意 r 着色都包含一个长度为 k 的单色等差数列；最小的这样的 N 称为范德瓦尔登数 W(r, k)。Lean 4 是一个基于依赖类型论的证明助手和函数式编程语言，用于形式化和验证数学证明。cake_pr 是在 CakeML 中开发的形式化验证的 LRAT 证明检查器，确保反驳的正确性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Van_der_Waerden_number">Van der Waerden number</a></li>
<li><a href="https://en.wikipedia.org/wiki/Lean_theorem_prover">Lean theorem prover</a></li>
<li><a href="https://satcompetition.github.io/2023/downloads/proposals/drat_dpr.pdf">Veri ed LRAT and LPR Proof Checking with cake lpr - GitHub Pages</a></li>

</ul>
</details>

**标签**: `#Lean 4`, `#formal verification`, `#combinatorics`, `#automated theorem proving`, `#neuro-symbolic AI`

---

<a id="item-8"></a>
## [Anthropic 借助 Claude 用 Rust 重写 Messages API，CPU 用量降低 40-50%](https://latent.space/p/opus55/) ⭐️ 8.0/10

Anthropic 将其 Messages API 从 Python 单体服务迁移到 Rust，由 Claude 生成代码，工程师负责系统设计和验证。重写后 CPU 用量降低 40-50%，首个 token 的响应时间缩短 10-20%。 这是一个值得关注的真实案例，展示了一家大型 AI 公司利用 AI 辅助开发，用 Rust 重写关键服务并取得显著性能提升。它表明 AI 代码生成可以帮助团队在缺乏内部专家的情况下采用 Rust 等注重性能的语言。 团队起步时没有 Rust 开发者，依靠 Claude 进行代码实现，并通过对比新旧系统的输出来验证迁移结果。瓶颈在于 CPU 而非 GPU，这促使团队从 Python 迁移。

telegram · zaihuapd · 10月29日 03:13

**背景**: Rust 是一种系统编程语言，以无需垃圾回收的内存安全、高性能和并发支持著称，因此在 Web 服务和基础设施中广受欢迎。Anthropic 的 Messages API 是开发者与 Claude 模型交互的核心端点。首个 token 延迟（即首 token 时间）衡量模型开始流式返回响应的速度，是聊天和智能体应用的关键响应性指标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Rust_(programming_language)">Rust (programming language)</a></li>
<li><a href="https://platform.claude.com/docs/en/api/messages">Messages - Claude API Reference - Anthropic</a></li>
<li><a href="https://www.ibm.com/think/topics/time-to-first-token">Time to First Token (TTFT) | IBM</a></li>

</ul>
</details>

**标签**: `#Rust`, `#AI-assisted development`, `#performance optimization`, `#Anthropic`, `#API migration`

---