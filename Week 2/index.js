const express = require('express')
const app = express()

const bodyParser = require('body-parser');
const port = 3000

app.use(bodyParser.json());

app.post('/', function (req, res) {
  console.log(req.body);
  res.send('Hello World!')
})

app.post('/backend-api/conversation', function (req, res) {
  res.send('Hello World!')
})

app.listen(port)