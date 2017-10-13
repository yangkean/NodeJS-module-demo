const path = require('path')

// 下面注释中所指的 path 是函数的第一个参数

console.log(path.basename('/Users/yangshao/Desktop/hello.pdf', '.pdf')) // 返回一个 path 的最后一部分

console.log(path.delimiter) // 平台特定的 process.env.PATH 分隔符

console.log(path.sep) // 平台特定的路径片段分隔符

console.log(path.dirname('../OS/os.js')) // 返回一个 path 的目录名

console.log(path.extname('path.js')) // 返回 path 的扩展名

// 从一个对象返回一个路径字符串
console.log(path.format({
  dir: '/home/user/dir',
  base: 'file.txt'
}))

console.log(path.isAbsolute('/usr')) // 判定 path 是否为一个绝对路径

// 使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))

// 把一个路径或路径片段的序列解析为一个 “绝对路径”，与上面那个不同
// 给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径
console.log(path.resolve('/foo/bar', '/tmp/file/'))

// 规范化给定的 path，并解析 '..' 和 '.' 片段
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))

// 返回一个对象，对象的属性表示 path 的元素
console.log(path.parse('/home/user/dir/file.txt'))

// path.relative(from, to)
// 返回从 from 到 to 的相对路径（基于当前工作目录）
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'))

