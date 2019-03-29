const db = require('../data/dbConfig.js');

module.exports = {
  findDish,
  findDishById,
};

function findDish() {
  return db('dish');
}

function findDishById(id) {
  return db('dish')
    .where({ id })
    .first();
}