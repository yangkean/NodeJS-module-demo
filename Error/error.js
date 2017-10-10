try {
  throw new Error('我是一个错误撒')
} catch (err) {
  console.error(`错误是：${err.message}`) // 打印错误信息

  console.error(err.stack) // 打印错误堆栈
}