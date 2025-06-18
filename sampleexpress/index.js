const connectDB = require('./mong.js');
connectDB();
const Course = require('./Schema/courceschema.js');
const User = require('./Schema/userschema.js');

const courseRoutes = require('./Routes/courseRoute.js');
const paymentRoutes = require('./Routes/paymentRoutes.js')
const userRoutes = require('./Routes/userRoute.js');

const auth = require('./authMiddleware.js');
const express = require('express')

 
const app = express()

app.use(express.json());

app.use('/course', courseRoutes);
app.use('/payment', paymentRoutes);
app.use('/user', userRoutes);

//app.use('/')
app.listen(3002,function(){
    console.log("Server is running on port 3002 now");
})