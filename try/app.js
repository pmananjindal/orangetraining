const express = require('express')
const app= express()
const port=3002
app.use(express.json());
 
app.get('/',(req, res)=>{
    res.send('hellow new world')
})

app.get('/users',(req, res)=>{
    console.log(req.body)
    res.send('hellow new world for users new!')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
 
})