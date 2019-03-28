const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
};

function find() {
  return db('recipe');
}

function findById(id) {
  return db('recipe')
    .where({ id })
    .first();
}