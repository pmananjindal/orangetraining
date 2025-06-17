//import .env variables 
require('dotenv').config();
//import & connect to mongodb
const mongooseDb = require('./db');
mongooseDb();

// const Course = require('./Schemas/CourseSchema');
// const Payments = require('./Schemas/paymentSchema');
const usersRouter = require('./Routes/userRoutes');
const paymentRouter = require('./Routes/paymentRoutes');
const courseRouter = require('./Routes/courseRoutes');
const express = require("express");
const app = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use("/users",usersRouter);
app.use("/payments",paymentRouter);
app.use("/course",courseRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
