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

module.exports = router