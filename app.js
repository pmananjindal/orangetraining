const express = require('express')
const app = express()
const port = 3001

app.use(express.json());

app.put('/users/:name/:id/:address',(req,res)=>{
    const userName =req.params.name;
    const userId =req.params.id;
    const address = req.params.address;

    const Users ={name: userName,userId:id,address:address};
res.json(product);
})

app.get('/', (req, res) => {
  res.send('Hello World! get')
})
app.post('/users', (req, res) => {
   console.log(req.body);
  res.send('Hello World! for post 2')
})
app.put('/posts', (req, res) => {
  res.send('Hello World!for put')
})
app.delete('/posts', (req, res) => {
  res.send('Hello World!for delete')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})