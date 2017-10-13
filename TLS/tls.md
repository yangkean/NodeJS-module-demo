# TLS | 传输层安全

> 根据 v8.6.0 编写

tls 模块是对传输层安全（TLS）及安全套接字层（SSL）协议的实现，建立在OpenSSL的基础上。

### tls.Server 类

tls.Server 类是 net.Server 的子类，它接收使用 TLS/SSL 的加密连接。
