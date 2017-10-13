# Net | 网络

> 根据 v8.6.0 编写

提供异步网络 API 用于创建基于流的 TCP 或 IPC 服务器和客户端。

### net.Server 类

#### new net.Server([options][, connectionListener]) / net.createServer([options][, connectionListener])

用于创建 TCP 或 IPC 服务器。返回的 net.Server 是一个 EventEmitter。

#### server.address()

如果在IP socket上监听,则返回绑定的ip地址, 地址族和操作系统报告的服务端口。