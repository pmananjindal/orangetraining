//app.js
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("Hello, World!!");
// });
// module.exports = app;
// 

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes"); // Import user routes
app.use(express.json()); // Middleware to parse JSON bodies
app.get("/", (req, res) => {
    //   res.send("Hello, World!!");
    res.json({ message: 'Hello, world!' });
});
app.use("/users", userRoutes); // Use user routes
module.exports = app;