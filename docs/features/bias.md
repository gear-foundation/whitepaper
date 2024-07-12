---
title: Built-in-Actors
sidebar_position: 6
---

# Built-in-Actors

Built-in-Actors (BiAs) are specialized entities within the Gear runtime that execute specific business logic when programs communicate with them via messages. This feature addresses a key limitation: while users can directly interact with pallets through extrinsics like bond, nominate, vote, etc., programs within the Gear Protocol can only send messages, not extrinsics.

BiAs enhance the capabilities of programs (smart contracts) to the user level. Features typically implemented through pallets and accessible only via extrinsics are now available to programs. This includes using balances for governance voting, issuing vouchers, staking funds, enabling other actors to perform operations on behalf of the program (proxying), conducting complex computations, and more. This expansion significantly enhances the functionality and potential applications of blockchain programs.