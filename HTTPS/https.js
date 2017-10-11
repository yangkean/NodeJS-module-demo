const https = require('https')
const fs = require('fs')

const options = {
  key: fs.readFileSync('test/ryans-key.pem'),
  cert: fs.readFileSync('test/ryans-cert.pem')
}

// 可以用 `curl -k https://localhost:80` 测试
https.createServer(options, (req, res) => {
  res.writeHead(200)

  res.end('welcome to https world\n')
}).listen(8000, 'localhost', () => {
  console.log('serving at https://localhost:8000/')
})

https.get('https://www.baidu.com/', (res) => {
  console.log(`状态码：${res.statusCode}`)
  console.log(`请求头：${res.headers}`)

  res.on('data', (data) => {
    process.stdout.write(data)
  })
}).on('error', (err) => {
  console.error(err)
})