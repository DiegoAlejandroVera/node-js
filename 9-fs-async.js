const { readFile, writeFile } = require('node:fs')

readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/async-result.txt',
      `This is the async result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
        }
        console.log(result)
      }
    )
  })
})

console.log('trying to read this before the read func')
