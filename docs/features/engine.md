---
title: Substrate-based Wasm Programs Engine
sidebar_position: 1
---

Gear, as a platform for deploying and operating smart contracts, utilizes Substrate — a robust blockchain framework developed by Parity Technologies — in order to provide developers and users on Gear Networks with the best foundational technology available. Substrate's functionalities cover a wide range of crucial aspects, including consensus, networking layers and a client update mechanism that removes the need for hard forks.

Gear is itself constructed as a custom Substrate runtime, building upon this foundation to meet the demanding needs of enterprise-level decentralized projects and introducing advanced native extensions to enhance and extend performance. Substrate was selected as the underlying framework for Gear Protocol for several reasons:

- Substrate allows Gear Protocol to provide developers with a cutting-edge Web3.0 technology stack, reducing barriers to entry for Web2 and TradFi developers while assisting them in integrating programs into their business processes.
- The robust security model allows new chains to be launched without the need to invest additionally in its development.
- Gear's core developers previously contributed to the development of the Substrate and the Dotsama ecosystem, and this intimate knowledge has guided Gear’s development.
- It  streamlines development in several areas, including unified Substrate wallets, Wasm runtime, and more.

## Wasm Virtual Machine

To foster widespread adoption and usability, a key focus has been placed on maximizing scalability for programs. To this end, Gear utilizes WebAssembly (Wasm), a binary instruction format for a stack-based virtual machine, to underpin its execution engine. Wasm is a low-level binary format for executable programs that is defined by the W3C Community Group. It aims to provide executable code with near-native speeds, using binary formats for faster transmission. These formats are smaller than typical text or native code formats, enabling programs to be transmitted, cached, and consumed in smaller parts for independent parallel tasks. The efficiency provided by Wasm directly influences transaction speed and throughput, which in turn, increases cost-efficiency for all ecosystem participants. 

Gear is focused on bridging the gap between the traditional finance and Web2 world and the new era of Web3.0. A defining feature of Wasm's capability is the WebAssembly Virtual Machine (WAVM), which takes advantage of precompiled Wasm executables to accommodate a vast range of programming languages. This enables developers to write or compile a program, or smart contract, in their preferred language for it to be compiled into Wasm then executed in the WAVM. This versatility promotes inclusivity in application development, removing barriers traditionally associated with platforms that require purpose-specific languages, like Ethereum’s Solidity.

Within the Gear ecosystem, a Rust standard library is currently provided for program development. However, as more libraries are created, the possibilities for developers deploying decentralized applications (dApps) on Gear Networks using different languages that can compile to Wasm will continue to grow. By facilitating the use of familiar languages and tried-and-tested design patterns from the Web2 world, Gear provides a smooth transition for developers and enterprises looking to explore the potential of decentralized infrastructure. And, with the Wasm's memory-safe, sandboxed execution environment, Wasm effectively prevents data corruption and security breaches — solidifying Gear's platform as a robust foundation for cutting-edge Web 3.0 applications.

## Interoperability

At the core of Gear Protocol's design is a strong emphasis on interoperability. Chains deployed using Gear, owing to their Substrate foundation, are natively compatible with other Substrate-base networks, streamlining their integration as parachains. However, Gear's interoperability extends beyond the Dotsama ecosystem. Gear networks are designed to interface with various blockchain networks, paving the way for a wide array of use cases. Through this interoperability, Gear Networks can process transactions, exchange data, and interact with different ecosystems, greatly expanding the potential for cross-chain collaborations and innovation.

Gear also provides an API for connecting to Gear nodes, interacting with the network, and making queries via JavaScript, and as this is built on the Substrate layer, it ensures consistency across all Substrate-based networks. The Gear API is capable of connecting to local or remote nodes, retrieving node info, getting program metadata, signing messages, uploading programs, sending messages or replies, calculating gas spent for message processing, reading program states and user mailboxes, subscribing to events, and more. The Gear API accommodates synchronous and asynchronous messages as required by a program's logic.

## Forkless Upgrades

Software systems frequently require updates for security patches or other code changes, and blockchains are no exception. With traditional blockchains, it is not possible to seamlessly roll out updates. Instead, it is often necessary to “fork” the chain, where the blockchain diverges into two different paths, leading to instability, community fragmentation, and in the case of a hard fork; weakening the overall security of the network.

With Gear, built on the Substrate blockchain development framework, such disruptive hard forks are unnecessary. Substrate enables the deployment of enhanced runtime capabilities, including breaking changes, without a hard fork. The definition of the runtime is itself an element in a Substrate chain's state, and network participants may update this value via a call that originates outside of the blockchain runtime (known as an “extrinsic"). This mechanism enhances the stability of the network and defers upgrades to a democratic, decentralized governance process.
