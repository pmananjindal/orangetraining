const connectDB = require('./db');
connectDB();

const courseRoutes = require('./courseRoutes.js');
//const paymentRoutes = require('./paymentRoutes.js');
const userRoutes = require('./userRoutes.js');

const express = require('express')
const app = express()
app.use(express.json());
//const midware=require('./middleware');
//app.use(midware);
app.use('/course', courseRoutes);
//app.use('/payment', paymentRoutes);
app.use('/user', userRoutes);
app.listen(3004,function(){
    console.log("Server is running on port 3004 now");
})