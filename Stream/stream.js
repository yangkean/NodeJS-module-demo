// const stream = require('stream')
const zlib = require('zlib')
const fs = require('fs')

const readable = fs.createReadStream('../REPL/repl.md')
const writeable = fs.createWriteStream('./test.txt')
const zip = zlib.createGzip()
const writeable2 = fs.createWriteStream('./test.txt.gz')

readable.pipe(writeable)
readable.pipe(zip).pipe(writeable2)
