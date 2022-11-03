const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 9999;
let fileName;

const server = http.createServer((req, res) => {
  //if (req.url === "/favicon.ico") return;
  res.setHeader('Content-type', 'text/html');

  switch(req.url) {
    case '/':
      fileName = 'index.html'
      res.statusCode = 200;
      break;
    default:
      fileName = '404.html'
      res.statusCode = 404;
  }

  //let filePath = path.join(__dirname, 'pages', fileName)
  let filePath = "./pages/" + fileName

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.end(data);
  })
})

server.listen(PORT, 'localhost', () => {
  console.log('Server running on http://localhost:' + PORT)
})




