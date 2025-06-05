const express = require('express')
const app = express()
const port = 3003

app.use(express.json());

app.get('/',(req,res)=>{
    res.end("Hello world!!")
})

app.post('/users',(req,res)=>{
    console.log(req.body)
    res.end("Hello world for users!")
})

app.get('/products',(req,res)=>{
    res.end("Hello world for Products!")
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})