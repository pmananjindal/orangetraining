const express = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const router = express.Router();
const User = require("./userSchema");
// const middleware = require('./middleware');
// middleware.authenticateToken();

//Middleware to protect routes
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    // req.user = user;
    next();
  });
}

// creating user
router.post("/signup", async (req, res) => {
  console.log(req.body);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  console.log(hashedPassword);
  // Insert the data into DB using Schema
  let newUser = new User({
    email: req.body.email,
    password: hashedPassword,
  });
  newUser.save().then((result) => {
    res.send(result);
  }).catch((err) => {
    console.error('Error fetching user:', err);
    res.status(500).send({ error: 'Signup failed...' });
  });
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

  // const userLogin = await User.find({ email: req.body.email, password: req.body.password });
  // if (!userLogin) {
  // return res.status(404).send({ error: 'user not found' });
  // }
  // const token = jwt.sign({ userLogin }, process.env.JWT_SECRET, { expiresIn: '1h' });
  // res.json({ token });
  // } catch (err) {
  // console.error('Error fetching user:', err);
  // res.status(500).send({ error: 'Failed to fetch user' });
  // }
});

// Protected route
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Hello user' });
});

// logout user
router.post("/logout", (req, res) => {
  res.send("You have Logged Out successfully!!!");
});



// Define user routes
// router.get("/", (req, res) => {
// res.send("List of users");
// });

// router.get("/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID: ${userId}`);
// });
// router.post("/", (req, res) => {
//   // Create a new user
//   res.send("User created");
// });
// router.put("/:id", (req, res) => {
//   // Update user information
//   const userId = req.params.id;
//   res.send(`User ID ${userId} updated`);
// });
// router.delete("/:id", (req, res) => {
//   // Delete a user
//   const userId = req.params.id;
//   res.send(`User ID ${userId} deleted`);
// });

module.exports = router;