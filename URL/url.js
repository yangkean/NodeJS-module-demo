const { URL } = require('url')

const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash') // 得到一个包含 URL 各个组成部分的 URL 对象

console.log(myURL)

console.log(myURL.searchParams.get('query')) // get
myURL.searchParams.append('a', 'b') // append
console.log(myURL.href)
myURL.searchParams.delete('a') // delete
myURL.searchParams.set('hello', 'world') // set
console.log(myURL.href)