exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("cars", function(table) {
    table.increments();
    table.integer("VIN");
    table.string("make");
    table.string("model");
    table.integer("mileage");
    table.string("transmission");
    table.string("title");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cars");
};
