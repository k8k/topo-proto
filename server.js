const express = require('express')

console.log('hello ???')

const app = express()

app.use(express.static('static'))
app.listen(8080)

console.log("running at port 8080")