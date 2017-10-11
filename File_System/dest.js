const path = require('path')

console.log(__dirname)
console.log(path.dirname(__filename))

console.log(__filename)

module.exports = exports = {
  name: 'yang',
}

setImmediate(() => {
  console.log('you are cool')
})