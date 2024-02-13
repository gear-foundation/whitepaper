---
title: Gear Node
sidebar_position: 3
---

Gear node provides runtime that helps developers in implementation and testing their programs (personal node mode) as well as become a part of a Gear Network (validator’s public node).

To run a Gear node, anyone can compile it on their own or download the prebuilt binary (nightly build) which is the same from a functional standpoint.

### Personal Node

Personal nodes means anyone’s device with Gear’s node up and running, connected either to the Gear test network, operated in a standalone dev net mode or as a part of a multi-node local testnet. There are no specific hardware requirements for personal nodes other than having an SSD.

### Public Nodes

Public nodes refer to devices that act as validators in a Gear public network. The nodes must run on a server that has a public IP address. Hardware requirements is the subject of evaluation. Nodes participating in the public network must share their real-time data for health checks (continuous telemetry collection).

### Interaction with Gear Nodes

Gear provides the API that enables connections to Gear nodes, interaction with the network and make queries via Javascript. The basic API is implemented on the Substrate layer and is the same for all substrate-based networks. It enables connection to a local or remote node, and gets node info. The main capabilities are - get the program’s metadata, sign messages, upload a program, send a message or a reply, get the amount of gas spent for message processing, read program’s state and the user’s mailbox, subscribe to events, get block data & timestamp and more.