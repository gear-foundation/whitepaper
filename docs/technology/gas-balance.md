---
title: Balance transfers and gas economy
sidebar_position: 7
sidebar_label: 'Balance transfers and gas economy'
---

Regular balance transfer is performed inside the Substrate Balances module. Balance is transferred between user, program and validator accounts.

In addition to regular balance transfer, the **Gear** network defines a gas balance transfer that is used to reward validator nodes for their work and allows the network to be protected from DoS attacks.

All interactions inside the **Gear** network are done via messaging. Messages on **Gear** have common interface with the following parameters:
- _source account_
- _target account_
- _payload_
- _gas_limit_
- _value_

There are five types of messages used in Gear’s network:
1. A special message from the user to upload a new program to the network. Payload must contain a Wasm file of the program itself. Target account must not be specified - it will be created as a part of Post message processing.
2. From user To program
3. From program To program
4. From program To user
5. From user To user

**Gear** nodes charge gas fees during message processing. 

The last parameter of the send message function is a _value_ to be transferred to a target account. In the special message of the initial program upload (#1), _value_ will be transferred to a balance of the newly created account for the program.

Before the message processing step, some funds are reserved on the message initiator's account for paying a small processing fee. This is the standard inclusion fee for the Substrate framework and its size depends on different factors. Refer to [Substrate Documentation](https://docs.substrate.io/v3/runtime/weights-and-fees/) for details.

The message processing consists of two steps:
1. Post message
2. Dispatch message
![img alt](./img/balance-transfers.jpg)

### Post message

The **Gear** network tries to post a message into the message queue transaction pool. To do this, the local validator node verifies that the message initiator account has enough balance to cover sending of _value_ and _gas_limit_.

For an Upload program message type (#1), validators verify that the message's _gas_limit_ does not exceed the gas limit per block.

For messages between actors (#2-5, From - To types), the validators verify that the destination program is initialized (for messages addressed to a program) and that the message's _gas_limit_ does not exceed the gas limit per block.

**Gear** introduces a _gas_limit_ per block in order to ensure the block production/validation time doesn't stretch out indefinitely. Therefore, if a message (of any type) declares the _gas_limit_ greater than that of an entire block, it won't be allowed in the queue.

After verification, if everything is ok, a validator with block producer role posts the transaction into the block, transfers _value_ to the target account, transfers a small processing fee to the validator account and reserves a fee equal to _gas_limit_ on a message initiator account (User's account).

### Dispatch message

A message is dispatched by the network in the following way:

When uploading a program, the user specifies _gas_limit_ and optionally _value_ to be transferred to the program account. _gas_limit_ serves as a maximum amount of gas to be spent on program initialization. For messages sent from programs, _gas_limit_ is calculated automatically.

When a program is being initialized by a **Gear** node it consumes gas for both memory page allocation and per CPU instructions. It increments the internal counter - _gas_spent_.

**Gear** nodes check that each increment of _gas_spent_ value is lower than _gas_limit_ that’s specified in the initialization message. If it is more, then it stops program execution. This way _gas_limit_ serves as a safeguard for user balance so no program will consume more than the user expects.

After the program has been initialized, _gas_spent_ is charged against the user account towards the validator’s account. The difference between _gas_limit_ and _gas_spent_ is gas_left and its _value_ is unreserved on the message initiator account.

Gas fee is linear - 64000 gas per allocated memory page of size 64KB and 1000 gas per instrumented Wasm instruction.

For standard messages where the target is a program, all of the above gas consumption rules apply, as well as additional memory rent fees that are charged via an incrementing _gas_spent_ value. This memory rent fee is similar to a memory allocation fee, but the price is lower than the one for initial allocation - 1000 gas per already allocated page. Memory rent is charged because each node has to load/save program memory from/to network state.

Messages sent to a user appear in the user’s mailbox. Keeping a message in the mailbox costs a fee. In order for the message to remain in the mailbox, the initiator of the message must specify the sufficient amount of _gas_limit_, some amount of which will be consumed each block.

The message remains in the mailbox until the _value_ is claimed or message replied by the user or until the _gas_limit_ specified for the initiator’s message runs out. Once _gas_limit_ has exhausted, the message is removed from the mailbox.