# HTTP（部分API）

支持 HTTP 服务器和客户端。

### http.Agent 类

负责为 HTTP 客户端管理连接的持续与复用。 它为一个给定的主机与端口维护着一个等待请求的队列，且为每个请求重复使用一个单一的 socket 连接直到队列为空，此时 socket 会被销毁或被放入一个连接池中，在连接池中等待被有着相同主机与端口的请求再次使用。

#### new Agent([options])

* options \<Object\> 代理的配置选项。有以下字段：
  * keepAlive \<boolean\> 保持 socket 可用即使没有请求，以便它们可被将来的请求使用而无需重新建立一个 TCP 连接。默认为 false。
  * keepAliveMsecs \<number\> 当使用了 keepAlive 选项时，该选项指定 TCP Keep-Alive 数据包的 初始延迟。 当 keepAlive 选项为 false 或 undefined 时，该选项无效。 默认为 1000。
  * maxSockets \<number\> 每个主机允许的最大 socket 数量。 默认为 Infinity。
  * maxFreeSockets \<number\> 在空闲状态下允许打开的最大 socket 数量。 仅当 keepAlive 为 true 时才有效。 默认为 256。

创建自定义的 http.Agent 实例。

#### agent.createConnection(options[, callback])

创建一个用于 HTTP 请求的 socket 或流。

#### agent.destroy()

销毁当前正被代理（agent）使用的任何 socket。

#### agent.maxFreeSockets

* \<number\>

默认为 256。 对于已启用 keepAlive 的代理，该属性可设置要保留的空闲 socket 的最大数量。

#### agent.maxSockets

* \<number\>

默认为不限制。 该属性可设置代理为每个域（origin）打开的并发 socket 的最大数量。。

### http.ClientRequest 类

该对象在 http.request() 内部被创建并返回。 它表示着一个正在处理的请求，其请求头已进入队列。 请求头仍可使用 setHeader(name, value)、getHeader(name) 和 removeHeader(name) API 进行修改。 实际的请求头会与第一个数据块一起发送或当调用 request.end() 时发送。

这个请求实现了可写流接口。 它是一个包含以下事件的 EventEmitter：

* 'abort' 事件，当请求已被客户端终止时触发
* 'connect' 事件，每当服务器响应 CONNECT 请求时触发。 如果该事件未被监听，则接收 CONNECT 方法（method）的客户端会关闭连接。监听时接收三个参数：
  * response \<http.IncomingMessage\>
  * socket \<net.Socket\>
  * head \<Buffer\>
* 'continue' 事件，当服务器发送了一个 100 Continue 的 HTTP 响应时触发
* 'response' 事件，当请求的响应被接收到时触发。该事件只触发一次。监听时接收一个参数：
  * response \<http.IncomingMessage\>
* 'socket' 事件，socket 被分配到请求后触发。监听时接收一个参数：
  * socket \<net.Socket\>
* 'timeout' 事件，socket 连接后请求超时时触发
* 'upgrade' 事件，每当服务器响应 upgrade 请求时触发。如果该事件未被监听，则接收到 upgrade 头的客户端会关闭连接。监听时接收三个参数：
  * response \<http.IncomingMessage\>
  * socket \<net.Socket\>
  * head \<Buffer\>

#### request.abort()

终止请求。调用该方法将使响应中剩余的数据被丢弃且 socket 被销毁。

#### request.connection / request.socket

访问底层 socket。

#### request.end([data[, encoding]][, callback])

* data \<string\> | \<Buffer\>
* encoding \<string\>
* callback \<Function\>

完成（finish）发送请求。 如果部分请求主体还未被发送，则会刷新它们到流中。 如果请求是分块的，则会发送终止字符 '0\r\n\r\n'。使用 http.request() 必须总是调用 request.end() 来表明请求的结束，即使没有数据被写入请求主体。

如果指定了 data，则相当于调用 request.write(data, encoding) 之后再调用 request.end(callback)。

#### request.getHeader(name)

* name \<string\>
* Returns: \<string\>

读取请求上的一个请求头，name 不区分大小写。

#### request.removeHeader(name)

* name \<string\>

移除已经定义在 headers 对象中的一个请求头。

#### request.setHeader(name, value)

* name \<string\>
* value \<string\> | <string[]>

为 headers 对象设置一个请求头。

#### request.setTimeout(timeout[, callback])

* timeout \<number\> 请求被认为是超时的毫秒数。
* callback \<Function\> 可选的函数，当超时发生时被调用。等同于绑定到 timeout 事件。

一旦 socket 被分配给请求且已连接时被调用。返回 request。

#### request.write(chunk[, encoding][, callback])

