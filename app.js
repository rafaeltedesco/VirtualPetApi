const express = require('express')
const app = express()

app.use(express.json())
app.use('/api/v1/users', require('./src/routes/users.routes'))

module.exports = app