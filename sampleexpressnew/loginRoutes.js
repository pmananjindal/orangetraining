const express = require ("express");
const router = express.Router();

router.post("/signup", (req, res) => {
    console.log(req.body);
    res.send("User is successfully signed up!");
});
router.post("/login", (req, res) => {
    console.log(req.body);
    res.send("User is successfully logged in!");
});
router.post("/logout", (req, res) => {
    console.log(req.body);
    res.send("User is successfully logged out!");
});

module.exports = router;

