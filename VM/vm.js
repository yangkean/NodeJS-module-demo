const vm = require('vm')
const util = require('util')

const sandbox = {
  animal: 'cat',
  count: 2
}

// vm.Script类型的实例包含那些能够在特定沙箱（或者上下文）执行的预编译的脚本。
const script = new vm.Script('count += 1; name = "kitty";')

// 创建代码执行所处的上下文
const context = new vm.createContext(sandbox)

for(let i = 0; i < 10; ++i) {
  // 在给定的上下文中运行 vm.Script 对象包含的编译代码，并返回代码执行的返回值
  script.runInContext(context)
}

// util.inspect(object[, options]) 返回 object 的字符串表示
console.log(util.inspect(sandbox))