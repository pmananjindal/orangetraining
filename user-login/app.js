const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: 'User details recieved' });
});

app.use("/auth", userRoutes);
module.exports = app;