const express = require ("express");
const bcrypt = require ("bcryptjs");
const router  = express.Router();
const jwt = require('jsonwebtoken');
const user = require('../models/userSchema');
require('dotenv').config();
//const authenticateToken = require ("authenticateToken");
// Middleware to protect routes
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];
 
  if (!token) return res.sendStatus(401);
 
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    //req.user = user;
    next();
  });
}
router.post("/signup",async (req, res) => {
    console.log(req.body);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    //Insert the data into DB using schema
    /*let newUser = new user({
        email: req.body.email,
        password: hashedPassword 
    })*/
    const newUser = await user.create({ email:req.body.email, password: hashedPassword});
    res.send("User is successfully signed up!");
    
});
router.post("/login", (req, res) => {
    const username = req.body.username;
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
    //res.send("User is successfully logged in!");
});
// Protected route
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Hello user' });
});

router.post("/logout", (req, res) => {
    console.log(req.body);
    res.send("User is successfully logged out!");
});

module.exports = router;