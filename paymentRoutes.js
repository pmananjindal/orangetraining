const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("List of Payments");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Create Payment");
});

module.exports = router;