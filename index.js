const server = require('./server')

const port = 5000;
server.listen(port, () =>
  console.log(`API running on http://localhost:${port}`)
);