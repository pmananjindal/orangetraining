// const express = require('express');
// const path = require('path');
// const requestDate = require('./datemiddlleware');
// const logger = require('./pinomiddleware')

// const requestDate1 = require('./datemiddlleware');

// const app = express()
// const morgan = require('morgan');

// const port = 3005
// app.use(requestDate1)

const connectDB = require('./mong.js');
connectDB();
const express = require('express')
const app1 = express()
app1.listen(3004,function(){
console.log("Server is running on port 3004 now");
})

// app.use(express.static(path.join(__dirname,'public')));
// app.get('/hi',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index1.html'));
// })

// app.get('/',(req,res)=>{
//     res.send("Hello world!!");
// })
// app.use(express.json());
// //app.use(morgan('dev'));
// //app.use(morgan('combined'));
// //app.use(morgan('tiny'));
// app.use(morgan(':method :url :status - :response-time ms'));




// // app.get('/',(req,res)=>{
// //     res.end("Hello world!!")
// // })

// app.post('/users',(req,res)=>{    
//     console.log(req.body)
//     res.end("Hello world for users!")
// })

// app.get('/products:id/:colour',(req,res)=>{
//     const productId = req.params.id;
//     const colour = req.params.colour;
//     const product = {id:productId,colour:colour,name:'Sample Product',price:100000}
//     res.json(product)
//     console.log("User created sucessfuly!!!")
// })

// app.get('/getUser:id',(req,res)=>{
//     const userId = req.params.id;   
//     const user = {id:userId,name:'Sujit',Address:'LA',city:'LA'}
//     res.json(user)
//     console.log("User created sucessfuly!!!")
// })

// app.put('/updateUser:id',(req,res)=>{
//     const userId = req.params.id;   
//     const user = {id:userId,name:'Sujit',Address:'LA',city:'LA'}
//     res.json(user)
//     console.log("User updated sucessfuly!!!")
// })


// app.delete('/deleteUser:id',(req,res)=>{
//     const userId = req.params.id;   
//     const user = {id:userId,name:'Sujit',Address:'LA',city:'LA'}
//     res.json(user)
//     console.log("User deleted sucessfuly!!!")
// })

// app.post('/createUser',(req,res)=>{
//     console.log(req.body)   
//     res.end("User added")
// })

// app.get('/products',(req,res)=>{
//     res.end("Hello world for Products!")
// })



// app.get('/',(req,res)=>{
//   logger.info(req.requestDate); //get method
//   logger.error(req.name); //get method
//   logger.warn('This is a warning message');
//   // logger.debug('This is a debug message');
//   // logger.trace('This is a trace message');
//   logger.fatal('This is a fatal message');

//     console.log(req.requestDate);
//     console.log(req.name);
//     res.send("Hello world " + req.name);
// })

// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}`)
// })