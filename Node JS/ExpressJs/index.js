const express = require("express");
//import .env variables 
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT;

//import & connect to mongodb
const mongooseDb = require('./db');
mongooseDb();

const usersRouter = require('./userRoutes');
const paymentRouter = require('./paymentRoutes');

app.use("/users",usersRouter);
app.use("/payments",paymentRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
