const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/dev.sqlite3',
  },
  useNullAsDefault: true, 
};
const db = knex(knexConfig);

const server = express();

server.use(helmet());
server.use(express.json());


server.get('/', (req,res) => {
    res.send('Hello World');
})



const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`API running on http://localhost:${port}`)
);