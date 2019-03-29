const db = require('../data/dbConfig.js');

module.exports = {
  findIngredient,
  findIngredientById,
};

function findIngredient() {
  return db('ingredient');
}

function findIngredientById(id) {
  return db('ingredient')
    .where({ id })
    .first();
}