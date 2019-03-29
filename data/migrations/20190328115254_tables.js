
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dish', (tbl) => {
        tbl.increments();
        tbl
          .string('name', 128)
          .notNullable()
          .unique();
    })
    .createTable('recipes', (tbl) => {
        tbl.increments();
        tbl
          .string('name', 128)
          .notNullable();
        tbl
          .integer('dish_id') // the column name in this table (users)
          .unsigned()
          .references('id') // primary key in the related (parent) table (roles)
          .inTable('dish')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
    })
    .createTable('ingredient', (tbl) => {
        tbl
          .increments();
        tbl
          .string('name', 128).notNullable();
    })
    .createTable('recipe-ingredient', tbl => {
        tbl.increments();
    
        tbl
          .integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
    
        tbl
          .integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredient')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('dish')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredient')
    .dropTableIfExists('recipe-ingredient');
};
