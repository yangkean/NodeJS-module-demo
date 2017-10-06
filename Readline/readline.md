# Readline | 逐行读取

> **Notice**
>
> 基于`Node.js v8.6.0`撰写。

这个模块用于从可读流（如 process.stdin）读取数据，每次读取一行。

### 事件

#### 'close' 事件

[四种情况](http://nodejs.cn/api/readline.html#readline_event_close)触发此事件。

监听器函数调用时无参数。（下文均用“无参”替代）

此事件触发时，readline.Interface 实例应当被视为已结束。

#### 'line' 事件

input 流接收到行结束符时触发。

监听器函数调用时接收一个那一行输入的字符串。

#### 'pause' 事件

[两种情况](http://nodejs.cn/api/readline.html#readline_event_pause)触发。

无参。

#### 'resume' 事件

input 被恢复时触发。

无参。

#### 'SIGCONT' 事件

当一个 Node.js 进程使用 \<ctrl\>-Z（也就是 SIGTSTP）移入后台之后再使用 fg(1p) 移回前台时触发。

无参。

#### 'SIGINT' 事件

输入 \<ctrl\>-Z 时触发。input 流接收到 SIGINT 时，若无注册该事件监听器，则触发 pause 事件。

无参。

#### 'SIGTSTP' 事件

一般输入 \<ctrl\>-Z 触发。其他情况见[这里](http://nodejs.cn/api/readline.html#readline_event_sigtstp)。

无参。

### 方法

#### rl.close()

关闭 readline.Interface 实例，撤回对 input 和 output 流的控制。

#### rl.pause()

暂停 input 流。调用此方法不会立即暂停其他事件（包括“line”）被 readline.Interface 实例暂停。

#### rl.prompt([preserveCursor])

* `preserveCursor` \<boolean\> 为 true 则阻止光标落点被设为 0

> `preserveCursor` 这个选项相关的代码只在传入 createInterface 的参数中的 terminal 设为 true 时才执行，而且我发现这个选项设不设置效果都是一样的，看了半天源码也没发现这个选项有什么实际作用。

在 output 流中新的一行写入 readline.Interface 实例配置的 prompt，用于为用户提供一个可供输入的新的位置。

被调用时，若 input 流已被暂停，则此方法会恢复之。

如果 readline.Interface 被创建时 output 被设为 null 或 undefined，则提示不会被写入。

#### rl.question(query, callback)

* query \<string\> 一个在提示符之前、要写入 output 的字符。
* callback \<Function\> 一个回调函数，它会被调用并带上用户响应 query 的输入。

输出字符并等待用户输入，回车后调用 callback 并传入用户的输入。

被调用时，若 input 流已被暂停，则此方法会恢复之。

如果 readline.Interface 被创建时 output 被设为 null 或 undefined，则 query 不会被写入。

#### rl.resume()

恢复暂停的 input 流。

#### rl.setPrompt(prompt)

* prompt \<string\>

设置每当 rl.prompt() 被调用时写入 output 的字符。

#### rl.write(data[, key])

* data \<string\>
* key \<Object\>
  * ctrl \<boolean\> 如果为 true 则表示 \<ctrl\> 键。
  * meta \<boolean\> 如果为 true 则表示 \<Meta\> 键。
  * shift \<boolean\> 如果为 true 则表示 \<Shift\> 键。
  * name \<string\> 一个按键的名称。

把 data 或一个由 key 指定的按键序列写入到 output。只有当 output 是一个 TTY 文本终端时，key 参数才被支持。

如果指定了 key，则 data 被忽略。

被调用时，若 input 流已被暂停，则此方法会恢复之。

如果 readline.Interface 被创建时 output 被设为 null 或 undefined，则 data 或 key 不会被写入。

#### readline.clearLine(stream, dir)

* stream \<Writable\>
* dir \<number\>
  * -1 - 光标左边
  * 1 - 光标右边
  * 0 - 整行

以 dir 指定的方向清除 TTY 流中的当前行。

#### readline.clearScreenDown(stream)

* stream \<Writable\>

从光标的当前位置向下清除给定的 TTY 流。

#### readline.createInterface(options)

* options \<Object\>
  * input \<Readable\> 要监听的可读流。该选项是必需的。
  * output \<Writable\> 要写入逐行读取数据的可写流。
  * completer \<Function\> 一个可选的函数，用于 Tab 自动补全。
  * terminal \<boolean\> 如果 input 和 output 应被当作一个 TTY，且要写入 ANSI/VT100 转换的代码，则设为 true。 默认为实例化时在 output 流上检查 isTTY。
  * historySize \<number\> 保留的历史行数的最大数量。 设为 0 可禁用历史记录。 默认为 30。 该选项只有当 terminal 被用户或内部 output 设为 true 时才有意义，否则历史缓存机制不会被初始化。
  * prompt - 要使用的提示字符串。默认为 '> '。
  * crlfDelay \<number\> 如果 \r 与 \n 之间的延迟超过 crlfDelay 毫秒，则 \r 和 \n 都会被当作换行分隔符。 默认为 100 毫秒。 crlfDelay 会被限制为不低于 100。也可以设置为 Infinity，这样 \r 后跟随着 \n 就总是被视作单独的新一行。
  * removeHistoryDuplicates \<boolean\> 若为 true，当新增的输入与历史列表中的重复时，会删除列表中旧的一行。默认为 false。

  创建一个新的 readline.Interface 实例。

#### readline.cursorTo(stream, x, y)

* stream \<Writable\>
* x \<number\>
* y \<number\>

移动光标到给定的 TTY stream 中指定的位置。

#### readline.emitKeypressEvents(stream[, interface])

见[emitKeypressEvents](http://nodejs.cn/api/readline.html#readline_readline_emitkeypressevents_stream_interface)。

#### readline.moveCursor(stream, dx, dy)

* stream \<Writable\>
* dx \<number\>
* dy \<number\>

移动光标到给定的 TTY stream 中相对当前的位置。
