const express = require('express');
const Ingredient = require('./ingredient-crud.js');

const router = express.Router();

///////////////////RECIPE////////////////////////
router.get('/', async (req, res) => {
    try {
      const ingredient = await Ingredient.findIngredient(); 
      res.status(200).json(ingredient);
    } catch (error) {
      res.status(500).json(error);
    }
  });

router.get('/:id', async (req, res) => {
    try {
      const ingredient = await Ingredient.findIngredientById(req.params.id);
      res.status(200).json(ingredient);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  module.exports = router;