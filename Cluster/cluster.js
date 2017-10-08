// 创建共享服务器端口的子进程

const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

if(cluster.isMaster) { // 当前进程为主进程时，返回 true
  console.log(`主进程 ${process.pid} 正在运行`)

  // 创建工作进程
  for(let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    // 任何一个工作进程关闭的时候触发
    console.log(`工作进程 ${worker.process.pid} 已退出`)
  })
} else {
  // 工作进程共享一个 HTTP 服务器
  http.createServer((req, res) => {
    res.writeHead(200)
    res.end('hello world\n')
  }).listen(8000)

  console.log(`工作进程 ${process.pid} 已启动`)
}
