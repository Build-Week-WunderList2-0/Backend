const router = require('express').Router()
const Tasks = require('./task-model')

router.post('/add', (req, res) => {
    let task = req.body
    Tasks.add(task)
        .then(saved => {
            res.status(201).json({ saved })
        })
        .catch(err => {
            res.status(500).json({ err })
        })
})

router.get('/all', (req, res) => {
    Tasks.find()
        .then(gotem => {
            res.status(200).json({ gotem })
        })
        .catch(err => {
            res.status(500).json({ err })
        })
})

router.get('/:id', (req, res) => {
    const id = req.params
    console.log(id)
    Tasks.findBy(id)
        .then(result => {
            res.status(201).json({ result })
        })
        .catch(err => {
            res.status(500).json({ err })
            console.log(err)
        })
})

router.put('/update/:id', (req, res) => {
    const { id } = req.params
    const task = req.body
    Tasks.update(id, task)
        .then(response => {
            if (response === 0) {
                res.status(404).json({ message: 'there is no user by that ID' })
            }
            else {
                Tasks.find(id)
                    .then(user => {
                        res.status(201).json(user)
                    })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'there was a mistake' })
            console.log(err)
        })

})

module.exports = router