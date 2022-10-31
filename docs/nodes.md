---
title: Gear Nodes
sidebar_position: 5
---

**Gear** node provides runtime that helps smart contract developers in implementation and testing (personal node) as well as become a part of a **Gear Network** (collators and validators).

Anyone can compile a **Gear** node on their own or download the prebuilt binary (nightly build). From a functional standpoint it doesn't matter if it was downloaded or built manually.

Nodes can be built, installed and run under Linux, Mac and Windows operating systems.

### Personal node

Personal nodes means anyone’s device with **Gear’s** node up and running, connected either to the **Gear** test network, operated in a standalone dev net mode or as a part of a multi-node local testnet.
There are no specific hardware requirements for personal nodes other than having an SSD.

### Public nodes

Public nodes refer to devices that act as collators and validators in a **Gear** public network. The nodes must run on a server that has a public IP address. Hardware requirements is the subject of evaluation. Nodes participating in the public network must share their real-time data for health checks (continuous telemetry collection).

### Interaction with **Gear** nodes

**Gear** provides the API that enables connections to **Gear** nodes, interaction with the network and make queries via Javascript. The basic API is implemented on the Substrate layer and is the same for all substrate-based networks. It enables connection to a local or remote node, and gets node info. The main capabilities are - get the program’s metadata, sign messages, upload a program, send a message or a reply, get the amount of gas spent for message processing, read program’s state and the user’s mailbox, subscribe to events, get block data & timestamp and more.
