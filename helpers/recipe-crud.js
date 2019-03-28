const db = require('../data/dbConfig.js');

module.exports = {
  findRecipes,
  findRecipesById,
};

function findRecipes() {
  return db('recipes');
}

function findRecipesById(id) {
  return db('recipes')
    .where({ id })
    .first();
}