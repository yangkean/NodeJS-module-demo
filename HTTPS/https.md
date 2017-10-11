# HTTPS

> 根据 v8.6.0 编写

HTTPS 是 HTTP 基于 TLS/SSL 的版本。使用方法大部分与 HTTP 模块类似。

### https.Agent 类

类似 http.Agent 类

### https.Server 类

类似 http.Server

### https.createServer([options][, requestListener])

* options \<Object\> 接受来自 tls.createServer() 和 tls.createSecureContext() 的 options。
* requestListener \<Function\> 添加到 request 事件的监听器。

创建 HTTP 基于 TLS/SSL 服务器。