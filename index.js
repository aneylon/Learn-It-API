const express = require('express')
const app = express()
const port = 3700

app.get('/', (req, res) => {
  res.send('Hey express')
})

app.listen(port, () => {
  console.log(`Learn It Api running on ${port}`)
})
