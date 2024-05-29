const express = require('express')
const app = express()

const bodyParser = require('body-parser');
const port = 3001

// app.use(bodyParser.json());

function sum(n){
    let ans = 0;

    for(let i =1; i<=n; i++){
        ans = ans+i;   
    }
    return ans;
}

app.get('/', function (req, res) {
  const n = req.query.n;
  const ans = sum(n);
  res.send('Your answer is' + ans);
})

// app.post('/backend-api/conversation', function (req, res) {
//   res.send('Hello World!')
// })

app.listen(port)