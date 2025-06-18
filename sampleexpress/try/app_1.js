const connectDB = require('./db');
connectDB();
const Course = require('./models/courseSchema.js');
const Payment = require('./models/courseSchema.js');
const courseRoutes = require('./routes/courseRoutes.js');
//const paymentRoutes = require('./routes/paymentRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const express = require('express')
const app = express()
app.use(express.json());
app.use('/course', courseRoutes);
//app.use('/payment', paymentRoutes);
app.use('/user', userRoutes);
app.listen(3003,function(){
    console.log("Server is running on port 3003 now");
})