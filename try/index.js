const express =require("express");
const app = express();
const port = 3003;

const usersRouter = require("./userRoutes");
const connectDB = require('./db');
connectDB();

//use the User routes

app.use("./users", usersRouter);


//start the express server
app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});