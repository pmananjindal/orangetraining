//app.js
const express = require("express");
const connectDB = require('./dbConnection/db');
const app = express();
const userRoutes = require("./routes/userRoutes"); // Import user routes
app.use(express.json()); // Middleware to parse JSON bodies
app.get("/", (req, res) => {
    res.json({ message: 'Hello, world!' });
});
app.use("/users", userRoutes); // Use user routes
module.exports = app;