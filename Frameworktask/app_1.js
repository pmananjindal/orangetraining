const connectDB = require('./db');
connectDB();

//const Course = require('./courseSchema.js');
//const Payment = require('./paymentSchema.js');
const userRoutes = require('./userRoutes.js');

const courseRoutes = require('./courseRoutes.js');
//const paymentRoutes = require('./paymentRoutes.js');


const express = require('express')
const app = express()
app.use(express.json());

app.use('/course', courseRoutes);
//app.use('/payment', paymentRoutes);
app.use('/auth', userRoutes);

app.listen(3000,function(){
    console.log("Server is running on port 3000 now");
})