# Crypto | 加密

> 根据 v8.6.0 编写

提供加密功能，包含对 OpenSSL 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装。

### Cipher 类

Cipher 类的实例用于加密数据。

#### cipher.update(data[, inputEncoding][, outputEncoding])

* data \<string\> | \<Buffer\> | \<TypedArray\> | \<DataView\>
* inputEncoding \<string\> 加密数据的输入格式
* outputEncoding \<string\> 加密数据的输出格式

用 data 更新 cipher 实例，返回部分加密内容。

#### cipher.final([outputEncoding])

* outputEncoding \<string\>

返回剩余的加密内容。

### Decipher 类

用于解密数据。

#### decipher.update(data[, inputEncoding][, outputEncoding])

* data \<string\> | \<Buffer\> | \<TypedArray\> | \<DataView\>
* inputEncoding \<string\> 解密数据的输入格式
* outputEncoding \<string\> 解密数据的输出格式

用 data 更新 cipher 实例，返回部分解密内容。

#### decipher.final([outputEncoding])

* outputEncoding \<string\>

返回剩余的解密内容。

### crypto.createCipher(algorithm, password[, options])

* algorithm \<string\>
* password \<string\> | \<Buffer\> | \<TypedArray\> | \<DataView\>
* options \<Object\> stream.transform options

创建并返回一个所给 algorithm 和 password 的 Cipher 实例对象。

### crypto.createDecipher(algorithm, password[, options])

* algorithm \<string\>
* password \<string\> | \<Buffer\> | \<TypedArray\> | \<DataView\>
* options \<Object\> stream.transform options

创建并返回一个所给 algorithm 和 password 的 Decipher 实例对象。
