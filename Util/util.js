const util = require('util')

async function fn() {
  return await Promise.resolve('hello sam')
}
const callbackFunction = util.callbackify(fn)

callbackFunction((err, ret) => {
  if (err) throw err
  console.log(ret)
})

console.log('first')

console.log(util.format('%s %j', 'hi', {"name": "sam"}))

const commonFunc = (f, cb) => {
  const err = null
  const value = f
  cb(err, value)
}

const promiseFunc = util.promisify(commonFunc)

promiseFunc(9)
.then((val) => {
  console.log(val)
})

console.log('second')
