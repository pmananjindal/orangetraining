const express = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const router = express.Router();
const User = require('../models/userModel');
// const middle = require('../middleware/middleware');

// Middleware to protect routes
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    next();
  });
}

// creating user
// router.post("/signup", async (req, res) => {
//     console.log(req.body);
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     console.log(hashedPassword);
//     // Insert the data into DB using Schema
//     let newUser = new User({
//         email: req.body.email,
//         // password: hashedPassword,
//         password: req.body.password
//     });
//     newUser.save().then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         // console.error('Error fetching user:', err);
//         // res.status(500).send({ error: 'Signup failed...' });
//         if (err.code === 11000) {
//             res.status(409).json({ error: 'Email already exists.' });
//         } else {
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     });
// });

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if (!password || !email) {
        return res.status(400).json({ error: 'email and password are required.' });
    }

    try {
        const newUser = await User.create({ email, password });
        res.status(201).json(newUser);
    } catch (err) {
        if (err.code === 11000) {
            res.status(409).json({ error: 'Email already exists.' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

//login user
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const userLogin = await User.findOne({ email: email });
    if (!userLogin || !(await bcrypt.compare(password, userLogin.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });

});

// Protected route
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Hello user' });
});

// logout user
router.post("/logout", (req, res) => {
  res.send("You have Logged Out successfully!!!");
});


// router.post('/', async (req, res) => {
//     const { name, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).json({ error: 'name and password are required.' })
//     }
//     try {
//         const newUser = await User.create({ email, password });
//         res.status(201).json(newUser);
//     } catch (err) {
//         if (err.code === 11000) {
//             res.status(409).json({ error: 'email already exists' });
//         } else {
//             res.status(500).json({ error: 'internal server error' });
//         }
//     }
// });


module.exports = router;
