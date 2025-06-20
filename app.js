//const express = require("express");
//const app = express();
//const port = 3003;


//const usersRouter = require("./userRoutes");


//app.use("/users", usersRouter);


//app.listen(port, () => {
  //console.log(`Server is listening on port ${port}`);
//});

const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Use user routes
app.use("/users", userRoutes);

// Basic route
app.get("/", (req, res) => {
    res.send("Welcome to the Express Server!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

const connectDB = require('../db.js');
connectDB();