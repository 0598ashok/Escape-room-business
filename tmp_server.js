const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3002;
const baseDir = path.join(process.cwd(), 'template');

http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  let filePath = path.join(baseDir, url === '/' ? 'index.html' : url);
  
  const ext = path.extname(filePath).toLowerCase();
  const contentTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
  };
  const contentType = contentTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
}).listen(port);
console.log(`Server running at http://localhost:${port}/`);
