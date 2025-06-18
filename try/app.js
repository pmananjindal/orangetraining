 const express = require('express');
 //const morgan = require("morgan");
const path = require('path');
//const pino=require('pino');
const app = express();
const requestData = require('./datemiddleware');
const logger=require('./pinomiddleware')
const port=3002


//const Course =require('./schema.js');


app.use(express.static(path.join(__dirname, 'public')));
//app.use(morgan('dev'));
 app.use(requestData)

app.get('/hi',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// var requestDate = function (req, res, next) {
//   //console.log(req);
//   req.requestDate = Date.now()
//   req.name="Manan";
//   next()
// }


// app.get('/', (req,res)=> {
//   console.log(req.requestDate); //get method
//   console.log(req.name); //get method
//   res.send('Hello World' + req.name) //send response
// })
app.get('/users',(req, res)=>{
   // debugger;
   //logger.info(req.body);
   logger.info(req.requestDate); //get method
  logger.error(req.name); //get method
  logger.warn('This is a warning message');
  // logger.debug('This is a debug message');
  // logger.trace('This is a trace message');
  logger.fatal('This is a fatal message');
     res.send('hellow new world for users new post!')
})

 
 app.listen(port, ()=>{
     console.log(`Example app listening on port ${port}`)
 
})






// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// // ✅ Middleware to parse JSON bodies
// app.use(express.json());

// app.post('/users', (req, res) => {
//   console.log(req.body);
//   res.send('user created successfully');
// })
// app.get('/users',(req,res)=>{
//   res.send('List of users');
// })
// app.get('/users/:id',(req,res)=>{
//   console.log(req.params.id);
//   res.send('details of a particular user');
// })
// app.put('/users/:id',(req,res)=>{
//   console.log(req.params.id);
//   res.send('Edit details of a particular user');
// })
// app.delete('/users/:id',(req,res)=>{
//   console.log(req.params.id);
//   res.send('Deleting a particular user');
// })



// // app.get('/products/:id', (req, res) => {
// //   const productId = req.params.id;
// //   // Simulate fetching product data
// //   const product = { id: productId, name: 'Sample Product', price: 19.99 };
// //   res.json(product);
// // });
// app.delete('users/:id',(req,res)=>{
//   res.send('User deleted successfully');
// })
// // ✅ Serve static files from "public" folder
// // app.use(express.static(path.join(__dirname, 'public')));

// // // ✅ Sample Backend API
// // app.get('/api/message', (req, res) => {
// //   res.json({ message: 'Hello from backend API!' });
// // });

// // // ✅ Fallback to index.html for SPA routing (optional)
// // app.get('/hi', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// // });

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });

// // const express = require('express');
// // const errorHandler = require('./errorHandler');
// // const morgan = require('morgan');
// // const logger = require('./logger');
// // const path = require('path');
// // const app = express();
// // // Middleware to log incoming requests
// // app.use((req, res, next) => {
// //   logger.info({ method: req.method, url: req.url }, 'Incoming request');
// //   next();
// // });

// // // ✅ Serve static files from "public" folder
// // app.use(express.static(path.join(__dirname, 'public')));
// // // app.use(morgan(':method :url :status - :response-time ms'));
// // // Sample route that throws an error
// // // app.get('/', (req, res) => {
// // //   logger.info('Serving home page');
// // //   res.send('Home Page');
// // // });
// // // Optional: Route fallback if needed
// // app.get('/data', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// // });
// // app.get('/custom-error', (req, res, next) => {
// //   console.error('💥 Error:', err.message);
// //   const err = new Error('Custom not found error');
// //   err.status = 404;
// //   next(err);
// // });


// // // Register the error handler AFTER all routes/middleware
// // app.use(errorHandler);

// // app.listen(3000, () => {
// //   console.log('Server running on http://localhost:3000');


// // });














// // const express = require('express')
// // const app= express()
// // const port=3002
// // app.use(express.json());
 
// // app.get('/',(req, res)=>{
// //     res.send('hellow new world')
// // })

// // app.get('/users',(req, res)=>{
// //     console.log(req.body)
// //     res.send('hellow new world for users new!')
// // })


// // app.post('/users',(req, res)=>{
// //     console.log(req.body)
// //     res.send('hellow new world for users new post!')
// // })


// app.put('/users/:id',(req, res)=>{
//     const userId = req.params.id;
// const users= {id: userId, name: 'changedName', address : 'this is new abc address'};
//     console.log(req.body)
//    // console.log(res.body)
//     res.send('hellow new world for users update!')
// })

// app.delete('/users/:id',(req, res)=>{
//     const userId = req.params.id;
// const users= {id: userId, name: 'changedName', address : 'this is new abc address'};
//     console.log(req.body)
//      res.send(`user with ID ${userId} deleted`);
//    // console.log(res.body)
// })


// // app.get('/products/:id/:name',(req, res)=>{
// //     const productId = req.params.id;
// //     const nameId = req.params.name;
// //     const product= {id: productId, name: nameId, price : 19.99};
// //     res.json(product);
// //    // console.log(req.body)
// //    // res.send('hellow new world for products new!')
// // })

// app.listen(port, ()=>{
//     console.log(`Example app listening on port ${port}`)
 
// })