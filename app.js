const http = require('http');

const server = http.createServer((res, req) => {
  res.write('test')
  res.end()
})

server.listen(3000)