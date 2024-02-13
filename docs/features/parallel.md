---
title: Parallel Computations
sidebar_position: 3
---

Individual isolated memory space per program allows parallelization of message processing on a Gear node, allowing for greatly increased scalability on the respective network and providing the ability for developers to introduce features to their dApps that were not otherwise viable on a serially-computed smart contract platform like Ethereum.

The number of parallel processing streams on a Gear node is equal to the number of CPU cores allocated, and each stream processes messages intended for a defined set of programs. Each stream processes messages sent from other programs or from outside influences — for instance, user transactions. In each cycle, a targeted program can have more than one message and one stream processing messages for multiple programs. The result of message processing is a set of new messages from each stream that is added to the message queue, then the cycle repeats itself. The resultant messages generated during message processing are usually sent to other addresses (typically returning to the origin or to the next program).

When a Gear validator node comes to produce a new block, some (or all) transactions from the transaction pool are merged into a block. In a parallel model, several transactions from several streams can appear in the same block. Transactions that were not taken in the last block remain in the pool until the next block is produced.

One potential complexity developers must take care to note is that of determinism, which arises from the use of parallel processing since different nodes have a different number of CPU cores. Over time, additional design patterns and algorithms to overcome this may be detailed by the Gear community in documentation.
