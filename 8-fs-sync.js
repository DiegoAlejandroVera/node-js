const { readFileSync, writeFileSync } = require('node:fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
console.log(first, second)

// crea un nuevo documento, y si existe el documento sobreescribe su contenido
writeFileSync(
  './content/new-text.txt',
  `This is the result: ${first}, ${second}`,
  { flag: 'a' }
)
