/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('Projects', tbl=>{
    tbl.increments('project_id');
    tbl.string('project_name',64).notNullable();
    tbl.string('project_description',128);
    tbl.boolean('project_completed').defaultTo(false);
  })
  .createTable('Resources', tbl=>{
    tbl.increments('resource_id');
    tbl.string('resource_name',64).notNullable().unique();
    tbl.string('resource_description',128);
  })
  .createTable('Tasks', tbl=>{
    tbl.increments('task_id');
    tbl.string('task_Description',128).notNullable();
    tbl.string('task_notes',128);
    tbl.boolean('task_completed').defaultTo(false);
    tbl.integer('project_id',32)
    .notNullable()
    .unsigned()
    .references('project_id')
    .inTable('Projects')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Tasks')
                    .dropTableIfExists('Resources')
                    .dropTableIfExists('Projects');
};
