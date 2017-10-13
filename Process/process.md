# Process | 进程

> 根据 v8.6.0 编写

全局的进程对象，提供当前 Node.js 进程的有关信息。

### process.execPath

返回启动Node.js进程的可执行文件所在的绝对路径。

### process.argv

返回一个数组，这个数组包含了启动Node.js进程时的命令行参数。第一个元素为process.execPath。如果需要获取argv[0]的值请参见 process.argv0。第二个元素为当前执行的JavaScript文件路径。剩余的元素为其他命令行参数。

### process.cwd()

返回 Node.js 进程的当前工作目录。

### process.chdir(directory)

变更Node.js进程的当前工作目录，如果变更目录失败会抛出异常。

### process.env

返回一个包含用户环境信息的对象。可以修改这个对象。

### process.exit([code])

* code \<integer\> 结束状态码。默认为0。

以结束状态码code指令Node.js同步终止进程。

在大多数情况下，显式调用process.exit()是没有必要的。如果在事件轮询队列中没有处于等待中的工作，Node.js进程会自行结束。

### process.pid

返回进程的PID。

### process.kill(pid[, signal])

* pid \<number\> 进程ID
* signal \<string\> | \<number\> 将发送的信号，类型为string或number。默认为'SIGTERM'。

将signal发送给pid标识的进程。

### process.mainModule

process.mainModule属性提供了一种获取require.main的替代方式。

### process.memoryUsage()

返回: \<Object\>
  * rss \<integer\> resident set size，所有内存占用，包括指令区和堆栈。
  * heapTotal \<integer\> V8 "堆"占用的内存，包括用到的和没用到的。
  * heapUsed \<integer\> V8 用到的堆的部分。
  * external \<integer\> V8 引擎内部的 C++ 对象占用的内存。

返回Node.js进程的内存使用情况的对象，该对象每个属性值的单位为字节。

### process.stderr

返回连接到stderr(fd 2)的流。它是一个net.Socket(一个Duplex流)，除非 fd 2指向一个文件，在这种情况下它是一个可写流。

### process.stdin

返回连接到stdin(fd 0)的流。它是一个net.Socket(一个Duplex流)，除非 fd 0指向一个文件，在这种情况下它是一个可读流。

### process.stdout

返回连接到stdout(fd 1)的流。它是一个net.Socket(一个Duplex流)，除非 fd 1指向一个文件，在这种情况下它是一个可写流。

### process.nextTick(callback[, ...args])

* callback \<Function\>
* ...args \<any\> 调用 callback时传递给它的额外参数

将 callback 添加到"next tick 队列"。 一旦当前事件轮询队列的任务全部完成，在next tick队列中的所有callbacks会被依次调用。

事件轮询随后的ticks 调用，会在任何I/O事件（包括定时器）之前运行。
