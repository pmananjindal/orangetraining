const express = require("express");
const router = express.Router();

//define user routes
router.get("/", (req, res) => {
    res.send("list of users");
});

router.get("/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`user id : ${userId}`);
});

router.post("/", (req, res) => {
    res.send("user created");
});

router.put("/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID ${userID} updated`);
});

router.delete("/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`USER ID ${userId} deleted`);
});

module.exports =  router;