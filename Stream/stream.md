# Stream | 流

> 根据 v8.6.0 编写

提供处理流数据的抽象接口。流可以是可读的（Readable）、可写的（Writable）、可读写的（Duplex）以及在读写过程中可以修改和变换数据的 Duplex 流（Transform）。所有的流都是 EventEmitter 的实例。通常都是通过其他模块间接地使用流模块。

### readable.pipe(destination[, options])

* destination \<stream.Writable\> 数据写入目标
* options \<Object\> Pipe 选项
  * end \<boolean\> 在 reader 结束时结束 writer 。默认为 true。

将可读流写入可写目标流。返回 目标流 的引用，这样就可以对流进行链式的管道操作。

### stream.Duplex 类

同时实现了 Readable 和 Writable 接口的流。

Duplex 流的实例包括了：

* TCP sockets
* zlib streams
* crypto streams

### stream.Transform 类

实现了在读写过程中可以修改和变换数据的 Duplex 流，即变换流。

变换流的实例包括：

* zlib streams
* crypto streams