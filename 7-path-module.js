const path = require('node:path')

console.log(path.sep)

const filepath = path.join('/content', 'subfolder', 'text.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const base2 = path.win32.basename(filepath, '.txt')
console.log(base2)

const base3 = path.posix.basename(filepath)
console.log(base3)

// const absolute = path.resolve(__dirname, 'content', 'text.txt')
// const absolute = path.resolve(__dirname)
const absolute = path.resolve('content', 'text.txt')
console.log(absolute)
