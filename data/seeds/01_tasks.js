
exports.seed = function (knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('tasks').insert([
    {
      user_id: 1,
      title: "create the seed data",
      description: "this is my descritpion",
      segment: "Personal",
      due_by: "05/29/2020",
      completed: false
    },
    {
      user_id: 1,
      title: "become Mark Zuckerberg",
      description: "that'd be cool",
      segment: "Bizniss",
      due_by: "05/29/2021",
      completed: false
    },
    {
      user_id: 1,
      title: "becomeff Mark Zuckerberg",
      description: "that'd be cool",
      segment: "Bizniss",
      due_by: "05/29/2021",
      completed: false
    }
  ]);
};
