//userRoutes
const express = require('express');
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/*router.post("/", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }
    const newUser = { id: Date.now(), name, email };
    res.status(201).json(newUser);
});*/

// Temporary
router.post('/', async (req, res) => {
    const { name, email } = req.body;
  
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }
     
    const newUser = new User({ name:name, email:email });

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

  router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required.' });
    }

    const newUser = new User({ name, email, password });
    // Hash the password before saving
    newUser.password = await bcrypt.hash(password, 10);
    console.log('New user', newUser);
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        if (err.code === 11000) {
            res.status(409).json({ error: 'Email already exists.' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
  })

  router.post('/login', async (req, res) => {
    const { email, password } = req.body; 
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password.' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        user.token = token;
        await user.save(); 
        res.status(200).json({ message: 'Login successful', token: token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.post('/logout', async (req, res) => {

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(400).json({ error: 'No token provided.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token.' });
        }

        try {
            const user = await User.findById(decoded.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found.' });
            }

            user.token = null;
            await user.save();

            return res.status(200).json({ message: 'Logout successful' });

        } catch (error) {
            console.error('Error during logout:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

router.get('/usersList', async (req, res) => {
    try {
       const token = req.headers.authorization?.split(' ')[1];
       if (!token) {
           return res.status(401).json({ error: 'Unauthorized' });
       }
       jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: 'Invalid token' });
            }
        });
        const users = await User.find({}, '-password -token');
        res.status(200).json(users);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


   
module.exports = router;
 