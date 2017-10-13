const net = require('net')

const server = net.createServer((socket) => {
  socket.end('goodbye\n')
}).on('error', (err) => {
  throw err
})

// 使用随机的未被使用的端口
server.listen(() => {
  console.log(`opened server on ${JSON.stringify(server.address())}`)
})
