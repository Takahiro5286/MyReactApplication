/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("weak_info").del();
  await knex("weak_info").insert([
    {
      item: "test_item1",
      text_all: "test_all1",
      text_part: "test_part1",
      number_of_research: 1,
    },
    {
      item: "test_item2",
      text_all: "test_all2",
      text_part: "test_part2",
      number_of_research: 3,
    },
    {
      item: "test_item3",
      text_all: "test_all3",
      text_part: "test_part3",
      number_of_research: 8,
    },
  ]);
};
