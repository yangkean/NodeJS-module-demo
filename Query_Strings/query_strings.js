const querystring = require('querystring')

console.log(querystring.parse('text=google&lr=21431'))

console.log(querystring.stringify({
  foo: 'bar',
  baz: ['qux', 'quux'],
  corge: '',
}))