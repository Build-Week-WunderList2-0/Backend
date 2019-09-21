const express = require('express');

// const User = require('./user-model');

const server = express();

server.use(express.json())


server.get("/", (req, res) =>{
    res.send("yeet")
})


module.exports = server