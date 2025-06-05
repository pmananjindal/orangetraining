const express = require('express')
const app = express()
const port = 3004
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/users', (req, res) => {
   // console.log(req.body);
  res.send('Hello World! for users 2')
})
app.get('/posts', (req, res) => {
  res.send('Hello World!for ports')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
