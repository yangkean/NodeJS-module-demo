const dgram = require('dgram')
const server = dgram.createSocket('udp4') // 创建一个 dgram.Socket 实例，这是一个封装了数据包函数功能的EventEmitter

server.on('error', () => {
  console.log(`服务器异常：\n${err.stack}`)
  server.close() // 关闭 socket 并停止监听
})

// 当有新的数据包被 socket 接收时，'message'事件会被触发
// msg 是接收到的消息，rinfo 是远程地址信息
server.on('message', (msg, rinfo) => {
  console.log(`服务器收到：${msg} 来自 ${rinfo.address}:${rinfo.port}`)
})

// socket 开始监听数据包时触发
server.on('listening', () => {
  const address = server.address() // 返回一个包含 socket 地址信息的对象

  console.log(`服务器监听 ${address.address}:${address.port}`)
})

// 指定 socket 监听的地址和端口
// 此处监听：0.0.0.0:41234
server.bind(41234)

// 发送信息到目标地址
server.send('hello', 41234)

