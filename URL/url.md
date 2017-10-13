# URL

> 根据 v8.6.0 编写

用于 URL 处理与解析。

WHATWG与Node.js遗留的特有的API的比较如下。网址'http://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'上方是由遗留的url.parse()返回的对象属性。网址下方的则是由WHATWG URL对象的属性。

![URL 的组成部分](./url.png)

### The WHATWG URL API

浏览器兼容的 URL 类，根据 WHATWG URL 标准实现。


