# OS | 操作系统

> 根据 v8.6.0 编写

提供了一些操作系统相关的实用方法。

### os.cpus()

os.cpus() 方法返回一个对象数组, 包含安装的每个CPU/CPU核的信息。

### os.freemem()

以整数的形式返回空闲的系统内存字节数。

### os.totalmem()

以整数的形式返回所有的系统内存字节数。

### os.networkInterfaces()

os.networkInterfaces()方法返回一个对象,包含只有被赋予网络地址的网络接口。在返回对象的每个键名都指明了一个网络接口。