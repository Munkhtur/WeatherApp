const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  // content type
  let contentType = 'text/html';

  // read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // server err
      res.writeHead(500);
      res.end(`Server error: ${err.code}`);
    } else {
      //success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
