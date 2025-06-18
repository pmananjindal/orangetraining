const express = require("express");
const User = require("./userSchema");
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();
//Define user routes
 
 
//add user routes
router.post("/signup", (req, res)=>{
  console.log(req.body);
res.send("create signup");
});
 
router.post("/login", (req, res)=>{
  console.log(req.body);
res.send("create login");
});
const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
 
router.post("/signout", (req, res)=>{
  console.log(req.body);
res.send("create signout");
});
 
module.exports = router;