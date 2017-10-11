const fs = require('fs')

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

fs.access('./fs1.md', (err) => {
  if (err) {
    console.error('文件不存在')

    return
  }

  console.log('文件存在')
})

fs.open('./fs.md', 'r', 0o666, (err, fd) => {
  if (err) console.error(err)

  console.log(fd)
})

fs.appendFile('hello.md', 'hello world', {
  encoding: 'utf8',
  mode: 0o666,
  flag: 'a'
}, (err) => {
  if (err) throw err

  console.log('成功追加 hello.md 文件')
})

// node >= v8.5.0
fs.copyFile('../Global/global.js', 'dest.js', (err) => {
  if (err) throw err

  console.log('复制成功')
})

fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err

  console.log(`读取文件内容：\n${data}`)
})

const watcher = fs.watch('.', (eventType, filename) => {
  console.log(`当前目录下的 '${filename}' 文件发生了 ${eventType} 变化`)
})
rl.on('line', (input) => {
  if (input === 'exit') {console.log(11)
    watcher.close() // 停止监视给定的 fs.FSWatcher 实例的变化
    
    rl.close()
  }
})

fs.writeFile('message.txt', 'I used to rule the world', (err) => {
  if (err) throw err

  console.log('文件已保存')
})

