# metaplug

<img src="./plug.png" alt="plug" width="200"/>

#### a pluggable operating system for metanet


### What is this?

Metaplug provides a pluggable operating environment to interact with your metanet file system. This can be used for:
- *DESIGN*: experiment with metanet in various operating environments, in real time.
- *PUBLISH*: define fully replicable bitcoin based apps.

### Why?
In the future it may make sense for bitcoin nodes (miners) to host applications, and become providers for general compute, since they will already be storing all the data. In this scenario, developers may want a convienient way to clearly define how their application logic interacts with the underlying data, in a easily replicatable way. 

### How?
Bitplug relies on [Bitwork](https://www.bitwork.network/#/) to listen and process data from Bitcoin's P2P network. Application logic is packaged as a container and can mount various bitcoin based data structures (such as [Bitcom](https://bitcom.bitdb.network/#/) namespaces) to generate applications. These can be easily defined and distributed through Kubernetes chart definitions, which are replicatable across cloud environements, or even on premise hardware. 






