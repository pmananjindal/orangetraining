const connectDB = require('../cli/my node/utility/db.js');
connectDB();

const courseRoutes = require('./courseRoutes.js');
//const paymentRoutes = require('./paymentRoutes.js');
//const userRoutes = require('./userRoutes.js');
const userRoutes = require('../cli/routes/userRoutes.js');

const express = require('express')
const app = express()
app.use(express.json());
app.use('/course', courseRoutes);
//app.use('/payment', paymentRoutes);
app.use('/user', userRoutes);
app.listen(3004, function(){
    console.log("Server is running on port 3004 now");
});