const express = require('express');
const helmet = require('helmet');

const crud = require('./crud/crud-operations.js');

const server = express();

server.use(helmet());
server.use(express.json());


server.get('/', (req,res) => {
    res.send('Hello World');
})

server.get('/api/recipe', async (req, res) => {
    try {
      const recipe = await crud.find('recipe'); 
      res.status(200).json(recipe);
    } catch (error) {
      res.status(500).json(error);
    }
  });


const port = 5000;
server.listen(port, () =>
  console.log(`API running on http://localhost:${port}`)
);