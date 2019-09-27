
exports.up = function (knex) {
    return knex.schema.createTable('users', users => {
        users.increments()
        users.string('username', 255).notNullable().unique()
        users.string('password', 255).notNullable()
    })
        .createTable('tasks', task => {
            task.increments()
            task.integer('user_id', 128).notNullable().unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
            task.string('title', 255).notNullable()
            task.string('description', 255).notNullable()
            task.string('segment', 128).notNullable()
            task.string('due_by', 255).notNullable()
            task.boolean('completed').defaultTo(false)
            task.boolean('weekly').defaultTo(false)
            task.boolean('monthly').defaultTo(false)
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tasks')
        .dropTableIfExists('users')
};
