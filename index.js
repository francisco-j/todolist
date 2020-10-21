require('dotenv').config()
const express = require('express')
const { taskhRouter } = require('./routes')
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.json())

app.use('/task', taskhRouter)

//app.use(express.static('foo'))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on http://localhost:${port} !`))
