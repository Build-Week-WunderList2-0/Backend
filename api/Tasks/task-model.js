const db = require('../../data/dbConfig')

module.exports = {
    add,
    findBy,
    findById,
    find,
    findAll,
    update,
    remove,
}

function findAll() {
    return db('tasks').select('id', 'user_id', 'title', 'description', 'segment', 'due_by', 'completed')
}



function find(id) {
    return db('tasks')
    .join('users', 'tasks.user_id', "users.id")
    .select( 'tasks.id', 'tasks.user_id', 'tasks.title', 'tasks.description', 'tasks.segment', 'tasks.due_by', 'tasks.completed', 'tasks.weekly',  'tasks.monthly')
    .where({ "user_id" : id})
    .then(r =>{
        console.log(r)
      const change= r.map( task =>{
          console.log(task)
        if (task.completed ===  0){
          return {...task, completed: false, weekly: false, monthly:false}
        }
        else{
          return {...task, completed: true}
        }
      })
      return change
    })
    
  }


function findBy(filter) {
    return db('tasks').where(filter)
}

function findById(id) {
    return db('tasks').where({ id }).first()
}

async function add(task) {
    const [id] = await db('tasks').insert(task, "id")
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