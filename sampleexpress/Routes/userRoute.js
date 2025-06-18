const express = require('express');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const jwt = require('jsonwebtoken');
const User = require('../Schema/userschema')
const router = express.Router();


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

router.get("/getAllUser", async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
      } catch (err) {
        console.error('Error fetching courses:', err);
        res.status(500).send({ error: 'Failed to fetch users' });
      }
});

router.post("/signup", async (req, res) => {
    console.log(req.body);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    // Insert the data into DB using Schema
    let newUser = new User({
        email: req.body.email,
        password: hashedPassword       
    });
    newUser.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).send({ error: 'Failed to create user' });
    });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: req.body.email })
 
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  } 
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// router.post('/login', async (req, res) => {
//     try {
      
//       const email = req.body.email;
//       const password = req.body.password;     
//       const user_1 = await  User.findOne({ email: email });       
//       const result = await bcrypt.compare(password, user_1.password);
//       console.log(result);
//       const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
//       res.json({ token });
     
//     } catch (err) {
//       console.error('Error fetching course:', err);
//       res.status(500).send({ error: 'Failed to fetch user' });
//     }    
//   });

router.post("/signout", (req, res) => {
    console.log(req.body)   
    res.end("User signout")
});


module.exports = router; 