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
          
        if (task.completed ===  0){
          task.completed = false
        }
        if (task.completed ===  1){
         task.completed = true
        }
        
        if(task.weekly === 0){
          task.weekly = false
        }
        if(task.weekly === 1){
          task.weekly = true
        }
        if(task.monthly === 0){
          task.monthly = false
        }
        if(task.monthly === 1){
          task.monthly = true
        }
        

        return task
        
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