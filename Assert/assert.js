const assert = require('assert');

assert() | assert.ok()
assert('hello'); // 无输出
assert.ok(true); // 无输出
assert(false); // AssertionError: false == true
assert.ok(null, 'it\'s false'); // AssertionError: it's false


// assert.deepEqual() && assert.notDeepEqual()
const obj1 = {
  a: {
    b: 1,
  },
};
const obj2 = {
  a: {
    b: 3,
  },
};
const obj3 = {
  a: {
    b: '1',
  },
};
const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1); // 无输出
assert.deepEqual(obj1, obj2); // AssertionError: { a: { b: 1 } } deepEqual { a: { b: 3 } }
assert.deepEqual(obj1, obj3); // 无输出
assert.deepEqual(obj1, obj4); //  AssertionError: { a: { b: 1 } } deepEqual {}
assert.deepEqual(1, {valueOf: () => 1}, '1 deepEqual {valueOf: () => 1}'); // AssertionError: 1 deepEqual { [Number: 1] valueOf: [Function] }
assert.notDeepEqual(obj1, obj3, '1 notDeepEqual \'1\''); // AssertionError: 1 notDeepEqual '1'


// assert.deepStrictEqual() && assert.notDeepStrictEqual()
assert.deepStrictEqual(obj1, obj3); // AssertionError: { a: { b: 1 } } deepStrictEqual { a: { b: '1' } }
assert.deepStrictEqual({}, obj4); // AssertionError: {} deepStrictEqual {} // 因为 {} 和 obj4 的 `__proto__` 属性不同
assert.notDeepStrictEqual(obj1, obj3); // 无输出


// assert.throws() && assert.doesNotThrow()
assert.throws(() => {throw new Error('Wrong')}, Error); // 无输出
assert.throws(() => {throw new Error('Wrong')}, /Wr/); // 无输出
assert.throws(() => {throw new Error('Wrong')}, (err) => {if(err.message === 'Wrong') return true;}); // 无输出
assert.throws(() => {}, Error, 'should throw'); // AssertionError: Missing expected exception (Error). should throw
assert.doesNotThrow(() => {throw new TypeError('Wrong')}, TypeError, 'should not throw'); // AssertionError: Got unwanted exception (TypeError). should not throw


// assert.equal() && assert.notEqual()
assert.equal(1, '1'); // 无输出
assert.equal({a: 1}, {a: 1}); // AssertionError: { a: 1 } == { a: 1 } // 因为这两个对象的引用不同
assert.notEqual(1, '1'); // AssertionError: 1 != '1'


// assert.fail()
assert.fail(1, 2, false, '<'); // AssertionError: 1 < 2
assert.fail(1, 2, 'wrong', '<'); // AssertionError: wrong


// assert.ifError()
assert.ifError(false); // 无输出
assert.ifError('error'); // error
