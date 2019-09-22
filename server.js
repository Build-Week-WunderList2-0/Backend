const express = require('express');
const authRouter = require('./api/User/user-router')
const taskRouter = require('./api/Tasks/task-router')

const server = express();

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/auth', authRouter)
server.use('/tasks', taskRouter)

server.get("/", (req, res) => {
    res.send("yeet")
})


module.exports = server