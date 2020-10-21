require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const path = require('path');
const { taskhRouter } = require('./routes')

const app = express()
app.use(bodyparser.json())

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public', 'index.html')))
app.use('/tasks', taskhRouter)

//app.use(express.static('foo'))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on http://localhost:${port} !`))
