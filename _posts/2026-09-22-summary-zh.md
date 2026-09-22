---
layout: default
title: "Daily-Summary: 2026-09-22 (ZH)"
date: 2026-09-22
lang: zh
---

> 从 59 条内容中筛选出 10 条重要资讯。

---

1. [小米发布 MiMo v2.6 开源权重模型系列，训练过程高度透明](#item-1) ⭐️ 8.0/10
2. [NASA 火星采样返回任务实际上已被取消](#item-2) ⭐️ 8.0/10
3. [Bryan Cantrill 回顾 Sun Microsystems 的战略失误](#item-3) ⭐️ 8.0/10
4. [美国无限期暂停 800 美元以下进口免税豁免](#item-4) ⭐️ 8.0/10
5. [npm 包 mathmain 中被发现隐藏的加密加载器](#item-5) ⭐️ 8.0/10
6. [Cloudflare Python Workers 结束两年预览正式发布](#item-6) ⭐️ 8.0/10
7. [MacStories 评测 M5 Ultra Mac Studio 的本地 AI 智能体表现](#item-7) ⭐️ 8.0/10
8. [TypeSafe AI 发布首个“System One”决策模型 Jev](#item-8) ⭐️ 8.0/10
9. [亚马逊 Bedrock 接入 Kimi K3，中国大模型首次以分成模式出海](#item-9) ⭐️ 8.0/10
10. [M6 Mac mini 实测：多核追平 Intel 旗舰，GPU 接近翻倍](#item-10) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [小米发布 MiMo v2.6 开源权重模型系列，训练过程高度透明](https://mimo.xiaomi.com/mimo-v2-6) ⭐️ 8.0/10

9 月 22 日，小米 MiMo 团队发布并开源 MiMo-V2.6 系列，包括定位旗舰的 MiMo-V2.6-Pro 和兼顾效率与成本的 MiMo-V2.6-Flash，两款均为原生全模态模型，覆盖编程、电脑操作、3D 场景与视听内容创作等任务。面向高吞吐场景的 Pro-UltraSpeed 也在逐步推出，小米称其在同等质量下输出速度最高可提升 20 倍，网页体验、API 和 Hugging Face 模型入口均已开放。 按算力计，这可能是开源模型团队迄今公开披露的规模最大的单次强化学习训练之一；其异常透明的发布方式——实时训练看板、详尽技术报告、7000 个环境和完整强化学习框架——抬高了开源权重 AI 中“开放”一词的门槛。这也进一步推动了由 DeepSeek、Qwen、Moonshot、Z.ai 等中国实验室主导的开源前沿模型趋势，而美国多数实验室仍将最大模型保持闭源。 MiMo-V2.6-Flash 总参数 309B、激活参数 15B，Pro 总参数 1.02T、激活参数 42B，显示其采用混合专家（MoE）架构。团队以 MixRL 联合训练中等难度、可验证的代码和智能体任务，再把游戏、3D 和主观评测等难验证或超长任务单独训练，并通过 MOPD 合并能力；同时还开放了由 MiMo 训练轨迹蒸馏的 Qwen 模型。

hackernews · volf_ · 9月21日 20:12 · [社区讨论](https://news.ycombinator.com/item?id=49792730)

**背景**: 开源权重模型是指将训练好的学习参数（权重和偏置）公开发布的 AI 模型，任何人都可以下载和运行，但修改与再分发权限取决于具体许可证；这与完全开源 AI 不同，后者还会公开源代码、训练数据和中间检查点。DeepSeek、阿里云、Moonshot AI、Z.ai 等中国企业大多以 Apache 或 MIT 等宽松许可证发布开源权重模型，而 OpenAI、Anthropic、Google DeepMind 等美国实验室则偏好专有框架——这一分歧已成为常被描述为中美 AI 竞赛的重大地缘政治议题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mimo.mi.com/docs/en-US/news/latest/v2-6">Xiaomi MiMo-V2.6 Series: 3 New Models Officially Released</a></li>
<li><a href="https://mimo.xiaomi.com/mimo-v2-6">MiMo-V2.6 | Xiaomi</a></li>
<li><a href="https://en.wikipedia.org/wiki/Open-weight_model">Open-weight model</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍赞赏小米的透明度，有人称实时训练看板是极佳的学习与教学工具，技术报告也异常详尽。也有人表示相比美国模型，如今对中国模型更感兴趣，主要原因是价格可负担；还有人认为凭借大规模电力和电网建设，中国长期看可能赢得 AI 竞赛，而美国受制于能源瓶颈。此外，多位用户分享了 Flash 与 Pro 的参数规模以及亲手做的“鹈鹕”测试渲染图。

**标签**: `#LLM`, `#open-weights`, `#Xiaomi`, `#AI-race`, `#model-release`

---

<a id="item-2"></a>
## [NASA 火星采样返回任务实际上已被取消](https://www.science.org/content/article/nasa-s-mars-sample-return-mission-dead) ⭐️ 8.0/10

NASA 与欧洲航天局联合开展的火星采样返回（MSR）任务——旨在取回毅力号火星车采集的样本——已于 2026 年实际上被取消。该项目于 2022 年获批，原计划在 2033 年前后带回样本，但成本超支和进度延误最终导致其终止。 此次取消标志着 NASA 旗舰行星科学项目的重大挫折，并将火星采样返回领域的领先地位让给了中国——中国的天问三号任务计划于 2028 年发射、2031 年前带回样本。这也引发了关于 JPL 管理、成本控制以及机器人探测与载人火星探索未来平衡的更广泛质疑。 MSR 项目包含三个部分：毅力号火星车采集样本、带上升飞行器的样本取回着陆器，以及地球返回轨道器。批评者指出，JPL 领导层将成本推高至约 110 亿美元，样本返回时间推迟到 2040 年，并且围绕阿丽亚娜 64 等传统火箭设计任务，而非采用星舰或新格伦等成本更低、运力更大的火箭。

hackernews · Muhammad523 · 9月21日 19:14 · [社区讨论](https://news.ycombinator.com/item?id=49791939)

**背景**: 火星采样返回是行星科学长期追求的目标，因为将火星岩石和尘土带回地球可以进行远比火星车上的仪器更广泛的分析——尤其是寻找过去生命迹象。NASA 的毅力号火星车自 2021 年起一直在火星上专门为此目的封存样本。中国的天问三号是一项机器人双次发射任务，计划采集至少 500 克火星样本，并在 2031 年前后带回地球。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mars_sample-return_mission">Mars sample-return mission</a></li>
<li><a href="https://en.wikipedia.org/wiki/Tianwen-3">Tianwen-3 - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/NASA-ESA_Mars_Sample_Return">NASA-ESA Mars Sample Return - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者强调中国并行的天问三号项目构成迫在眉睫的竞争威胁，有人指出它将于 2028 年发射。一位 ExoMars 火星车项目的参与者表示，尽管地缘政治障碍重重，仍希望火星采样返回任务最终能够重启。其他人则尖锐批评 JPL 领导层成本超支、围绕传统火箭而非星舰进行设计，也有人认为投资可重复使用运载能力比投入数十亿美元的样本取回任务更明智。

**标签**: `#space-exploration`, `#NASA`, `#Mars`, `#JPL`, `#space-policy`

---

<a id="item-3"></a>
## [Bryan Cantrill 回顾 Sun Microsystems 的战略失误](https://bcantrill.dtrace.org/2026/09/20/what-sun-got-wrong/) ⭐️ 8.0/10

Bryan Cantrill 发表了题为《What Sun got wrong》的博客文章，分析了导致 Sun Microsystems 衰落的一系列战略与技术失误，并在 Hacker News 上引发了 488 分、272 条评论的热烈讨论。文章和讨论汇集了前 Sun 工程师与行业资深人士的第一手经验。 这篇回顾提供了一个高价值的案例研究，说明一家主导型科技公司如何因战略失误而失去市场地位，而社区讨论则补充了大量亲历者的历史背景。对于研究平台战略、供应商锁定以及商品化硬件崛起的人来说，这些内容都很有参考价值。 评论者指出了若干具体失误，例如 Sun 在 2002 年短暂取消 x86 平台上的 Solaris，这让不愿被锁定在 SPARC 上的客户感到失望；以及 2002 年未能与 Google 达成交易，因为 Sun 坚持要知道 Google 拥有多少台服务器。还有人提到 Sun 繁琐的企业销售流程与戴尔的直销模式形成鲜明对比，以及 Sun 在文化上更偏爱打造令人惊叹的技术，而非经营业务。

hackernews · chmaynard · 9月21日 14:03 · [社区讨论](https://news.ycombinator.com/item?id=49787436)

**背景**: Sun Microsystems 是一家成立于 1982 年的美国科技公司，开发并销售计算机、硬件以及 Solaris Unix 操作系统，同时还设计了 SPARC RISC 指令集架构。Solaris 孕育了 DTrace、ZFS 等具有影响力的技术，Sun 在互联网泡沫时期是一股重要力量，直到 2010 年被 Oracle 收购。讨论反思了 Sun 专有、高利润的模式如何在与商品化 x86 服务器和开源替代方案的竞争中陷入困境。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Sun_Microsystems">Sun Microsystems - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Solaris_operating_system">Solaris operating system</a></li>
<li><a href="https://en.wikipedia.org/wiki/SPARC">SPARC - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区情绪既有怀旧也有分析，前客户和工程师分享了关于 Sun 销售流程困难、2000 年代战略失误以及工程优先文化的第一手轶事。一些评论者认为 Sun 从未真正对经营业务感兴趣，另一些人则回忆起使用 Sun 瘦客户机以及 Pine、vi 等工具的愉快经历。还有一位评论者用 Sun 股价的崩盘来警示当今估值高企的 AI 和科技股票。

**标签**: `#Sun Microsystems`, `#tech history`, `#Solaris`, `#SPARC`, `#industry analysis`

---

<a id="item-4"></a>
## [美国无限期暂停 800 美元以下进口免税豁免](https://www.personalimportation.org/advocacy) ⭐️ 8.0/10

美国政府宣布无限期暂停对价值 800 美元或以下进口商品的 de minimis 行政豁免，相关通知于 2026 年 6 月 24 日刊登在《联邦公报》上。此举取消了低价值邮件货物的免税待遇，并引入了新的邮政非正式入境程序。 这一政策转变对消费者、电子商务企业和国际邮件流动产生重大影响，因为它取消了长期存在的、促进低成本进口的豁免。它可能提高日常商品成本并扰乱供应链，尤其影响依赖跨境购买廉价药品和其他必需品的个人。 该暂停适用于邮件货物和邮政非正式入境，美国海关与边境保护局（CBP）正在测试新的电子非正式入境类型 13——非正式邮件入境。值得注意的是，该规则并未禁止进口处方药，但取消了其关税豁免，意味着此类物品仍可进口但需缴纳相应关税。

hackernews · burnt-resistor · 9月21日 20:58 · [社区讨论](https://news.ycombinator.com/item?id=49793322)

**背景**: De minimis 是一个拉丁法律术语，意为“关于微小事物”，在贸易政策中指低于某一门槛的进口商品可免关税和简化海关程序。美国此前设有 800 美元的 de minimis 门槛，允许大多数低价值货物以免税和最少文书方式入境。特朗普政府于 2025 年开始暂停对所有国家的免税 de minimis 待遇，而此次最新行动使邮件货物的暂停变为无限期。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.federalregister.gov/documents/2026/06/24/2026-12668/test-of-the-new-electronic-informal-entry-process-for-mail">Test of the New Electronic Informal Entry Process for Mail</a></li>
<li><a href="https://www.whitehouse.gov/presidential-actions/2025/07/suspending-duty-free-de-minimis-treatment-for-all-countries/">Suspending Duty-Free De Minimis Treatment for All Countries</a></li>
<li><a href="https://www.npr.org/2025/08/28/nx-s1-5519361/de-minimis-rule-tariffs-consumers-imports-trump">De minimis is ending. What does that mean for U.S. consumers ...</a></li>

</ul>
</details>

**社区讨论**: 评论者强烈担忧此举对从加拿大进口廉价药品的美国人的影响，有人称其“悲剧”，并指出许多人依赖仿制药来应对医疗费用。其他人强调了中期选举前的政治时机，并澄清该规则并未禁止处方药进口，而是取消了关税豁免；一位评论者将加拿大药房描述为美国破碎医疗体系的“胶带”。

**标签**: `#trade policy`, `#de minimis`, `#imports`, `#healthcare`, `#e-commerce`

---

<a id="item-5"></a>
## [npm 包 mathmain 中被发现隐藏的加密加载器](https://safedep.io/mathmain-encrypted-loader/) ⭐️ 8.0/10

SafeDep 的安全分析发现，npm 包 mathmain@1.0.0（一个复制流行数学库 mathjs 的包）中包含一个加密加载器，只有当传入一个特定的 3x3 矩阵作为输入时，它才会解密并执行其有效载荷。该加载器隐藏了一个远程访问植入程序，而后续分析发现攻击的第二阶段实际上是失效的。 这一事件凸显了 npm 供应链攻击日益复杂化，恶意代码被隐藏在加密加载器之后，并且只在罕见条件下触发以逃避检测。它影响到依赖第三方包的 JavaScript 开发者和组织，也加剧了关于 CommonJS 的动态 require() 是否比 ESM 的静态导入更容易隐藏此类攻击的争论。 该加密加载器将解密逻辑分散在同一个包内的多个文件中，触发条件是一个特定的 3x3 矩阵，这似乎是一个刻意设置、难以猜测的条件。mathmain@1.0.0 仍然可以在 npm 注册表中获取，而作者的 GitHub 仓库和账户已被删除。

hackernews · abhisek · 9月21日 18:33 · [社区讨论](https://news.ycombinator.com/item?id=49791378)

**背景**: npm 是世界上最大的软件注册表，拥有超过两百万个 JavaScript 包，针对它的供应链攻击越来越常见，包括 2025 年 11 月攻陷维护者账户的 Sha1-Hulud（Shai-Hulud 2.0）行动。加密加载器是一种将恶意代码混淆并仅在运行时解密的技术，使得静态分析和搜索可疑调用变得更加困难。CommonJS 使用难以审计的动态 require() 调用，而 ESM 的静态 import 语句更容易被分析工具检查。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://safedep.io/mathmain-encrypted-loader/?ref=upstract.com">Why Does an npm Math Library Need an Encrypted Loader?</a></li>
<li><a href="https://news.ycombinator.com/item?id=49791378">Why Does an NPM Math Library Need an Encrypted Loader ?</a></li>
<li><a href="https://grokipedia.com/page/Sha1-Hulud_npm_supply_chain_attack">Sha1-Hulud npm supply chain attack</a></li>

</ul>
</details>

**社区讨论**: 评论者对选择特定 3x3 矩阵作为触发条件感到困惑，其中一人指出破解版本显示第二阶段完全失效。其他人则认为这提醒人们应放弃 CommonJS 转而使用 ESM，因为动态 require() 比动态 import() 更难被搜索到，还有一位评论者质疑执法部门是否会跟进此类后门，以及为什么该包仍在 npm 上活跃且没有任何警告。

**标签**: `#security`, `#supply-chain`, `#npm`, `#malware`, `#javascript`

---

<a id="item-6"></a>
## [Cloudflare Python Workers 结束两年预览正式发布](https://blog.cloudflare.com/python-workers-ga/) ⭐️ 8.0/10

Cloudflare 宣布 Python Workers 正式全面可用（GA），在经历两年公开测试后，Python 成为其服务端 Workers 平台上的一等公民、完全受支持的语言。该运行时通过 Pyodide/Emscripten 将 Python 编译为 WebAssembly 执行，并新增对 Workers AI、R2、D1 等服务的原生绑定，使 FastAPI、Django、Flask 等框架无需 JavaScript 胶水代码即可在边缘运行。 这是一个重要的平台里程碑，因为它让庞大的 Python 开发者群体能够把现有代码和框架直接部署到 Cloudflare 的全球边缘网络，可能减少为使用边缘计算而重写为 JavaScript 或 TypeScript 的需要。这也表明 WebAssembly 作为多语言无服务器运行时的势头正在增强，并加剧了与 Wasmer 等边缘平台之间的竞争。 由于 Python Workers 运行在 WebAssembly 沙箱中，带有原生 C、C++ 或 Rust 扩展的包必须先交叉编译为 WebAssembly；Cloudflare 此前不得不自行编译和托管这类包，这限制了可用的库。社区讨论还提出了冷启动性能方面的疑问，并指出 Pyodide/Emscripten 支持正通过 PEP 783 进行标准化。

hackernews · torutofu · 9月21日 13:38 · [社区讨论](https://news.ycombinator.com/item?id=49787142)

**背景**: Cloudflare Workers 是一个无服务器边缘计算平台，在 Cloudflare 覆盖 300 多个地点的全球网络上执行代码，传统上使用 JavaScript、TypeScript 或 WebAssembly。Pyodide 是 CPython 到 WebAssembly/Emscripten 的移植，使标准 Python 代码和纯 Python 包能够在受限环境中运行。WebAssembly 是一种可移植的二进制指令格式，让 JavaScript 之外的语言也能在沙箱中高效运行，但原生扩展模块必须重新编译才能以它为目标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.cloudflare.com/python-workers?ref=upstract.com/">Bringing Python to Workers using Pyodide and WebAssembly</a></li>
<li><a href="https://www.brocker.org/cloudflare-python-workers-general-availability">Cloudflare Python Workers Reach General Availability</a></li>
<li><a href="https://www.technobezz.com/news/cloudflare-python-workers-general-availability">Cloudflare Makes Python Workers Generally Available | Technobezz</a></li>

</ul>
</details>

**社区讨论**: 一位 urllib3 维护者澄清，上游的 Pyodide/Emscripten 和 JSPI 支持是几年前由外部贡献者提交并合并的，相关资金流向了该贡献者而非维护者。Wasmer 的 CEO 称赞了 Cloudflare 的进展，尤其是通过 PEP 783 实现的包标准化，但也指出了仍存在的架构问题；其他评论者则询问冷启动性能，并对标题措辞开了玩笑。

**标签**: `#Cloudflare Workers`, `#Python`, `#WebAssembly`, `#Serverless`, `#Edge Computing`

---

<a id="item-7"></a>
## [MacStories 评测 M5 Ultra Mac Studio 的本地 AI 智能体表现](https://www.macstories.net/stories/m5-ultra-mac-studio-review-the-dream-mac-for-local-ai-agents/) ⭐️ 8.0/10

MacStories 发布了对苹果新款 M5 Ultra Mac Studio 的详细评测，重点考察本地 AI 推理性能，并与 Nvidia RTX 5090 进行了 token 生成速度对比。评测中的图表显示，在 Qwen3 27B 模型上，M5 Ultra 在 8K 提示长度下达到每秒 48 个 token，而 RTX 5090 为每秒 59 个 token，上一代 M3 Ultra 仅为每秒 31 个 token。 这篇评测提供了首批关于苹果 M5 Ultra 本地大语言模型推理性能的独立基准测试之一，有助于 AI/ML 从业者和开发者判断高端 Mac Studio 能否替代或补充云端 AI 订阅服务。与 RTX 5090 的对比以及 Hacker News 上 225 条评论的讨论，凸显了成本效益、内存带宽和开发者生产力等关键决策因素。 基准测试图表显示，随着提示长度从 8K 增长到 256K，M5 Ultra 的生成速度从每秒 48 个 token 降至 24 个，而 RTX 5090 从 59 降至 44，并且完全无法处理 256K 长度。社区成员指出，512GB 内存配置预计在 10 月推出，可能使顶配 Mac Studio 价格超过 15000 美元，还有人建议与双 DGX Spark 系统进行对比。

hackernews · piotrgrabowski · 9月21日 13:53 · [社区讨论](https://news.ycombinator.com/item?id=49787313)

**背景**: 苹果 M5 Ultra 是该公司为 Mac Studio 推出的新一代旗舰 Apple Silicon 芯片，采用四晶粒架构，将两颗 M5 Max 芯片融合为单一 SoC。本地 AI 推理是指在自有硬件上直接运行大语言模型，而非通过云端 API，这样可以提升隐私性并减少持续费用。Nvidia RTX 5090 是基于 Blackwell 架构的旗舰消费级 GPU，配备 32GB GDDR7 显存，常被用作本地 AI 性能的参考基准。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/">Apple introduces new Mac Studio with M5 Max and M5 Ultra - Apple</a></li>
<li><a href="https://en.wikipedia.org/wiki/RTX_5090">RTX 5090</a></li>
<li><a href="https://www.apple.com/mac-studio/">Mac Studio - Apple</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍认为，对于重度本地 AI 使用场景，M5 Ultra 相比云端订阅更具成本效益，但质疑开发者能否达到 20 倍订阅计划的生产力水平。有人对顶配机型的高昂总价表示担忧，还有人认为需要更多真实编程基准测试以及与其他平台（如双 DGX Spark）的对比，才能得出明确结论。

**标签**: `#Apple Silicon`, `#Local AI`, `#LLM Inference`, `#Hardware Benchmarks`, `#Mac Studio`

---

<a id="item-8"></a>
## [TypeSafe AI 发布首个“System One”决策模型 Jev](https://simonwillison.net/2026/Sep/21/jev/) ⭐️ 8.0/10

TypeSafe AI 发布了 Jev，这是其称为“System One 模型”（也被称为“决策模型”）的新模型类别的首个实例，它接受非结构化文本输入，但返回类型化的概率输出，例如类别概率、是/否置信度分数和数值评分，而不是生成文本。Jev 的定价为每百万输入 token 0.042 美元，输出 token 免费，比 OpenAI 的 GPT-5 Nano（每百万输入 token 0.05 美元）更便宜。 这标志着从文本生成型 LLM 向输出类型化、机器可直接消费结果的专用决策模型的重大转变，可能使 AI 分类、排序和过滤任务变得更快、更便宜。同时，它也引发了关于透明度和偏见的重要担忧，因为这些模型只返回一个浮点数，而不解释其决策依据。 Jev 支持三种问题类型：“Noul”是/否问题（Bernoulli 的缩写），返回 0 到 1 之间的置信度分数；选择题，返回所提供选项的概率分布；评分题，返回数值范围内的浮点值。它接受单个“state”对象（字符串、字符串数组或名称-值对），并并行评估多个问题，因此发送多个问题所需时间与发送一个问题大致相同。

rss · Simon Willison · 9月21日 23:09

**背景**: 大型语言模型（LLM）通常按输入和输出 token 计费，其中输出 token 费率更高，并且它们生成自由文本，开发者必须自行解析。TypeSafe AI 是一家成立于 2024 年、总部位于旧金山的公司，它将 Jev 定位为“前沿智能函数调用”：输入非结构化状态，输出类型化的概率决策，面向垃圾邮件检测、标签建议、优先级排序和搜索重排等分类式任务。“System One”这一名称与较慢、审慎的“System Two”推理模型形成对比，不过 Maggie Appleton 等评论者更倾向于“决策模型”这一说法。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Jev_(AI_model)">Jev (AI model) - Wikipedia</a></li>
<li><a href="https://www.langchain.com/blog/building-a-harness-with-jev">What Is Jev? A Guide to TypeSafe AI's System One Model - LangChain</a></li>
<li><a href="https://www.requesty.ai/blog/typesafe-jev-explained">TypeSafe Jev explained: how it works, LLM differences and... | Requesty</a></li>

</ul>
</details>

**社区讨论**: 包括 Simon Willison 和 Maggie Appleton 在内的评论者就命名展开了讨论，Appleton 更倾向于“决策模型”而非“System One 模型”。Willison 还提出担忧，认为 Jev 代表着向黑箱机器学习的倒退，因为它只返回一个浮点数而不提供任何理由，并警告偏见问题应被置于首位，尤其是在对求职者进行排名等高风险用途中。

**标签**: `#LLM`, `#AI Models`, `#Decision Models`, `#Probabilistic Inference`, `#TypeSafe AI`

---

<a id="item-9"></a>
## [亚马逊 Bedrock 接入 Kimi K3，中国大模型首次以分成模式出海](https://36kr.com/newsflashes/3992769217428488) ⭐️ 8.0/10

亚马逊云科技宣布其大模型服务平台 Amazon Bedrock 正式上架月之暗面的开源模型 Kimi K3，全球企业开发者可直接通过 Bedrock 调用。此前传闻的 Kimi 与海外云厂商收入分成合作由此正式落地。 这是中国大模型公司首次以收入分成模式向全球三大云厂商输出模型能力，标志着中国 AI 企业出海商业化的新范式。这也印证了 Kimi 相对美国前沿模型的竞争力，可能促使更多中国大模型厂商寻求类似的云厂商合作。 Kimi K3 是一个 2.8 万亿参数的开源多模态智能体模型，支持 100 万 token 上下文，基于 Kimi Delta Attention（KDA）和 Attention Residuals 构建。其自定义许可要求年收入超过 2000 万美元的推理服务商分成最高 30%，而月之暗面据称正与多家海外云厂商推进类似的分成合作。

telegram · zaihuapd · 9月21日 06:44

**背景**: Amazon Bedrock 于 2023 年推出，是 AWS 的全托管无服务器平台，通过统一 API 提供多家 AI 公司的基础模型，与 Microsoft Foundry 和 Google Cloud 形成竞争。月之暗面是一家 2023 年 3 月成立于北京的公司，为中国“AI 六小虎”之一，其 2026 年 7 月发布的 Kimi K3 以 2.8 万亿参数成为史上最大的开源权重模型。与云厂商分成是中国大模型厂商较新的变现方式，此前它们主要依赖直接 API 销售和国内云平台上架。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Amazon_Bedrock">Amazon Bedrock</a></li>
<li><a href="https://en.wikipedia.org/wiki/Kimi_(AI)">Kimi (AI) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Moonshot_AI">Moonshot AI</a></li>

</ul>
</details>

**标签**: `#AI/ML`, `#Cloud Computing`, `#Kimi`, `#AWS Bedrock`, `#Business Model`

---

<a id="item-10"></a>
## [M6 Mac mini 实测：多核追平 Intel 旗舰，GPU 接近翻倍](https://www.bilibili.com/video/BV1JQhz6fE1x) ⭐️ 8.0/10

极客湾对新款 M6 Mac mini 的实测显示，其 CPU 采用 2+4+6 核新布局，基于台积电 N2 工艺，超大核频率达 4.8 GHz，多核性能已与 Intel Panther Lake 的 Core Ultra X9 388H 打平，单核继续领先，整体较 M4 提升超过 50%。GPU 升级至 12 核，游戏性能接近 M4 的两倍，光追表现大幅增强。 这是首批针对苹果首款 2nm 芯片的详细第三方实测之一，表明 Apple Silicon 在多核负载上已能与 Intel 旗舰移动 CPU 正面抗衡，同时保持单核领先。GPU 与光追性能接近翻倍，也让 Mac mini 在游戏和 GPU 加速创作场景中更具竞争力，对 Intel Panther Lake 以及入门级独立显卡都构成压力。 M6 采用 2+4+6 核配置，超大核频率 4.8 GHz，功耗控制较为克制：CPU 满载约 25W，CPU+GPU 双烤整机约 65W。12 核 GPU 新增硬件光追、更新的着色器核心架构和 Dynamic Caching，苹果称其 AI 性能较 M5 提升 30%。

telegram · zaihuapd · 9月21日 16:32

**背景**: 苹果 M 系列芯片是集 CPU、GPU、内存等模块于一体的 SoC，历代产品通常都采用台积电当时最先进的制程。台积电 N2（2nm 级）是其 N3 之后的下一代工艺，在能效和 SRAM 密度上有所提升，而 M6 是苹果首款采用该工艺的芯片。Intel 的 Panther Lake（如拥有 16 核和 Arc B390 核显的 Core Ultra X9 388H）是 Intel 的竞争性新一代移动平台，因此两者的直接对比备受关注。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.macrumors.com/2026/08/25/apple-reveals-m6/">Apple Reveals M6 as First-Ever 2nm Chip - MacRumors</a></li>
<li><a href="https://en.wikipedia.org/wiki/Apple_M6">Apple M6 - Wikipedia</a></li>
<li><a href="https://overclock3d.net/reviews/cpu_mainboard/intel-core-ultra-x9-388h-panther-lake-cpu-review/">Intel Core Ultra X9 388H "Panther Lake" CPU Review - OC3D</a></li>

</ul>
</details>

**标签**: `#Apple Silicon`, `#hardware benchmarks`, `#M6 Mac mini`, `#GPU performance`, `#semiconductor process`

---