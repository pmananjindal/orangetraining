const express = require('express')
const app = express()
const port = 3006
//const middleWare = require('./middleware.js')
//app.use(express.json());
//const morgan = require("morgan");
//app.use(morgan('dev'));
//const logger = require('./pinomiddleware.js')

const connectDB = require('./db.js');
connectDB();
//const Course = require('./schedma.js')

app.use(express.static(path.join(__dirname, 'public')));
app.get('/hi',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
 

//app.use(middleWare)
//const callingA=()=>{
 // console.log("This is a fucnton calling A");
//}

/*app.get('/', (req, res) => {
  logger.info(req.requestDate); //get method
  logger.error(req.name); //get method
  logger.warn('This is a warning message');
  // logger.debug('This is a debug message');
  // logger.trace('This is a trace message');
  logger.fatal('This is a fatal message');
  callingA();
  res.send('Hello World' + req.name);
})
app.get('/', (req,res)=> {
  console.log(req.requestDate); //get method
  console.log(req.name); //get method
  res.send('Hello World ' + req.name + req.requestDate) //send response
})
/*
app.get('/products/:id_1/:colour', (req, res) => {
  const productId = req.params.id_1;
  const colour = req.params.colour;
  //simulate fetching pruduct data
  const product = {id: productId, coulour: colour, name:'Sample Product', price: 19.99}
//    console.log(req.body);
  res.json(product);
})

app.get('/users', (req, res) => {
  res.send('Hello World for user1!')
})
app.get('/posts', (req, res) => {
  res.send('Hello World for posts!')
})*/

//CRUD APIs
app.post('/name', (req, res) => {
  console.log(req.body);
  const userId = req.params.userId;
  const userName = req.params.name;
  const user = {id: userId, name: userName, category: "student"}
  res.send('Posted data successfully!')
});

app.get('/users', (req, res) =>{
  res.send('Get data for all users');
})
app.get('/:userId', (req, res) => {
  const userID = req.params.userID;
  const user = {id:userID};
  res.send('Got data successfully!');
});
app.put('/user/:Id', (req, res) => {
  const userId = req.params.Id;
  const user = {id: userId}
  res.send('Put data successfully!');
});
app.delete('/:Id', (req, res) => {
  const userId = req.params.Id;
  const user = {id: userId}
  res.send('Deleted data successfully!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
