const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`Connection received on port ${PORT}`);

  // console.log('headers ', req.headers);
  console.log('method ', req.method);
  console.log('url ', req.url);

  const user = { name: 'John', hobby: 'Skating' }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(user));
});

server.listen(PORT || 3000);
