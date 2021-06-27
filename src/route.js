const express = require('express')

const route = express.Router()

//Route definitions
route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render("room"))
route.get('/create-pass', (req, res) => res.render("create-pass"))

//Format
//route.post('/room/:room/:question/:action',)

module.exports = route