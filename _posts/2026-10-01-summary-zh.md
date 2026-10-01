---
layout: default
title: "Daily-Summary: 2026-10-01 (ZH)"
date: 2026-10-01
lang: zh
---

> 从 47 条内容中筛选出 11 条重要资讯。

---

1. [谷歌发布新一代前沿 AI 模型 Gemini 4 Argon](#item-1) ⭐️ 9.0/10
2. [EDG C++ 前端在 C++ Alliance 下开源](#item-2) ⭐️ 9.0/10
3. [DeepSeek 开源华为昇腾基础组件](#item-3) ⭐️ 9.0/10
4. [作者公开反转对 MCP 的立场，引发 MCP 与 CLI 之争](#item-4) ⭐️ 8.0/10
5. [SDF、MSDF 与 Slug：GPU 文本渲染方法对比](#item-5) ⭐️ 8.0/10
6. [OpenAI 瓦解协同模型蒸馏行动](#item-6) ⭐️ 8.0/10
7. [32 位研究者发布现代 NLP 分词综合综述](#item-7) ⭐️ 8.0/10
8. [CO₂Jump：无需训练的采样器让文本与图像保持一致](#item-8) ⭐️ 8.0/10
9. [Cloudflare 宣布进军公共证书颁发机构](#item-9) ⭐️ 8.0/10
10. [Kimi K3 通过 Baseten 接入 OpenAI Codex 企业通道](#item-10) ⭐️ 8.0/10
11. [Reddit 将停用 RSS 订阅与公开 API 访问，理由为 AI 机器人抓取](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [谷歌发布新一代前沿 AI 模型 Gemini 4 Argon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) ⭐️ 9.0/10

谷歌发布了新一代前沿 AI 模型 Gemini 4 Argon，该模型在编程、推理和多模态能力上表现出色，其入门定价为每百万输入 token 2 美元、每百万输出 token 10 美元，缓存输入 token 可享 95%折扣。该模型尚未全面开放，谷歌表示将继续收集早期测试者的反馈并迭代安全护栏，之后再向开发者、企业和消费者推出。 此次发布加剧了前沿 AI 实验室之间的竞争，社区讨论认为模型之间的快速交替领先并非暂时现象，AI 能力正日益分散于超大规模云厂商、新兴云厂商和初创公司之间。这也意味着企业可能很快获得一个用于长流程、多步骤工作流的强大新选择，同时开发者被建议保持模型和供应商的可替换性。 Gemini 4 Argon（High）在智能水平上处于领先模型之列，与同类模型相比定价合理；在 Vals 任务集上，Gemini 3.8 Flash 落后 Argon 约 14 分，但这一差距并不保证在其他任务上同样成立。该模型维持长流程、多步骤任务的能力被视为企业工作流的关键，据报道 Argon 智能体正在谷歌内部将 C/C++代码库迁移至 Rust。

hackernews · bradleyg223 · 9月30日 20:04 · [社区讨论](https://news.ycombinator.com/item?id=49913571)

**背景**: 前沿 AI 模型是最先进的通用人工智能系统，通常是在海量数据集上训练的大语言模型，其数据和算力成本可达数亿美元。谷歌的 Gemini 系列是主要的前沿模型产品线之一，与 OpenAI、Anthropic、Mistral 等公司的模型展开竞争。模型发布通常伴随第三方基准分析（如 Artificial Analysis 的评测），用于比较不同厂商在智能水平、价格和性能上的表现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/">Introducing Gemini 4 Argon</a></li>
<li><a href="https://artificialanalysis.ai/models/gemini-4-argon">Gemini 4 Argon ( high ) - Intelligence , Performance & Price Analysis</a></li>
<li><a href="https://news.ycombinator.com/item?id=49914236">Gemini 4 Argon ( High ): Intelligence , Performance and Price Analysis</a></li>

</ul>
</details>

**社区讨论**: 评论者对模型的轶事级能力印象深刻，例如 Gemini 3.8 Flash 逆向工程 GPU 驱动接口以使 ROCm 与 llama.cpp 协同工作，并争论今年快速的交替领先是否推翻了 AI“赢家通吃”理论。一些人批评谷歌尚未正式发布该模型（称其“发布不出一款模型”），另一些人则建议保持工作流对模型和供应商的可替换性，并指出 Argon 智能体在谷歌内部将 C/C++代码库迁移至 Rust 意义重大。

**标签**: `#AI`, `#Gemini`, `#Google`, `#LLM`, `#Model Release`

---

<a id="item-2"></a>
## [EDG C++ 前端在 C++ Alliance 下开源](https://edgcpp.org/#transition) ⭐️ 9.0/10

2026 年 9 月 30 日，EDG 长期商业化的 C++ 前端源代码在 GitHub 上公开，C++ Alliance 成为其非营利性归属组织。该项目采用 Apache-2.0 许可证并附带 LLVM 例外条款发布。 EDG 前端是广受尊敬的行业标准编译器组件，被用于 Visual C++ IntelliSense、Intel C++ 编译器、NVIDIA CUDA NVCC 等工具，因此其开源对 C++ 社区而言是一大事件。它可能催生源到源转译等新应用，并为 Clang 等现有前端提供一个专业维护、符合标准的替代方案。 该仓库包含可追溯至 1990 年的提交历史，这对开源项目而言异常深厚，许可证为 Apache-2.0 WITH LLVM-exception。该前端旨在与 Clang、GCC 和 MSVC 等主流编译器高度兼容，确保广泛的源代码支持。

hackernews · iandinwoodie · 9月30日 19:26 · [社区讨论](https://news.ycombinator.com/item?id=49913192)

**背景**: 编译器前端负责源代码的预处理和解析，生成中间表示，再由后端转换为机器码。Edison Design Group（EDG）是一家美国公司，为 C++（以及此前的 Java 和 Fortran）开发此类前端，其技术已被众多商业编译器和分析工具授权使用。将成熟且经过商业验证的前端开源十分罕见，尤其是拥有数十年历史的前端。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Edison_Design_Group">Edison Design Group - Wikipedia</a></li>
<li><a href="https://edgcpp.org/">Open Source Transition · EDGCPP</a></li>
<li><a href="https://www.phoronix.com/news/EDG-CPP-Open-Sourced">EDG C/ C++ Front - End Open-Sourced - Phoronix</a></li>

</ul>
</details>

**社区讨论**: 评论者指出 EDG 公司正在逐步关闭，这可能是其开源的原因，并强调了可追溯至 1990 年的异常深厚的提交历史。其他人讨论了潜在用途，例如将 C++ 库转译到其他语言（如 Free Pascal），并强调了该前端的声誉，包括其在 Visual C++ IntelliSense 中的应用。

**标签**: `#C++`, `#compiler`, `#open-source`, `#EDG`, `#programming-languages`

---

<a id="item-3"></a>
## [DeepSeek 开源华为昇腾基础组件](https://mp.weixin.qq.com/s/X41mKH4Ds-VXUAnK6M8Eww) ⭐️ 9.0/10

2026 年 9 月 30 日，DeepSeek 开源了面向华为昇腾平台的一整套基础组件，涵盖 TileLang 高级语言编译工具链、计算库和分布式通信库，与其英伟达平台组件一一对应。此次发布包括 DeepGEMM Ascend、DeepEP Ascend、TileKernels、FlashMLA 和 DeepSelect，DeepSeek 称相关组件在多项测试中性能接近硬件上限，并确认正与华为共同推进昇腾 950 的 128 卡超节点方案。 这是对华为昇腾生态的一次全栈式开源投入，在出口管制限制中国获取英伟达高端 GPU 的背景下，直接挑战 CUDA 的护城河。它为中国 AI 实验室提供了一套可行且高性能的替代软件栈，也表明昇腾硬件正被定位用于前沿规模的训练与推理，而不仅仅是边缘推理。 DeepGEMM Ascend 与原版 DeepGEMM 完全 API 兼容，支持 BF16、FP8、FP4 GEMM 以及 MQA logits，因此基于 DeepGEMM 接口构建的现有代码可以保持相同的开发流程。这些组件与华为昇腾 950 超节点方案绑定，Atlas 950 SuperNode 可扩展至 8192 颗昇腾 950 DT 芯片，规模是 Atlas 900 的 20 倍以上。

telegram · zaihuapd · 9月30日 03:09

**背景**: 华为昇腾是中国领先的国产 AI 加速器产品线，其软件栈 CANN 在成熟度和库覆盖上长期落后于英伟达的 CUDA。TileLang 是一种基于 Apache TVM 构建的 Python 风格领域特定语言，让开发者无需编写底层代码即可实现高性能 GPU/NPU 内核。DeepGEMM 是 DeepSeek 开源的高性能 GEMM（矩阵乘法）内核库，DeepEP 则是面向 MoE 模型的专家并行通信库；将这些组件移植到昇腾，是在华为硬件上高效运行 DeepSeek 系列模型的前提。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/deepseek-ai/DeepGEMM-Ascend">GitHub - deepseek-ai/ DeepGEMM - Ascend : DeepGEMM - Ascend ...</a></li>
<li><a href="https://aicybr.com/blog/deepgemm-ascend-deepseek-huawei">DeepSeek Ports DeepGEMM to Huawei Ascend 950... | AiCybr Blog</a></li>
<li><a href="https://beckmoulton.medium.com/huaweis-ai-chip-plan-fully-unveiled-65a8d86c4e9d">Huawei ’s AI Chip Plan Fully Unveiled! World’s Most Powerful... | Medium</a></li>

</ul>
</details>

**标签**: `#DeepSeek`, `#Huawei Ascend`, `#AI infrastructure`, `#open source`, `#hardware acceleration`

---

<a id="item-4"></a>
## [作者公开反转对 MCP 的立场，引发 MCP 与 CLI 之争](https://earendil.com/posts/you-said-no-mcp/) ⭐️ 8.0/10

一篇题为《You said no MCP》的博客文章记录了作者公开反转此前对模型上下文协议（MCP）的强烈反对立场，认为如今 MCP 值得采用。该文章在 Hacker News 上获得 610 分和 341 条评论，开发者们围绕 MCP 相对命令行界面（CLI）方案的实际价值展开了讨论。 MCP 已成为连接 AI 应用与外部工具及数据的广泛采用的开放标准，这一公开反转表明在 2026 年初反 MCP 浪潮之后，开发者社区的认知正在发生转变。这场辩论影响着开发者构建和部署 LLM 智能体的方式，尤其是在安全性、可观测性和运维复杂度方面。 讨论指出，MCP 在安全性、可观测性/遥测以及部署和运维便捷性方面具有优势，而 CLI 方案通常更节省 token，因为 LLM 已经熟悉 Git 等常见工具。评论者指出 MCP 目前尚不够高性能、健壮和统一，但预计会随时间改进，就像 USB-C、NVMe 和 HDMI 尽管有缺陷仍取得成功一样。

hackernews · yarapavan · 9月30日 09:55 · [社区讨论](https://news.ycombinator.com/item?id=49906637)

**背景**: 模型上下文协议（MCP）是由 Anthropic 推出的开源标准，让 Claude 或 ChatGPT 等 AI 应用通过统一接口连接外部数据源、工具和工作流，取代了定制的临时集成。在 MCP 出现之前，将 AI 应用连接到每个外部工具都需要编写专门的集成代码。2026 年初，许多科技意见领袖宣称 MCP 已死并推崇 CLI 工具，但此后 MCP 获得了广泛采用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://modelcontextprotocol.io/">What is the Model Context Protocol ( MCP )? - Model Context Protocol</a></li>
<li><a href="https://github.com/modelcontextprotocol">Model Context Protocol · GitHub</a></li>
<li><a href="https://getunblocked.com/blog/when-to-use-mcp-vs-cli/">MCP vs CLI : When to Use Which for AI Agents (2026) | Unblocked</a></li>

</ul>
</details>

**社区讨论**: 评论者大多赞赏作者公开反转坚定立场，有人引用 Armin Ronacher 关于强烈观点往往依赖过时论据的说法。其他人认为 MCP 的价值不仅限于编程——例如通过自然语言配置 macOS 应用——并为其辩护，认为它虽有缺陷但兼容性广泛；也有人指出他们在 2026 年 3 月反 MCP 浪潮中就已支持 MCP。

**标签**: `#MCP`, `#AI/ML`, `#developer-tools`, `#LLM-agents`, `#software-engineering`

---

<a id="item-5"></a>
## [SDF、MSDF 与 Slug：GPU 文本渲染方法对比](https://alphapixeldev.com/sdf-vs-msdf-vs-slug-vs-rive-gpu-text-rendering/) ⭐️ 8.0/10

AlphaPixel 发布了一篇对比 SDF、MSDF 和 Slug 三种 GPU 文本渲染技术的深度技术分析，解释了每种方法如何处理字形轮廓以及各自在现代渲染管线中的适用场景。文章在 Hacker News 上引发了讨论，开发者们分享了各自的实践实现，例如用 Zig 编写的 Slug 实现 Snail，以及 mattdesl 开发的 GPU 曲线渲染器 Windfoil。 文本渲染的质量和性能直接影响 UI、游戏以及任何需要缩放矢量字体的应用，而基于图集的方法（SDF/MSDF）与基于轮廓的方法（Slug）之间的取舍决定了内存占用、清晰度和特效灵活性。随着高 DPI 显示器成为标配，选择合适的技术对视觉保真度和 GPU 资源预算都有实际影响。 SDF 每个纹素只存储一个距离值，添加描边和抗锯齿等特效很容易，但会磨圆尖锐的拐角；MSDF 使用多个颜色通道来保留拐角，但传统上依赖预烘焙图集，评论者指出可以通过异步上传图集来缓解这一问题。Slug 直接在 GPU 上从二次贝塞尔轮廓渲染，无需预计算纹理，但它本质上只做“在内部还是外部”的二值判断，特效实现更困难，且文本不带 hinting，对某些字体的小字号渲染可能不利。

hackernews · ibobev · 9月30日 13:50 · [社区讨论](https://news.ycombinator.com/item?id=49908962)

**背景**: 可缩放字体将每个字形存储为矢量轮廓，通常是二次或三次贝塞尔曲线，显示时需要栅格化。SDF（有符号距离场）渲染由 Valve 在 2007 年推广，它预计算一张纹理，每个像素存储到最近字形边缘的距离，从而实现清晰的缩放和廉价的着色器特效。MSDF（多通道 SDF）通过多个通道扩展了这一方法以保留尖锐拐角，而 Slug 是一种以 GPU 为中心的方法，逐像素直接计算真实轮廓曲线，无需任何预计算的距离纹理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://sluglibrary.com/">Slug Font Rendering Library</a></li>
<li><a href="https://github.com/Chlumsky/msdfgen">GitHub - Chlumsky/msdfgen: Multi - channel signed distance field ...</a></li>
<li><a href="https://dev.epicgames.com/documentation/unreal-engine/using-signed-distance-field-text-rendering-in-unreal-engine?lang=en-US">Using Signed Distance Field Text Rendering in Unreal Engine</a></li>

</ul>
</details>

**社区讨论**: 评论者分享了实践实现和细致的取舍：psyclyx 用 Zig 编写了 Snail，并指出 Slug 缺少 hinting 会影响小字号文本；GuB-42 称赞 SDF 易于添加描边和抗锯齿；mattdesl 介绍了 Windfoil，它使用更少的着色器存储并能产生更高质量的抗锯齿。YuechenLi 纠正了文章中的说法，指出 MSDF 图集不必静态烘焙，可以异步上传；而 jdanford 则抱怨文章像是 LLM 生成的。

**标签**: `#GPU rendering`, `#text rendering`, `#SDF`, `#MSDF`, `#Slug`, `#graphics programming`

---

<a id="item-6"></a>
## [OpenAI 瓦解协同模型蒸馏行动](https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign) ⭐️ 8.0/10

OpenAI 宣布已瓦解一场旨在从其系统中提取受保护模型推理过程的协同行动，并表示正在加强对对抗性蒸馏的防御。该公司将此次披露定位为持续保护专有模型能力免遭系统性提取的努力的一部分。 这凸显了 AI 知识产权面临的日益严重的威胁：攻击者可以通过系统性地查询专有模型，在更廉价的学生模型中复制其推理能力，从而可能削弱前沿实验室的竞争优势。这也表明，对领先 AI 公司而言，模型安全正变得与模型能力同等重要。 对抗性蒸馏攻击通常需要对模型 API 进行大量查询，因此速率限制和查询监控是常见的第一道防线。OpenAI 并未披露具体的技术反制措施或参与该行动的行为者身份。

rss · OpenAI Blog · 9月30日 10:30

**背景**: 模型蒸馏是一种机器学习技术，通过训练较小的“学生”模型来复现较大“教师”模型的行为，从而以更低的计算成本保留大部分原始性能。对抗性蒸馏则滥用这一技术，未经授权地利用专有模型的输出（包括推理轨迹）来训练竞争模型。推理提取攻击专门针对中间思维链输出，以重建或放大模型的内部推理过程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://labelyourdata.com/articles/machine-learning/model-distillation">Model Distillation : Teacher-Student Training Guide... | Label Your Data</a></li>
<li><a href="https://rejoicehub.com/blogs/adversarial-distillation-ai-model-security">Adversarial Distillation AI: How to Protect Your AI Models</a></li>
<li><a href="https://www.emergentmind.com/topics/reasoning-extraction-attacks">Reasoning Extraction Attacks</a></li>

</ul>
</details>

**标签**: `#AI security`, `#model distillation`, `#adversarial attacks`, `#OpenAI`, `#intellectual property`

---

<a id="item-7"></a>
## [32 位研究者发布现代 NLP 分词综合综述](https://www.reddit.com/r/MachineLearning/comments/1wuccjf/tokenization_a_survey_for_modern_nlp_r/) ⭐️ 8.0/10

由 32 位分词研究者组成的团队历时约八个月，编写了迄今为止最全面的分词综述，涵盖算法、评估、多语言性、编码方式和理论。该综述还探讨了可能替代分词器的方案，例如潜空间分词和视觉分词，并涉及受限生成、token 修复以及分词器安全等相邻主题。 分词是语言建模中关键却长期被忽视的环节，其影响波及整个 NLP 领域，因此一份统一的参考综述能帮助研究者和工程师做出更明智的设计选择。通过梳理开放问题和替代范式，该综述有望引导未来研究走向更高效、更公平、更安全的分词器设计。 该综述涵盖分词算法、评估方法、多语言考量、编码方案和理论基础，并明确讨论了潜空间分词或视觉分词等替代方案。它还涉及受限生成、token 修复和分词器安全等密切相关的议题，范围之广实属罕见。

reddit · r/MachineLearning · /u/mcmcmcmcmcmcmcmcmc_ · 9月30日 18:13

**背景**: 分词是将原始文本切分为更小单元（称为 token）的过程，语言模型将这些 token 作为数字进行处理。大多数现代大语言模型依赖 BPE 等子词分词器，但分词器的选择会影响词表大小、多语言性能和计算成本。尽管分词如此重要，历史上它受到的研究关注却远少于模型架构或训练数据。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.geeksforgeeks.org/nlp/tokenization-in-natural-language-processing-nlp/">What is Tokenization in Natural Language Processing ( NLP )?</a></li>
<li><a href="https://www.grammarly.com/blog/ai/what-is-tokenization/">What Is Tokenization in NLP ?</a></li>
<li><a href="https://arxiv.org/pdf/2406.07548">Image and Video Tokenization</a></li>

</ul>
</details>

**标签**: `#tokenization`, `#NLP`, `#survey`, `#language modeling`, `#multilinguality`

---

<a id="item-8"></a>
## [CO₂Jump：无需训练的采样器让文本与图像保持一致](https://www.reddit.com/r/MachineLearning/comments/1wtyl5m/concurrent_image_understanding_and_generation/) ⭐️ 8.0/10

一篇来自 Google、Google DeepMind 和石溪大学的 NeurIPS 2026 论文提出了 CO₂Jump，这是一种无需训练的联合文本-图像生成采样器，它利用文本置信度和跨模态注意力来引导图像更新，并能将低置信度的 token 重新掩码后重新生成。作者还发布了三个新数据集——JEdit-1M、JMaze-200K 和 JNono-200K——并表明在 8 到 512 个采样步数范围内，CO₂Jump 是所比较的采样器中唯一在编辑质量和 grounding 上均单调提升的方法。 联合文本-图像生成模型可能生成正确的文本答案，但配图却不一致，这削弱了多模态应用的可靠性。一种无需额外训练就能提升一致性的采样器，可能会被研究图像编辑、解谜以及其他要求文本与图像一致的任务的研究者和从业者广泛采用。 CO₂Jump 每个去噪步骤只需一次模型前向传播，且无需额外训练；实验在相同的任务特定微调模型上比较不同采样方法。评估涵盖图像编辑、迷宫求解和非 ograms，其中联合准确率要求文本答案和生成图像同时正确。

reddit · r/MachineLearning · /u/Upstairs_Theme2785 · 9月30日 07:28

**背景**: 马尔可夫跳过程是随机模型，在随机时间于离散状态之间转移，本文用它为耦合采样过程提供理论框架。跨模态注意力让模型在更新一种模态（图像）时权衡来自另一种模态（文本）的信息，而非 ograms 是一种图片逻辑谜题，网格边缘的数字规定了连续填充格的数量。论文针对联合生成中的不匹配问题：模型可能在文本中描述正确的迷宫路径，却在图像中画出不同的路径。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Nonogram">Nonogram</a></li>
<li><a href="https://www.emergentmind.com/topics/cross-modal-attention">Cross - Modal Attention Mechanisms</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5477715/">Unbiased Bayesian inference for population Markov jump processes ...</a></li>

</ul>
</details>

**标签**: `#multimodal generation`, `#image understanding`, `#markov jump processes`, `#self-correction`, `#NeurIPS 2026`

---

<a id="item-9"></a>
## [Cloudflare 宣布进军公共证书颁发机构](https://blog.cloudflare.com/cloudflare-certificate-authority/) ⭐️ 8.0/10

Cloudflare 宣布计划成为公共证书颁发机构，已申请加入 Chrome、Apple、Microsoft 和 Mozilla 的根证书计划，并与 GlobalSign 签署协议收购一个受广泛信任的根证书。该公司目前尚未开始签发证书，但计划优先支持基于 ACME 的自动签发和续期，并计划在 2027 年第一季度签发生产级默克尔树证书（MTC）。 Cloudflare 进入公共 CA 市场是一项重大的行业举措，可能打破长期以来由少数几家机构主导的证书颁发机构格局。其 ACME 优先的策略和早期的后量子路线图，可能促使其他 CA 加快自动化和抗量子证书在整个 Web PKI 生态系统中的采用。 新 CA 将优先支持 ACME 自动签发和续期，Cloudflare 计划在 2027 年第一季度签发生产级默克尔树证书（MTC），以服务后量子互联网。目前尚未开始签发任何证书，该计划取决于能否被主要根证书计划接纳以及所收购的 GlobalSign 根证书。

telegram · zaihuapd · 9月30日 06:26

**背景**: 公共证书颁发机构（CA）是受浏览器、操作系统和应用程序固有信任的第三方，负责签发用于 HTTPS 等公共渠道的数字证书。要获得信任，CA 必须被纳入 Chrome、Apple、Microsoft 和 Mozilla 等根证书计划，这些计划会规定其所收录证书的有效用途。ACME 是一种 IETF 标准协议，用于自动化域名所有者从 CA 获取和续期域名验证证书的过程。默克尔树证书（MTC）是一种拟议的新证书格式，旨在通过让服务器提供轻量级证书以实现精简握手，从而使后量子认证在公共互联网上切实可行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.cloudflare.com/cloudflare-certificate-authority/">Building a certificate authority for the whole Internet | Cloudflare Blog</a></li>
<li><a href="https://www.sectigo.com/blog/what-are-merkle-tree-certificates-mtcs">What are Merkle Tree Certificates (MTCs)? | Sectigo® Official</a></li>
<li><a href="https://www.thesslstore.com/blog/how-to-become-a-certificate-authority/">How to Become a Certificate Authority ( Public vs Private)</a></li>

</ul>
</details>

**标签**: `#Cloudflare`, `#Certificate Authority`, `#ACME`, `#Post-Quantum`, `#Internet Security`

---

<a id="item-10"></a>
## [Kimi K3 通过 Baseten 接入 OpenAI Codex 企业通道](https://36kr.com/newsflashes/4005691489112198) ⭐️ 8.0/10

美国 AI 基础设施公司 Baseten 宣布，企业用户现在可以在 OpenAI 的编程工具 Codex 中使用月之暗面的 Kimi K3，相关调用费用直接计入企业已有的 OpenAI 采购承诺额度，无需新增供应商采购流程。这是中国开源模型首次进入 OpenAI 的企业付费结算体系。 这是企业 AI 采购方式的一次显著变化：中国开源权重模型如今可以通过企业已用于 OpenAI 的同一结算通道购买，降低了采用门槛，也可能预示着企业 AI 技术栈中跨厂商互操作性的增强。这或将影响企业评估和预算多家厂商模型的方式。 Kimi K3 是月之暗面的旗舰开源权重模型，采用 2.8 万亿参数的混合专家架构，每个 token 仅路由至 896 个专家中的 16 个，定位于复杂编程、长周期智能体工作流以及大型代码仓库导航。该集成通过 Baseten 的推理平台实现，而非 OpenAI 直接托管的部署，且公告未披露延迟、定价或数据处理条款等技术细节。

telegram · zaihuapd · 9月30日 11:23

**背景**: OpenAI 的 Codex 是一款 AI 编程助手，专为多智能体工作流设计，可并行运行多个智能体，并借助计算机和浏览器工具验证工作结果。Baseten 是一家成立于 2019 年的美国 AI 基础设施公司，提供无服务器推理平台，用于在生产环境中部署、管理和扩展模型。Kimi K3 由月之暗面于 2026 年 7 月 16 日发布，被称为迄今规模最大的开源权重模型。企业采购承诺额是企业与供应商预先谈定的支出额度，因此将第三方模型调用计入其中可避免新增供应商合同。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.baseten.co/">Inference Platform: Deploy AI models in production | Baseten</a></li>
<li><a href="https://openai.com/codex/">Codex | AI Coding Partner from OpenAI | OpenAI</a></li>
<li><a href="https://k3-kimi.com/">Kimi K 3 : 2.8T Open-Weight Model — Benchmarks, Pricing & Guides</a></li>

</ul>
</details>

**标签**: `#AI`, `#enterprise`, `#OpenAI`, `#Kimi`, `#model-integration`

---

<a id="item-11"></a>
## [Reddit 将停用 RSS 订阅与公开 API 访问，理由为 AI 机器人抓取](https://techcrunch.com/2026/09/30/reddit-is-killing-rss-feeds-ending-public-api-access-because-of-ai-bots/) ⭐️ 8.0/10

Reddit 宣布将于 2026 年 11 月 13 日停止 RSS 订阅支持，并将在 2027 年 3 月前关闭公开 API 访问，理由是 RSS 已成为大规模抓取和自动化滥用（尤其是 AI 机器人）的常见渠道。第三方应用和机器人开发者必须在 2027 年 1 月 12 日前完成注册，否则将被移除 API 访问权限，同时官方建议版主改用 Discord Relay。 这是一次重大的平台政策转变，直接切断了两个长期存在的开放访问渠道，将影响第三方应用、机器人、研究人员以及所有依赖 Reddit 数据的用户。这也反映出整个行业为对抗 AI 抓取而收紧访问权限的趋势，随着数据越来越多地被付费授权协议锁定，开放网络可能进一步碎片化。 RSS 订阅将于 2026 年 11 月 13 日停止，公开 API 访问将在 2027 年 3 月前结束，第三方开发者的注册截止日期为 2027 年 1 月 12 日。Reddit 建议版主使用 Discord Relay 替代基于 RSS 的社区更新渠道，未注册的应用和机器人将被移除 API 访问权限。

telegram · zaihuapd · 10月1日 00:27

**背景**: RSS 是一种标准化的网络订阅格式，允许用户和应用程序以机器可读的 XML 格式订阅网站更新，常用于新闻聚合器和播客应用。Reddit 的公开 API 长期允许第三方开发者基于平台上的帖子和评论构建客户端、机器人和研究工具。Reddit 目前约 10% 的收入来自与 Google 和 OpenAI 的数据授权协议（2027 年到期），因此关闭免费访问渠道与其数据变现战略一致。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/RSS_feed">RSS feed</a></li>
<li><a href="https://en.wikipedia.org/wiki/Reddit_Public_Access_Network">Reddit Public Access Network</a></li>
<li><a href="https://publicapis.io/reddit-api">Reddit API — API Key, Docs & Examples | PublicAPIs.io</a></li>

</ul>
</details>

**标签**: `#Reddit`, `#API`, `#RSS`, `#AI scraping`, `#platform policy`

---