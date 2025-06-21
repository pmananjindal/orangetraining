const express = require('express');
const router = express.Router();
const User = require('./userModel.js');


// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
//require('dotenv').config();

// router.post("/", (req, res) => {
//     const { name, email } = req.body;
//     if (!name || !email) {
//         return res.status(400).json({ error: 'Name and email are required.' });
//     }
//     const newUser = { id: Date.now(), name, email };
//     res.status(201).json(newUser);
// });

router.post('/', async (req, res) => {
    const { name, email } = req.body;
  
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }
  
    try {
      const newUser = await User.create({ name, email });
      res.status(201).json(newUser);
    } catch (err) {
      if (err.code === 11000) {
        res.status(409).json({ error: 'Email already exists.' });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  });



  router.get('/hello', (req, res) => {
   res.send({ message: 'Hello, world!' });
}
);
router.get('/bye',   (req, res) =>{
    res.send({ message: 'Bye, world!!!' });
});

 router.get("/", async (req, res) => {
     try {
        const users = await User.find({});
        res.status(200).send(users);
      } catch (err) {
        console.error('Error fetching courses:', err);
        res.status(500).send({ error: 'Failed to fetch users' });
      }
 });
module.exports = router;
 