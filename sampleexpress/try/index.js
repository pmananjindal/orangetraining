const express = require("express");
const app = express();
const port = 3003; // set desired port
const connectdb = require("./db.js");
const db = connectdb();

// import the user routes from route module
const usersRouter = require("./userRoutes");

//use the user routes
app.use("/users", usersRouter);

//start the exoress server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
