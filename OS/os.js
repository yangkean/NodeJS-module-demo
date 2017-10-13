const os = require('os')

function p(str) {
  console.log(str)
}

p(os.cpus())

p(`${os.freemem() / 1024 / 1024 / 1024}GB`)

p(os.homedir()) // home 目录

p(os.hostname()) // 操作系统主机名

p(os.networkInterfaces())

p(os.platform()) // Node.js 编译时的操作系统平台

p(os.release()) // 操作系统发行版

p(os.tmpdir()) // 操作系统的 默认临时文件目录

p(`${os.totalmem() / 1024 / 1024 / 1024}GB`)

p(os.type()) // 操作系统名字

p(`${os.uptime() / 60 / 60}h`) // 在几秒内返回操作系统的上线时间

p(os.userInfo()) // 当前有效用户的信息