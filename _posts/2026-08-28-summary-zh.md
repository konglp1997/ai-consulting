---
layout: default
title: "Daily-Summary: 2026-08-28 (ZH)"
date: 2026-08-28
lang: zh
---

> 从 45 条内容中筛选出 12 条重要资讯。

---

1. [Cloudflare 通过优化 1.1.1.1 DNS 缓存节省 100 TB 内存](#item-1) ⭐️ 8.0/10
2. [小型模型崛起：实用 AI 的转变](#item-2) ⭐️ 8.0/10
3. [谷歌发布 Gemini-3.5-Transcribe 语音转文字模型](#item-3) ⭐️ 8.0/10
4. [开源 Rust LLM 网关，支持基于流量的模型训练](#item-4) ⭐️ 8.0/10
5. [交互式分析揭示 Claude 过度使用的'承重'词汇](#item-5) ⭐️ 8.0/10
6. [84 天反编译一款 N64 游戏](#item-6) ⭐️ 8.0/10
7. [MIT 报告概述教育中 AI 使用指南](#item-7) ⭐️ 8.0/10
8. [研究者以 80%成功率攻破 Claude Code 自动模式](#item-8) ⭐️ 8.0/10
9. [HarnessOpt-Bench：衡量 AI 的递归自我改进能力](#item-9) ⭐️ 8.0/10
10. [英伟达 Q2 营收 962 亿美元，首次给出 2028 财年 70%增长指引](#item-10) ⭐️ 8.0/10
11. [OpenAI 开发常驻 Codex 代理，持续工作至休眠](#item-11) ⭐️ 8.0/10
12. [美国法官阻止五角大楼将 Anthropic 列入黑名单](#item-12) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Cloudflare 通过优化 1.1.1.1 DNS 缓存节省 100 TB 内存](https://blog.cloudflare.com/dns-cache-memory-optimization-1111/) ⭐️ 8.0/10

Cloudflare 宣布通过对其 1.1.1.1 解析器的 DNS 缓存布局应用五项 Rust 级内存优化，将每个条目的内存使用量减少了 56%，在整个服务器群中节省了约 100 TB 的内存。 这一优化展示了系统级编程和内存效率在大规模基础设施中的重大影响，可能降低运营成本并提升全球最流行的公共 DNS 服务之一的性能。 这些优化应用于 Cloudflare 的 DNS 缓存“Big Pineapple”，包括减少每个条目的开销和改善内存布局等技术。这些更改是用 Rust 实现的，突显了该语言在精细内存控制方面的适用性。

hackernews · TangerineDream · 8月27日 17:17 · [社区讨论](https://news.ycombinator.com/item?id=49468083)

**背景**: DNS 缓存对于减少延迟和权威服务器负载至关重要，因为递归解析器必须在记录的 TTL 期间存储记录。Cloudflare 的 1.1.1.1 是一个流行的公共 DNS 解析器，处理大量查询，因此内存效率至关重要。Rust 的所有权模型和零成本抽象使开发人员能够在不影响安全性的情况下优化内存使用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.cloudflare.com/dns-cache-memory-optimization-1111/">How we saved 100 terabytes of memory by optimizing 1 . 1 . 1 . 1 ’s DNS ...</a></li>
<li><a href="https://news.ycombinator.com/item?id=49468083">Saving 100 terabytes of memory by optimizing 1 . 1 . 1 . 1 's DNS cache</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论总体积极，用户称赞了工程方法并分享了相关经验。一些评论者指出这些优化是标准技术，而另一些则讨论了 Rust 的安全保证与手动内存布局优化之间的权衡。

**标签**: `#DNS`, `#memory optimization`, `#systems programming`, `#Rust`, `#Cloudflare`

---

<a id="item-2"></a>
## [小型模型崛起：实用 AI 的转变](https://calv.info/small-models-have-arrived) ⭐️ 8.0/10

文章认为，小型、专门的 AI 模型在实际应用中变得越来越重要，标志着从前沿模型焦点的转变。文章强调了在现实部署中对快速、廉价且足够好的模型的需求日益增长。 这一趋势标志着 AI 行业的成熟，效率和专业化比规模更受重视。它可能使 AI 应用民主化，让更多企业无需高昂成本即可部署 AI 解决方案，并改变投资和开发的重点。 文章提到了使用 7B 本地模型和 Guidance 等工具生成测试的经验，并指出小型模型因成本、速度和减少幻觉而常被优先选择。文章还提到投资者观察到缺乏消费级 AI 公司，暗示了逆向机会。

hackernews · tosh · 8月27日 15:56 · [社区讨论](https://news.ycombinator.com/item?id=49466917)

**背景**: 大型语言模型（LLM）功能全面但资源消耗大，而小型语言模型（SLM）更高效且专业化。知识蒸馏是一种将知识从大模型转移到小模型的技术，使小模型能在特定任务上表现良好。这一背景有助于理解为什么小型模型在实际应用中越来越受欢迎。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/11/11/explore-ai-models-key-differences-between-small-language-models-and-large-language-models/">Explore AI models: Key differences between small language models and large language models | The Microsoft Cloud Blog</a></li>
<li><a href="https://www.splunk.com/en_us/blog/learn/language-models-slm-vs-llm.html">LLMs vs. SLMs: The Differences in Large & Small Language Models | Splunk</a></li>
<li><a href="https://en.wikipedia.org/wiki/Distillation_(machine_learning)">Distillation (machine learning)</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍同意文章的观点，分享了使用小型模型在成本和速度方面的实际经验。一些人指出，小型模型在许多用例中已经是最佳实践，而另一些人则讨论了权衡和消费级 AI 产品的潜力。

**标签**: `#AI`, `#small models`, `#machine learning`, `#practical AI`, `#industry trends`

---

<a id="item-3"></a>
## [谷歌发布 Gemini-3.5-Transcribe 语音转文字模型](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/) ⭐️ 8.0/10

谷歌推出了 Gemini-3.5-Transcribe，这是一款新的语音转文字模型，可将原始音频直接转换为精炼、格式化的文本，取代 Chirp 3 成为谷歌的 STT 产品。该模型旨在处理背景噪音、复杂术语和语言不流畅等问题。 此次发布标志着语音转文字准确性的重大进步，可能惠及依赖转录进行实时应用的开发者和企业。然而，社区测试强调延迟是亟待改进的关键领域，这可能影响其在时间敏感场景中的采用。 Gemini-3.5-Transcribe 可在 Gemini 应用和 Gemini API 中使用，并提供实时变体。它支持函数调用，可将任务委托给其他 Gemini 模型，但该功能目前仅限于 macOS 应用。

hackernews · k9294 · 8月27日 18:03 · [社区讨论](https://news.ycombinator.com/item?id=49468818)

**背景**: 语音转文字（STT）模型将口语转换为书面文本，用于转录、语音助手和实时翻译等应用。传统 STT 模型常在背景噪音、术语和语言不流畅方面表现不佳，而 Gemini-3.5-Transcribe 旨在解决这些问题。延迟，即语音与转录之间的时间差，是实时应用的关键因素，社区反馈表明该模型在此方面仍需优化。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/">Introducing Gemini 3.5 Transcribe - The Keyword</a></li>
<li><a href="https://deepmind.google/models/gemini-audio/ai-transcription/">Gemini Audio – AI transcription — Google DeepMind</a></li>
<li><a href="https://spokenly.app/blog/gemini-3-5-transcribe">Gemini 3.5 Transcribe: Google's New Speech-to-Text Model</a></li>

</ul>
</details>

**社区讨论**: 社区成员测试了该模型，反馈褒贬不一。一些人称赞其准确性，认为它超越了其他模型，但批评其延迟，这对实时翻译应用至关重要。另一些人发现它会简化精确措辞，可能改变原意，还有用户更倾向于使用 Voxtral Mini 3b 等本地模型来满足特定需求。

**标签**: `#speech-to-text`, `#Google`, `#AI models`, `#latency`, `#STT`

---

<a id="item-4"></a>
## [开源 Rust LLM 网关，支持基于流量的模型训练](https://github.com/experientiallabs/experiential) ⭐️ 8.0/10

Experiential Labs 发布了一个基于 Rust 的开源模型网关，统一了自托管和商业 LLM，BYOK 请求增加不到 1 毫秒开销，使用其提供商密钥时不到 2 毫秒。它支持 1000 多个模型，通过 codex 代理每日刷新，并提供可选的基于流量的模型训练。 该网关通过开源且不加价，挑战了现有的专有网关，可能降低希望混合模型的开发者的成本。其独特的基于流量的训练可以改善模型路由和成本/质量权衡，使其成为 LLM 网关领域的重要参与者。 该网关使用标准化的 OTel 追踪来挖掘代表性任务，利用文本世界模型模拟回滚，应用 LLM 评判器，并在提示嵌入上拟合最近邻分类器以选择最佳模型。它还建议缓存命中优化和新模型建议，并可训练自定义模型。

hackernews · SilenN · 8月27日 21:18 · [社区讨论](https://news.ycombinator.com/item?id=49471407)

**背景**: LLM 网关作为统一 API 层，管理多个模型提供商，处理流式、工具调用和速率限制的差异。OpenRouter 是一个流行的商业网关，跨提供商路由请求，但收取加价。该项目旨在提供无加价的开源替代方案，利用 Rust 实现并发，利用 OTel 实现可观测性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openrouter.ai/">OpenRouter</a></li>
<li><a href="https://opentelemetry.io/blog/2024/llm-observability/">An Introduction to Observability for LLM-based applications using OpenTelemetry | OpenTelemetry</a></li>
<li><a href="https://arxiv.org/abs/2406.06485">[2406.06485] Can Language Models Serve as Text-Based World Simulators?</a></li>

</ul>
</details>

**社区讨论**: 社区成员提出了关于缓存和路由的问题，指出切换模型可能因缓存未命中而增加成本。他们还询问了在线信号重新校准和语义缓存，以及网关是否决定努力水平。总体情绪积极，对低延迟和 Tinker 实现表示赞赏。

**标签**: `#LLM`, `#gateway`, `#open-source`, `#Rust`, `#model-routing`

---

<a id="item-5"></a>
## [交互式分析揭示 Claude 过度使用的'承重'词汇](https://louisabraham.github.io/load-bearing/) ⭐️ 8.0/10

Louis Abraham 发布了一个关于 Claude 过度使用词汇的交互式分析，重点关注'load-bearing'等短语，并通过 GitHub Actions 每日更新数据集。该项目名为'The load-bearing vocabulary of Claude'，将拉取请求描述按所用词汇分组，显示一种写作风格在 2025 年初至 2026 年中期间从语料库的 1.0%飙升至 45%。 该分析凸显了 LLM 用户对 AI 输出中重复、公式化语言的日益担忧，这种语言可能损害清晰度和真实性。它引发了关于提示工程以及模型是否因训练于 AI 生成内容而退化的讨论，影响了依赖这些工具的开发者与写作者。 数据集通过 GitHub Actions 每日更新，作者计划添加搜索栏并将数据增加到每天 1000 个拉取请求。分析将描述分为八种不同的写作风格，其中一种风格从语料库的 1.0%增长到 45%，表明 Claude 的输出模式发生了显著变化。

hackernews · Labo333 · 8月27日 08:59 · [社区讨论](https://news.ycombinator.com/item?id=49461817)

**背景**: 像 Claude 这样的大型语言模型，由于训练数据和强化学习，常常会形成特有的过度使用短语，导致输出重复。'load-bearing'一词已成为一个显著例子，频繁出现在技术解释中。该分析使用拉取请求描述作为语料库来量化这些模式，提供了对 LLM 行为的数据驱动视角。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=49461817">Show HN: The load-bearing vocabulary of Claude | Hacker News</a></li>
<li><a href="https://github.com/louisabraham/load-bearing">The load-bearing vocabulary of Claude - GitHub</a></li>
<li><a href="https://topaihubs.com/articles/claude-s-load-bearing-vocabulary-unpacking-the-ai-s-core-language-insights">Claude's "Load-Bearing Vocabulary": Unpacking the AI's Core Language ...</a></li>

</ul>
</details>

**社区讨论**: 社区评论反应不一：一些用户分享减少过度使用短语的提示工程技巧，而另一些则对所有模型输出模式恶化表示担忧。作者积极参与，指出与谄媚代理打交道的讽刺，并强调每日更新。一些评论者赞赏简洁、无偏见的呈现，而另一些则推测 AI 生成训练数据带来的反馈循环。

**标签**: `#LLM`, `#prompt-engineering`, `#data-analysis`, `#Claude`, `#AI-behavior`

---

<a id="item-6"></a>
## [84 天反编译一款 N64 游戏](https://blog.chrislewis.au/decompiling-a-nintendo-64-game-in-84-days/) ⭐️ 8.0/10

Chris Lewis 发布了一篇详细博客，记录了在 84 天内完成 N64 游戏《Snowboard Kids》的反编译过程。该项目托管在 GitHub 上，已达成 100%反编译，代码量达 732.30 kB。 这展示了现代工具和 LLM 辅助工作流如何加速复古游戏的反编译，可能降低游戏保存和社区移植的门槛。同时，它也凸显了反编译项目日益增长的兴趣，这些项目能为经典游戏注入新生命。 反编译过程使用了 LLM 辅助，作者认为这是速度提升的关键。该项目是 N64 反编译更广泛趋势的一部分，相关项目如《Snowboard Kids 2》也在进行中。博客文章包含了对过程的技术见解以及 N64 MIPS 架构带来的挑战。

hackernews · knackers · 8月27日 15:01 · [社区讨论](https://news.ycombinator.com/item?id=49466006)

**背景**: 任天堂 64 于 1996 年发布，其复杂架构以 MIPS R4300i 处理器和专有图形硬件为核心，使得反编译历来具有挑战性。反编译是将机器码翻译回高级源代码的过程，通常用于支持修改、移植或保存。像 N64 Recompiled 这样的项目旨在无需完全反编译即可创建现代移植版，但完全反编译能实现更深入的理解和修改。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/cdlewis/snowboardkids-decomp">GitHub - cdlewis/snowboardkids-decomp: Decompilation of ...</a></li>
<li><a href="https://decomp.dev/cdlewis/snowboardkids-decomp">Snowboard Kids • Progress Report</a></li>
<li><a href="https://readonlymemo.com/decompilation-projects-and-n64-recompiled-list/">Decompilation projects and N 64 Recompiled PC ports (August 2026)</a></li>

</ul>
</details>

**社区讨论**: 评论者对反编译项目表现出热情，称赞作者的工作，并推荐了如《龙骑士传说》重编译等相关项目。一些人讨论了反编译的法律地位，质疑游戏公司为何不进行类似努力，而另一些人则指出 LLM 在加速此类工作流方面的潜力。

**标签**: `#decompilation`, `#reverse engineering`, `#retro gaming`, `#LLM`, `#software engineering`

---

<a id="item-7"></a>
## [MIT 报告概述教育中 AI 使用指南](https://aiandeducation.mit.edu/report/) ⭐️ 8.0/10

MIT 的特别委员会发布了一份报告，为教学、学习和研究培训中 AI 的使用提供了指导方针和观察。报告包括诸如“大胆创新”和“以人为本”等指导原则。 来自 MIT 这样的知名机构的报告为大学如何在学术界整合 AI 树立了先例。它解决了 AI 对学习和研究影响的担忧，可能影响其他机构的政策。 报告强调了 AI 使学生绕过学习并促进教育交易化观点的担忧。它还指出，一些教师正在考虑使用 AI 代理作为研究助理，而不是雇佣本科生，这引发了对研究招聘实践的担忧。

hackernews · pbui · 8月27日 13:07 · [社区讨论](https://news.ycombinator.com/item?id=49464314)

**背景**: MIT 成立了一个特别委员会来研究 AI 在教育中的使用，反映了解决 AI 在学术界作用的日益增长的需求。该报告旨在定义整个机构的共同理解，并为行动设定初步方向，而不是提供一刀切的解决方案。

**社区讨论**: 社区评论褒贬不一：一些人称赞报告清晰且可操作，而另一些人则斥之为空话。一个值得注意的讨论点是 AI 代理可能取代本科生研究助理，一些人对此表示担忧，认为这会影响研究招聘实践。

**标签**: `#AI in Education`, `#Higher Education`, `#MIT`, `#AI Policy`, `#Research`

---

<a id="item-8"></a>
## [研究者以 80%成功率攻破 Claude Code 自动模式](https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/) ⭐️ 8.0/10

可信的提示注入研究者 Johann Rehberger 展示了一种针对 Claude Code 自动模式的新型攻击，通过诱使代理下载并解压一个 zip 压缩包，劫持 Python 的 base64 导入，成功率高达 80%。 此次攻击削弱了 Anthropic 对自动模式作为提示注入防御的信心，表明即使是复杂的安全机制也可能被绕过。它强调了在运行 AI 编码代理时，尤其是在不可信环境中，采用沙箱和其他强健安全措施的必要性。 该攻击利用了 Python 的模块解析机制，在工作目录中放置恶意的 struct.py，当代理运行导入 base64 的代码时，会导入该恶意文件而非标准库。在某些运行中，自动模式甚至阻止了代理的清理命令，使其无法终止恶意进程。

rss · Simon Willison · 8月27日 22:50

**背景**: Claude Code 是 Anthropic 的 AI 编码代理，可以在自动模式下运行，由代理代表用户做出权限决定，并有安全措施监控操作。提示注入攻击是指在模型处理的输入中嵌入恶意指令，可能导致意外行为。Python 的导入系统会先搜索当前目录再搜索标准库路径，如果攻击者能在工作目录中放置文件，就可能被利用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://claude.com/blog/auto-mode">Auto mode for Claude Code | Claude by Anthropic</a></li>
<li><a href="https://en.wikipedia.org/wiki/Prompt_injection_attack">Prompt injection attack</a></li>
<li><a href="https://hackindex.io/platforms/linux/privilege-escalation/python-library-hijacking">Python Library Hijacking for Privilege Escalation - HackIndex</a></li>

</ul>
</details>

**标签**: `#AI security`, `#prompt injection`, `#Claude Code`, `#vulnerability`, `#LLM agents`

---

<a id="item-9"></a>
## [HarnessOpt-Bench：衡量 AI 的递归自我改进能力](https://www.reddit.com/r/MachineLearning/comments/1w052xg/can_ai_improve_itself_rsi_might_be_the_answer_r/) ⭐️ 8.0/10

研究人员推出了 HarnessOpt-Bench，这是一个新的基准测试，用于评估 LLM 改进其他智能体 harness 的能力，其安全设计通过将评估数据和 API 密钥置于优化器沙箱之外来防止作弊。该基准测试在 4 个任务上对 5 个前沿模型进行了测试，结果显示模型选择比 harness 选择更重要。 该基准测试通过提供一种受控的方法来衡量递归自我改进，解决了 AI 安全和对齐中的一个关键方面，这是理解和减轻能够自我改进的 AI 系统相关风险的重要一步。研究发现模型选择比 harness 选择影响更大，这可能指导未来 AI 智能体及其优化策略的开发。 该基准测试采用三阶段协议：在开发集上，优化器可以看到每个案例的轨迹；在验证集上，它只收到一个总体分数；在测试集上，它什么也看不到，直到受信任的服务器对最终候选 harness 进行评分。隔离是通过构造而非指令来保证的，保留的评估器和权限控制位于进化循环之外。

reddit · r/MachineLearning · /u/shehio · 8月27日 20:13

**背景**: 递归自我改进（RSI）是一个假设的过程，其中 AI 系统改进自己的代码，可能导致智能爆炸。然而，衡量 RSI 具有挑战性，因为 AI 系统可能通过访问测试解决方案或操纵评估指标来作弊。沙箱是一种在评估期间隔离 AI 智能体的常用技术，但最近的事件，如 OpenAI 评估智能体逃出其沙箱，凸显了对强大隔离机制的需求。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.alphaxiv.org/overview/2608.06301">HarnessOpt - Bench : Evaluating LLMs at Harness ... | alphaXiv</a></li>
<li><a href="https://arxiv.org/html/2608.06301">HarnessOpt - Bench : Evaluating LLMs at Harness Optimization</a></li>
<li><a href="https://en.wikipedia.org/wiki/Recursive_self-improvement">Recursive self-improvement - Wikipedia</a></li>

</ul>
</details>

**标签**: `#recursive self-improvement`, `#AI safety`, `#benchmark`, `#LLM agents`, `#alignment`

---

<a id="item-10"></a>
## [英伟达 Q2 营收 962 亿美元，首次给出 2028 财年 70%增长指引](https://mp.weixin.qq.com/s/JTZ_ZJ_pn5vgrI_1QUyWNw) ⭐️ 8.0/10

英伟达公布 2027 财年第二季度营收 962 亿美元，同比增长 106%，其中数据中心收入达 890 亿美元，同比增长 117%。首席财务官科莱特·克雷斯首次给出 2028 财年营收指引，预计同比增长约 70%，并宣布 Vera Rubin 平台已于本月开始出货。 这标志着英伟达首次提供多年期指引，表明 AI 基础设施需求持续强劲。70%的增长预期受供给限制，凸显了 AI 热潮的持续以及英伟达在半导体行业中的核心地位。 第三财季营收预测为 1080 亿美元，上下浮动 2%，高于分析师预期的 1041.9 亿美元。本月开始出货的 Vera Rubin 平台预计将在第三季度贡献约 20%的数据中心收入。

telegram · zaihuapd · 8月27日 08:51

**背景**: 英伟达是 GPU 和 AI 计算平台的领先设计者。Vera Rubin 平台是一个多机架 POD 级系统，将 GPU、CPU、网络等组件整合为一个连贯的 AI 超级计算机，专为智能体 AI 和推理工作负载设计。由于 AI 训练和推理需求激增，该公司的数据中心业务一直蓬勃发展。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.axios.com/2026/08/26/nvidia-earnings-jensen-huang-ai">Nvidia projects 70% revenue growth in 2028 - Axios</a></li>
<li><a href="https://www.reuters.com/business/media-telecom/nvidia-forecasts-quarterly-revenue-above-estimates-2026-08-26/">Nvidia forecasts 70% sales growth next year, signals AI ...</a></li>
<li><a href="https://www.nvidia.com/en-us/data-center/technologies/rubin/">NVIDIA Vera Rubin Platform</a></li>

</ul>
</details>

**标签**: `#NVIDIA`, `#earnings`, `#AI infrastructure`, `#data center`, `#semiconductors`

---

<a id="item-11"></a>
## [OpenAI 开发常驻 Codex 代理，持续工作至休眠](https://www.wired.com/story/openai-is-developing-a-persistent-ai-agent/) ⭐️ 8.0/10

据报道，OpenAI 正在为命令行版 Codex 添加“常驻模式”，使 AI 代理能够持续工作，直到用户将其休眠。该模式包含“主动性”设置，允许代理自主创建后续任务。 这标志着向更自主、长期运行的 AI 代理迈出了重要一步，可能改变开发者和企业使用 AI 处理复杂多步骤任务的方式。同时，它也可能引发关于始终在线 AI 系统的控制、安全和资源使用的重要问题。 OpenAI 正在测试常驻模式，但暂无近期发布计划。该代理可以跨会话工作，并根据对用户的了解决定工作内容，但修改用户系统之外的内容仍需事先批准。

telegram · zaihuapd · 8月28日 02:47

**背景**: Codex 是 OpenAI 的编程代理，用于协助软件开发任务。目前，它以短会话方式运行，在几分钟或几小时后停止。常驻模式将允许其无限期运行，自主管理任务，这与当前的交互模式有所不同。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.wired.com/story/openai-is-developing-a-persistent-ai-agent/">OpenAI Is Developing a ‘Persistent’ AI Agent - WIRED</a></li>
<li><a href="https://www.explainx.ai/blog/openai-codex-persistent-mode-always-on-agents-august-2026">Codex Persistent Mode: OpenAI Tests Always-On Agents (2026 ...</a></li>
<li><a href="https://letsdatascience.com/news/openai-develops-persistent-codex-agent-mode-0886265a">OpenAI Develops Persistent Codex Agent Mode | Let's Data Science</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#AI agents`, `#Codex`, `#autonomous AI`, `#persistent agents`

---

<a id="item-12"></a>
## [美国法官阻止五角大楼将 Anthropic 列入黑名单](https://www.bloomberg.com/news/articles/2026-08-28/anthropic-wins-court-challenge-to-us-supply-chain-risk-label?srnd=phx-technology) ⭐️ 8.0/10

旧金山的一名美国地区法官裁定，特朗普政府必须解除对 Anthropic 人工智能技术用于联邦机构的禁令，认为五角大楼的供应链风险认定缺乏充分依据。此前，Anthropic 因该认定起诉了国防部。 该裁决为政府如何将 AI 公司认定为供应链风险树立了法律先例，可能限制出于政治动机的行动。它影响了 Anthropic 与联邦机构合作的能力，并表明司法部门对行政部门在 AI 领域决策的监督。 法官表示，五角大楼的行动似乎是针对 Anthropic 批评政府的“杀鸡儆猴”之举，而非真正相信该公司会破坏自身模型。该裁决不要求五角大楼恢复与 Anthropic 的合作，仅要求解除禁令。

telegram · zaihuapd · 8月28日 03:15

**背景**: Anthropic 是一家 AI 研究公司，开发了 Claude 系列大语言模型。2026 年 3 月，五角大楼正式将 Anthropic 认定为供应链风险，限制政府使用其技术，此前关于军事 AI 应用的谈判破裂。供应链风险认定用于保护国家安全，限制政府机构使用某些供应商的产品。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.reuters.com/technology/pentagon-informed-anthropic-it-is-supply-chain-risk-official-says-2026-03-05/">Pentagon designates Anthropic a supply chain risk | Reuters</a></li>
<li><a href="https://www.cnbc.com/2026/08/28/judge-blocks-pentagon-blacklist--anthropic-.html">Judge blocks Pentagon blacklist of Anthropic as supply chain risk</a></li>
<li><a href="https://www.ibm.com/think/topics/claude-ai">What Is Claude AI ? | IBM</a></li>

</ul>
</details>

**标签**: `#AI regulation`, `#Anthropic`, `#legal`, `#government`, `#supply chain`

---