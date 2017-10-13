# TTY | 终端

> 根据 v8.6.0 编写

提供了 tty.ReadStream 类和 tty.WriteStream 类。

当 Node.js 检测到正运行在一个文本终端（TTY）的上下文中时，则 process.stdin 默认会被初始化为一个 tty.ReadStream 实例，且 process.stdout 和 process.stderr 默认会被初始化为一个 tty.WriteStream 实例。 判断 Node.js 是否运行在一个 TTY 上下文的首选方法是检查 process.stdout.isTTY 属性的值是否为 true。

大多数情况下，应用程序无需创建 tty.ReadStream 类和 tty.WriteStream 类的实例。