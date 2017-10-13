# Module | 模块

> 根据 v8.6.0 编写

在 Node.js 中，文件和模块是一一对应的（每个文件被视为一个独立的模块）。

### 访问主模块

当 Node.js 直接运行一个文件时，require.main 会被设为它的 module。 这意味着可以通过 require.main === module 来判断一个文件是否被直接运行。

对于 foo.js 文件，如果通过 node foo.js 运行则为 true，但如果通过 require('./foo') 运行则为 false。

因为 module 提供了一个 filename 属性（通常等同于 __filename），所以可以通过检查 require.main.filename 来获取当前应用程序的入口点。

### 模块

模块在第一次加载后会被缓存。 这也意味着（类似其他缓存机制）如果每次调用 require('foo') 都解析到同一文件，则返回相同的对象。

多次调用 require(foo) 不会导致模块的代码被执行多次。

模块是基于其解析的文件名进行缓存的。 由于调用模块的位置的不同，模块可能被解析成不同的文件名（比如从 node_modules 目录加载），这样就不能保证 require('foo') 总能返回完全相同的对象。

### 循环

需要仔细的规划, 以允许循环模块依赖在应用程序内正常工作。

### 一些属性

#### module.children

* \<Array\>

被当前模块引入的模块对象（不包括内置核心模块）数组。

#### module.filename

模块的完全解析后的文件名。

#### module.id

模块的标识符。 通常是完全解析后的文件名。

#### module.loaded

模块是否已经加载完成，或正在加载中。

#### module.parent

最先引用该模块的模块。这个属性只有在运行时该模块被其他模块引入了才会有值。

#### module.paths

模块的搜索路径数组。
