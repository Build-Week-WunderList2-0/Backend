const db = require('../../data/dbConfig')

module.exports = {
    add,
    findBy,
    findById,
    find,
    update,
    remove,
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

function update(id, changes) {
    return db('tasks').where('id', id).update(changes).then(count => {
        count > 0 ? find(id) : null
    })
}

function remove(id) {
    return db('tasks').where('id', id).del()
}