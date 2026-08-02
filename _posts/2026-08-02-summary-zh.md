---
layout: default
title: "Daily-Summary: 2026-08-02 (ZH)"
date: 2026-08-02
lang: zh
---

> 从 41 条内容中筛选出 6 条重要资讯。

---

1. [Karpathy 点赞 sqliteai/waste：从 NVMe 流式运行 2.78T 参数 Kimi K3](#item-1) ⭐️ 8.0/10
2. [Karpathy 强调“骑自行车的鹈鹕”作为新 AI 基准](#item-2) ⭐️ 8.0/10
3. [Kakehashi：在 Linux ARM 上运行 macOS 二进制文件](#item-3) ⭐️ 8.0/10
4. [F*：面向验证软件的证据导向编程语言](#item-4) ⭐️ 8.0/10
5. [Fuse：一种基于 GRIN 后端的新静态类型函数式语言](#item-5) ⭐️ 8.0/10
6. [公开信辩论 AI 监管与开放权重](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Karpathy 点赞 sqliteai/waste：从 NVMe 流式运行 2.78T 参数 Kimi K3](https://github.com/sqliteai/waste) ⭐️ 8.0/10

Andrej Karpathy 在 GitHub 上为仓库 'sqliteai/waste' 点了星标，这是一个无依赖的 C 语言推理引擎，通过从 NVMe 流式加载激活权重，使 2.78 万亿参数的 Kimi K3 模型能够在超出可用内存的情况下运行。 这位极具影响力的 AI 人物的认可，凸显了在消费级硬件上运行大型模型的趋势，可能使最先进的 AI 技术更加普及。这可能会加速开源社区对类似技术的采用。 该项目采用 Apache 2.0 许可证，可通过 'make' 命令构建。它属于 sqliteai 组织，该组织还维护 sqlite-wasm，表明其专注于将 AI 与 SQLite 技术集成。

github · karpathy · 8月2日 17:19

**背景**: WASTE 是一个推理引擎，旨在通过从 NVMe 存储流式加载权重，来运行超出可用内存的超大规模语言模型（LLM）。这种方法无需昂贵的高内存服务器，使得在单台机器上运行像 Kimi K3 这样的模型成为可能。Andrej Karpathy 是一位著名的 AI 研究者，以深度学习工作和教育内容而闻名。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/sqliteai/waste">GitHub - sqliteai/waste: Run the full 2.78-trillion-parameter Kimi K3 model beyond available RAM by streaming activated weights directly from NVMe. A dependency-free, embeddable C inference engine. · GitHub</a></li>
<li><a href="https://marcobambini.substack.com/p/the-waste-inference-engine">The WASTE inference engine - Marco Bambini</a></li>
<li><a href="https://github.com/karpathy">karpathy (Andrej) · GitHub</a></li>

</ul>
</details>

**标签**: `#AI`, `#SQLite`, `#GitHub`, `#Karpathy`, `#Open Source`

---

<a id="item-2"></a>
## [Karpathy 强调“骑自行车的鹈鹕”作为新 AI 基准](https://twitter.com/karpathy/status/2083749667410727319) ⭐️ 8.0/10

Andrej Karpathy 在推特上提到“骑自行车的鹈鹕”作为 AI 模型理解物理世界的新基准，引发了关于评估方法和质量期望的讨论。该基准由 Simon Willison 于 2024 年 10 月创建，要求模型生成一个鹈鹕骑自行车的 SVG 图像。 该基准将焦点从传统的基于文本的任务转向视觉和物理世界理解，这对提升 AI 能力至关重要。它提供了一种定性、主观的衡量标准，能更好地揭示模型对现实世界约束的理解，从而影响未来的模型评估和发展。 该基准使用单一提示“生成一个鹈鹕骑自行车的 SVG”，测试模型生成有效、视觉连贯的 SVG 代码以描绘物理上不可能的场景的能力。与 MMLU 或 GSM8K 等传统基准不同，它侧重于定性输出，而非选择题或简答题。

hackernews · delichon · 8月2日 04:05 · [社区讨论](https://news.ycombinator.com/item?id=49140998)

**背景**: 传统的 AI 基准如 MMLU 和 GSM8K 通过基于文本的任务（如选择题和数学推理）来评估语言模型。由 Simon Willison 创建的“骑自行车的鹈鹕”基准是一个非正式测试，要求模型生成 SVG 代码，促使它们展示对物理世界约束的理解。Karpathy 作为知名 AI 研究员，强调这一基准以鼓励讨论如何更好地评估 AI 模型对物理世界的理解。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://grokipedia.com/page/Pelican_on_a_bicycle_AI_benchmark">Pelican on a bicycle (AI benchmark) - Grokipedia</a></li>
<li><a href="https://ai.miraheze.org/wiki/Pelican_Bicycle_Benchmark">Pelican Bicycle Benchmark - Learn AI</a></li>
<li><a href="https://huggingface.co/spaces/victor/pelican-benchmark">Pelican Benchmark - a Hugging Face Space by victor</a></li>

</ul>
</details>

**社区讨论**: 社区评论表达了不同的情绪：一些人认为该基准有助于揭示物理世界理解，而另一些人则担心它降低了质量期望，并过早宣布问题已解决。还有人怀疑模型可能针对特定任务（如 three.js）进行了专门训练，这可能无法泛化到更广泛的能力。

**标签**: `#AI`, `#benchmarking`, `#Karpathy`, `#model evaluation`, `#physical world understanding`

---

<a id="item-3"></a>
## [Kakehashi：在 Linux ARM 上运行 macOS 二进制文件](https://github.com/wie-project/kakehashi) ⭐️ 8.0/10

Kakehashi 是一个实验性用户空间项目，旨在 Linux ARM 上原生运行 macOS 命令行二进制文件。目前已有 7-Zip、curl 和 Xcode Git 的工作原型，其中 7-Zip 通过了多线程压缩测试，curl 通过了 200 多个命令测试。 该项目可能使 Linux ARM 硬件上运行 macOS 软件成为可能，扩大软件兼容性，并可能减少对 Apple 硬件的依赖。它填补了生态系统中的空白，类似于 Wine/Proton 使 Windows 应用能在 Linux 上运行，可能惠及偏好 Linux 但需要 macOS 工具的开发者和用户。 该项目处于早期阶段，7-Zip 目前比原生 Linux 执行慢约 5.2 倍，但作者已有明确的优化计划。它专注于命令行二进制文件，采用用户空间方法，与 Darling 等内核级解决方案不同，并在 GitHub 上开源。

hackernews · vlad_kalinkin · 8月2日 16:26 · [社区讨论](https://news.ycombinator.com/item?id=49145937)

**背景**: macOS 二进制文件使用 Mach-O 格式，并依赖 macOS 特有的系统库和框架。在 Linux 上运行它们需要重新实现这些 API 或翻译系统调用。类似项目如 Darling 旨在实现更广泛的兼容性，但复杂度高；Kakehashi 针对更窄的 CLI 工具集，可能更可行。ARM 架构 Linux 设备（如 Apple Silicon 上的 Asahi Linux）的兴起，增加了此类兼容层的相关性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Asahi_Linux">Asahi Linux - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Universal_binary">Universal binary - Wikipedia</a></li>
<li><a href="https://news.ycombinator.com/item?id=49145937">Show HN: Kakehashi – Experimental userspace to run macOS binaries on Linux ARM | Hacker News</a></li>

</ul>
</details>

**社区讨论**: HN 社区表现出浓厚兴趣，用户将其与 Darling 比较，并建议潜在合作。一些人持谨慎乐观态度，指出项目处于早期阶段，而另一些人则希望未来能扩展，例如在 Linux 上运行 Audio Unit 插件。

**标签**: `#macOS`, `#Linux`, `#ARM`, `#binary compatibility`, `#userspace`

---

<a id="item-4"></a>
## [F*：面向验证软件的证据导向编程语言](https://fstar-lang.org/) ⭐️ 8.0/10

F* 被强调为一种成熟的、通用目的的面向证明的编程语言，它将函数式编程与细化类型和证明助手相结合，实现对关键软件的机器检查验证。 F* 在学术界和工业界具有重要影响，特别是在 Project Everest 中用于验证 TLS，使其成为形式化方法和高可信软件开发的关键工具。 F* 支持在逐步迁移现有 C 代码库时表达对外部库的调用，正如一位用户所指出的。该语言旨在编写程序并附带其属性的机器检查证明。

hackernews · ducktective · 8月2日 12:31 · [社区讨论](https://news.ycombinator.com/item?id=49143925)

**背景**: 细化类型通过谓词扩展类型系统，这些谓词必须对细化类型的值成立。F* 将这些与依赖类型和基于 SMT 的求解器相结合，以自动化证明义务，使其成为用于验证软件的通用语言。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Refinement_type">Refinement type - Wikipedia</a></li>
<li><a href="https://fstar-lang.org/">F*: A Proof - Oriented Programming Language</a></li>
<li><a href="https://www.linuxlinks.com/f-general-purpose-proof-oriented-programming-language/">F* - general-purpose, proof - oriented programming language</a></li>

</ul>
</details>

**社区讨论**: 社区评论情绪复杂：一些人称赞 F* 对增量 C 迁移的坚实支持，而另一些人批评网站缺乏语法示例和明确动机。还有用户询问工业使用情况和应用领域。

**标签**: `#formal verification`, `#programming languages`, `#proof assistants`, `#functional programming`, `#security`

---

<a id="item-5"></a>
## [Fuse：一种基于 GRIN 后端的新静态类型函数式语言](https://fuselang.org/) ⭐️ 8.0/10

Fuse，一种由独立开发者历时五年开发的静态类型纯函数式编程语言，已在 Hacker News 上展示。它通过 GRIN 全程序优化器编译为 LLVM 生成的原生代码，并支持高阶类型和特设多态等高级特性。 该项目证明了独立开发者创建具有高级类型系统特性和非平凡后端的语言的可行性。它为函数式编程语言生态系统做出了贡献，并展示了 GRIN 的实际应用，可能激发全程序优化领域的进一步研究和发展。 Fuse 支持 ADT、泛型、类型方法、特性和模式匹配，全部以纯函数式风格实现，无突变。该语言使用 Scala 实现，从 TAPL 中描述的 System F 开始，并扩展了双向类型检查和高阶多态。

hackernews · the_unproven · 8月2日 11:23 · [社区讨论](https://news.ycombinator.com/item?id=49143412)

**背景**: GRIN 是面向函数式语言的全程序优化器，旨在通过激进优化提升性能。高阶类型允许对类型构造器进行抽象，从而实现更通用和可复用的代码。特设多态，也称为函数重载，允许函数对不同类型使用不同的实现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://grin-compiler.github.io/">whole program optimizer for lazy and strict functional languages</a></li>
<li><a href="https://fuselang.org/">Fuse Programming Language</a></li>
<li><a href="https://en.wikipedia.org/wiki/Higher-kinded_type">Higher-kinded type</a></li>
<li><a href="https://en.wikipedia.org/wiki/Ad_hoc_polymorphism">Ad hoc polymorphism</a></li>

</ul>
</details>

**社区讨论**: Hacker News 社区反应积极，称赞了 GRIN 的使用和语言的简洁设计。一些评论者提出了关于 Unicode 支持和特性语法的技术问题，而其他人建议添加性能基准测试以及与其他语言的比较。

**标签**: `#programming language`, `#functional programming`, `#GRIN`, `#type system`, `#Hacker News`

---

<a id="item-6"></a>
## [公开信辩论 AI 监管与开放权重](https://simonwillison.net/2026/Aug/2/open-letters/#atom-everything) ⭐️ 8.0/10

西蒙·威利森总结了近期关于 AI 发展的公开信，特别是微软发起的、由 235 家公司签署的《开放权重与美国 AI 领导力》，以及 Anthropic 的回应，还有 1324 名 AI 员工呼吁有节奏发展的公开信。 这些公开信反映了行业在开放权重模型监管上的分歧日益加剧，大公司倡导开放，而另一些则警告风险。其结果可能影响美国 AI 政策及开源 AI 的未来。 微软的信支持将蒸馏视为合法技术，而 Anthropic 的回应则呼吁打击工业规模的蒸馏操作。值得注意的是，Anthropic 未签署微软的信，而是在三天后发布了自身立场。

rss · Simon Willison · 8月2日 04:16

**背景**: 开放权重模型是指其训练参数公开发布的 AI 模型，允许任何人下载、检查和修改。这与保持专有的封闭模型形成对比。争论的核心在于平衡创新与安全，尤其是在 AI 能力快速发展的背景下。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Open-weight_model">Open-weight model</a></li>
<li><a href="https://www.microsoft.com/en-us/corporate-responsibility/topics/open-weight/">Open Weights and American AI Leadership</a></li>

</ul>
</details>

**标签**: `#AI policy`, `#open source`, `#open weights`, `#regulation`, `#industry`

---