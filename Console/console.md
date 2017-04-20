# Console | 控制台

`console`模块提供和浏览器端类似的调试控制台功能。

### console.log(data[, ...args]) | console.info(data[, ...args])

把内容打印到标准输出中，可以格式化输出。

### console.warn(data[, ...args]) | console.error(data[, ...args])

输出错误或警告信息，也可以格式化输出。

### console.time(label) && console.timeEnd(label)

* `label` \<string\>

`console.time`开启一个计时器，计时器由`label`唯一标识，`console.timeEnd`则结束标识为`label`的计时器并打印出从`console.time`到`console.timeEnd`之间的程序的运行时间 (毫秒)。

### console.dir(obj[, options])

输出`obj`的结构，`options`是有`showHidden`、`depth`、`colors`三个可选属性的对象。`showHidden`为`true`时则输出无法枚举和`symbol`属性。
`depth`是递归输出`obj`深度的次数，为`null`时无限递归。`colors`为`true`时对输出着色。

### console.trace([message][, ...args])

打印函数调用栈及其位置。

### console.assert(value[, message][, ...args])

如果`value`是`falsy`类型的值，则报`AssertionError`错，如果有提供`message`，则报错信息为`message`，否则用默认报错信息。如果`value`是`truthy`类型 (与`falsy`相反) 值，则无任何输出。报错后立即停止程序的执行。第三个参数可用于第二个参数的格式化输出。
