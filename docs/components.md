---
title: Gear components
sidebar_position: 4
sidebar_label: 'Gear components'
custom_edit_url: null
---

Messages are the main interface for communications between actors (users and programs). Every **Gear** program contains code for processing an incoming message. During message processing, programs can send messages to other programs and users including replying to the initial message.

**Gear** natively provides custom `std` functions including arbitrary async/await syntax for any programs on Rust. Also everything non-std is supported as well as unit/integration tests.

### `gcore`

Low-level core library for **Gear** smart contracts. 
Includes sys calls API related to the program execution flow - incoming message processing and synchronous message sending.

### `gstd`

Standard library for **Gear** smart contracts. Provides necessary and sufficient functions and methods for your smart-contracts.

While `gcore` enables to achieve the more low-level smart-contract implementation, ‘gstd’ provides ready-to-use modules for convenience and the implementation of smart-contracts in the most secure and accurate way, which is recommended in most cases.

`gstd` provides modules with sys calls related to the program execution flow and basic messaging functions wrapped from `gcore`, modules for **Gear** contracts asynchronous logiс - async messaging functions such as send a message and wait for reply, interrupt a program execution waiting for a reply on a previous message. It also provides common errors module, Gear's implementation of panic for memory allocation and other common Rust panic.

### `gtest`

**Gear** lib `gtest` is the recommended option for the smart contracts logic testing. Tests can be organized in two main categories: unit tests and integration tests.

`gtest` allows to emulate node's and chain behavior, send a message to the program and get the final result of the message processing plus print styled logs.
