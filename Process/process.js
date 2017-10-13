process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})

console.log(process.cwd())
process.chdir('/usr')
console.log(process.cwd())

// 返回包含当前进程的用户CPU时间和系统CPU时间的对象。此对象包含user和system属性，属性值的单位都是微秒(microsecond)
console.log(process.cpuUsage())

console.log(process.env)
process.env.foo = undefined // 在process.env中新增一个属性，会将属性值转换成字符串
console.log(process.env.foo, typeof process.env.foo)
delete process.env.foo // 用 delete从process.env中删除一个属性
console.log(process.env.foo, typeof process.env.foo)

console.log(process.pid)

console.log(process.mainModule === require.main)

console.log(process.memoryUsage())

console.log(process.version) // 返回Node.js的版本信息

console.log(process.versions) // 返回一个对象，此对象列出了Node.js和其依赖的版本信息

console.log('start')
process.nextTick(() => {
  console.log('nextTick callback')
})
console.log('scheduled')