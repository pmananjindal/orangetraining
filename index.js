const express = require("express");
const app = express();
const port = 3010; // Set your desired port number
// Import the user routes from the route module
const connectDB =require('./db.js');
const db = connectDB();
//connectDB();
//const usersRouter = require("./userRoutes");
//const paymentRouter = require("./paymentRoutes");
// Use the user routes
//app.use("/users", usersRouter);
//app.use("/payment", paymentRouter);
// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

