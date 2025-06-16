const express = require('express');
const app = express();
const port = 3001;

const connectDB = require('./db.js');
connectDB();
//const Course = require('./schema.js');

const userRouter = require("./userRoutes.js");
// const paymentRouter = require("./paymentRoutes");

app.use("/users", userRouter);
// app.use("/payment", paymentRouter);

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});
