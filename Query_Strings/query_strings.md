# Query Strings | 查询字符串

> 根据 v8.6.0 编写

用于解析与格式化 URL 查询字符串。

### querystring.parse(str[, sep[, eq[, options]]])

* str \<string\> 要解析的 URL 查询字符串。
* sep \<string\> 用于界定查询字符串中的键值对的子字符串。默认为 '&'。
* eq \<string\> 用于界定查询字符串中的键与值的子字符串。默认为 '='。
* options \<Object\>
  * decodeURIComponent \<Function\> 解码查询字符串的字符时使用的函数。默认为 querystring.unescape()。
  * maxKeys \<number\> 指定要解析的键的最大数量。默认为 1000。指定为 0 则不限制。

把一个 URL 查询字符串 str 解析成一个键值对的集合。

该方法返回的对象不继承自 JavaScript 的 Object 类。 这意味着 Object 类的方法如 obj.toString()、obj.hasOwnProperty() 等没有被定义且无法使用。

### querystring.stringify(obj[, sep[, eq[, options]]])

* obj \<Object\> 要序列化成 URL 查询字符串的对象。
* sep \<string\> 用于界定查询字符串中的键值对的子字符串。默认为 '&'。
* eq \<string\> 用于界定查询字符串中的键与值的子字符串。默认为 '='。
* options \<Object\>
  * encodeURIComponent \<Function\> 把对象中的字符转换成查询字符串时使用的函数。默认为 querystring.escape()。

通过遍历给定的 obj 对象的自身属性，生成 URL 查询字符串。