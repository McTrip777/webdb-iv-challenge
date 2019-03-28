
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {name: 'salt'},
        {name: 'butter'},
        {name: 'bacon'}
      ]);
    });
};
