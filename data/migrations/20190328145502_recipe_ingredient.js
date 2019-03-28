
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe-ingredient', tbl => {
    tbl.increments();

    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredient')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe-ingredient');
};
