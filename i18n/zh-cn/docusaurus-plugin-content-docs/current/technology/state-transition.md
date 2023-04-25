---
title: 状态转换
sidebar_position: 3
sidebar_label: '状态转换'
custom_edit_url: null
---

Each system follows the rules according to which the state of the system evolves. As the network processes new input data, the state is advanced according to state transition rules. This input data is packed in atomic pieces of information called transactions.

**Gear** nodes maintain and synchronize a transaction pool which contains all those new transactions. When any node (validator or not) receives a transaction, the node propagates the transaction to all connected nodes. For advanced reading how the transaction pool operates, refer to [Substrate Documentation](https://docs.substrate.io/v3/concepts/tx-pool/).

When a **Gear** validator node comes to produce a new block, some (or all) transactions from the pool are merged into a block and the network undergoes a state transition via this block. Transactions that were not taken in the last block remain in the pool until the next block is produced.

A **Gear Network** supports the following types of transactions:
- Create a program (user uploads new program(s) - smart-contracts)
- Send a message (program or user fills the message queue)
- Dequeue messages (validators (block producers) dequeue multiple messages, running associated programs)
- Balance transfers (**Gear** engine performs user-program-validator balance transfers)

Message processing is performed in the reserved space of the block construction/import time. It is guaranteed that message processing will be executed in every block, and at least at some particular rate determined by current instance settings.

<center><img src="../img/message.jpg" width="600" /></center>

## Create a program

Designated authorities (or any user for public implementation) of a **Gear Network** can propose a new program to be saved to the state. For a public network, a balance associated with a program is also provided. This new balance then constitutes the initial balance (Existential Deposit).

## Send a message

End-users interact with programs via sending messages to a **Gear Network**. Messages sent to a **Gear Network** fill up the global message queue. This queue can be viewed as a runtime-driven transaction queue but with the guarantee that any message accepted into it will eventually be processed. Putting a message in the queue is not free and therefore a message is guaranteed to be dispatched.

Programs also exchange messages with each other. The result of the received message can be another message (reply) addressed to another program or a user or a designated behavior to be used for the next message it receives. A program can also send a message the execution result of which will be a creation of another program.

## Dequeue messages

Validators can choose which messages to dequeue when it's their turn to produce the next block. It eliminates the need of each particular validator to maintain the full memory state. Dequeuing occurs only at the end of each block. During dequeuing, new messages can be generated. They can also be processed in this phase, but also can stay in the queue for the next block (and another validator).

## Balance transfers

Regular balance transfers are performed inside the Substrate Balances module. More details on this will be provided later.
