const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5555;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/app.html' : req.url;
  filePath = path.join(__dirname, filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - File Not Found</h1>');
      return;
    }

    const ext = path.extname(filePath);
    let contentType = 'text/html';
    if (ext === '.js') contentType = 'application/javascript';
    if (ext === '.css') contentType = 'text/css';
    if (ext === '.json') contentType = 'application/json';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`\n✅ Server is running!`);
  console.log(`📱 Open in browser: http://${HOST}:${PORT}/app.html\n`);
});
