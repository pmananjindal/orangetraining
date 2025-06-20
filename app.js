const express = require('express')
// const morgan = require('morgan')
const app = express()
const port = 3000
// const requestDate = require('./datemiddleware.js');
// const logger = require('./pinomiddleware.js');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/hi', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
// app.use(morgan('dev'));
// app.use(morgan('tiny'));
// app.use(morgan('combined'));
// app.use(morgan(':method :url :status - :response-time ms'));

// app.use(requestDate)
// app.get('/', (req, res) => {
  // debugger;

  // logger.info(req.requestDate);
  // logger.error(req.name);
  // logger.warn('This is a warning message');
  // logger.debug('This is a debug message');
  // logger.trace('This is a trace message');
  // logger.fatal('This is a fatal message');

  // console.log(req.requestDate);
  // console.log(req.name);
  // res.send('Hello World ' + req.name)
// })







// app.post('/users', (req, res) => {
// console.log(req.body);
// res.send('user created successfully');
// })
// app.get('/users',(req,res)=>{
// res.send('List of users');
// })
// app.get('/users/:id',(req,res)=>{
// console.log(req.params.id);
// res.send('details of a particular user');
// })
// app.put('/users/:id',(req,res)=>{
// console.log(req.params.id);
// res.send('Edit details of a particular user');
// })
// app.delete('/users/:id',(req,res)=>{
// console.log(req.params.id);
// res.send('Deleting a particular user');
// })
// 
// app.delete('users/:id',(req,res)=>{
// res.send('User deleted successfully');
// })
/////////////////////////////////////////////
// 
//POST method
// app.post('/users', (req, res) =>{
// console.log(req.body);
// res.send('Hello Users!!!!')
// })

//GET method
// app.get('/users/:id', (req,res) =>{
// const userId = req.params.id;
// const user = { id: userId, msg: 'Hello User', country: 'India'};
// res.json(user);
// });

// app.get('/products/:id', (req,res) =>{
// const productId = req.params.id;
// Simulate fetching products data
// const product = { id: productId, name: 'Sample Product', price: 19.99};
// res.json(product);
// });

// app.get('/', (req, res) => {
// res.send('Hello World!')
// })
// 
// app.post('/users', (req, res) => {
// console.log(req.body);
// res.send('Hello World for users!!!!')
// })
// 
// app.get('/posts', (req, res) => {
// res.send('Hello World for posts!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
