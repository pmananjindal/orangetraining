const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const userdetails = require("../Models/userloginSchema");

router.post("/userdetails", async (req, res) => {
    console.log(req.body);
    // Insert the data into DB using Schema
    const hashedPassword = await bcrypt.hash( req.body.password, 10);
    let newuserdetails = new userdetails({
        username: req.body.username,
        password: hashedPassword,
    });
    newuserdetails.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).send({ error: 'Failed to insert details' });
    });
});
router.post("/signup", async (req, res) => {
   const username = req.body.username;
   const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, 10);
  res.send({hashedPassword});
});
router.post("/login", async(req, res) => {
 const { username, password } = req.body;
 const user = await userdetails.findOne({ username: req.body.username })
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});
router.post("/logout", (req, res) => {
  res.send("Logged out Succusfully");
});

router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Hello user '});
});

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


 module.exports = router;