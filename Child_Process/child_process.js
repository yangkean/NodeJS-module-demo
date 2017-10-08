const {
  spawn,
  exec,
  execFile,
} = require('child_process')
const ls = spawn('ls', ['-lh', '/usr']) // 第二个参数是字符串参数列表

ls.stdout.on('data', (data) => {
  console.log('spawn 的输出为：')
  console.log(`输出：${data}`)
})

ls.stderr.on('data', (data) => {
  console.log(`错误：${data}`)
})

ls.on('close', (code) => {
  console.log(`子进程退出码：${code}`)
})

exec('ls -lah', { timeout: 1000 }, (error, stdout, stderr) => {
  console.log('exec 的输出为：')

  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  // stdout 和 stderr 参数包含子进程的 stdout 和 stderr 的输出
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
})

// 第一个参数是要运行的可执行文件的名称或路径
execFile('node', ['--version'], { timeout: 1000 }, (error, stdout, stderr) => {
  console.log('execFile 的输出为：')

  if (error) {
    throw error;
  }
  console.log(stdout);
})

