const { StringDecoder } = require('string_decoder')
// 创建一个新的 StringDecoder 实例
const decoder = new StringDecoder('utf8') // 字符编码默认为 'utf8'

const euro = Buffer.from([0xE2, 0x82, 0xAC])

console.log(decoder.write(euro)) // 返回一个解码后的字符串

console.log(decoder.end(Buffer.from([0xC2]))) // 以字符串的形式返回内部 buffer 中剩余的字节