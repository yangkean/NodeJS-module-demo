# Global | 全局变量

> 根据 v8.6.0 编写

### 变量作用域在模块内

全局变量在所有模块中均可使用，但以下变量的作用域只在模块内。

#### __dirname

string。当前模块所处文件夹的名称（绝对路径）。等同于 __filename 的 path.dirname() 的值。

#### __filename

string。当前模块的文件名称（绝对路径）。

#### exports

这是一个对于 module.exports 的更简短的“引用”形式。exports 会在模块被执行前被赋予 module.exports 的值，模块最终导出的是 module.exports。

因为这个变量存储的是一个引用，当单独给它赋一个新值时，它将不再指向 module.exports 的值。一般要对整个 exports 赋值的话，直接用 `module.exports = ...`，对 exports 对象的属性赋值时，简便起见用 `exports.f = ...`。

#### module

对当前模块的引用。

#### require()

引入模块的方法。

### Buffer

用于处理二进制数据。

### setImmediate(callback[, ...args])

创建一个立即定时器。

### clearImmediate(immediate)

* immediate \<Immediate\> 一个 setImmediate() 返回的 Immediate 对象。

取消一个由 setImmediate() 创建的 Immediate 对象。

### setInterval(callback, delay[, ...args])

创建一个重复定时器，delay 为毫秒数间隔。

### clearInterval(interval)

* timeout \<Timeout\> 一个 setInterval() 返回的 Timeout 对象。

取消一个由 setInterval() 创建的 Timeout 对象。

### setTimeout(callback, delay[, ...args])

创建一个单次执行的定时器，delay 为毫秒数间隔。

### clearTimeout(timeout)

* timeout \<Timeout\> 一个 setTimeout() 返回的 Timeout 对象。

取消一个由 setTimeout() 创建的 Timeout 对象。

### console

用于打印信息。

### global

这是全局的命名空间对象，在每个模块中都可以访问。

在 Node.js 中，顶层作用域不是全局作用域，而是模块，所以 `var something` 的作用域只在模块内。

### process

进程对象，提供当前 Node.js 进程的有关信息。
