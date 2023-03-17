/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('Projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 256).notNullable()
        tbl.string('project_description')
        tbl.boolean('project_completed').defaultTo(false)
    })
        .createTable('Resources', tbl => {
            tbl.increments('resource_id')
            tbl.string('resource_name', 128)
                .notNullable()
                .unique()
            tbl.string('resource_description')
        })
        .createTable('Tasks', tbl => {
            tbl.increments('task_id')
            tbl.string('task_description').notNullable()
            tbl.string('task_notes')
            tbl.boolean('task_completed').defaultTo(false)
            tbl.integer('project_id')
                .references('project_id')
                .inTable('Projects')
        })
        .createTable('Task_Resources', tbl => {
            tbl.increments('task_resource_id')
            tbl.integer('task_id')
                .unsigned()
                .notNullable()
                .references('task_id')
                .inTable('Tasks')
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('Resources')
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('Task_Resources')
        .dropTableIfExists('Tasks')
        .dropTableIfExists('Resources')
        .dropTableIfExists('Projects')
};
