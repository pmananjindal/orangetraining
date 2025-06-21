const express = require("express");
const app = express();
const userRoutes = require("./Routes/userRoutes.js");
app.use(express.json()); // Middleware to parse JSON bodies
app.use("/users", userRoutes); // Use user routes
module.exports = app;