//import .env variables 
require('dotenv').config();
//import & connect to mongodb
const mongooseDb = require('./dBConnectivity/db');
mongooseDb();

// const Course = require('./Schemas/CourseSchema');
// const Payments = require('./Schemas/paymentSchema');
const usersRouter = require('./routes/userRoutes');
const paymentRouter = require('./routes/paymentRoutes');
const courseRouter = require('./routes/courseRoutes');

const express = require("express");
const app = express();
const port = process.env.APP_PORT;
const authTokenMiddleware = require('./middleware/authenticateTokenMiddleware');

app.use(express.json());
app.use("/users",usersRouter);
app.use(authTokenMiddleware);
app.use("/payments",paymentRouter);
app.use("/course",courseRouter);


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
