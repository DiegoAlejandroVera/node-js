const os = require('node:os')

const user = os.userInfo()
console.log(user)

console.log(`The System Uptime is ${os.uptime() / 60} minutes`)

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem() / 1032,
  freeMem: os.freemem() / 1032
}

console.log(currentOs)
