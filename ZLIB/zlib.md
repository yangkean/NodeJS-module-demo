# ZLIB | 压缩

> 根据 v8.6.0 编写

提供通过 Gzip 和 Deflate/Inflate 实现的压缩功能。

### zlib.createDeflate(options)

创建并返回一个带有给定 options 的新的 Deflate 对象，使用 deflate 压缩数据。

### zlib.createInflate(options)

创建并返回一个带有给定 options 的新的 Inflate 对象，解压一个 deflate 流。

### zlib.createGzip(options)

创建并返回一个带有给定 options 的新的 Gzip 对象，使用 gzip 压缩数据。

### zlib.createGunzip(options)

创建并返回一个带有给定 options 的新的 Gunzip 对象，解压缩 gzip 流。

### zlib.createUnzip(options)

创建并返回一个带有给定 options 的新的 Unzip 对象，通过自动检测头信息解压 Gzip 或者 Deflate 压缩的流。