* chunk \<string\> | \<Buffer\>
* encoding \<string\>
* callback \<Function\>

发送请求主体的一个数据块。 通过多次调用该方法，一个请求主体可被发送到一个服务器。

### http.Server 类

用于创建服务器。

#### 'request' 事件

* request \<http.IncomingMessage\>
* response \<http.ServerResponse\>

每次接收到一个请求时触发。

#### server.listen([port][, hostname][, backlog][, callback])

* port \<number\>
* hostname \<string\>
* backlog \<number\> 等待连接的队列的最大长度
* callback \<Function\>

开始在指定的 port 和 hostname 上接受连接。

### http.ServerResponse 类

该对象在 HTTP 服务器内部被创建。 它作为第二个参数被传入 'request' 事件。

#### response.connection / response.socket

引用底层 socket。

#### response.end([data][, encoding][, callback])

* data \<string\> | \<Buffer\>
* encoding \<string\>
* callback \<Function\>

该方法会通知服务器，所有响应头和响应主体都已被发送，即服务器将其视为已完成。 每次响应都必须调用 response.end() 方法。

如果指定了 data，则相当于调用 response.write(data, encoding) 之后再调用 response.end(callback)。

#### response.getHeader(name)

读取一个已入队列但尚未发送到客户端的响应头。 注意，名称不区分大小写。

#### response.getHeaderNames()

返回一个包含当前响应唯一名称的 http 头信息名称数组. 名称均为小写。

#### response.getHeaders()

返回当前响应头对象的浅拷贝。 

#### response.hasHeader(name)

如果响应头当前有设置 name 头部，返回 true。请注意，名称匹配不区分大小写。

#### response.headersSent

返回一个布尔值（只读）。 如果响应头已被发送则为 true，否则为 false。

#### response.removeHeader(name)

从隐式发送的队列中移除一个响应头。

#### response.setHeader(name, value)

为一个隐式的响应头设置值。 如果该响应头已存在，则值会被覆盖。 如果要发送多个名称相同的响应头，则使用字符串数组。

response.setHeader() 设置的响应头会与 response.writeHead() 设置的响应头合并，且 response.writeHead() 的优先。

#### response.statusCode

当使用隐式的响应头时（没有显式地调用 response.writeHead()），该属性控制响应头刷新时将被发送到客户端的状态码。

响应头被发送到客户端后，该属性表示被发出的状态码。

#### response.statusMessage

当使用隐式的响应头时（没有显式地调用 response.writeHead()），该属性控制响应头刷新时将被发送到客户端的状态信息。

响应头被发送到客户端后，该属性表示被发出的状态信息。

#### response.write(chunk[, encoding][, callback])

* chunk \<string\> | \<Buffer\>
* encoding \<string\>
* callback \<Function\>

发送响应主体的一个数据块。

#### response.writeHead(statusCode[, statusMessage][, headers])

* statusCode \<number\>
* statusMessage \<string\>
* headers \<Object\>

发送一个响应头给请求。在 response.end() 被调用之前调用。

### http.IncomingMessage 类

IncomingMessage 对象由 http.Server 或 http.ClientRequest 创建，并作为第一个参数分别递给 'request' 和 'response' 事件。 它可以用来访问响应状态、消息头、以及数据。

#### message.headers

* \<Object\>

请求头或响应头的对象。

头信息的名称与值的键值对。 头信息的名称为小写。

#### message.httpVersion

* \<string\>

在服务器请求中，该属性返回客户端发送的 HTTP 版本。 在客户端响应中，该属性返回连接到的服务器的 HTTP 版本。

#### message.method

* \<string\>

返回一个字符串，表示请求的方法。 该属性只读。

#### message.statusCode

* \<number\>

返回一个三位数的 HTTP 响应状态码。

#### message.statusMessage

* \<string\>

返回 HTTP 响应状态消息。

#### message.url

* \<string\>

返回请求的 URL 字符串。 仅包含实际 HTTP 请求中的 URL。

### http.createServer([requestListener])

* requestListener \<Function\>
* Returns: \<http.Server\>

返回一个新建的 http.Server 实例。

requestListener 是一个函数，会被自动添加到 'request' 事件，即接收 request 和 response 参数。

### http.get(options[, callback])

发起 GET 请求的便捷方法，接收和 http.request() 一样的 options，自动设置请求方法为 GET 且自动调用 req.end()。callback 被调用时传入 res。

### http.request(options[, callback])

options 见 [options](http://nodejs.cn/api/http.html#http_http_request_options_callback)。

该函数允许显式地发出请求。http.request() 返回一个 http.ClientRequest 类的实例。
