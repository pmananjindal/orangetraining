const connectDB = require('./db');
connectDB();
//const Course = require('./routes/courseSchema.js');
//const Payment = require('./routes/paymentSchema.js');
const userRoutes = require('./routes/userRoutes.js');

const courseRoutes = require('./routes/courseRoutes.js');
//const paymentRoutes = require('./routes/paymentRoutes.js');


const express = require('express')
const app = express()
app.use(express.json());

app.use('/course', courseRoutes);
//app.use('/payment', paymentRoutes);
app.use('/auth', userRoutes);

app.listen(3000,function(){
    console.log("Server is running on port 3000 now");
})