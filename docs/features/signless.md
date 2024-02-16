---
title: Signless Transactions
sidebar_position: 7
---

One of the most frustrating aspects of blockchain technology is the need for users to manually sign transactions. When interacting with digital applications, users must sign transactions with their private keys in order to send commands, such as requesting funds or taking actions in a game. This tedious process significantly hinders the adoption of blockchain applications, as users tend to prefer less secure but more convenient web2 services.

To improve the user experience and make it more user-friendly, dApps developers can create temporary trusted in-app sessions. During these sessions, users are no longer required to sign each transaction individually. This trusted session generates a new temporary private/public key pair that is valid for a specific time window. This temporary account (subaccount) is then authorized to sign and send specific transactions on behalf of the player.

These sessions enable users to establish predefined rules for interacting with a dApp, providing the flexibility to use the dApp without having to authorize each transaction individually. This approach not only streamlines the dApp experience but also safeguards user assets, as users can specify the permissible actions for the dApp.
