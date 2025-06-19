const express = require('express');
const router = express.Router();
const User = require("../models/userModel");

router.post("/", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }
    
    const newUser = new User({ name:name, email:email });
    // res.status(201).json(newUser);

     newUser.save().then((result) => {
            res.status(201).json(result); //res.send(result);
        }).catch((err) => {
            pinologger.error(err);
            res.status(500).send({ error: 'Failed to SignUp User.' });
        });
});
module.exports = router;