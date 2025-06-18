const connectDB = require('./db');
connectDB();
require('dotenv').config();
//const Course = require('./courseschema.js');
const userRoutes = require('./userRoutes.js');
//const Payment = require('./paymentschema.js');
 
const courseRoutes = require('./courseRoutes.js');
//const paymentRoutes = require('./paymentRoutes.js');
const express = require('express')
const app = express()
app.use(express.json());
//app.use('/course', courseRoutes);
app.use('/user', userRoutes);
//app.use('/payment', paymentRoutes);
app.listen(3004,function(){
    console.log("Server is running on port 3004 now");
})
const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });