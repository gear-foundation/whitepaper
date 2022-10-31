---
title: WebAssembly
sidebar_position: 6
---

WebAssembly (or WASM) is a standard developed by W3C Community Group, which defines a low-level binary code format for executable programs and can run as a standalone virtual machine.

WebAssembly executables are precompiled, which makes it possible to use a wide variety of programming languages to build and run applications. There are no preferences for languages and currently dozens of languages can compile to, or have their VM’s, in WASM. Moreover, WASM is hardware-independent and it can be compiled on any modern architectures, desktops and even mobile devices, albeit with some limitations.

WebAssembly’s main goal is to provide executable code in browsers with near native performance. Binary formats are used because they transmit faster as they’re smaller than typical text and native code formats. This means that programs can be transmitted, cashed and consumed separately as they’re split up into smaller parts and run independent parallel tasks. Code is also validated and executed in a memory-safe, sandboxed environment which prevents data corruption and security breaches.

## Wasm for blockchains

One of the keys to greater adoption for any blockchain network is maximizing scalability. This is because increased speed and transactional throughput will result in lower transaction costs.

WASM significantly increases the speed of transactions, which contributes to improving efficiency. On top of this, WASM supports smart contracts that are written in different languages, which means that anyone can take an existing program or write a new one in a convenient language and compile it for execution in the WebAssembly virtual machine. This significantly increases application inclusivity compared to solutions based on domain specific languages.

The key to realizing Polkadot’s vision of cross chain interconnection was found in WebAssembly: a generic and abstract machine specification that could mediate between blockchains with different runtimes (the chains’ application logic). Any **Gear Network** program (smart contract) is in WebAssembly format.

## Security considerations

WebAssembly itself does not provide ambient access to the computing environment in which code is executed. Any interaction with the environment, such as I/O, access to resources, or operating system calls, can only be performed by invoking functions provided by the WebAssembly implementation that's embedded into a host environment and imported into a WebAssembly module.

Such implementation defines how loading of modules is initiated, how imports are provided and how exports can be accessed. It takes responsibility for security policies suitable for a respective environment by controlling or limiting which functional capabilities it makes available for import.

Because WebAssembly is designed to be translated into machine code running directly on the host’s hardware, it is potentially vulnerable to side channel attacks on the hardware level. When this is a concern, an embedded Wasm implementation may have to put suitable mitigations into place to isolate WebAssembly computations.

Researchers have previously reported possible vulnerabilities related to threads with shared memory. **Gear** is not the subject to these concerns by-design. As a concurrent computing system, **Gear** uses message-passing communication (Actor model) instead of shared-memory communication model. This mitages such security concerns.
