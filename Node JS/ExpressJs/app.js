const express = require('express')
const stringDecoder = require('string_decoder').StringDecoder;
const dateMiddleware = require('./requestDateMiddleware');

const app = express()
const port = 3000

//To read data from request bofy
app.use(express.json());
app.use(dateMiddleware);

// const port2 = 3005
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/test', (req, res) => {
  res.send('Hello Tests!!!')
})

app.get('/posts', (req, res) => {
    res.send('Hello Posts!')
})

app.get('/products/:prodid/:name/:price/:color', (req, res) => {
  const productId = req.params.prodid;
  const  prodname = req.params.name;
  const price = req.params.price;
  const color = req.params.color; 
  const product = {id:productId, name:prodname,price:price,color:color}
  res.json(product);
})

var userData = [];
app.post('/users', (req, res) => {
    const userParam = req.body;
    userParam.userId = 1;
    userData.push(req.body);
    
    res.send('user created successfully!');
  })

app.get('/users', (req, res) => {
   res.json(userData);
})


app.get('/middleware', (req, res) => {
  res.send(`middleware page ${req.requestDate} ${req.name} ${res.value} ${req.myurl}`)
})


app.put('/users/:userId/:address', (req, res) => {
  var userId = req.params.userId;
  var address = req.params.address;

  userData[0]["address"] = address;
  res.send(`User with Id ${userId} has been updated with Address:${address} !`)
})

app.delete('/users/:userId', (req, res) => {
  var userId = req.params.userId;
  userData.pop();
  res.send(`User with Id ${userId} has been deleted !`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.listen(port2, () => {
//     console.log(`Example app listening on port ${port2}`)
//   })