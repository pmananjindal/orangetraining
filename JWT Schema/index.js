const connectDB = require('./db');
connectDB();

const express = require("express");


const app= express();
const port= 3000;

app.use(express.json());

const userRouter = require('./loginRoute.js');

app.use('/user',userRouter);

app.listen(port, ()=> {
    console.log("Server is listeing");
});