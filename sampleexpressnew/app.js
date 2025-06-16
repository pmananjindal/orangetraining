const express = require('express')
const app = express()
const port = 3001

app.use(express.json());

app.delete('/',(req, res) => {
    res.send('Hello world new')
})

app.post('/users',(req, res) => {
    console.log(req.body);
    res.send('Hello world for users new')
})

app.get('/posts',(req, res) => {
    res.send('Hello world for posts new')
})

app.listen(port, () => {
 console.log(`Example app listing on port ${port}`)
})