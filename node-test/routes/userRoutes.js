const express = require('express');
const router = express.Router();
router.post("/", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }
    const newUser = { id: Date.now(), name, email };
    res.status(201).json(newUser);
});
module.exports = router;

