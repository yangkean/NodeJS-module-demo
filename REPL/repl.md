# REPL | 交互式解释器

> 根据 v8.6.0 编写

repl 提供了一种 'Read-Eval-Print-Loop' 的实现，它可作为一个独立的程序或嵌入到其他应用中。可以理解为是个小型的 Chrome 控制台。

repl 模块导出了 repl.REPLServer 类。 当 repl.REPLServer 实例运行时，它接收用户输入的每一行，根据用户定义的解释函数解释这些输入，然后输出结果。

### repl.start([options])

* options \<Object\> | \<string\>

常用选项：

* prompt 要显示的提示符，默认为`> `。
* terminal 为 true 时指定output 应被当作一个 TTY 终端
* eval 当解释每行输入时使用的函数。默认为 JavaScript eval() 函数的异步封装。接收参数为 (cmd, context, filename, callback)。

创建并启动一个 repl.REPLServer 实例。如果 options 是一个字符串，则它指定了输入提示符。

### `_`（下划线）变量的赋值

默认的解释器会把最近一次解释的表达式的结果赋值给变量 `_`（下划线）。 显式地设置 `_` 为某个值能禁用该特性。
