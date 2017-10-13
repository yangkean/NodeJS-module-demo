require('fs')
require('./parent')

console.log(require.main === module)

console.log(module.children)

console.log(module.filename)

console.log(module.id)

console.log(module.loaded)

console.log(module.parent)

console.log(module.paths)

module.exports = 9