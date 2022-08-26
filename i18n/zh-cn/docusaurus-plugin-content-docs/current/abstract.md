---
hide_title: true
sidebar_position: 1
sidebar_label: '概述'
custom_edit_url: null
slug: /
---

<center><img src="./img/title-grey.png" /></center>

<p align="center">
<h1> Gear：下一代智能合约的愿景</h1>
</p>

<br />

<div style={{textAlign: 'center'}}>
Nikolay Volf, Andrei Panin
<br />
<b>版本 1.0</b> | 四月 2022
</div>

<br />
<br />
<br />

<div style={{textAlign: 'center'}}>
<h2>概述</h2>
</div>

区块链曾经被认为是一种晦涩复杂的技术，现在已经广为人知，并开始被大众使用。最终，大多数人与人之间的关系 (贸易、金融、法律、环境、娱乐等) 都将以区块链为技术基础。这种颠覆性的新技术的快速发展遭到质疑和抵制，但创新仍将继续向前，世界将被迫适应这种根本性创新带来的新现实。

然而，新技术的采用受到第一代区块链的技术限制，这些问题导致可扩展性差，交易成本高，缺乏网络间通信。

现代区块链提供了改进这些限制的解决方案。然而，**Gear Protocol**（通篇简称为“**Gear**”）提供的不仅仅是开发智能合约的最高效的接口，而且可以在去中心化网络上尽可能快速和廉价地运行它们。Gear 在底层使用 Actor 模型，通过设计提供了并行计算和异步消息的能力。将这种技术体系结构与 WASM 的使用相结合，可以让应用程序以接近原生的速度运行。

简而言之，相对于其他现代区块链和基于 Substrate 的平台在 WebAssembly 上运行 dApps，**Gear**具有显着优势：

1. 由于使用 Actor 模型进行用户和程序之间的消息通信，因此更加安全可靠
2. 由于消息处理的并行化，速度可以更快
3. 持久内存方式，方便开发
4. 更简单的智能合约开发，这要归功于自定义的 Substrate 运行时和 Rust 上的本地 std 库
5. 为大多数用例提供智能合约示例，加快上手速度。


本文中的**Gear 网络**被认为是使用**Gear Protocol**进行部署的所有网络。

本文档将主要针对对智能合约开发人员。它描述了**Gear**的技术、架构和组件，它解决了哪些问题，以及**Gear**与其他 dApp 解决方案有什么不同。
