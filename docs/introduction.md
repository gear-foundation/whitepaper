---
title: Introduction
sidebar_position: 2
---

## World Wide Web

Web1 was a read-only content delivery network. The user couldn’t interact with the page content as it was limited to what the content owner uploaded to the website.

<img src="./img/web1.png" width="300" />

Web2 offers read and write capabilities, but has quickly become dominated by technology giants and social media. The Web becomes interactive, but the content is still stored centralized.

<img src="./img/web2.png" width="300" />

Data leaks, account restrictions and censorship has caused a quick spike in adoption of the concept of trustless decentralized control over content and assets on the web.

Today, blockchain technology brings trustless decentralized control over users' content and assets. Blockchains store a history of transactions between all parties in the network so everyone has access and is able to verify it. Distributed ledgers make it resource-prohibitive to forge or delete data without the consent of the data owner.

<img src="./img/web3.png" width="300" />

Blockchain technology launched a rapid transition from centralized, server-based internet (Web2) to a decentralized, distributed one - **Web3**. Its distinctive features are: no single point of failure (the network can still function even if a large proportion of participants are attacked/taken out), censorship resistance, anyone in the network has the possibility to use the service (permissionless).

**Web3** introduces new types of decentralized applications (dApps) and assets such as: decentralized finances (DeFi), decentralized currency exchanges (DEX), decentralized marketplaces and gaming platforms, NFTs, Social Tokens and more.

This generates growth of engagement and adoption in the **Web3** ecosystem from developers, entrepreneurs and investors. Today **Web3** developers are at an all-time high demand and their activity is growing faster than ever.

<img src="./img/web3-devs.png" />

Even though the mass adoption of **Web3** is only just getting started, venture capital demonstrates a rapid investment growth toward **Web3** projects.

<img src="./img/crypto-invest.png" />

Gear’s mission is to become an essential platform for building the **Web3** ecosystem.

## First blockchains

At their core, blockchains store a history of transactions between parties in a form that can be accessible by anybody. The key strengths of the blockchain in general are:

- _Decentralized_ - central authority maintaining the ledger of transactions.
- _Immutable_ — once the transaction is committed, it cannot be changed or altered.
- _Open_ - everyone is able to view a transaction.

The very first mass-adopted blockchain, Bitcoin, has a single purpose - to provide a decentralized network that allows people to transfer and exchange value.

Ethereum was a breakthrough technology built after Bitcoin. Its main intention is to provide a Layer-1 platform that allows developers to create decentralized applications. This breakthrough was done thanks to the introduction of the Smart Contract, which allowed not only to transfer or store value, but also to generate applications and add logic conditions. The constant rising in transaction costs gave birth to several blockchains with similar capabilities, but different applications.
Some of the issues with the second generation of blockchain networks:

- Lack of scalability, low transaction speed, high transaction costs
- Domain-specific development language (high barrier to entry)
- Complex and inefficient native consensus protocols
- Absence of intercommunication tools

Moreover, the proof-of-work consensus mechanism, that Bitcoin and a lot of these Layer-1 networks use, consumes a lot of energy to produce transaction blocks which automatically replicate on the network and computational transaction costs. This mechanism is widely criticized for its excess carbon footprint.

## Smart contracts

In order to build applications on a blockchain, the concept of smart contracts was adopted.

Smart contract is a transaction protocol with deterministic execution, thus built-in security. Smart Contract in Web3 is an equivalent of a microservice in Web2 which is stored on the blockchain network and is an essential building block of a decentralized application.

Blockchain guarantees immutability and, therefore, stability and reliability of a service provided with a smart contract. Often blockchain applications are composed of one or more smart contracts that complement each other.

Nowadays, we can find numerous languages and frameworks that allow for smart contract development, each having its own drawbacks.

## Modern blockchains

Modern blockchains offer significant improvements such as - infinitely more energy efficient proof-of-stake consensus mechanisms; community-based authority with DAOs;
fast and cost-effective smart contract engines due to the introduction of WebAssembly. WebAssembly is also a developer-friendly virtual machine, as many general-purpose programming languages compile on it.

Still a lack of interoperability with other networks remains room for improvements.

## Polkadot

To resolve the interoperability issue, Parity technologies focused on creating a Layer-0 technology that connects blockchains together into one big network - Polkadot.

Polkadot provides a system in which blockchains coexist and complement each other.
Different parallel blockchains (parachains) are built on Substrate as well as Polkadot and connected to the relay chain and have a native connection.This allows for different nodes to run different application logic, keeping each chain on its own platform. All parachains are interconnected, creating a massive network of multifunctional blockchain services. Parachains compose the Layer-1 of the Polkadot ecosystem, the main difference in connection with other standalone Layer-1 blockchain networks like Ethereum, Bitcoin, Solana, etc. is that parachains are connected through Substrate Cumulus library and standalone blockchains through bridges.

Polkadot and its testnet Kusama are designed to be a fully extensible and scalable blockchain development, deployment and interaction test bed. It is built to be a largely future-proof harness able to assimilate new blockchain technology as it becomes available without over-complicated decentralized coordination or hard forks.

As a smart contract platform built on Substrate, Gear is aiming to become a Polkadot and Kusama Layer-1 parachain. Gear enables developers to deploy their dApps in mere minutes in the easiest and most efficient way possible. This will enable developers to build dApps on both Polkadot and Kusama to take advantage of the benefits of each unique network without the traditional significant time and financial expense associated with doing so.

Additional thoughts about Gear's role as a parachain of Polkadot/Kusama are discussed further after covering the technical aspects.

## Substrate

The Substrate blockchain framework is an important component of the Polkadot network. It enables teams that want to create a new blockchain to not waste efforts on network implementation and consensus code by having to write it from scratch.

Substrate covers many aspects including - consensus mechanism (block finalization, validator voting system, fault-tolerance), networking layer (p2p connection, message sending and data replication functionality), full-node templates, database abstraction, client update mechanism through WASM (no hard forks) and other important modules.

**Gear** uses the Substrate framework under the hood. This helps to cover the most desired requirements for enterprise-ready decentralized projects - fault tolerance, replication, tokenization, immutability, data security and production-ready cross-platform persistent database.

**Gear** itself is implemented as a custom Substrate runtime introducing advanced native extensions (via host functions) for performance. Building a blockchain with Substrate allows Gear to be deployed as a parachain on any compatible relay chain such as Polkadot and Kusama.
