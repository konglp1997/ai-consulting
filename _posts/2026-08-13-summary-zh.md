---
layout: default
title: "Daily-Summary: 2026-08-13 (ZH)"
date: 2026-08-13
lang: zh
---

> 从 54 条内容中筛选出 11 条重要资讯。

---

1. [DeepSeek V4 Pro 0813 发布，开放权重](#item-1) ⭐️ 9.0/10
2. [谷歌推出 Gemini 3.7 Flash，定价具有竞争力](#item-2) ⭐️ 8.0/10
3. [OpenAI 与 Cerebras 推出 GPT-5.6 Sol Ultrafast，推理速度提升 7 倍](#item-3) ⭐️ 8.0/10
4. [理解成为软件开发的新瓶颈](#item-4) ⭐️ 8.0/10
5. [DRAM“意大利面化”攻击：绕过内存保护的新技术](#item-5) ⭐️ 8.0/10
6. [选择无聊的技术：节省创新代币](#item-6) ⭐️ 8.0/10
7. [systemd-journald 在 ext4 上每行日志写入 49KB+，在 btrfs 上写入 110KB+](#item-7) ⭐️ 8.0/10
8. [DeepSeek Harness 开发者预览版：可追踪、基于插件的智能体工具](#item-8) ⭐️ 8.0/10
9. [OpenAI 的 GPT-5.6 构建者指南：更快、更便宜的 AI 代理](#item-9) ⭐️ 8.0/10
10. [Hugging Face 复现 2200 篇 ICML 论文，揭示关键见解](#item-10) ⭐️ 8.0/10
11. [DeepMind 发布 SL2T 手语转文字模型，首次落地 Pixel 11](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [DeepSeek V4 Pro 0813 发布，开放权重](https://simonwillison.net/2026/Aug/12/deepseek-v4-pro-0813/) ⭐️ 9.0/10

DeepSeek V4 Pro 0813 现已通过 OpenRouter 的 API 提供，其开放权重已在 Hugging Face 上发布，总计 1.7 万亿参数，大小 893 GB。该模型引入了新的推理级别（低、中、高），并支持 Responses API 格式。 此次发布意义重大，因为它提供了一个与专有模型竞争的最先进开放权重模型，可能加速人工智能研究和开发。开放权重使开发者和研究人员能够在本地微调和部署模型，减少对封闭 API 的依赖。 该模型的上下文窗口为 1M tokens，可在 OpenRouter 上使用。权重托管在 Hugging Face 的 deepseek-ai/DeepSeek-V4-Pro-0813 仓库中。API 将从 2026 年 8 月 17 日起实行峰谷定价，闲时价格为高峰时段的一半。

rss · Simon Willison · 8月12日 23:59

**背景**: DeepSeek 是一家以发布开放权重大型语言模型而闻名的中国人工智能公司。V4 系列包括早期的 V4 Pro 和 V4 Flash 等版本，这些版本已在 Hugging Face 上提供。开放权重模型允许用户访问模型参数，实现定制和本地部署，这是与 GPT-4 等封闭模型的关键区别。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/unsloth/DeepSeek-V4-Pro-0813-GGUF">unsloth/ DeepSeek - V 4 - Pro - 0813 -GGUF · Hugging Face</a></li>
<li><a href="https://openrouter.ai/docs/guides/overview/models">OpenRouter Models - Unified Access to 400+ AI Models</a></li>
<li><a href="https://benchable.ai/models/deepseek/deepseek-v4-pro-20260813">DeepSeek : DeepSeek V 4 Pro 0813 - AI Model Details & Bench...</a></li>

</ul>
</details>

**标签**: `#DeepSeek`, `#AI model release`, `#open weights`, `#large language models`, `#API`

---

<a id="item-2"></a>
## [谷歌推出 Gemini 3.7 Flash，定价具有竞争力](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/) ⭐️ 8.0/10

谷歌推出了 Gemini 3.7 Flash，这是一款专为快速智能体工作流、编码和复杂推理设计的新型多模态模型。其入门价格为每百万输入 tokens 0.75 美元，每百万输出 tokens 3.75 美元，是 Gemini 3.6 Flash 发布价格的一半。 此次发布通过提供高性价比、高性能的选项，巩固了谷歌在竞争激烈的 AI 模型市场中的地位。激进的定价和改进的能力可能会给其他提供商带来压力，并影响 AI 在业务工作流中的采用。 入门价格计划于 2026 年 12 月 31 日翻倍，调整为每百万输入 tokens 1.50 美元，每百万输出 tokens 7.50 美元。Gemini 3.7 Flash 在 GDP.pdf 基准测试上显著优于 3.6 Flash（34.0%对 22.0%），并且在智能体任务上比 3.6 Flash 便宜 35%。

hackernews · thisisauserid · 8月13日 17:23 · [社区讨论](https://news.ycombinator.com/item?id=49289112)

**背景**: Gemini 3.7 Flash 是谷歌 Gemini 模型家族的一部分，其中 Flash 系列专为低成本、高容量的使用场景设计。该模型是多模态的，可以处理文本、图像和其他数据类型。谷歌一直在快速迭代其 Flash 模型，3.6 Flash 在三周前刚刚发布。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/">Gemini 3.7 Flash: our most intelligent workhorse model</a></li>
<li><a href="https://ai.google.dev/gemini-api/docs/latest-model">What's new in Gemini 3.7 Flash | Gemini API | Google AI for Developers</a></li>
<li><a href="https://www.techtimes.com/articles/324387/20260813/google-cuts-gemini-37-flash-price-half-it-claims-top-claude-business-workflows.htm">Google Cuts Gemini 3.7 Flash Price in Half as It Claims to Top Claude on Business Workflows</a></li>

</ul>
</details>

**社区讨论**: 社区成员反应不一。一些人称赞 Gemini 3.7 Flash 的视觉能力，指出它在图像转 HTML 测试中表现良好，可与更昂贵的模型媲美。另一些人则批评入门定价奇怪，因为发布周期太快，并质疑其相对于更便宜的替代品（如 GPT-5.6 Luna）的竞争力。

**标签**: `#AI`, `#Google`, `#Gemini`, `#LLM`, `#Machine Learning`

---

<a id="item-3"></a>
## [OpenAI 与 Cerebras 推出 GPT-5.6 Sol Ultrafast，推理速度提升 7 倍](https://www.cerebras.ai/blog/accelerating-gpt-5-6-sol-ultrafast-with-openai) ⭐️ 8.0/10

OpenAI 与 Cerebras 宣布推出 GPT-5.6 Sol Ultrafast，这是 OpenAI API 中的一个新服务层级，运行速度比标准处理快 14 倍，每秒可输出多达 750 个 token。在评估中，它在 11 小时 11 分钟内回答了 2500 个 HLE 问题，以接近 7 倍的速度达到与 Claude Fable 5 相当的准确率。 这一里程碑表明，前沿 AI 可以在不牺牲准确性的情况下以前所未有的速度交付，可能改变编码助手、语音界面和智能体工作流等实时应用。同时，它也加剧了 AI 推理领域的竞争，推动其他提供商优化速度。 该服务由 Cerebras 的 CS-3 系统提供支持，其内存带宽比 GPU 高出数千倍。据 Artificial Analysis 称，Ultrafast 模式比 Fable 5 快 11 倍，比 Opus 4.8 的 Fast 模式快 5 倍，但定价细节尚未公布。

hackernews · pr337h4m · 8月13日 18:10 · [社区讨论](https://news.ycombinator.com/item?id=49289844)

**背景**: Cerebras Systems 以制造全球最大的计算机芯片而闻名，这些芯片专为加速 AI 工作负载而设计。其 CS-3 系统被誉为最快的 AI 推理系统，推理速度比 NVIDIA GPU 快 15 倍。与 OpenAI 的合作旨在将前沿智能引入对速度至关重要的产品中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cerebras.ai/blog/accelerating-gpt-5-6-sol-ultrafast-with-openai">Accelerating GPT - 5 . 6 Sol Ultrafast with OpenAI</a></li>
<li><a href="https://openai.com/index/previewing-ultrafast/">Previewing Ultrafast mode: GPT - 5 . 6 Sol at up to 14X the speed</a></li>
<li><a href="https://en.wikipedia.org/wiki/Cerebras_Systems">Cerebras Systems - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区对这次合作感到兴奋，但对性能声明持怀疑态度。一些用户指出，OpenAI 和 Cerebras 都没有明确表示 Ultrafast 与普通 Sol 性能完全相同，暗示可能存在权衡。其他人则强调迭代速度对推理质量的重要性，还有少数人指出缺乏定价信息。

**标签**: `#AI`, `#LLM`, `#inference`, `#OpenAI`, `#Cerebras`

---

<a id="item-4"></a>
## [理解成为软件开发的新瓶颈](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck) ⭐️ 8.0/10

Geoffrey Litt 的文章认为，随着 LLM 自动化代码生成，软件开发的主要瓶颈从编写代码转向理解代码，因此需要新的工具和实践。该文章引发了社区的热烈讨论，获得了 106 个点赞和 64 条评论。 这一转变对软件工程角色、工具和教育具有深远影响，因为开发人员必须更多地关注理解和监督，而不是手动编码。它凸显了对 AI 辅助代码理解工具和实践的日益增长的需求，以确保代码质量和可维护性。 文章指出，虽然 LLM 可以生成代码，但它们往往缺乏复杂系统所需的上下文理解，因此人类的理解至关重要。社区评论显示，人们对 LLM 生成的 PR 描述持怀疑态度，并担心将理解委托给 AI 可能掩盖错误。

hackernews · sebg · 8月13日 18:47 · [社区讨论](https://news.ycombinator.com/item?id=49290299)

**背景**: 大型语言模型（如 GPT-4）在代码生成方面取得了进步，但它们的输出可能在机械上正确，却在概念上有缺陷。理解代码涉及掌握意图、架构和权衡，这对于维护和演进至关重要。这篇文章触及了关于 AI 在软件开发中作用的更广泛辩论，即瓶颈正在从生产转向理解。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openreview.net/forum?id=8S3SF4ahA5">Where Is the Bottleneck of LLM Code Generation? A Study Isolating LLM Performance on Language-Coding from Problem-Solving | OpenReview</a></li>
<li><a href="https://en.wikipedia.org/wiki/Category:Code_comprehension_tools">Category: Code comprehension tools - Wikipedia</a></li>
<li><a href="https://www.toolcentral.ai/ai-tools/onboard-ai-2/">Onboard AI: Master Complex Codebases Quickly - ToolCentral</a></li>

</ul>
</details>

**社区讨论**: 社区评论同意这一问题的存在，但对 AI 生成的理解持怀疑态度，例如提到不受欢迎的 PR 描述以及 AI 掩盖错误的风险。一些人认为这个问题在 LLM 出现之前就已存在，而另一些人则强调人类责任和阅读代码的重要性，正如 Mitchell Hashimoto 的名言所强调的那样。

**标签**: `#LLMs`, `#software engineering`, `#code comprehension`, `#developer tools`

---

<a id="item-5"></a>
## [DRAM“意大利面化”攻击：绕过内存保护的新技术](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts) ⭐️ 8.0/10

安全研究员 Christopher Domas 发布了一种名为“DRAM 意大利面化”的新型 DRAM 攻击技术，利用 DRAM 加扰绕过内存保护并获得 ring-0 访问权限。该攻击已在 AMD Jaguar（Family 16h）架构上演示，并指出 Zen 3 的内存控制器寄存器基地址不同。 这项研究凸显了 DRAM 中一个重要的攻击面，可能影响数百万台设备，包括 Xbox 和 PlayStation 等游戏主机。它表明即使有强大的软件保护，硬件级攻击也能破坏系统安全，引起消费者和安全团队的担忧。 该攻击利用 DRAM 加扰在物理地址之间创建别名，使攻击者能够访问受保护的内存区域。该技术使用 SMT 求解器（z3）逆向工程加扰变换，README 指出 Zen 3 等较新 CPU 的内存控制器寄存器基地址不同，但受影响处理器的完整范围尚不清楚。

hackernews · matt_d · 8月13日 14:17 · [社区讨论](https://news.ycombinator.com/item?id=49286341)

**背景**: DRAM 加扰是内存控制器用来混淆内存单元物理映射的技术，旨在提高安全性和可靠性。Row hammer 攻击利用 DRAM 单元干扰来翻转位，而这项新攻击基于类似概念绕过内存保护。AMD Jaguar 是 2013 年推出的低功耗微架构，用于当时的 APU 和游戏主机。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/xoreaxeaxeax/skitter-creek-bath-salts">GitHub - xoreaxeaxeax/skitter-creek-bath-salts: Unlocking _everything_ on the CPU with DRAM scrambling · GitHub</a></li>
<li><a href="https://en.wikipedia.org/wiki/Jaguar_(microarchitecture)">Jaguar (microarchitecture) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Row_hammer">Row hammer - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区对此研究高度热情，许多人称赞 Christopher Domas 的工作，并期待他的 Black Hat 演讲。一些评论者担心对 Xbox 和 PlayStation 等游戏主机的影响，而另一些人则质疑该攻击对较新 CPU 的适用性，指出演示是在较旧硬件上进行的。

**标签**: `#security`, `#DRAM`, `#hardware`, `#exploit`, `#reverse engineering`

---

<a id="item-6"></a>
## [选择无聊的技术：节省创新代币](https://mcfunley.com/choose-boring-technology) ⭐️ 8.0/10

Dan McKinley 在 2015 年发表的文章《选择无聊的技术》主张，公司应优先使用成熟、'无聊'的技术，以节省有限的'创新代币'，用于真正差异化的领域。这篇文章在 Hacker News 上重新引起关注，引发了关于其在 AI 智能体时代相关性的新一轮讨论。 这篇文章是工程实用主义的奠基之作，影响了许多团队的技术选型方式。它的重新流行凸显了采用前沿工具与保持可靠性之间的持续张力，尤其是在 AI 智能体推动团队转向更新、未经充分验证的技术的背景下。 核心隐喻是每家公司拥有固定数量的'创新代币'，用于投入新技术；将其花在非差异化领域是浪费。文章建议在大多数基础设施中使用无聊的技术，并将创新保留给核心业务差异化。HN 讨论中有一个现代观点，即'将所有创新代币投入智能体'，其余使用无聊技术；也有反对意见批评代币概念的随意性。

hackernews · tosh · 8月13日 17:48 · [社区讨论](https://news.ycombinator.com/item?id=49289512)

**背景**: 这篇文章由 Dan McKinley 于 2015 年撰写，他曾在 Etsy 和 Stripe 等公司担任软件工程师。文章倡导保守的技术采用策略，认为采用新的、未经证实的技术成本往往被低估。'创新代币'的隐喻帮助团队确定风险承担的优先级，确保他们不会在非必要组件上耗尽创新能力。

**社区讨论**: HN 讨论总体上积极，许多人称赞'创新代币'概念是权衡取舍的有用框架。一位评论者建议，在 AI 智能体时代，团队应将所有创新代币投入智能体，其余使用无聊技术；另一位则提出反驳，认为该概念具有随意性，工程师应根据需求和风险来评估技术，而不是基于'新颖性'等代理指标。

**标签**: `#software-engineering`, `#technology-strategy`, `#innovation`, `#engineering-culture`

---

<a id="item-7"></a>
## [systemd-journald 在 ext4 上每行日志写入 49KB+，在 btrfs 上写入 110KB+](https://github.com/systemd/systemd/issues/40262) ⭐️ 8.0/10

一个 GitHub issue 报告称，systemd-journald 在 ext4 上每行日志写入超过 49KB 的磁盘数据，在 btrfs 上则超过 110KB，凸显了严重的写放大问题。该问题引发了社区关于 journald 低效和缺乏过滤选项的讨论。 这一性能缺陷影响了 systemd-journald，这是大多数现代 Linux 发行版的核心组件，可能导致过度的磁盘 I/O 和存储设备磨损。对于依赖 journald 进行日志记录的系统管理员和开发者来说尤其重要，因为它可能导致性能下降和存储成本增加。 写放大归因于 journald 的设计，它向日志文件追加数据并更新元数据，导致额外的写入。该问题还指出 journald 缺乏细粒度的过滤选项，用户只能按严重级别过滤或将日志转发到外部工具（如 rsyslog）。

hackernews · ValdikSS · 8月13日 18:41 · [社区讨论](https://news.ycombinator.com/item?id=49290215)

**背景**: systemd-journald 是一个日志守护进程，以二进制日志格式收集和存储系统日志，设计目标是可靠性和原子性。日志文件格式受到经典日志文件和 git 仓库的启发，在末尾追加数据并更新元数据。然而，这种设计可能导致显著的写放大，尤其是在 ext4 和 btrfs 等具有不同日志行为的文件系统上。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/systemd/systemd/issues/15292">systemd - journald : excessive and hugely abnormal disk IO · Issue...</a></li>
<li><a href="https://medium.com/@eren.c.uysal/block-device-tuning-of-system-logging-with-journald-020306230fc5">Block Device Tuning of System Logging with Journald | Medium</a></li>
<li><a href="https://sematext.com/blog/journald-logging-tutorial/">Logging w/ journald : Why use it & how it performs vs syslog</a></li>

</ul>
</details>

**社区讨论**: 社区评论对 journald 的性能和设计表示不满，有人建议仅将其用作路由器并将日志转发到其他工具。还有人提到缺乏过滤选项以及难以控制日志过多的子系统，一位用户考虑切换到 Devuan 以获得初始化自由。

**标签**: `#systemd`, `#journald`, `#logging`, `#performance`, `#Linux`

---

<a id="item-8"></a>
## [DeepSeek Harness 开发者预览版：可追踪、基于插件的智能体工具](https://deepseek.com/harness/en/) ⭐️ 8.0/10

DeepSeek 发布了 DeepSeek Harness（dsh）的早期开发者预览版，这是一个采用 MIT 许可证的开源智能体工具。它基于 Cordis v4 框架，具有可追踪的会话日志和动态插件能力。 该预览版引入了带有追加式会话日志的智能体透明性新方法，可能为 AI 工具设定新标准。MIT 许可证和插件架构可能会吸引寻求可定制和可审计 AI 智能体的开发者。 该工具将模型所见的一切记录在追加式会话日志中，包括系统提示、推理、工具调用和子代理调度。它支持在同一事件流上进行恢复、分叉、搜索和重放，并使用 Cordis v4 实现插件的热重载和动态启用/禁用。

hackernews · bjin · 8月13日 12:58 · [社区讨论](https://news.ycombinator.com/item?id=49285244)

**背景**: DeepSeek Harness 是一个智能体工具，类似于 Anthropic 的 Claude Code，旨在为 AI 智能体提供工具使用、规划和循环能力。Cordis 是一个用于时空可组合性的元框架，提供无需重启进程即可热加载和卸载插件的能力，并已在 Koishi 项目中使用四年。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.deepseek.com/harness/en/">DeepSeek Harness developer preview: Everything is a plugin</a></li>
<li><a href="https://github.com/deepseek-ai/deepseek-harness">GitHub - deepseek -ai/ deepseek - harness : DeepSeek Harness ...</a></li>
<li><a href="https://github.com/cordiverse/cordis">GitHub - cordiverse/ cordis : Meta- Framework of Spatiotemporal...</a></li>

</ul>
</details>

**社区讨论**: 社区成员称赞可追踪性功能是“杀手级功能”，并指出美国模型通常会对追踪进行加密或混淆。一位作者承认这是早期预览版，存在粗糙之处；一位技术评论者强调了 Cordis v4 在卸载插件时能够还原状态和副作用的能力。

**标签**: `#DeepSeek`, `#AI tools`, `#developer preview`, `#traceability`, `#Cordis`

---

<a id="item-9"></a>
## [OpenAI 的 GPT-5.6 构建者指南：更快、更便宜的 AI 代理](https://openai.com/index/builders-guide-to-gpt-5-6) ⭐️ 8.0/10

OpenAI 发布了 GPT-5.6 的构建者指南，展示了初创公司如何利用新模型系列构建更快、更具成本效益的 AI 代理。该指南强调了更智能的模型选择和改进推理连续性的新 Responses API 功能。 这一公告意义重大，因为 GPT-5.6 使前沿级代理性能大幅降低，可能降低初创公司和开发者部署高级 AI 代理的门槛。新的模型选择选项和 API 控制可能重塑 AI 应用的构建和扩展方式。 GPT-5.6 系列包括三个模型：GPT-5.6 Sol 用于复杂推理和编码，GPT-5.6 Terra 用于平衡智能和成本，GPT-5.6 Luna 用于成本敏感、高容量工作负载。Responses API 结合了 Chat Completions 的简单性和 Assistants API 的工具使用和状态管理功能。

rss · OpenAI Blog · 8月13日 11:00

**背景**: OpenAI 的 GPT 模型已从简单的文本生成演变为能够执行复杂任务的强大代理。Responses API 是下一代 API，通过集成工具调用和状态管理简化了 AI 代理的构建。模型选择对于优化性能和成本至关重要，因为不同的模型适合不同的工作负载。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/builders-guide-to-gpt-5-6/">The builder’s guide to GPT ‑ 5 . 6 | OpenAI</a></li>
<li><a href="https://developers.openai.com/api/docs/models">Explore all available models on the OpenAI Platform. | OpenAI API</a></li>
<li><a href="https://docs.apiyi.com/en/api-capabilities/openai-responses">OpenAI Responses API Support - API 易文档中心</a></li>

</ul>
</details>

**标签**: `#GPT-5.6`, `#OpenAI`, `#AI agents`, `#Responses API`, `#model selection`

---

<a id="item-10"></a>
## [Hugging Face 复现 2200 篇 ICML 论文，揭示关键见解](https://huggingface.co/blog/icml-2026-open-reproductions) ⭐️ 8.0/10

Hugging Face 开展了一项大规模可复现性研究，在为期 19 天的挑战中使用 AI 编码代理复现了 2200 篇 ICML 论文。他们验证了其中超过一半论文的至少一项声明，并发布了包含 35,908 条声明判定结果的公开数据集。 这项研究为机器学习研究的可复现性现状提供了前所未有的见解，突出了常见陷阱和最佳实践。它强调了可复现性对科学进步的重要性，并为研究人员和从业者提供了实用指导。 该挑战涉及启动 2,962 个 HF Jobs，并在 Hugging Face 上发布了 274 个完整的代理轨迹数据集。由于 API 限制，需要 RL 微调、GPU 硬件访问或对数概率评分的声明被标记为“不确定”。

rss · Hugging Face Blog · 8月13日 00:00

**背景**: 可复现性是科学研究的基石，但机器学习研究常因代码和数据未公开、对训练条件敏感而面临可复现性危机。Hugging Face 的这项大规模工作利用 AI 代理系统性地测试了顶级会议的论文声明，为社区提供了独特的基准。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/blog/icml-2026-open-reproductions">What We Learned by Reproducing 2,200 papers from ICML</a></li>
<li><a href="https://toksickmagazine.com/technology-news-gadgets/insights-gained-from-reproducing-2-200-icml-papers-in-ai-research/">Insights Gained From Reproducing 2,200 ICML Papers In AI Research</a></li>
<li><a href="https://paperswithcode.co/paper/2307.10320">Reproducibility in Machine Learning -Driven Research ...</a></li>

</ul>
</details>

**社区讨论**: 社区反应总体积极，许多人称赞这项工作的规模和透明度。一些讨论指出了使用 AI 代理和 API 限制的局限性，而另一些则强调了公开数据集对未来研究的价值。

**标签**: `#reproducibility`, `#machine learning`, `#research`, `#ICML`, `#best practices`

---

<a id="item-11"></a>
## [DeepMind 发布 SL2T 手语转文字模型，首次落地 Pixel 11](https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/) ⭐️ 8.0/10

谷歌 DeepMind 发布了大规模多语言手语转文字模型 SL2T，现已率先在 Pixel 11 的 Gboard 和 Live Transcribe 中上线，初期支持美国手语（ASL）转英语。该模型使用了超过 10 万小时、涵盖 50 多种手语的数据进行训练。 这标志着手语 AI 首次集成到消费产品中，为聋人和听力障碍用户带来了显著的便利，并可能推动其他科技公司跟进，促进手语识别在日常设备中的更广泛应用。 SL2T 在 FLEURS-ASL 基准上实现了 70 的零样本 BLEURT 分数，远超此前纪录。为保护隐私，该模型仅处理手部和身体姿态关键点，而不读取原始视频。

telegram · zaihuapd · 8月13日 08:55

**背景**: 手语翻译传统上因缺乏大规模数据集和捕捉手势的复杂性而面临挑战。FLEURS-ASL 是将 FLORES 和 FLEURS 扩展到美国手语的基准数据集，为标准化评估提供了可能。BLEURT 是一种用于评估文本质量（尤其是机器翻译）的学习型指标，被认为比 BLEU 等传统指标更稳健。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://datanorth.ai/news/google-deepmind-releases-sl2t">Google DeepMind releases SL 2 T sign language AI - DataNorth</a></li>
<li><a href="https://interestingengineering.com/ai-robotics/google-sign-language-model-body-landmarks">Google's new model turns sign language into text for web searches</a></li>
<li><a href="https://www.cryptopolitan.com/google-deepmind-sign-language-on-pixel-11/">Google DeepMind ships SL 2 T sign - language model ... - Cryptopolitan</a></li>

</ul>
</details>

**标签**: `#AI`, `#sign language`, `#DeepMind`, `#accessibility`, `#NLP`

---