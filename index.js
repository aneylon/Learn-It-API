require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hey expresssss')
})

app.listen(port, () => {
  console.log(`Learn It Api running on ${port}`)
})
