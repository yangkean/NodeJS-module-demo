const buf1 = Buffer.from([1, 2, 3])
console.log(buf1); // <Buffer 01 02 03>

const buf2 = Buffer.alloc(10);
console.log(buf2); // <Buffer 00 00 00 00 00 00 00 00 00 00>

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3); // <Buffer 66 65 72 00 01 00 00 00 50 7f>
