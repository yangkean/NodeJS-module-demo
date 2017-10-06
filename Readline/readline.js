const readline = require('readline')

function print(s) {
  console.log(s)
}

// readline 提供的逐行读取的方法位于 Interface 类上
// Interface 类（其实在源码中是个 function 的形式）的方法都定义在了 prototype 上
// 所以要 new 这个类来获得它的实例以便使用
// 源码中使用 createInterface 来实例化这个类
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
  prompt: '🐷 $ ',
})

rl.prompt()

rl.on('close', () => {
  print('close event')
})

rl.on('line', (input) => {
  print('line event')
  print(`You input: ${input}`)

  if(input === 'pause') rl.pause()

  if(input === 'change') rl.setPrompt('>>>')

  if(input === '美') {
    rl.question('我与徐公孰美？', (answer) => {
      print(`你的回答：${answer}`)
    
      rl.close() // input 流不会自动关闭，要手动关闭 input 流
    });
  }

  if(input === 'exit') process.exit()

  // rl.resume()
  rl.prompt()

  if(input === 'change') readline.moveCursor(process.stdout, 5)
})

rl.on('pause', () => {
  print('pause event')
})

rl.on('resume', () => {
  print('resume event')
})

rl.write('删除这个')
rl.write(null, {ctrl: true, name: 'u'})
