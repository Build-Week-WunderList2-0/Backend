const db = require('../../data/dbConfig')

module.exports = {
    add,
    findBy,
    findById,
    find,
}

function find() {
    return db('tasks').select('id', 'user_id', 'title', 'description', 'segment', 'due_by', 'completed')
}

function findBy(filter) {
    return db('tasks').where(filter)
}

function findById(id) {
    return db('tasks').where({ id }).first()
}

async function add(task) {
    const [id] = await db('tasks').insert(task)
    return findById(id)
}