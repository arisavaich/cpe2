const express = require('express')
const app = express()
const port = 9123

app.get('/', (req, res) =>
  res.send('Greetings from arisavaich...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
