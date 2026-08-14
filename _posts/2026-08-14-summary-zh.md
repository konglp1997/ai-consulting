---
layout: default
title: "Daily-Summary: 2026-08-14 (ZH)"
date: 2026-08-14
lang: zh
---

> 从 53 条内容中筛选出 13 条重要资讯。

---

1. [GLM-5.3 发布：前沿编码与突现网络能力](#item-1) ⭐️ 9.0/10
2. [将 Doom 渲染器编译为 210 亿参数 Transformer，无需训练](#item-2) ⭐️ 9.0/10
3. [小红书开源 dots3-note：280B MoE 仅 16B 激活参数](#item-3) ⭐️ 9.0/10
4. [Qwen 3.8 27B 开源模型在 DeepSWE 上超越 Claude Opus 4.7](#item-4) ⭐️ 8.0/10
5. [Firefox 成为最后一个支持 uBlock Origin 的主流浏览器](#item-5) ⭐️ 8.0/10
6. [澳大利亚家用电池热潮降低批发电价](#item-6) ⭐️ 8.0/10
7. [开放模型现状：2026 年夏季行业分析](#item-7) ⭐️ 8.0/10
8. [torch-preflight：用于 PyTorch 错误检测和显存估算的静态检查工具](#item-8) ⭐️ 8.0/10
9. [AI 机器人实验室年测 300 万人体组织，有望终结动物测试](#item-9) ⭐️ 8.0/10
10. [美国法官责令谷歌简化第三方应用商店安装流程](#item-10) ⭐️ 8.0/10
11. [PostgreSQL 修复 to_char 高危漏洞，可导致任意代码执行](#item-11) ⭐️ 8.0/10
12. [苹果联手阿里训练中国专属 AI 模型](#item-12) ⭐️ 8.0/10
13. [Cursor 被 SpaceX 收购，加入 SpaceXAI 共同升级 Grok](#item-13) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [GLM-5.3 发布：前沿编码与突现网络能力](https://z.ai/blog/glm-5.3) ⭐️ 9.0/10

智谱 AI（Z.ai）于 2026 年 8 月 14 日发布了 GLM-5.3，这是一个 743B 参数的开源权重模型，声称在网络安全基准测试中超越了 Anthropic 的 Mythos 5。该模型展示了突现的网络能力，包括自主漏洞发现与利用，并在 Terminal Bench 3.0 和 Agents' Last Exam 上取得了开源最优结果。 此次发布标志着 AI 驱动网络安全领域的重要里程碑，因为 GLM-5.3 能够自主执行多阶段攻击链，可能降低网络攻击的门槛。它加剧了全球在防御和进攻方面的 AI 霸权竞赛，对安全研究人员、企业和政策制定者都具有深远影响。 GLM-5.3 是一个 743B 参数的模型，其开放权重在安全审查后分阶段发布。它在 CyberGym 和 AutomationBench 基准测试中领先，Z.ai 还建立了 CVD 门户（cvd.z.ai）来披露在流行软件中发现的漏洞，其中许多处于保密状态。该模型可通过 GLM Coding Plan 获取，起价为每月 18 美元。

hackernews · pella · 8月14日 05:19 · [社区讨论](https://news.ycombinator.com/item?id=49294997)

**背景**: GLM-5.3 是 Z.ai 开源权重 GLM 系列的一部分，该系列一直与西方前沿模型竞争。该模型的突现网络能力与行业趋势一致，即先进 AI 可以自动化网络攻击，正如 Google DeepMind 的 Frontier Safety Framework 所强调的那样。自主漏洞发现与利用涉及 AI 系统能够在最少人工干预的情况下发现并利用软件缺陷，这一能力具有重大的安全影响。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.scmp.com/tech/big-tech/article/3364077/zhipu-launches-flagship-model-glm-53-china-seeks-mythos-level-edge-cyber-defence">Zhipu launches flagship model GLM-5.3 as China seeks Mythos-level edge in cyber defence | South China Morning Post</a></li>
<li><a href="https://explainx.ai/blog/glm-5-3-launch-cyber-defense-benchmarks-august-2026">GLM-5.3 Launch: Benchmarks, Pricing & Access (Aug 2026) | explainx.ai Blog | explainx.ai</a></li>
<li><a href="https://www.reddit.com/r/singularity/comments/1vnz30c/glm_53_released_frontier_coding_with_emergent/">r/singularity on Reddit: GLM 5.3 released: Frontier Coding with Emergent Cyber Capabilities</a></li>

</ul>
</details>

**社区讨论**: 社区情绪总体积极，用户称赞模型的性能和 Z.ai 以研究为导向的沟通风格。一些用户报告了成功的红队场景和漏洞发现，而另一些用户指出 GLM-5.3 在某些基准测试中仍落后于 Mythos 5 和 Fable 等模型。此外，还有关于自主漏洞扫描的经济影响和伦理问题的讨论。

**标签**: `#AI`, `#LLM`, `#cybersecurity`, `#vulnerability research`, `#frontier models`

---

<a id="item-2"></a>
## [将 Doom 渲染器编译为 210 亿参数 Transformer，无需训练](https://www.reddit.com/r/MachineLearning/comments/1voazhm/i_compiled_dooms_renderer_into_a_21bparameter/) ⭐️ 9.0/10

作者将 Doom 的渲染算法移植为计算图，并使用自定义编译器 Torchwright 将其转换为 210 亿参数的 Transformer 检查点。该模型生成包含像素绘制命令的令牌序列，机械应用这些命令即可渲染出一帧画面，全程无需训练。 这展示了一种将复杂算法直接嵌入神经网络权重的新方法，有望在无需训练的情况下实现 Transformer 中的确定性计算。这可能对 AI 可解释性、程序合成以及传统软件与神经网络融合等领域产生影响。 该检查点是标准的 Hugging Face transformers 检查点，无需 trust_remote_code 即可加载。渲染一帧需要 3,614 个令牌的提示并生成 53,747 个令牌，在 B200 GPU 上约需 40 分钟，相当于每天约 35 帧（FPD），而原版 Doom 在 486 上可达 35 FPS。

reddit · r/MachineLearning · /u/notforrob · 8月14日 15:50

**背景**: Transformer 是一种利用注意力机制处理序列的神经网络架构，通常需要在大规模数据集上训练。将算法编译为 Transformer 权重是一个新兴研究领域，通过将计算图转换为模型参数，使模型无需训练即可执行特定计算。Doom 的渲染器使用 BSP 树和基于列的纹理映射等技术高效绘制 3D 场景。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://towardsdatascience.com/i-built-a-tiny-computer-inside-a-transformer/">I Built a Tiny Computer Inside a Transformer | Towards Data Science</a></li>
<li><a href="https://ood.dev/posts/calculator/">A calculator, compiled into a transformer — Out of Distribution</a></li>
<li><a href="https://en.wikipedia.org/wiki/Doom_engine">Doom engine - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 未提供社区讨论内容，但鉴于其新颖性和技术深度，可能的反应包括对编译方法的惊叹、关于训练与编译之间权衡的讨论，以及对潜在应用和局限性的好奇。

**标签**: `#transformers`, `#compilation`, `#neural networks`, `#Doom`, `#machine learning`

---

<a id="item-3"></a>
## [小红书开源 dots3-note：280B MoE 仅 16B 激活参数](https://x.com/dotsstudioai/status/2088083314855018521) ⭐️ 9.0/10

小红书 dots 实验室开源了 dots3-note preview 的权重，这是一个总参数 280B 的混合专家（MoE）模型，每次激活仅 16B 参数。该模型支持 512K 上下文窗口和多模态输入（文本、图片、视频、音频），并引入了一种名为 TEMPO 的新强化学习方法。 此次发布意义重大，因为它是中国领先科技公司的一项重大开源贡献，提供了一个高效（16B 激活）且长上下文的大规模 MoE 模型，可能加速多模态 AI 和智能体任务的研究与应用。TEMPO 和新基准（VibeSearchBench、VibeLifeBench）的引入可能为评估长程智能体设定新标准。 该模型已在 Hugging Face 上提供，此次发布还包括两个新基准：VibeSearchBench（200 个长程主动搜索任务）和 VibeLifeBench（覆盖十个日常生活领域的 200 个多周任务）。TEMPO 被描述为一种使用自批判和测试时价值估计来训练长程智能体的强化学习方法。

telegram · zaihuapd · 8月14日 08:27

**背景**: 混合专家（MoE）模型每次只激活部分参数，从而在降低推理成本的同时实现更大的总参数量。长上下文和多模态能力对于需要处理多样化真实世界数据的 AI 智能体越来越重要。强化学习用于训练智能体在长程任务中做出决策，而 VibeSearchBench 和 VibeLifeBench 等基准旨在评估这些能力在真实场景中的表现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/VibeBench/VibeSearchBench">GitHub - VibeBench/VibeSearchBench: 🔍 The hardest search benchmark in the wild — vague, multi-turn, proactive. 200 long-horizon tasks with persona-driven progressive disclosure, scored by verifiable schema-free knowledge-graph evaluation. No vibes, just triplet F1.</a></li>
<li><a href="https://arxiv.org/abs/2605.27882">[2605.27882] VibeSearchBench: Benchmarking Long-horizon Proactive Search in the Wild</a></li>
<li><a href="https://vibebench.github.io/VibeLifeBench_homepage/">VibeLifeBench — Can Your Life Agent Be Proactive and Persistent in...</a></li>

</ul>
</details>

**社区讨论**: 新闻条目中未提供社区评论，因此没有可总结的讨论。

**标签**: `#open-source`, `#MoE`, `#multimodal`, `#reinforcement learning`, `#AI`

---

<a id="item-4"></a>
## [Qwen 3.8 27B 开源模型在 DeepSWE 上超越 Claude Opus 4.7](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) ⭐️ 8.0/10

阿里巴巴 Qwen 团队发布了新的开源权重模型 Qwen 3.8 27B，据报道其在 DeepSWE 基准测试中得分 42.2%，超过了得分 40% 的 Claude Opus 4.7 Max（配合 Claude Code）。该模型已在 Hugging Face 上提供，Unsloth 也提供了 GGUF 量化版本，方便本地部署。 此次发布意义重大，因为它表明一个 27B 的开源权重模型在具有挑战性的长周期编码基准上可以超越领先的专有模型，可能降低高质量 AI 编码辅助的门槛。这也凸显了开源权重模型与闭源替代品相比日益增长的竞争力，可能影响开发者的采用和行业定价。 该模型是一个稠密的 27B 参数模型，在 BF16 精度下大约需要 54GB 显存，FP8 下约 27GB，4-bit 量化下约 14-16GB。它是一个原生视觉语言模型，能理解图像和视频，并支持灵活的思考控制。社区成员分享了在 RTX 4090 等硬件上使用 llama.cpp 运行它的实用设置命令。

hackernews · erdaltoprak · 8月14日 15:00 · [社区讨论](https://news.ycombinator.com/item?id=49299605)

**背景**: DeepSWE 是一个包含 113 个原创长周期软件工程任务的基准，用于评估编码代理，避免了 SWE-bench 的数据污染问题。Qwen 3.8 27B 是阿里巴巴 Qwen 3.8 系列的一部分，该系列还包括更大的模型如 Qwen 3.8-Max（仅 API）和更小的变体。该模型在 DeepSWE 上的强劲表现表明它擅长复杂的多步骤编码任务，使其对本地部署具有吸引力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://deepswe.datacurve.ai/">DeepSWE</a></li>
<li><a href="https://huggingface.co/Qwen/Qwen3.8-27B">Qwen/Qwen3.8-27B · Hugging Face</a></li>
<li><a href="https://www.yottalabs.ai/post/qwen-3-8-27b-specs-hardware-requirements-how-to-run-2026">Qwen 3.8 27B: Specs, Hardware Requirements, and How to Run It (2026) | Yotta Labs</a></li>

</ul>
</details>

**社区讨论**: 社区情绪总体积极，用户称赞该模型的本地性能和效率。一些用户对与 Claude Opus 的直接比较表示怀疑，指出基准分数可能无法完全反映实际差异，但他们仍然重视开源权重的替代方案。其他人则希望未来能有 MoE（混合专家）变体，如 35B A3B 模型，以便在消费级硬件上获得更好的效率。

**标签**: `#LLM`, `#open-source`, `#benchmarks`, `#Qwen`, `#AI`

---

<a id="item-5"></a>
## [Firefox 成为最后一个支持 uBlock Origin 的主流浏览器](https://www.pcworld.com/article/3212428/firefox-is-now-the-last-major-browser-that-still-supports-ublock-origin.html) ⭐️ 8.0/10

Firefox 现在是唯一仍支持 uBlock Origin 的主流浏览器，因为 Chrome 和 Edge 已禁用 Manifest V2 扩展。这一变化发生在 Google 推出 Manifest V3 之后，该版本逐步淘汰了基于 Chromium 浏览器中的 uBlock Origin。 这标志着广告拦截领域的一次重大转变，使 Firefox 在依赖 uBlock Origin 强大过滤功能的用户中拥有独特优势。这可能促使部分用户转向 Firefox，并影响整个浏览器市场的竞争格局。 uBlock Origin 的开发者 Raymond Hill 表示，Manifest V3 版本无法完全复制原有功能，而轻量版 uBlock Origin Lite 仅支持一小部分过滤列表，且缺乏元素隐藏过滤。Firefox 还会在更新时审查 uBlock Origin 的代码以确保没有恶意软件，但并非对所有扩展都如此。

hackernews · DemiGuru · 8月14日 19:03 · [社区讨论](https://news.ycombinator.com/item?id=49303202)

**背景**: Manifest V3 是浏览器扩展平台的重大更新，主要由 Google 推出，它用更受限的 declarativeNetRequest API 取代了 webRequest API。这一变化限制了扩展拦截网络请求的方式，使得像 uBlock Origin 这样强大的广告拦截器难以有效运行。Firefox 选择继续支持 Manifest V2 扩展，使 uBlock Origin 能够保持完整功能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ublockorigin.com/">uBlock Origin - Free, open-source ad blocker extension</a></li>
<li><a href="https://www.reddit.com/r/google/comments/1ivrc1l/google_chrome_disables_ublock_origin_for_some_in/">r/google on Reddit: Google Chrome disables uBlock Origin for some in Manifest v3 rollout</a></li>
<li><a href="https://thenextweb.com/news/chrome-manifest-v3-ublock-origin-content-blockers-disabled">Google is about to disable uBlock Origin and every other Manifest V2 extension in Chrome</a></li>

</ul>
</details>

**社区讨论**: 社区评论强调了 Firefox 的独特地位，用户赞赏其对热门扩展的代码审查以及相对于其他浏览器的优势。一些用户对侵入性广告表示不满，另一些则提到 Brave 浏览器等替代方案，后者为 uBlock Origin 提供了 Manifest V2 选择退出选项。

**标签**: `#Firefox`, `#uBlock Origin`, `#ad-blocking`, `#browsers`, `#Manifest v3`

---

<a id="item-6"></a>
## [澳大利亚家用电池热潮降低批发电价](https://e360.yale.edu/digest/australia-home-batteries) ⭐️ 8.0/10

澳大利亚在廉价太阳能和动态定价的推动下，广泛采用家用电池，显著降低了批发电价。这与美国因公用事业抵制而阻碍类似进展的情况形成对比。 这表明家用电池等分布式能源可以有效降低市场价格，为其他地区提供了范例。它凸显了采用可再生能源的经济效益，并对美国的公用事业抵制提出了挑战。 文章指出，太阳能电池板价格已降至 1990 年水平的 1/50，动态电网定价使得储能变得有利可图。社区评论提到补贴约为 70%，总支出达 50-70 亿澳元，安装量达 11 吉瓦时，成本为 25 亿美元。

hackernews · speckx · 8月14日 14:07 · [社区讨论](https://news.ycombinator.com/item?id=49298910)

**背景**: 批发电市场涉及发电商向零售商出售电力，价格随供需波动。动态定价在高峰时段向消费者收取更高费用，在低谷时段收取较低费用，鼓励灵活消费和储能。澳大利亚的太阳能热潮导致白天电价出现负值，使得家用电池在经济上具有吸引力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://energytech.pme.uchicago.edu/insights/the-right-incentives-can-make-dynamic-electricity-pricing-successful/">The Right Incentives Can Make Dynamic Electricity Pricing Successful</a></li>
<li><a href="https://en.wikipedia.org/wiki/Wholesale_electricity_market">Wholesale electricity market</a></li>

</ul>
</details>

**社区讨论**: 评论者大多庆祝这一成功，但就补贴的成本效益展开辩论，有些人更倾向于电网级储能。其他人批评美国公用事业政策阻碍了类似采用，而有些人则指出从其他国家购买补贴太阳能电池板的好处。

**标签**: `#renewable energy`, `#batteries`, `#electricity markets`, `#solar power`, `#energy policy`

---

<a id="item-7"></a>
## [开放模型现状：2026 年夏季行业分析](https://huggingface.co/blog/state-of-open-models-summer-2026) ⭐️ 8.0/10

Hugging Face 发布了一份关于 2026 年夏季开放模型格局的全面分析，总结了关键发展、趋势和模型对比。报告强调了开放权重模型的重大进展及其日益增长的采用率。 该分析为 AI/ML 社区提供了宝贵的见解，帮助从业者和研究人员了解开放模型的现状和未来方向。它强调了开放模型在更广泛 AI 生态系统中日益增长的重要性，可能影响采用和投资决策。 该报告可能包含具体模型名称、性能基准以及开放与封闭模型之间的比较。它还可能讨论许可、计算需求和社区贡献等挑战。

rss · Hugging Face Blog · 8月14日 00:00

**背景**: 开放模型指权重公开可用的 AI 模型，允许研究人员和开发者自由使用、修改和部署。Hugging Face 是托管和共享此类模型的领先平台，其定期分析在 AI 社区中被广泛引用。

**标签**: `#open models`, `#AI/ML`, `#industry analysis`, `#Hugging Face`

---

<a id="item-8"></a>
## [torch-preflight：用于 PyTorch 错误检测和显存估算的静态检查工具](https://www.reddit.com/r/MachineLearning/comments/1vo8vv0/a_linter_for_pytorch_torchpreflight_p/) ⭐️ 8.0/10

torch-preflight 是一个新发布的静态检查工具，它通过静态分析 PyTorch 代码来捕获常见错误并估算显存使用量，而无需执行代码。目前它实现了 13 条规则，并可通过 pip 安装。 该检查工具通过静态分析而不导入或执行用户代码，因此无需 GPU 或安装 PyTorch。其显存估算据称与实测峰值误差在 4% 以内，但这一结果仅基于单个 T4 GPU 上的四个模型，表明目前验证范围有限。

reddit · r/MachineLearning · /u/LeJanbandhu · 8月14日 14:30

**背景**: PyTorch 是一个流行的深度学习框架，常见的编码错误（如未分离的损失值累积）会导致 autograd 图持续存在，进而引发内存不足错误。使用 DistributedDataParallel 进行分布式训练时，需要 DistributedSampler 来确保每个进程看到不同的数据；忘记这一点会导致所有进程在相同批次上训练。像 linter 这样的静态分析工具可以在不运行代码的情况下捕获此类问题，这对于调试成本高昂的大规模训练尤其有用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://discuss.pytorch.org/t/memory-leak-with-autograd-create-graph-true/130000">Memory leak with autograd create_graph=True - autograd - PyTorch Forums</a></li>
<li><a href="https://medium.com/codex/a-comprehensive-tutorial-to-pytorch-distributeddataparallel-1f4b42bb1b51">A Comprehensive Tutorial to Pytorch DistributedDataParallel | Medium</a></li>
<li><a href="https://lyceum.technology/magazine/predict-vram-usage-pytorch-model/">Predict PyTorch VRAM Usage: Formulas and... | Lyceum Technology</a></li>

</ul>
</details>

**社区讨论**: 未提供社区讨论内容，但基于该工具的实用性和作者公开征求反馈的邀请，社区反应可能积极。用户可能会表示有兴趣在自己的代码上测试，并就误报和显存估算准确性提供反馈。

**标签**: `#PyTorch`, `#linter`, `#static analysis`, `#GPU`, `#debugging`

---

<a id="item-9"></a>
## [AI 机器人实验室年测 300 万人体组织，有望终结动物测试](https://www.fastcompany.com/91589344/the-worlds-largest-biological-datacenter-could-help-make-animal-testing-obsolete) ⭐️ 8.0/10

Vivodyne 已在旧金山湾区部署了 12 个“蜂巢”机器人实验室，每年可对超过 300 万个人体组织样本进行受控实验，其容量是美国所有临床试验总和的两倍。该系统利用 AI 设计实验，以更好地预测药物的疗效和安全性。 这一突破可能大幅减少药物开发中对动物测试的依赖，解决临床试验高失败率的问题——约 90%通过动物测试的药物在人体试验中仍会失败。如果成功，它可能加速药物发现并降低成本，惠及患者和生物技术行业。 每个蜂巢实验室可同时测试 10,000 个人体组织，具备端到端的机器人一致性，生成单细胞分辨率的丰富干预表型组、转录组和蛋白质组数据。该平台专为因果探究而设计，能够更可靠地预测药物反应。

telegram · zaihuapd · 8月14日 01:48

**背景**: 传统药物测试严重依赖动物模型，而动物模型往往无法预测人体反应，导致后期临床试验失败代价高昂。器官芯片和实验室培养组织技术已成为替代方案，但通常规模较小。Vivodyne 的方法通过机器人自动化和 AI 驱动的实验设计，将人体组织测试规模化，可能提供更贴近人体且高通量的解决方案。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.vivodyne.com/">Vivodyne | Make biology computable</a></li>
<li><a href="https://www.vivodyne.com/platform">Vivodyne - Our Platform</a></li>
<li><a href="https://www.fastcompany.com/91589344/the-worlds-largest-biological-datacenter-could-help-make-animal-testing-obsolete">The world's largest 'biological datacenter' could help make animal testing obsolete - Fast Company</a></li>

</ul>
</details>

**标签**: `#AI`, `#biotech`, `#drug testing`, `#animal testing`, `#robotics`

---

<a id="item-10"></a>
## [美国法官责令谷歌简化第三方应用商店安装流程](https://www.androidauthority.com/google-play-store-remove-third-party-app-store-friction-3698697/) ⭐️ 8.0/10

美国地区法官 James Donato 下令谷歌在一周内移除安卓系统上第三方应用商店的反竞争障碍，包括删除 Play Store 中吓阻用户安装竞品应用商店的多余警告步骤和弹窗。该指令源自 Epic 诉谷歌反垄断案，陪审团此前裁定谷歌在安卓应用分发领域构成非法垄断。 这一裁决是重大的反垄断执法行动，可能通过让用户更容易访问替代应用商店来重塑安卓应用生态，从而增加竞争并降低开发者费用。它直接影响了谷歌对应用分发和支付系统的控制，波及开发者、用户及整个移动行业。 该禁令定于 2024 年 11 月 1 日生效，持续三年至 2027 年 11 月。谷歌必须简化安装流程，使安装第三方应用商店像安装普通安卓应用一样直接，移除法院认为蓄意制造的“查看”后“安装”等多步操作，即“反竞争摩擦”。

telegram · zaihuapd · 8月14日 09:55

**背景**: Epic 诉谷歌案是 Epic Games（《堡垒之夜》开发商）提起的具有里程碑意义的反垄断诉讼，挑战谷歌对安卓应用分发和应用内支付系统的控制。2023 年 12 月陪审团裁定谷歌构成非法垄断，从而促成了这项永久禁令。安卓历来允许侧载，但谷歌的警告屏幕和技术障碍一直被批评为对使用第三方应用商店的威慑。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tweaktown.com/news/100942/google-must-allow-third-party-stores-on-play-as-judge-issues-final-epic-ruling/index.html">Google must allow third-party stores on Google Play as judge issues...</a></li>
<li><a href="https://telecom.economictimes.indiatimes.com/news/mvas-apps/google-ordered-to-open-android-to-competing-app-stores-in-major-antitrust-ruling/123033237">Google Ordered to Open Android to Competing App Stores in Major...</a></li>

</ul>
</details>

**标签**: `#antitrust`, `#Google`, `#Android`, `#app stores`, `#regulation`

---

<a id="item-11"></a>
## [PostgreSQL 修复 to_char 高危漏洞，可导致任意代码执行](https://www.postgresql.org/support/security/CVE-2026-14669/) ⭐️ 8.0/10

PostgreSQL 披露了 to_char(timestamptz) 函数中的一个高危漏洞（CVE-2026-14669），该漏洞可能导致任意代码执行。该问题已在 2026 年 8 月 13 日发布的 18.6、17.11、16.15、15.19 和 14.24 版本中修复。 该漏洞非常严重，因为它允许低权限数据库用户以 PostgreSQL 服务进程的操作系统权限执行任意代码，可能导致系统完全受损。鉴于 PostgreSQL 的广泛使用，这对许多组织构成了重大的安全风险。 该漏洞是一个堆缓冲区溢出，由 to_char(timestamptz) 中的长 POSIX 时区缩写触发。其 CVSS 评分为 8.8，但利用需要低权限数据库账户，而非未认证访问。修复是次要版本更新，不需要转储数据库或运行 pg_upgrade；只需更新程序文件并重启服务即可。

telegram · zaihuapd · 8月14日 14:35

**背景**: PostgreSQL 是一个广泛使用的开源关系数据库管理系统。to_char 函数用于将时间戳和其他数据类型格式化为字符串。POSIX 时区缩写是表示时区的短字符串，当处理过长的缩写时，可能导致堆缓冲区溢出，这是一种内存破坏类型，可被利用来执行任意代码。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.postgresql.org/support/security/CVE-2026-14669/">CVE-2026-14669: PostgreSQL to_char heap buffer overflow ...</a></li>
<li><a href="https://vuldb.com/vuln/389416">CVE-2026-14669 PostgreSQL to _ char heap-based overflow</a></li>

</ul>
</details>

**标签**: `#PostgreSQL`, `#security`, `#CVE`, `#vulnerability`, `#database`

---

<a id="item-12"></a>
## [苹果联手阿里训练中国专属 AI 模型](https://www.reuters.com/business/retail-consumer/apple-trains-its-own-ai-model-china-market-with-alibabas-support-sources-say-2026-08-14/) ⭐️ 8.0/10

据报道，苹果已在阿里巴巴的支持下专门为中国市场训练了一款大语言模型，这标志着其从之前依赖中国第三方 AI 模型的策略转变。此举正值 Apple Intelligence 预计在未来数月通过 iOS 更新在中国上线之际。 如果获批，苹果可能成为首家获准在中国提供自有 AI 模型的外国公司，从而更好地掌控这一关键市场的 AI 体验。与阿里巴巴的合作也凸显了全球科技公司在应对中国 AI 监管时，本地合规与协作的重要性。 中国网信办已于上月备案了苹果的生成式 AI 服务，备案号为上海苹果智能-202506160057。据报道，苹果的中国专属模型是在阿里巴巴支持下训练的，而百度则参与搜索和 Siri 集成，这模仿了全球范围内苹果模型加 Google Gemini 的分工模式。

telegram · zaihuapd · 8月14日 14:47

**背景**: 中国要求所有面向公众的生成式 AI 服务必须完成网信办备案，而 OpenAI 在中国被屏蔽。苹果此前依赖国内第三方 AI 模型，但现在希望通过与本地合作伙伴推出自有模型，以符合监管要求并提供定制化体验。这一进展发生在 Apple Intelligence 在中国经历近两年监管不确定之后。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.investing.com/news/stock-market-news/apple-trains-own-ai-model-for-china-with-alibaba-support-reuters-reports-4859693">Apple trains own AI model for China with Alibaba support , Reuters...</a></li>
<li><a href="https://macgpu.com/en/blog/2026-0716-apple-intelligence-china-approved-qwen-baidu.html">Apple Intelligence Finally Gets Approved in China ... | MACGPU Blog</a></li>
<li><a href="https://sftpmac.com/en/blog/20260716-apple-intelligence-china-approved-qwen-baidu-decision-guide.html">2026 Apple Intelligence Approved in China : Qwen + Baidu... | SFTPMAC</a></li>

</ul>
</details>

**标签**: `#Apple`, `#AI`, `#China`, `#Alibaba`, `#LLM`

---

<a id="item-13"></a>
## [Cursor 被 SpaceX 收购，加入 SpaceXAI 共同升级 Grok](https://x.com/cursor_ai/status/2088249881718919393) ⭐️ 8.0/10

Cursor 官方宣布已被 SpaceX 收购，正式成为 SpaceX 的一部分，并加入 SpaceXAI，共同优化 Grok、Grok Build、Grok Bot、Grok API 及 Cursor 等产品，目标是让 Grok 成为全球最实用的 AI。 此次收购将领先的 AI 代码编辑器与 Elon Musk 的 AI 生态系统合并，可能加速 Grok 的开发，并将编码能力整合到 SpaceXAI 的产品中。这标志着 AI 行业的一次重大整合，可能影响依赖 Cursor 的开发者。 该公告通过 Cursor 的官方 X（推特）账号发布，但未披露具体的财务条款和收购的确切时间表。合作将专注于升级 Grok、Grok Build、Grok Bot、Grok API 和 Cursor，目标明确为让 Grok 成为全球最实用的 AI。

telegram · zaihuapd · 8月14日 15:45

**背景**: Cursor 是一款 AI 驱动的代码编辑器，利用大型语言模型帮助开发者编写、调试和优化代码，并能感知整个代码库。Grok 是由 xAI（在 SpaceX 收购后更名为 SpaceXAI）开发的生成式 AI 聊天机器人，以通过 X 平台实时访问互联网和高级推理能力著称。SpaceXAI 是 SpaceX 收购后整合 xAI 产品、模型和基础设施的 AI 品牌。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cursor.com/">AI Coding Agent for Building Ambitious Software | Cursor</a></li>
<li><a href="https://en.wikipedia.org/wiki/Grok_(chatbot)">Grok (chatbot) - Wikipedia</a></li>
<li><a href="https://x.ai/">SpaceXAI</a></li>

</ul>
</details>

**标签**: `#AI`, `#acquisition`, `#Cursor`, `#SpaceX`, `#Grok`

---