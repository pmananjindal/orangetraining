//const express = require('express')
//const path = require('path');
//const express = require('express')
//const app = express()
//const requestDate = require('./datemiddleware');
//const morgan = require("morgan");
//const logger = require('./pinomiddleware');

const connectDB = require('./db');
connectDB();




//const app = express()
//const port = 3001

//app.use(express.json());
/*app.use(express.static(path.join(__dirname, 'public')));
app.get('/hi', (req, res) => {

  res.sendFile(path.join(__dirname,'public', 'index.html'));
})*/

//app.use(morgan('combined'));
//app.use(morgan('tiny'));
//app.use(morgan('dev'));
//app.use(pinomiddleware);
/*var requestDate = function(req, res, next) {
  //console.log(req);
  req.requestDate = Date.now()
  req.name="vishal";
  next()
}*/
//app.use(requestDate);
//const callingA=()=>{
//  console.log("this is a function callingA");
//}
/*
app.get(('/'), (req, res) => {
  //ogger.info({ method: req.method, url: req.url}, 'Incoming request');

    logger.info(req.requestDate);
    logger.error(req.name);

    //console.log(req.name);
    callingA();
    res.send('Hello world'+ req.name)
  })

app.get('/' , (req,res)=> {
  console.log(req.requestDate);
  console.log(req.name);
  res.send('Hellow world'+ req.name)
})*/

/*app.listen(3000,function(){
  console.log("server is running on port 3000 now");
})*/


/*app.get('/products/:id/:colour',(req, res) => {
    const productId = req.params.id;
    const colourNew = req.params.colour;
    const product = {id: productId, colour: colourNew, name: 'sample product', price: 19.99};
    res.json(product);
});*/

/*
app.post('/users',(req, res) => {
    console.log(req.body);
  res.send('user created successfully');
})

app.get('/users',(req, res) => {
  res.send('List of users');
})

app.put('/users/:userId/:address',(req, res) => {

  var userId = req.params.userId;
  var address = req.params.address;
  //res.json('serdata');
  res.send(`id ${userId} address${address}`);
})

app.delete('/users/:userId',(req, res) => {

  var userId = req.params.userId;
  userData.pop();
  res.send(`id ${userId} has been deleted`);
})*/

/*
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
})*/