//const express = require('express')
//const app = express()
//const port = 3003
 
//app.use(express.json());
 
//app.get('/',(req,res)=>{
//    res.end("Hello world!!")
//})
 
//app.post('/users',(req,res)=>{
//    console.log(req.body)
//    res.end("Hello world for users!")
//})
 
//app.get('/products',(req,res)=>{
//    res.end("Hello world for Products!")
//})
//app.listen(port,()=>{
    //console.log(`Example app listening on port ${port}`)
//})

const express = require('express')
const app = express()
const path = require('path');
const port = 3003

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})

app.use(express.static(path.join(__dirname, 'public')));
app.get('/hi',(req,res)=>{
res.sendFile(path.join(__dirname, 'public', 'ind1.html'));
})
// const middleware = require('./datemiddleware.js');
// //const morgan = require("morgan");
// const logger = require('./pinomiddlware.js');
// var requestDate = function (req, res, next) {
//   //console.log(req);
//   req.requestDate = Date.now()
//    req.name="Tejas P";
//    next()
// }

//app.get('/',(req,res)=>{
  //  debugger;
   //res.end("Hello world!!")
//})
// app.use(middleware)
// app.use(morgan('dev'));
//app.use(morgan(':method :url :status - :response-time ms')); 
//  app.use(morgan('tiny')); 
//app.use(morgan('combined'));

 
// app.get('/', (req,res)=> {
// logger.info(req.requestDate); //get method
//   logger.error(req.name); //get method
//   logger.warn('This is a warning message');
//   // logger.debug('This is a debug message');
//   // logger.trace('This is a trace message');
//   logger.fatal('This is a fatal message');
//   console.log(req.requestDate); //get method
//   console.log(req.name); //get method
//   res.send('Hello World' + ' ' +  req.name) //send response


// })
 

//app.get('/users',(req,res)=>{
  //  res.send('Hello worled user1');
//})


//app.post('/posts',(req,res)=>{
  //  res.send('Hello worled user1');
//})