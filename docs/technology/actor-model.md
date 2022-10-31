---
title: Actor model
sidebar_position: 4
---

One of the main challenges of concurrent systems is concurrency control. It defines the correct sequence of communications between different programs, and coordinates access to shared resources. Potential problems include race conditions, deadlocks, and resource starvation.

Concurrent computing systems can be divided into two communication classes:
- Shared memory communication — when concurrent programs communicate via changing the content of shared memory locations.
- Message passing communication — implies concurrent programs communication via messages exchanging. Message-passing concurrency is easier to understand than shared-memory concurrency. It is usually considered a more robust form of concurrent programming.

Typically, message passing concurrency has better performance characteristics than shared memory. The per-process memory overhead and task switching overhead is lower in a message passing system.

There are plenty of mathematical theories to understand message-passing systems, including the Actor model.

For inter-process communications, **Gear** uses the Actor model approach. The popularity of the Actor model has increased and it has been used in many new programming languages, often as a first-class language concept. The principles of the Actor model is that programs never share their state and just exchange messages between each other.

Actors post a message that appears at the end of the message queue. Some small fee is taken for putting messages in the queue, enough to cover program load and dispatch caused by the message. Messages are dequeued by validator nodes and this repeats until gas_limit is reached.

While in an ordinary Actor model, there is no guarantee on message ordering, **Gear** provides extra guarantees that the order of messages between two particular programs is preserved.

Using the Actor model approach provides a way to implement Actor-based concurrency inside program (smart-contract) logic. This can utilize various language constructs for asynchronous programming (for example, Futures and async/await in Rust).

Unlike classes, actors allow only one task to access their mutable state at a time, which makes it safe for code in multiple tasks to interact with the same instance of an actor.

Asynchronous functions significantly streamline concurrency management, but they do not handle the possibility of deadlocks or state corruption. To prevent deadlocks or state corruption, async functions should avoid calling functions that may block their thread. To achieve it, they use an await expression.

Currently, the lack of normal support of async/await patterns in the typical smart contract languages and frameworks brings a lot of problems for smart contract developers. Actually, achieving better control in a smart contract program flow is actually more or less possible by adding handmade functions (in Solidity smart contracts). But the problem with many functions in a contract is that one can easily get confused — which function can be called at which stage in the contract’s lifetime.

**Gear** natively provides arbitrary async/await syntax for any programs. It greatly simplifies development and testing and reduces the likelihood of errors in smart contract development. **Gear** API also allows synchronous messages if the logic of the program requires it.
