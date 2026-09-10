---
layout: default
title: "Daily-Summary: 2026-09-10 (ZH)"
date: 2026-09-10
lang: zh
---

> 从 57 条内容中筛选出 13 条重要资讯。

---

1. [OpenAI 的 Navier-Stokes 成果附带 Lean 4 形式化证明](#item-1) ⭐️ 9.0/10
2. [DeepSeek 发布 V4.1 Flash，缓存命中价格极低](#item-2) ⭐️ 9.0/10
3. [Calif Research 发布 WeWorm：首个通过微信通话传播的零点击蠕虫](#item-3) ⭐️ 9.0/10
4. [Shopify 放弃 React Native，回归原生 Swift 和 Kotlin](#item-4) ⭐️ 8.0/10
5. [数学家质疑 OpenAI 能否被信任接触未发表的数学成果](#item-5) ⭐️ 8.0/10
6. [Forgejo 16.0.3 及更早版本遭遇严重远程代码执行漏洞](#item-6) ⭐️ 8.0/10
7. [微软将 Rust 提升为一级语言](#item-7) ⭐️ 8.0/10
8. [索尼因数字游戏所有权声明面临诉讼](#item-8) ⭐️ 8.0/10
9. [OpenAI 推出搭载 GPT-6 Astra 的金融版 ChatGPT](#item-9) ⭐️ 8.0/10
10. [OpenAI 推出基于 Codex Harness 的托管 Agents API](#item-10) ⭐️ 8.0/10
11. [OpenAI 在 API 中推出 GPT-Live-1，支持全双工语音](#item-11) ⭐️ 8.0/10
12. [研究者审计真实果蝇连接组为何学不会乒乓球](#item-12) ⭐️ 8.0/10
13. [蚂蚁国际携手 Visa 与 Mastercard 制定 AI 代理支付标准](#item-13) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenAI 的 Navier-Stokes 成果附带 Lean 4 形式化证明](https://www.johndcook.com/blog/2026/09/09/formal-method-revolution/) ⭐️ 9.0/10

2026 年 9 月 8 日，OpenAI 宣布了一个据称能证明三维 Navier-Stokes 方程解会爆破（breakdown）的反例，该结果由一个约 1 万个 AI 智能体组成的集群运行内部前沿模型生成，并同时发布了用 Lean 4 证明助手完成的形式化证明。该结果尚未经过外部数学家或克莱数学研究所的验证，OpenAI 也表示不会为此申领 100 万美元的千禧年大奖。 如果该结果成立，这将是 AI 驱动形式化数学的一个里程碑：自动化系统在一个长期被认为对自动推理极其困难的领域产出了可机器检验的证明，并且直接触及克莱数学研究所七大千禧年难题之一。它还引发了关于成本、验证性能以及人类数学家能否独立核验如此规模结果的尖锐问题。 该方法建立在 Diego Córdoba 与 Luis Martínez-Zoroa 于 2023 年提出的、用于在相关流体方程中寻找爆破现象的技术之上；此次发布还伴随着一场优先权争议，涉及当时就职于 Anthropic 的 Levent Alpöge 和 Tristan Buckmaster，他们此前已推导出密切相关的欧拉方程结果。社区估计智能体成本约为 4000 万美元，并有评论者指出，费马大定理的 Lean 验证据称在 230GB 内存下耗时约 15 小时，而生成 Lean 代码则用了 11 天。

hackernews · ibobev · 9月10日 21:22 · [社区讨论](https://news.ycombinator.com/item?id=49650326)

**背景**: Lean 是一个基于归纳构造演算（Calculus of Inductive Constructions）的证明助手兼函数式编程语言；Lean 4 于 2021 年发布，可编译为 C 代码并支持高效的领域专用自动化，目前由非营利组织 Lean Focused Research Organization 支持开发。Navier-Stokes 存在性与光滑性问题问的是：三维不可压缩 Navier-Stokes 方程是否总存在全局光滑解；克莱数学研究所于 2000 年将其列为千禧年大奖难题之一。形式化验证是指把证明编码成计算机可逐步检验的形式，因此 Lean 4 形式化被视为比单纯的文字论证更有力的证据。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Navier-Stokes_existence_and_smoothness_problem">Navier-Stokes existence and smoothness problem</a></li>
<li><a href="https://en.wikipedia.org/wiki/Lean_(proof_assistant)">Lean (proof assistant) - Wikipedia</a></li>
<li><a href="https://leanprover.github.io/theorem_proving_in_lean4/">Theorem Proving in Lean 4</a></li>

</ul>
</details>

**社区讨论**: 评论者总体上感到震撼，但讨论集中在实际问题上：有人指出 Lean 的验证速度相对于智能体生成速度的差距，并追问在不牺牲可审计性的前提下 Lean 还能优化到什么程度；也有人认为在当代证明自动化的背景下，常被引用的“每页四十小时”规则已经过时。一位对成本持怀疑态度的评论者重新计算后认为，与人类劳动相比只便宜到约 1.32 亿美元的量级，而非四个数量级；还有评论者提出了更深层的担忧：当证明复杂到人类无法独立验证时会发生什么。

**标签**: `#AI`, `#formal verification`, `#Lean 4`, `#Navier-Stokes`, `#automated theorem proving`

---

<a id="item-2"></a>
## [DeepSeek 发布 V4.1 Flash，缓存命中价格极低](https://twitter.com/deepseek_ai/status/2097930608790167907) ⭐️ 9.0/10

DeepSeek 发布了 DeepSeek-V4.1-Flash，这是一个多模态混合专家（MoE）模型，拥有 552B 主干参数，支持最长一百万 token 的上下文，目前已在 DeepSeek API 上线，模型名为 deepseek-flash。此次发布附带详细的技术报告，并给出了每百万 token 仅 0.003 美元的极低缓存命中价格，同时下线了此前的 V4-Flash 和 V4-Flash-Vision-Exp 模型。 此次发布表明 DeepSeek 仍在以接近前沿的规模训练模型，同时推行激进的 API 定价策略，这可能在能力和价格两方面对竞争对手形成压力。极低的缓存命中价格可能改变开发者设计长时间运行、上下文密集型应用的方式，因为缓存上下文远比反复传输上下文便宜。 该模型是拥有 552B 主干参数的多模态 MoE，约为原版 V4 Flash 的 284B 的两倍，因此尽管名为“Flash”，本地部署难度却大幅上升。它原生处理图像和文本，并以自回归方式生成文本，社区成员特别指出每百万 token 0.003 美元的缓存命中价格十分突出。

hackernews · Liwink · 9月10日 06:11 · [社区讨论](https://news.ycombinator.com/item?id=49639090)

**背景**: 前沿规模语言模型是指在公开评测中表现最强的通用模型，而混合专家（MoE）架构在每个 token 上只激活大参数池中的一部分，从而控制推理成本。提示缓存（prompt caching）让 API 复用此前已处理的上下文，使重复 token 按远低于完整输入价的缓存命中价计费，这正是缓存命中定价成为 LLM API 经济性关键杠杆的原因。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.deepseek.com/en/news/deepseek-v4-1-flash/">Introducing DeepSeek - V 4 . 1 - Flash : smarter, faster, more efficient.</a></li>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash">deepseek -ai/ DeepSeek - V 4 . 1 - Flash · Hugging Face</a></li>
<li><a href="https://en.wikipedia.org/wiki/Large_language_model">Large language model - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者称赞 DeepSeek 的技术报告充满具体细节，并将其与其他实验室偏重安全的系统卡形成对比，同时钦佩该团队敢于以接近前沿的规模实践巧妙想法。不少人关注每百万 token 0.003 美元的缓存命中价格，猜测网络传输成本是否会很快主导任务总成本、使聊天补全 API 过时；也有人指出 552B 的规模让本地运行比此前 284B 的 V4 Flash 困难得多。

**标签**: `#DeepSeek`, `#LLM`, `#AI`, `#Model Release`, `#Pricing`

---

<a id="item-3"></a>
## [Calif Research 发布 WeWorm：首个通过微信通话传播的零点击蠕虫](https://simonwillison.net/2026/Sep/10/calif-research/) ⭐️ 9.0/10

Calif Research 发布了 WeWorm 的演示，称这是首个通过微信通话在 iOS 和 Android 上传播的零点击蠕虫，受害者无需任何交互即可被劫持账号。该团队表示，借助 AI 协助，他们在约两天内找到漏洞并写出首个远程代码执行（RCE）利用程序，随后又用大约一周时间构建出完整的蠕虫。 这标志着 AI 辅助攻击性安全领域的范式转变，大幅降低了构建大规模移动端漏洞利用所需的时间和团队规模——过去这类工作需要数月。它影响数亿微信用户，并表明 AI 如今已能承担漏洞研究和蠕虫开发中的大部分繁重工作。 该漏洞是微信 VoIP 协议栈中的内存破坏问题，即使受害者接听电话且听不到任何声音，利用仍然成功。蠕虫可在 iOS 和 Android 上自动传播，无需用户交互即可实现完整的账号劫持。

rss · Simon Willison · 9月10日 00:56

**背景**: 零点击漏洞利用是指无需受害者任何操作即可触发的攻击，因此比依赖钓鱼或恶意链接的攻击危险得多。蠕虫是一种能自动从一台设备传播到另一台设备的自我复制恶意软件，而远程代码执行（RCE）意味着攻击者可以通过网络在目标系统上运行任意代码。微信在中国及全球华语社区中是一款用户量极大的即时通讯和通话应用，因此其通话功能中的蠕虫具有异常庞大的潜在影响范围。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cyberinsider.com/zero-click-worm-spreads-on-iphones-and-android-via-wechat-calls/">Zero-click worm spreads on iPhones and Android via WeChat calls</a></li>
<li><a href="https://www.1950.ai/post/wechat-zero-click-worm-how-ai-turned-a-voip-vulnerability-into-a-self-spreading-account-hijacking-t">WeChat Zero-Click Worm: How AI Turned a VoIP Vulnerability Into...</a></li>
<li><a href="https://www.cloudflare.com/learning/security/what-is-remote-code-execution/">What is remote code execution?</a></li>

</ul>
</details>

**标签**: `#ai-security`, `#zero-click-exploit`, `#mobile-security`, `#wechat`, `#vulnerability-research`

---

<a id="item-4"></a>
## [Shopify 放弃 React Native，回归原生 Swift 和 Kotlin](https://shopify.engineering/back-to-native) ⭐️ 8.0/10

Shopify 宣布将其移动应用从共享的 React Native 代码库迁回独立的原生 Swift（iOS）和 Kotlin（Android）代码库，这一消息发布在其工程博客上。该决定逆转了此前的跨平台策略，并在 Hacker News 上引发了超过 455 条评论的热烈讨论。 这是 React Native 最知名的企业采用者之一的高调逆转，可能会影响其他公司如何权衡跨平台框架与完全原生开发之间的取舍。这也凸显了一场日益激烈的争论：AI 辅助编码工具是否让维护多个原生代码库比以前更加可行。 Shopify 的工程博客文章解释了回归原生的原因，但摘要中并未完全详述具体的技术理由和迁移时间表。讨论还涉及 AI 辅助迁移，一位评论者声称他们使用 Codex 和 Maestro 等工具在一夜之间将 React Native 应用移植到了原生。

hackernews · fnthawar2 · 9月10日 14:09 · [社区讨论](https://news.ycombinator.com/item?id=49643982)

**背景**: React Native 是由 Meta 创建的开源框架，允许开发者使用 JavaScript 和 React 构建 iOS 和 Android 应用，并在不同平台间共享大量代码。原生开发则使用平台特定的语言：Apple 平台用 Swift，Android 用 Kotlin，这能带来更好的性能和与操作系统功能更紧密的集成，但需要维护两个独立的代码库。Shopify 此前一直是 React Native 的积极倡导者，因此这一逆转在移动工程社区中格外引人注目。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/React_Native">React Native</a></li>
<li><a href="https://en.wikipedia.org/wiki/Kotlin_programming_language">Kotlin programming language</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论分歧明显：一些 iOS 工程师对长期以来对共享代码库的怀疑感到得到了验证，而另一些人则认为 Shopify 低估了维护两个原生应用的复杂性成本，尤其是 AI 仍然难以应对复杂性。几位评论者分享了自己使用 AI 代理从 React Native 迁移到原生的经验，但也有人警告说 AI 生成的代码质量仍令人担忧，尤其是对于无法审查 Swift 或 Kotlin 的开发者而言。

**标签**: `#react-native`, `#mobile-development`, `#swift`, `#kotlin`, `#engineering-culture`

---

<a id="item-5"></a>
## [数学家质疑 OpenAI 能否被信任接触未发表的数学成果](https://mathstodon.xyz/@andreasthom/117240535270608201) ⭐️ 8.0/10

Mathstodon 用户 @andreasthom 发布的一条帖子重新引发了关于研究人员能否信任 OpenAI 接触未发表数学成果的争论，起因是 OpenAI 被指利用与数学家的协作聊天来开发并发表成果，却未给予署名。这场讨论紧随纳维-斯托克斯方程优先权争议之后，数学家 Tristan Buckmaster 指控 OpenAI 在得知他与 Anthropic 的竞争性研究后加速了自己的证明工作。 这场争议引发了关于研究伦理、署名权和数据隐私的根本性问题——当 AI 公司与学术界合作时，数学家可能因此不愿再与 AI 工具分享未发表的工作。它可能重塑 AI 实验室与研究社区互动的规范，以及协作聊天记录是否应被视为保密内容。 批评者指出，OpenAI 据称在得知某重大数学证明有可能已存在于其模型训练数据中之后，立即从一个仍在训练中的模型生成了 3000 亿个输出 token。OpenAI 坚称用于生成结果的模型并未在这些协作聊天数据上训练，但怀疑者认为，即使在预训练期间只是潜在接触，也可能提升模型的直觉。

hackernews · pred_ · 9月10日 06:49 · [社区讨论](https://news.ycombinator.com/item?id=49639408)

**背景**: 纳维-斯托克斯方程解的存在性与光滑性问题是克雷数学研究所的千禧年大奖难题之一，悬赏 100 万美元。2025 年，数学家 Tristan Buckmaster 和 Alpöge 在研究过程中使用了 OpenAI 的 Codex 和 Anthropic 的 Claude，随后 OpenAI 宣布了自己的完整证明，引发了其是否访问了 Codex 用户数据的指控。这一事件已成为人们对 AI 公司竞争行为和研究诚信更广泛担忧的焦点。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Navier–Stokes_priority_controversy">Navier–Stokes priority controversy - Wikipedia</a></li>
<li><a href="https://theconversation.com/openai-claims-another-huge-mathematical-result-amid-fights-over-credit-ethics-and-privacy-291575">OpenAI claims another huge mathematical result amid fights over...</a></li>
<li><a href="https://meyka.com/blog/openai-solves-navier-stokes-problem-in-88-hours-controversy-erupts-over-methods-0909/">OpenAI Solves Navier-Stokes Problem in 88 Hours; Controversy ...</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍认为，如果 OpenAI 是一个人类合作者，那么利用协作聊天内容发表成果却不署名显然是不道德的。一些人认为两件事可能同时成立：OpenAI 的模型可能从聊天中吸收了有用的直觉，同时也通过对可验证数学的强化学习独立发现了超人类的技术。另一些人则对 OpenAI 在得知某重大证明可能存在于其训练数据中之后，立即从一个仍在训练中的模型生成 3000 亿个输出 token 感到可疑；还有评论者认为，唯一合乎道德的做法是向研究人员提供无限免费额度和工具支持，而不是与他们竞争。

**标签**: `#AI ethics`, `#OpenAI`, `#research integrity`, `#mathematics`, `#academic collaboration`

---

<a id="item-6"></a>
## [Forgejo 16.0.3 及更早版本遭遇严重远程代码执行漏洞](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.4.md) ⭐️ 8.0/10

Forgejo 16.0.3 及更早版本存在一个严重远程代码执行漏洞，该漏洞与仓库初始化过程中的模板展开有关；修复已包含在 16.0.4 版本的发布说明中。当从模板仓库生成新仓库时，Forgejo 会克隆模板、删除 .git 文件夹、对 .forgejo/template 中列出的文件执行变量模板展开，然后初始化新的 git 仓库——这一过程可被利用。 Forgejo 是一款被广泛使用的自托管 Git 平台，因此严重 RCE 漏洞可能让攻击者在托管它的服务器上执行任意代码，进而危及仓库、凭据和 CI 流水线。该漏洞影响所有运行未修补实例的用户，因此必须立即升级到 16.0.4。 该漏洞具体涉及模板展开干扰 git 仓库初始化，修复记录在 Forgejo 的拉取请求 #14301 中。据报道，由于 Codeberg 的速率限制，发布说明页面有时无法访问，16.0.4 版本还包含另一项修复。

hackernews · weierstass · 9月10日 15:57 · [社区讨论](https://news.ycombinator.com/item?id=49645907)

**背景**: Forgejo 是一个跨平台的开源 Web 服务器，用于托管软件开发平台，使用 Go 语言编写并以 Git 进行版本控制；它支持缺陷跟踪、代码审查和 Wiki 等功能，并设计为可自托管。远程代码执行（RCE）是一类允许攻击者在目标系统上运行任意代码的漏洞，通常会导致系统完全被攻陷。模板仓库允许用户创建预填充文件和变量的新项目，而初始化过程中对这些变量的展开正是此次问题的机制所在。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Forgejo">Forgejo</a></li>
<li><a href="https://forgejo.org/">Forgejo – Beyond coding. We forge.</a></li>

</ul>
</details>

**社区讨论**: 评论者指出了具体的修复，并提到 Gitea 对这两个问题都有防护；其他人则讨论了像 cgit 这样更简单方案的安全权衡，以及 Forgejo 禁止 LLM 贡献的影响。一个反复出现的担忧是，即使项目不使用 AI 检查漏洞，攻击者也可能利用 AI 寻找漏洞，从而使项目处于劣势。

**标签**: `#security`, `#vulnerability`, `#forgejo`, `#git`, `#rce`

---

<a id="item-7"></a>
## [微软将 Rust 提升为一级语言](https://rustfoundation.org/media/guest-post-rust-is-tier-1-language-at-microsoft/) ⭐️ 8.0/10

微软已正式将 Rust 认定为一级语言，这一消息在 Rust 基金会网站的一篇客座文章中详细说明。这意味着 Rust 现在在微软的开发生态系统中获得与 C++ 等成熟语言同等级别的支持、工具和战略投资。 此举表明所有主流操作系统厂商现在都将 Rust 作为一级语言提供，标志着整个行业向内存安全系统编程的重大转变。它可能加速 Rust 在大规模生产环境中的采用，并影响其他公司效仿。 一个关键的技术细节是，微软已用 MSVC 的后端替换了 LLVM 来编译 Rust，这在社区讨论中被提及。此外，微软设定了到 2030 年通过自动化工具将 10 亿行代码转换为 Rust 的目标，旨在实现“1 名工程师、1 个月、100 万行代码”的效率。

hackernews · mmastrac · 9月10日 13:39 · [社区讨论](https://news.ycombinator.com/item?id=49643546)

**背景**: Rust 是一种旨在防止内存安全漏洞的编程语言，例如空指针解引用和缓冲区溢出，这些在 C 和 C++ 中很常见。据 Azure CTO Mark Russinovich 称，内存安全问题约占微软产品中 CVE 的 70%。在微软，一级语言状态意味着该语言在生产使用中得到全面支持，拥有完整的工具和安全工作流程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://rustfoundation.org/media/guest-post-rust-is-tier-1-language-at-microsoft/">Guest Post: Rust Is Tier - 1 Language at Microsoft</a></li>
<li><a href="https://en.wikipedia.org/wiki/Memory_safety">Memory safety - Wikipedia</a></li>
<li><a href="https://spectrum.ieee.org/memory-safe-programming-languages">The Move to Memory-Safe Programming - IEEE Spectrum</a></li>

</ul>
</details>

**社区讨论**: 社区情绪总体积极，评论者强调 Rust 作为 C++ 和 C# 的严肃竞争对手已经成熟，并指出微软此举对内存安全的战略重要性。一些人讨论了微软雄心勃勃的自动化 C 到 Rust 转换目标以及 MSVC 后端集成的重要性，而其他人则指出操作系统厂商在系统编程语言上多元化的更广泛行业趋势。

**标签**: `#Rust`, `#Microsoft`, `#systems-programming`, `#memory-safety`, `#language-adoption`

---

<a id="item-8"></a>
## [索尼因数字游戏所有权声明面临诉讼](https://consumerrights.wiki/w/Sony_PlayStation_digital_game_ownership_lawsuit) ⭐️ 8.0/10

consumerrights.wiki 上的一篇维基页面汇编了索尼自家网站和声明中似乎承认玩家“拥有”其数字游戏的引用，这与索尼在正在进行的集体诉讼中的法律辩护直接矛盾。该诉讼于 2025 年 6 月由四名 PlayStation 客户提起，指控索尼未能适当披露购买可下载游戏并不授予永久所有权或访问权。 此案可能为数字消费者权利树立重要先例，迫使公司对“购买”数字游戏的实际含义保持透明。它影响数百万 PlayStation 用户，并可能影响整个游戏行业的数字商店如何处理所有权披露和许可条款。 诉讼引用了 2025 年加州一项法律，要求公司明确告知消费者，为可下载游戏付费并不授予永久访问权。索尼的辩护称其服务条款已明确说明这一点，同时公司还援引了服务条款第 14 条中的强制仲裁条款和集体诉讼豁免，要求用户在 30 天内以书面形式选择退出。

hackernews · haunter · 9月10日 12:18 · [社区讨论](https://news.ycombinator.com/item?id=49642531)

**背景**: 随着 PlayStation Store 等商店以许可而非实体产品的方式销售游戏，数字游戏所有权已成为一个有争议的问题。与实体光盘或书籍不同，数字购买通常授予的是不可转让、可撤销的许可，发行商可以更改或撤销。消费者权益倡导者认为，这种区别常被“购买”和“拥有”等营销语言所掩盖，导致越来越多的法律和监管审查。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.polygon.com/sony-digital-games-lawsuit-california/">PlayStation Wants To Prove In Court That You Don't Own Your Digital Games</a></li>
<li><a href="https://www.gamefile.news/p/facing-lawsuit-sony-argues-its-already">Facing lawsuit, Sony argues it’s already obvious that digital games aren’t owned by consumers</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论者强烈批评强制仲裁条款是剥夺消费者权利的工具，有人称其“完全应该非法”。其他人用实体书的类比来讨论数字所有权的本质，还有一些人对索尼表达了深深的矛盾心理，并提到过去的 rootkit 丑闻等事件。

**标签**: `#digital-ownership`, `#consumer-rights`, `#legal`, `#gaming`, `#arbitration`

---

<a id="item-9"></a>
## [OpenAI 推出搭载 GPT-6 Astra 的金融版 ChatGPT](https://openai.com/index/introducing-chatgpt-financial-services) ⭐️ 8.0/10

OpenAI 宣布推出 ChatGPT for Financial Services，这是 ChatGPT 的专用版本，将内置金融数据与最新发布的 GPT-6 Astra 模型相结合。该产品面向研究、金融建模以及生成可直接交付客户的材料等场景。 这标志着 OpenAI 正式进军面向重要行业的垂直领域产品，可能重塑银行、资产管理公司和咨询机构开展研究与交付客户材料的方式。这也表明，像 GPT-6 Astra 这样的前沿模型能力正被打包成面向企业的定制化产品，而不再仅作为通用聊天工具出售。 GPT-6 Astra 于 2026 年 9 月 3 日率先向获批用户发布，次日全面开放；据报道其在某项关键基准测试中得分 64.6%，而 Claude Fable 5.1 为 52.6%，同时预估 API 成本低约 31%。金融版在此基础上叠加了内置金融数据，但 OpenAI 尚未披露该垂直产品的数据来源、合规控制措施或定价细节。

rss · OpenAI Blog · 9月10日 07:00

**背景**: GPT-6 Astra 是 OpenAI 开发的大语言模型，被定位为在推理能力上较前代有重大提升的一代。ChatGPT for Financial Services 是将该模型面向金融工作流进行领域化封装的产品，此前 OpenAI 已推出个人理财功能，允许用户关联账户并获得预算与投资建议。企业厂商越来越多地提供面向特定行业的 AI 产品，因为通用聊天机器人往往缺乏受监管行业所需的数据集成能力和合规保障。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/GPT-6_Astra">GPT-6 Astra</a></li>
<li><a href="https://openai.com/index/gpt-6-astra/">GPT - 6 Astra : A new generation of intelligence | OpenAI</a></li>
<li><a href="https://openai.com/index/personal-finance-chatgpt/">A new personal finance experience in ChatGPT | OpenAI</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#ChatGPT`, `#Financial Services`, `#GPT-6`, `#AI Applications`

---

<a id="item-10"></a>
## [OpenAI 推出基于 Codex Harness 的托管 Agents API](https://openai.com/index/introducing-the-agents-api) ⭐️ 8.0/10

OpenAI 正式推出 Agents API，这是一项由 Codex harness 驱动的托管云服务，让开发者能够构建并部署具备编排、长时间运行会话和工具调用能力的 AI 智能体。此次发布将 Codex 的智能体循环定位为可复用的平台层，而不仅仅是编程助手。 这是一次重要的平台级动作，因为它将智能体编排、会话持久化和工具调用变成托管服务，降低了团队构建自主智能体的工程负担。同时它也加剧了与 LangGraph 等智能体框架的竞争，并可能影响企业部署长时间运行 AI 工作流的方式。 该服务构建在 Codex harness 之上，也就是驱动 OpenAI Codex CLI 的同一套智能体循环，而 Codex CLI 是一个用 Rust 编写的开源单体二进制文件，开发者可以检查和改造它。该 API 面向需要在多个会话中持续取得进展的云端智能体，而上下文管理和记忆正是这一场景中最棘手的问题。

rss · OpenAI Blog · 9月10日 00:00

**背景**: AI 智能体是一种利用语言模型进行规划并采取行动（例如调用工具或编写代码）以多步骤完成目标的系统。Harness 是围绕智能体运行的软件层，负责管理智能体循环、上下文，并将模型与工具和沙箱连接起来。长时间运行的智能体旨在跨数小时、数天甚至数周持续推进同一目标，这要求记忆能够超越任何单一上下文窗口而存在。OpenAI 的 Codex harness 被描述为一个开放、可复用的智能体循环，开发者可以在此基础上进行构建。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developers.openai.com/blog/codex-as-a-platform">Codex as a platform: build on the open agent harness | OpenAI ...</a></li>
<li><a href="https://walkinglabs.github.io/learn-harness-engineering/en/harness-designs/codex/">Breaking Down Codex 's Harness Design | Learn Harness Engineering</a></li>
<li><a href="https://addyosmani.com/blog/long-running-agents/">Long - running Agents | AddyOsmani.com</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#AI Agents`, `#API`, `#Codex`, `#Cloud Services`

---

<a id="item-11"></a>
## [OpenAI 在 API 中推出 GPT-Live-1，支持全双工语音](https://openai.com/index/introducing-gpt-live-1-in-the-api) ⭐️ 8.0/10

OpenAI 在其 API 中推出了 GPT-Live-1，将 ChatGPT 自然流畅的全双工语音对话能力开放给开发者，同时带来更强的指令遵循能力、自定义语音以及电话（telephony）支持。作为新一代 GPT-Live 语音模型的一部分，OpenAI 还同时发布了更小型的 GPT-Live-1 mini 版本。 其重要意义在于，全双工语音与电话支持让开发者能够构建可直接通过电话部署的语音智能体，应用场景从餐厅预订到客户支持，推动语音 AI 从演示走向生产环境。这也表明 OpenAI 正把消费级的 ChatGPT 语音体验转化为开发者平台，从而加剧语音 AI API 市场的竞争。 全双工意味着模型可以边说话边聆听，并自然地处理打断，而不是遵循严格的一问一答式轮流节奏。OpenAI 指出，还可以借助 OpenAI Presence 在 GPT-Live-1 之上构建实时语音交互工作流，不过目前详细的技术规格与定价信息仍然有限。

rss · OpenAI Blog · 9月10日 00:00

**背景**: 传统语音接口是半双工的：系统要么说话，要么聆听，强制形成一种僵硬、不自然的轮流对话模式。全双工语音 AI 把对话视为一个连续过程，允许同时说话与聆听，从而顺畅处理打断以及诸如“等等，我不是这个意思”之类的纠正。GPT-Live-1 将这一能力封装进 API，使开发者无需再自行拼装语音识别、语言模型和语音合成等独立组件，就能获得听起来自然的语音智能体。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/introducing-gpt-live-1-in-the-api/">Build more natural voice experiences with GPT‑Live‑1 in the API</a></li>
<li><a href="https://www.instadesk.com/blog/instadesk-Full-Duplex-Voice-AI-Natural-2026032717">What Is Full - Duplex Voice AI? And Why It Matters for Natural...</a></li>
<li><a href="https://techbeat.co/story/gpt-live-1-api-adds-full-duplex-voice-and-telephony-support">GPT-Live-1 API Adds Full-Duplex Voice and Telephony Support</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#Voice AI`, `#API`, `#GPT-Live-1`, `#Conversational AI`

---

<a id="item-12"></a>
## [研究者审计真实果蝇连接组为何学不会乒乓球](https://www.reddit.com/r/MachineLearning/comments/1wc67ci/i_tried_to_make_a_real_fly_connectome_learn_to/) ⭐️ 8.0/10

一位研究者尝试用多巴胺式可塑性训练 MaleCNS v1.0 果蝇连接组（16.6 万个神经元，真实电镜重建）的一个小型真实子图来玩乒乓球，结果它没有学会。这次失败促使他进行详细审计，发现了 neuPrint 正则表达式 bug 导致两个神经元群体被静默清零、光感受器到运动检测器之间缺失通路，以及部分运动神经元完全没有感觉突触、永远无法放电等问题。 这一负面结果和方法论审计比常见的炒作式成功案例更有价值，它揭示出那些病毒式传播的“果蝇大脑玩 Doom/Minecraft/Beat Saber”演示可能依赖宽松的游戏引擎、手工注入的行为或过拟合，而非真正的涌现学习。它为连接组模拟和神经科学社区提供了一个关于如何验证此类模型的严谨案例研究。 审计发现，尽管权重确实在变化，但在多个随机种子下，开启学习与关闭学习产生了逐位完全相同的结果，原因是四个可用运动神经元中有一半与任何感觉通路都没有突触连接，却因数组索引巧合被分配到“球拍下移”组。在围绕视觉目标追踪假说重建回路后，开启学习与关闭学习终于出现差异，但效果看起来像是学习规则让整个系统安静下来，而非技能提升，因为未击中多于击中，惩罚占据主导。

reddit · r/MachineLearning · /u/oPeraza2007 · 9月10日 02:28

**背景**: 连接组是大脑或神经系统中所有神经元及其突触连接的完整图谱；MaleCNS v1.0 是最近发布的雄性果蝇中枢神经系统真实电镜重建，包含超过 16.6 万个神经元和约 1.25 亿个突触连接。多巴胺式可塑性指受多巴胺样奖励或惩罚信号调节突触强度的学习规则，其灵感来自生物大脑强化行为的方式。乒乓球是一款简单的双球拍电子游戏，常被用作强化学习的最小测试平台，因为它每一帧都提供二元的击中或未击中信号。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://hothardware.com/news/google-mapped-a-fruit-fly-brain-so-engineers-taught-it-to-play-doom">Google Mapped A Fruit Fly Brain, So Engineers Taught It To Play Doom</a></li>
<li><a href="https://theconsciousness.ai/architecture/connectomes/">Connectome Atlas Console. Complete... | The Consciousness AI</a></li>

</ul>
</details>

**标签**: `#connectome`, `#neuroscience`, `#machine-learning`, `#plasticity`, `#negative-results`

---

<a id="item-13"></a>
## [蚂蚁国际携手 Visa 与 Mastercard 制定 AI 代理支付标准](https://www.cnbc.com/2026/09/10/ant-international-visa-mastercard-ai-agent-payment-standard.html) ⭐️ 8.0/10

蚂蚁国际宣布与 Visa 和 Mastercard 合作，为 AI 代理支付制定通用标准，并建立“了解你的代理”（Know Your Agent）机制，用于将代理关联到有效实体、评估其行为并监测风险。三方援引麦肯锡的预测称，到 2030 年 AI 代理可能处理全球消费者商业交易中的 3 万亿至 5 万亿美元。 如果三方能够就共同框架达成一致，它可能成为代理式商务事实上的互操作层，让 AI 代理能够跨不同卡组织和支付系统安全交易。这对金融科技公司、商户和消费者都很重要，因为它解决了当非人类代理花钱时由谁负责以及如何建立信任的问题。 “了解你的代理”机制旨在验证 AI 代理是否有权代表用户行事，这与单纯处理交易本身是不同的环节。该公告尚未说明具体技术规范、时间表，也未明确该标准将采用开源还是专有形式。

telegram · zaihuapd · 9月10日 03:00

**背景**: 随着 AI 代理越来越多地代替用户购物、预订和付款，支付行业缺乏一种通用方式来确认代理是否合法且获得授权。谷歌此前已提出自己的代理支付协议 AP2，这是一种使用加密“数字授权”来记录用户意图和批准的开源标准，因此蚂蚁国际与 Visa、Mastercard 的这次合作是围绕代理式商务规则制定权更广泛竞争的一部分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.hokanews.com/2026/09/visa-and-mastercard-back-ant.html">Visa and Mastercard Back Ant International’s ‘ Know Your Agent ...</a></li>
<li><a href="https://www.linkedin.com/posts/naveedahamed_announcing-agent-payments-protocol-ap2-activity-7374356643007950849-xhwD">Announcing Agent Payments Protocol (AP2) | Google Cloud Blog</a></li>
<li><a href="https://blockchain.news/flashnews/google-launches-agent-payments-protocol-ap2-lightspark-analysis-highlights-open-standards-for-ai-commerce">Google Launches Agent Payments Protocol... | Blockchain.News</a></li>

</ul>
</details>

**标签**: `#AI agents`, `#payments`, `#fintech`, `#standards`, `#Visa/Mastercard`

---