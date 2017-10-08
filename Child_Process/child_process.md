# Child Process | 子进程

> 根据 v8.6.0 编写

`child_process`模块为`Node`提供了创建子进程的能力。默认情况下，在 Node.js 的父进程与创建的子进程之间会建立 stdin、stdout 和 stderr 的管道。

### 创建异步进程

以下四个方法都返回一个 ChildProcess 实例，这些对象实现了 Node.js EventEmitter 的 API，允许父进程注册监听器函数，在子进程生命周期期间，当特定的事件发生时会调用这些函数。

#### child_process.exec(command[, options][, callback])

创建一个 shell，并在 shell 中执行 command，且缓冲（buffer）任何产生的输出。

#### child_process.execFile(file[, args][, options][, callback])

类似 child_process.exec()，但不创建一个 shell，而是指定可执行的 file 被直接创建为一个新进程。

#### child_process.fork(modulePath[, args][, options])

专门用于创建新的 Node.js 进程。返回的 ChildProcess 会有一个额外的内置的通信通道，它允许消息在父进程和子进程之间来回传递。

#### child_process.spawn(command[, args][, options])

使用给定的 command 和 args 中的命令行参数来创建一个新进程。上面三个方法都是在这个方法的基础上实现的。

### 创建同步进程

child_process.execFileSync(file[, args][, options])、child_process.execSync(command[, options])、child_process.spawnSync(command[, args][, options]) 方法是同步的且会阻塞 Node.js 的事件循环，暂停任何额外代码的执行直到创建的进程退出。自动化的 shell 脚本更适合使用这些方法。

### ChildProcess 类

ChildProcess 类的实例是 EventEmitter，代表创建的子进程。这个类的实例由异步创建进程方法创建。

#### subprocess.kill([signal])

* signal \<string\>

向子进程发送一个信号。 如果没有给定参数，则进程会发送 'SIGTERM' 信号。

#### subprocess.pid

返回子进程的进程标识（PID）。
