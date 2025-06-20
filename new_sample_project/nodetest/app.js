const express = require("express");
const app = express();
const connectDB = require('./db');
//require('dotenv').config();
connectDB();
const userlogin = require('./models/userschema.js');
const userRoutes = require("./routes/usertestroutes"); // Import user routes
app.use(express.json()); // Middleware to parse JSON bodies
app.get("/", (req, res) => {
    res.json({ message: 'Hello, world!' });
});
app.use("/users", userRoutes); // Use user routes
module.exports = app;