const express = require ("express");
const router  = express.Router();
router.get("/", (req, res) => {
    res.send("List of payment methods");
});
router.post("/", (req, res) => {
    console.log(req.body);
    res.send("Payment is done");
});

module.exports = router;