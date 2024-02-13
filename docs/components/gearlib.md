---
title: Gear Library
sidebar_position: 2
---

The available custom developer-friendly library, empowering dApp developers to execute arbitrary logic programs, including unit and integration tests, using `std` functions. This library streamlines the implementation of asynchronous logic through Gear`s messaging paradigm.

### [gcore](https://docs.gear.rs/gcore/index.html)

Low-level core library designed for use in Gear programs. It comprises lower-level primitives and sys calls API specifically related to program execution flow, encompassing incoming message processing and synchronous message sending.

### [gstd](https://docs.gear.rs/gstd/index.html)

The `gstd` crate is a standard library essential for writing Gear programs, offering a comprehensive set of functions and methods required for custom logic programs.

In contrast to the low-level `gcore` crate, `gstd` presents pre-built modules for convenience, facilitating secure and accurate program implementation, typically recommended for most scenarios.

`gstd` supplies modules linked to program execution flow and fundamental messaging functions derived from `gcore`. It equips developers with numerous advanced tools, including modules for asynchronous messaging functions, encoding/decoding of arbitrary types, a module for common errors, and more.

### [gmeta](https://docs.gear.rs/gmeta/index.html)

This crate serves the purpose of providing metadata for Gear programs. Metadata functions to describe the interface of a Gear program, enabling users to interact with it through custom types on web application user interfaces. For instance, this interaction can occur via platforms like https://idea.gear-tech.io. Another application involves parsing metadata in JavaScript by leveraging the `gear-js` library to retrieve specific metadata details for custom UI integration.

### [gtest](https://docs.gear.rs/gtest/index.html)

`gtest` is a lightweight library offering a set of tools for testing Gear programs.

This library enables emulation of node and chain behaviors, allowing users to send messages to the program and retrieve the final result of message processing, alongside stylized log printing.

`gtest` proves highly beneficial for both unit and integration testing, serving as a valuable aid in debugging Gear program logic. No additional dependencies beyond the Rust compiler are necessary to run tests utilizing `gtest`. Its predictability and robustness make it an ideal choice for continuous integration.

### [gclient](https://docs.gear.rs/gclient/index.html)

`gclient` serves as a utility library specifically designed for crafting end-to-end tests for Gear programs, aiming to test these programs within an actual blockchain network environment.

Consider `gclient` as a companion to `gtest` when aiming to comprehensively cover program code with tests. While `gtest` excels in unit and integration testing, `gclient` proves more suitable for higher-level debugging purposes.

### [gear-js](https://github.com/gear-tech/gear-js)

The gear-js API encompasses a range of utilities, libraries, and tools facilitating interactions between JavaScript applications and programs operating within the Gear Networks. It serves as a foundation for constructing web-based user interfaces for dApps by enabling queries to a Gear node.