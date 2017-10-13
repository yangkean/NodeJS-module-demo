# Util | 实用工具

> 根据 v8.6.0 编写

提供一些实用工具。

### util.callbackify(original)

* original \<Function\> 一个 async 函数或者一个返回 Promise 的函数
* Returns: \<Function\> 一个回调风格的异步执行函数

返回的回调的函数的第一个参数是 rejection 原因（或者 null），第二个参数是 resolved 值。

### util.format(format[, ...args])

返回一个格式化后的字符串，使用第一个参数作为一个类似 printf 的格式。

### util.promisify(original)

* original \<Function\> 一个最后一个参数是回调函数的函数，这个回调的参数必须是`(err, value)`风格的

返回一个返回值是一个 promise 的函数。

