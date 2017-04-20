# Assert | 断言

断言模块提供了一组断言测试 *API*，`断言`是用来验证程序的运行是否符合预期的工具。

### assert(value[, message]) | assert.ok(value[, message])

如果`value`是`falsy`类型 (即''/-0/+0/0/NaN/null/undefined/false) 的值，则报`AssertionError`错，如果有提供`message`，则报错信息为`message`，否则用默认报错信息。如果`value`是`truthy`类型 (与`falsy`相反) 值，则无任何输出。报错后立即停止程序的执行。

### assert.equal(actual, expected[, message]) && assert.notEqual(actual, expected[, message])

`assert.equal`对`actual`和`expected`进行浅层的强制转换式的比较，即使用`==`进行比较。两个对象进行比较时，只会比较它们的引用是否相等而不会比较深层的属性是否相等，`message`参数用法同上。`assert.notEqual`和`assert.equal`相反。

### assert.strictEqual(actual, expected[, message]) && assert.notStrictEqual(actual, expected[, message])

`assert.strictEqual`和`assert.equal`类似，只是比较符用的是`===`。`assert.notStrictEqual`和`assert.strictEqual`相反。`message`参数用法同上。

### assert.deepEqual(actual, expected[, message]) && assert.notDeepEqual(actual, expected[, message])

`assert.deepEqual`比较`actual`和`expected`的值是否相等，如果这两个参数是原始值则直接用`==`比较，如果是两个对象则进行深度比较，但是只考虑可枚举的自身属性，属性比较仍使用`==`，如果是原始值和对象比较则直接报错，`message`参数用法同上。`assert.notDeepEqual`与`assert.deepEqual`相反。报错后立即停止程序的执行。

### assert.deepStrictEqual(actual, expected[, message]) && assert.notDeepStrictEqual(actual, expected[, message])

`assert.deepStrictEqual`原理上和`assert.deepEqual`基本相同，不同点在于原始值或者对象属性的比较都是使用`===`，如果比较的是两个对象，则对两个对象的`__proto__`属性进行`===`比较。`assert.notDeepStrictEqual`与`assert.deepStrictEqual`相反。

### assert.throws(block[, error][, message]) && assert.doesNotThrow(block[, error][, message])

* `block` \<Function\>
* `error` \<RegExp\> | \<Function\>

`assert.throws`检测`block`函数是否抛出错误，如果第二个参数指定则检测是否抛出符合预期的错误，不抛出错误则报错。第二个参数可以是构造函数、正则表达式、自定义验证函数。`assert.doesNotThrow`则检测`block`函数是否不会抛出错误，若抛出错误且符合第二个参数期望则报错，抛出错误但不符合期望则错误传递到调用者。

### assert.fail(actual, expected, message, operator)

报`AssertionError`错误，如果`message`是`falsy`类型的值，则错误信息格式为：`actual operator expected`，否则错误信息是`message`。

### assert.ifError(value)

`value`是`truthy`类型的值时抛出`value`的值。
