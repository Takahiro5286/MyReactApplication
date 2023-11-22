/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("weak_info", function (table) {
    table.increments("id").primary(); // Set this column as the primary key
    table.string("item", 64).notNullable();
    table.string("text_all");
    table.string("text_part");
    table.integer("number_of_research", 8);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("weak_info");
};
