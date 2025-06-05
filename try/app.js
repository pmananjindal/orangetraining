const express = require('express')
const app= express()
const port=3002
app.get('/',(req, res)=>{
    res.send('hellow new world')
})

app.get('/users',(req, res)=>{
    res.send('hellow new world for users new!')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
 
})