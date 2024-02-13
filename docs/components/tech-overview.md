---
title: Technology Overview
sidebar_position: 1
---

As any blockchain system, a **Gear Network** maintains a distributed state. Runtime code compiled to Wasm becomes a part of the blockchain’s storage state. Storage state includes the following components:
- Programs and memory (includes program’s code and its private memory)
- Message queue (global message queue of the network)
- Accounts (network accounts and their balances)

### Programs & Memory

Programs (smart contracts) are first-class citizens in a Gear Network’s instance state.

Program code is stored as an immutable Wasm blob. Each program has a fixed amount of individual memory space which is reserved for a program during its initialization and persists between message-handling (so-called static area). A Gear Network instance holds individual memory space per program and guarantees its persistence.

A program can read and write only within its own exclusively allocated memory space and has no access to the memory space of other programs.

Programs can allocate more memory from the memory pool provided by a Gear Network instance. Each allocated memory block is stored separately on the distributed database backend, but at the run time when a program accesses its memory, a Gear node constructs continuous runtime memory and allows programs to run on it without reloads. A Gear node uses lazy load technique so pages are brought into memory if the executing process demands them instead of loading all pages immediately. A program's state and its memory are saved each time after the program normally completes execution.

Utilizing a persistent memory is critical to ensuring the success of data-intensive dApps. The traditional approach of loading the program each time it needs to be addressed seems not optimized here. Decentralized applications with many-to-many relationships benefit from a persistent memory approach.

### Message Queue

Messages are the main interface for communications between actors (users and programs). Every Gear program contains code for processing an incoming message. During message processing, programs can send messages to other programs and users including replying to the initial message.

A Gear instance (node) holds a global message queue. Using a Gear node, users can send transactions with one or several messages to a particular program(s). This fills up the message queue. During block construction, messages are dequeued and routed to the particular program.

### Accounts & Balances

For a public network, in order to be protected against DoS attacks a gas/fee for transaction processing is required. A Gear Network provides a balance module that allows developers to store user and program balances and pay a transaction fee.

Regular balance transfer is performed inside the Substrate Balances module. Balance is transferred between users, program and validator accounts.

In addition to regular balance transfer, a Gear Network defines gas balance transfer that is used to reward validator nodes for their work and allows the network to be protected from DoS attacks.

In general, a particular Gear Network instance can be defined as both permissioned and permissionless, public blockchain. In the permissioned scenario, no balance module is required.

### State Transition

Each system follows the rules according to which the state of the system evolves. As the network processes new input data, the state is advanced according to state transition rules. This input data is packed in atomic pieces of information called transactions.

Gear nodes maintain and synchronize a transaction pool which contains all those new transactions. When any node (validator or not) receives a transaction, the node propagates the transaction to all connected nodes. For advanced reading how the transaction pool operates, refer to [Substrate Documentation](https://docs.substrate.io/v3/concepts/tx-pool/).