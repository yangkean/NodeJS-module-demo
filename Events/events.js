const EventEmitter = require('events')

const myEmitter = new EventEmitter()
const myEmitter2 = new EventEmitter()

myEmitter.on('event', function(a, b) {
  console.log('监听1：触发了 event 事件')
  console.log(a, b, this)
  // 打印：
  // a b EventEmitter {
  //   domain: null,
  //   _events: { event: [ [Function], [Function] ] },
  //   _eventsCount: 1,
  //   _maxListeners: undefined }
})

myEmitter.on('event', (a, b) => {
  console.log('监听2：触发了 event 事件')
  console.log(a, b, this) // a b {}
})

myEmitter.prependListener('event', () => {
  console.log('我有特权我第一')
})

myEmitter.emit('event', 'a', 'b');

console.log(EventEmitter.defaultMaxListeners) // 10

const symbol = Symbol('symbol1')
myEmitter.on(symbol, () => {})

console.log(myEmitter.eventNames()) // [ 'event', Symbol(symbol1) ]

console.log(myEmitter.getMaxListeners()) // 10

myEmitter.once('once', () => {
  console.log('我只会出现一次哦')
})

myEmitter.emit('once')
myEmitter.emit('once')

myEmitter.removeAllListeners('event')

console.log('接下来不会触发 myEmitter 上的 event 事件了')

myEmitter.emit('event', 1, 3)

myEmitter.setMaxListeners(20)

console.log(myEmitter.getMaxListeners()) // 20
console.log(EventEmitter.defaultMaxListeners) // 10
