const http = require('http')
const net = require('net')
const url = require('url')

// 创建 HTTP 代理服务器
const proxy = http.createServer((req, res) => {
  // 发送响应头
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.end('okay') // 发送响应
})
// 监听 HTTP 的 CONNECT 请求
proxy.on('connect', (req, cltSocket, head) => {
  // 连接到百度服务器
  const srvUrl = url.parse(`http://${req.url}`)
  // 使用 net.connect 初始化一个到百度服务器的 TCP 连接并返回一个新创建的 socket
  const srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
    // 在 socket 连接上发送 TCP 连接已成功建立的信息
    cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node.js-Proxy\r\n' +
                    '\r\n')
    // console.log(srvUrl)

    srvSocket.write(head)
    srvSocket.pipe(cltSocket).pipe(srvSocket) // 挖个坑：不理解为何要双向流。未完待续...
  })
})
// 监听升级协议请求
proxy.on('upgrade', (req, socket, head) => {
  socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
                'Upgrade: WebSocket\r\n' +
                'Connection: Upgrade\r\n' +
                '\r\n')
  // 这行也是...
  socket.pipe(socket)
})

// 代理服务器正在运行
proxy.listen(1337, '127.0.0.1', () => {
  // 发送一个请求到代理服务器
  const options = {
    port: 1337,
    hostname: '127.0.0.1',
    method: 'CONNECT',
    path: 'www.baidu.com:80'
  }

  // 升级协议请求
  const options2 = {
    port: 1337,
    hostname: '127.0.0.1',
    headers: {
      'Connection': 'Upgrade',
      'Upgrade':'websocket'
    }
  }

  const req = http.request(options)
  const req2 = http.request(options2)
  req.end()
  // req2.end()

  req.on('connect', (res, socket, head) => {
    console.log('已连接')

    // 通过 socket 发送请求
    socket.write('GET / HTTP/1.1\r\n' +
                 'Host: www.baidu.com:80\r\n' +
                 'Connection: close\r\n' +
                 '\r\n')
    socket.on('data', (chunk) => {
      // socket 被写入数据时执行
      console.log(chunk.toString())
    })
    socket.end('end', () => {
      proxy.close() // 停止服务端接收新的连接
    })
  })

  req2.on('upgrade', (res, socket, head) => {
    console.log('升级啦')
    socket.end()
    process.exit()
  })
})

