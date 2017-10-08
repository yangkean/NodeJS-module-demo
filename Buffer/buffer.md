# Buffer（缓冲）

`Buffer`是用来处理二进制数据的一个类，在 *Node* 运行环境中是全局变量，无需使用`require`引入。

### Buffer.from

#### Buffer.from(array)

返回一个新建的包含提供的`array`的副本的`Buffer`。

#### Buffer.from(arrayBuffer[, byteOffset [, length]])

返回一个新建的与给定`arrayBuffer`共享同一段内存的`Buffer`。

#### Buffer.from(buffer)

返回一个新建的包含提供的`buffer`的副本的`Buffer`。

#### Buffer.from(string[, encoding])

返回一个新建的包含提供的`string`的副本的`Buffer`。

### Buffer.alloc(size[, fill[, encoding]]) && Buffer.allocUnsafe(size) && Buffer.allocUnsafeSlow(size)

`Buffer.alloc`返回一个指定`size`大小的已填充的`Buffer`实例，安全但比`Buffer.allocUnsafe`慢。`Buffer.allocUnsafe`和`Buffer.allocUnsafeSlow`均返回一个指定`size`大小的未填充的`Buffer`实例，均需手动填充其中的元素，区别在于前者当`size`不大于`Buffer.poolSize`的一半时从共享内部内存池中分配内存供`Buffer`实例使用，而后者不使用共享内部内存池。
