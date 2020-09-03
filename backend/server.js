

const server = require('./src/config/express');

const port = 4567;

server.listen(port, () => {
  console.log(`Server connection port: ${port}`);
});