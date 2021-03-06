const router = require('express').Router()
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const Users = require('./user-model')
const secrets = require('../../config/secret')

router.post('/register', (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash
    Users.add(user)
        .then(saved => {
            res.status(201).json({ saved })
        })
        .catch(err => {
            res.status(500).json({ err })
        })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body
    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                console.log(user)
                const token = generateToken(user)
                res.status(200).json({ user_id: user.id, token:token })
            }
            else {
                res.status(401).json({ message: 'invalid credentials' })
            }
        })
        .catch(err => {
            res.status(500).json({ err })
        })
})

function generateToken(user) {
    const payload = {
        username: user.username
    }
    const options = {
        expiresIn: '5d',
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router