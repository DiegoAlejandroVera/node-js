const http = require('node:http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('This is our home')
  } else if (req.url === '/about') {
    res.end('This is a about us page')
  } else {
    res.end(`
      <h1>Oooopss!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">Go back to home</a>
    `)
  }
})

server.listen(3000)
