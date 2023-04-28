/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('Tasks').truncate();
  await knex('Resources').truncate();
  await knex('Projects').truncate();

  await knex('Projects').insert([
    {
      project_id: 1,
      project_name: 'Order Pizza',
      project_description: "",
      project_completed: true
    },
    {
      project_id: 2,
      project_name: 'Portfolio Page',
      project_description: "",
      project_completed: true
    },
    {
      project_id: 3,
      project_name: 'E-Commerce Page',
      project_description: "",
      project_completed: false
    }
  ]);

  await knex('Resources').insert([
    {
      resource_id: 1,
      resource_name: 'Resource_First',
      resource_description: "First"
    },
    {
      resource_id: 2,
      resource_name: 'Resource_Second',
      resource_description: "Second"
    }
  ]);

  await knex('Tasks').insert([
    {
      task_id: 1,
      task_description: "First",
      task_notes: 'Task_First',
      task_completed:false,
      project_id: 1
    },
    {
      task_id: 2,
      task_description: "Second",
      task_notes: 'Task_Second',
      task_completed:false,
      project_id: 1
    }
  ]);
};
