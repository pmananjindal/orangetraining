const express = require("express");
const router = express.Router();
// Define user routes
router.get("/", (req, res) => {
  res.send("List of Payment");
});
// router.get("/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID: ${userId}`);
// });
router.post("/", (req, res) => {
 console.log(req.body);
  res.send("Payment Succesful");
});


module.exports = router;