const zlib = require('zlib')
const fs = require('fs')
const gzip = zlib.createGzip()
const inp = fs.createReadStream('../VM/vm.js')
const out = fs.createWriteStream('vm.js.gz')

inp.pipe(gzip).pipe(out)
