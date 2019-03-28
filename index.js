const express = require('express');
const helmet = require('helmet');

const Dish = require('./crud/dish-crud.js');
const Recipe = require('./crud/recipe-crud.js');

const server = express();

server.use(helmet());
server.use(express.json());


server.get('/', (req,res) => {
    res.send('Hello World');
})
///////////////////DISH//////////////////
server.get('/api/dish', async (req, res) => {
    try {
      const dish = await Dish.findDish('dish'); 
      res.status(200).json(dish);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  server.get('/api/dish/:id', async (req, res) => {
    try {
      const dish = await Dish.findDishById(req.params.id);
      res.status(200).json(dish);
    } catch (error) {
      res.status(500).json(error);
    }
  });
///////////////////RECIPE////////////////////////
  server.get('/api/recipes', async (req, res) => {
    try {
      const recipes = await Recipe.findRecipes(); 
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  server.get('/api/recipes/:id', async (req, res) => {
    try {
      const recipes = await Recipe.findRecipesById(req.params.id);
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json(error);
    }
  });


const port = 5000;
server.listen(port, () =>
  console.log(`API running on http://localhost:${port}`)
);