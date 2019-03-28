const express = require('express');
const helmet = require('helmet');

const crud = require('./crud/dish-crud.js');

const server = express();

server.use(helmet());
server.use(express.json());


server.get('/', (req,res) => {
    res.send('Hello World');
})

server.get('/api/dish', async (req, res) => {
    try {
      const dish = await crud.find('dish'); 
      res.status(200).json(dish);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  server.get('/api/recipe/:id', async (req, res) => {
    try {
      const dish = await crud.findById(req.params.id);
      res.status(200).json(recipe);
    } catch (error) {
      res.status(500).json(error);
    }
  });


const port = 5000;
server.listen(port, () =>
  console.log(`API running on http://localhost:${port}`)
);