const express = require('express')
const app = express()
const port = 9000123

app.get('/', (req, res) =>
  res.send('Greetings from arisavaich...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
