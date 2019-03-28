const express = require('express');
const Recipe = require('./recipe-crud.js');
const Ingredient = require('./ingredient-crud.js');

const router = express.Router();

///////////////////RECIPE////////////////////////
router.get('/', async (req, res) => {
    try {
      const recipes = await Recipe.findRecipes() 
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json(error);
    }
  });

router.get('/:id', async (req, res) => {
    try {
      const recipes = await Recipe.findRecipesById(req.params.id);
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  module.exports = router;