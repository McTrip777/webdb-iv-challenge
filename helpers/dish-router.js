const express = require('express');
const Dish = require('./dish-crud.js');

const router = express.Router();

///////////////////DISH//////////////////
router.get('/', async (req, res) => {
    try {
      const dish = await Dish.findDish('dish'); 
      res.status(200).json(dish);
    } catch (error) {
      res.status(500).json(error);
    }
  });

router.get('/:id', async (req, res) => {
    try {
      const dish = await Dish.findDishById(req.params.id);
      res.status(200).json(dish);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  module.exports = router;