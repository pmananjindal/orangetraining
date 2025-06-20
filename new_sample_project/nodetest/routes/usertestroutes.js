const express = require('express');
const router = express.Router();
router.post("/", async (req, res) => {
    const { name } = req.body;
     const { email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }
    const newUser = { id: Date.now(), name, email };
    res.status(201).json(newUser);
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
 
module.exports = router;