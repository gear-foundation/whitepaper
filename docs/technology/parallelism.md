---
title: Memory parallelism
sidebar_position: 5
---

Individual isolated memory space per program allows parallelization of message processing on a **Gear** node. The number of parallel processing streams equals the number of CPU cores. Each stream processes messages intended for a defined set of programs. It relates to messages sent from other programs or from outside influences, for instance, user’s transactions.

The **Gear** engine uses a runtime-defined number of streams equal to the number of CPU cores on a typical validator machine. This divides the total amount of targeted programs to a number of streams which creates a message pool for each stream.

Programs are distributed to separate streams and each message appears in a stream where its targeted program is defined. So, all messages addressed to a particular program appear in a single processing stream.

In each cycle, a targeted program can have more than one message and one stream processing messages for multiple programs. The result of message processing is a set of new messages from each stream that is added to the message queue, then the cycle repeats itself. The resultant messages generated during message processing are usually sent to other addresses (typically returning to the origin or to the next program).

When a **Gear** validator node comes to produce a new block, some (or all) transactions from the transaction pool are merged into a block. In a parallel model, several transactions from several streams can appear in the same block. Transactions that were not taken in the last block remain in the pool until the next block is produced.

Potential complexity of parallel processing might be related with determinism, since different nodes have a different number of CPU cores. It will be overcomed via the introduction of the special cutting edge algorithms.
