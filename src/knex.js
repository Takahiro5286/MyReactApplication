// const config = require("../knexfile");
// const knex = requre("knex")(config);
// module.exports = knex;

knex = require("knex");
config = require("../knexfile");
database = knex(config);

module.exports = database;
