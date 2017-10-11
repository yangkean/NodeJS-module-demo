# fs | 文件系统

> 根据 v8.6.0 编写

用于进行文件相关的操作。所有方法均有同步和异步的方法。同步版均为函数名加`Sync`，没有回调。另外，异步方法的调用顺序不一定是顺序的。

### fs.open(path, flags[, mode], callback)

* path \<string\> | \<Buffer\> | \<URL\> 文件路径名
* flags \<string\> | \<number\> 以何种方式打开，见 [flags](http://nodejs.cn/api/fs.html#fs_fs_open_path_flags_mode_callback)
* mode \<integer\> 设置文件模式（权限和 sticky 位），但只有当文件被创建时才有效。默认为 0o666，可读写
* callback \<Function\> 接收两个参数 (err, fd)，fd 是被 ReadStream 使用的整数文件描述符

异步打开文件。同步版返回一个表示文件描述符的整数。

### fs.appendFile(file, data[, options], callback)

异步地追加数据到一个文件，如果文件不存在则创建文件。 data 可以是一个字符串或 buffer。

同步版返回 undefined。

### fs.close(fd, callback)

关闭文件流。同步版返 undefined。

### fs.copyFile(src, dest[, flags], callback)

从 `src` 异步拷贝文件到 `dest`。`dest` 如果已存在就会被覆盖。同步版返回 undefined。

### fs.createReadStream(path[, options])

返回一个新建的 ReadStream 对象。这个对象是一个可读流。

options 可以包括 start 和 end 值，使其可以从文件读取一定范围的字节而不是整个文件。 start 和 end 都是包括在内的，并且起始值是 0。

### fs.createWriteStream(path[, options])

返回一个新建的 WriteStream 对象。这个对象是一个可写流。

### fs.access(path[, mode], callback)

测试 path 指定的文件或目录的用户权限。

mode 的 `fs.constants.F_OK` 可以用于确定文件是否存在，但不涉及 rwx 权限。 如果没指定 mode，则默认为该值。

如果要检查一个文件是否存在且不操作它，推荐使用这个方法。

### fs.readFile(path[, options], callback)

* path \<string\> | \<Buffer\> | \<URL\> | \<integer\> 文件名或文件描述符。
* options \<Object\> | \<string\>
  * encoding \<string\> | \<null\> 默认为 null。
  * flag \<string\> 默认为 'r'。
* callback \<Function\> 有两个参数 (err, data)，其中 data 是文件的内容。

异步地读取一个文件的全部内容。同步版本返文件内容。

### fs.writeFile(file, data[, options], callback)

异步地写入数据到文件，如果文件已经存在，则替换文件。

同步版本返回 undefined。

### fs.watch(filename[, options][, listener])

监视 filename 的变化，filename 可以是一个文件或一个目录。 返回的对象是一个 fs.FSWatcher。

监听器回调有两个参数 (eventType, filename)。 eventType 可以是 'rename' 或 'change'，filename 是触发事件的文件的名称。

### fs.watchFile(filename[, options], listener)

监视 filename 的变化。 回调 listener 会在每次访问文件时被调用。

listener 有两个参数，当前的状态对象和以前的状态对象。

### fs.unwatchFile(filename[, listener])

停止监视 filename 文件的变化。 如果指定了 listener，则只移除特定的监听器。 否则，所有的监听器都会被移除，且已经有效地停止监视 filename。

fs.watch() 比 fs.watchFile() 和 fs.unwatchFile() 更高效。 可能的话，应该使用 fs.watch() 而不是 fs.watchFile() 和 fs.unwatchFile()。
