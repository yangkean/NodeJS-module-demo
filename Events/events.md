# Events | 事件

> 根据 v8.6.0 编写

所有能触发事件的对象都是 EventEmitter 类的实例。我们可以在这些对象上绑定事件监听器和触发事件。EventListener 会按照监听器注册的顺序同步地调用所有监听器。

### 给监听器传入参数与 this

可以给 eventEmitter.emit() 传参，这些参数会由监听器的回调函数接收，使用普通函数形式的回调时 this 指向监听器绑定的 EventEmitter 实例对象，但当使用 ES6 的箭头函数时，this 指向父级作用域，即当前模块作用域，而在当前模块作用域中，this 是一个空对象 `{}`。

### EventEmitter 类

#### EventEmitter.defaultMaxListeners

每个事件默认可以注册的监听器的最大数量，默认值为 10。超出就会发出警告。单个 EventEmitter 实例的限制可以使用 emitter.setMaxListeners(n) 方法改变。 所有 EventEmitter 实例的默认值可以使用 EventEmitter.defaultMaxListeners 属性改变。调用 emitter.setMaxListeners(n) 优先于 EventEmitter.defaultMaxListeners。

#### emitter.once(eventName, listener)

注册一个对于特定事件最多被调用一次的监听器。 当事件被触发时，监听器会先被注销，然后再调用。

#### emitter.addListener(eventName, listener) / emitter.on(eventName, listener)

添加 listener 函数到名为 eventName 的事件的监听器数组的末尾。返回一个 EventEmitter 引用，可以链式调用。

#### emitter.emit(eventName[, ...args])

按监听器的注册顺序，同步地调用每个注册到名为 eventName 事件的监听器，并传入提供的参数。

#### emitter.eventNames()

返回一个列出 EventEmitter 实例已注册监听器的事件的数组。

#### emitter.getMaxListeners()

返回 EventEmitter 当前的最大的监听器数量限制值。

#### emitter.listenerCount(eventName)

返回正在监听名为 eventName 的事件的监听器的数量。

#### emitter.listeners(eventName)

返回名为 eventName 的事件的监听器数组的副本（copy）。

#### emitter.prependListener(eventName, listener)

添加 listener 函数到名为 eventName 的事件的监听器数组的开头。返回一个 EventEmitter 引用，可以链式调用。

#### emitter.prependOnceListener(eventName, listener)

添加一个单次 listener 函数到名为 eventName 的事件的监听器数组的开头。

#### emitter.removeAllListeners([eventName])

移除全部或指定 eventName 的监听器。

#### emitter.removeListener(eventName, listener)

从名为 eventName 的事件的监听器数组中移除指定的 listener。

removeListener 最多只会从监听器数组里移除一个监听器实例。 如果任何单一的监听器被多次添加到指定 eventName 的监听器数组中，则必须多次调用 removeListener 才能移除每个实例。

注意，在事件触发后、最后一个监听器完成执行前，任何 removeListener() 或 removeAllListeners() 调用都不会从 emit() 中移除它们。

#### emitter.setMaxListeners(n)

设置每个事件默认可以注册的监听器的最大数量。

值设为 Infinity（或 0）表明不限制监听器的数量。



