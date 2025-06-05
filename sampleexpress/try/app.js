const express = require('express')
const app = express()
const port = 3004

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.body);
  res.send('Hello World!')
})
app.get('/users', (req, res) => {
  res.send('Hello World for user1!')
})
app.get('/posts', (req, res) => {
  res.send('Hello World for posts!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
