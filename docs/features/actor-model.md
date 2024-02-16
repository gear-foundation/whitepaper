---
title: The Actor Model & Microservices Architecture
sidebar_position: 2
---

Gear sets itself apart and paves the way for Web 2 and TradFi developers transitioning to blockchain technology. This is facilitated by its incorporation of principles from the microservice architecture and the Actor model.

Within the Gear Protocol, programs can be likened to “microservices” in a microservice architecture in that each program operates as an individual, self-contained entity, offering developers the ability to independently configure, develop, deploy, and potentially even scale each program independently. Importantly, these ‘microservices’, or Gear programs, are designed to operate concurrently.

Concurrent computing systems can be divided into two communication classes:

- Shared memory communication — when concurrent programs communicate via changing the content of shared memory locations.
- Message passing communication — implies concurrent programs communication via messages exchanging. Message-passing concurrency is easier to understand than shared-memory concurrency. It is usually considered a more robust form of concurrent programming.

Typically, message-passing communication has better performance characteristics than shared memory. The per-process memory overhead and task-switching overhead are lower in a message-passing system. There are several mathematical theories that describe rules for message-passing systems, including the **Actor model**, which Gear leverages in its architecture.

The Actor model characterizes 'actors' as the universal units of concurrent digital computation. In this model, each actor can make local decisions, create other actors, send messages, and dictate how to respond to the next received message.

Actors in a Gear network post a message that appears at the end of a queue, incurring a small fee to cover the program load and dispatch associated with the message. Validator nodes then dequeue these messages until a predetermined gas limit is reached. While traditional implementations of the Actor model don't guarantee message order, Gear ensures that the sequence of messages between two specific programs is maintained.

In traditional smart contract languages and frameworks, the absence of support for many common low-level constructs like asynchronous programming patterns often presents challenges for developers. While it is possible (with purpose-specific languages like Solidity) to achieve a comparable flow by adding many hand-made functions, this can result in a  complicated codebase that makes smart contract logic error-prone and difficult to debug. 

By using the Actor model, Gear allows the implementation of actor-based concurrency within program logic, which takes advantage of asynchronous programming constructs like Futures and async/await in Rust. Although asynchronous functions streamline concurrency management, they can not inherently prevent deadlocks or state corruption. To address this, Gear employs async functions that avoid calling functions that could block their thread, typically by using an await expression. Importantly, this model guarantees that only one task can access an actor's mutable state at a time, ensuring safe interactions across multiple tasks. This significantly simplifies development and testing, reducing the likelihood of errors during program  development, and enabling features that were previously unattainable on a blockchain. 
