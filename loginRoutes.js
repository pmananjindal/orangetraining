const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const UserLogin = require("../Models/userLoginSchema");
router.post("/signup", (req, res) => {
    res.send("Sign in Successfully");
});

router.post("/login", async(req, res) => {
    const username = req.body.username;
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
    res.send("Logged in successfully");
});

router.post("/logout", (req, res) => {
    res.send("Logged out Successfully");
});

module.exports = router;