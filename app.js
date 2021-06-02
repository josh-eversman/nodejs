const http = require('http')
const server = http.createServer((req, res) => {
  res.write("welcome home!!!")
  console.log(req)
  res.end()
})

server.listen(5000)
