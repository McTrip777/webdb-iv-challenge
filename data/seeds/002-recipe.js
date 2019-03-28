
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {name: 'Zechs tacos', dish_id: '2'},
        {name: 'Granny', dish_id: '2'},
        {name: 'Saucy Potatoes', dish_id: '1'}
      ]);
    });
};
