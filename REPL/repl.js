const repl = require('repl')

const replServer = repl.start({
  prompt: '$ '
})

replServer.on('exit', () => {
  console.log('感谢您的使用，再见！')
})