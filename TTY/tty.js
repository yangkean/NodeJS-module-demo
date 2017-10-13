const tty = require('tty')

console.log(process.stdout.isTTY)

// $ node
// process.stdout.on('resize', () => {
//   console.log('窗口大小变')
// })