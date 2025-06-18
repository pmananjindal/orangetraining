const express = require("express");
const router = express.Router();
// Define user routes
router.get("/", (req, res) => {
  res.send("List of users");
});
// router.get("/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID: ${userId}`);
// });
// router.post("/", (req, res) => {
//   // Create a new user
//   res.send("User created");
// });
// router.put("/:id", (req, res) => {
//   // Update user information
//   const userId = req.params.id;
//   res.send(`User ID ${userId} updated`);
// });
// router.delete("/:id", (req, res) => {
//   // Delete a user
//   const userId = req.params.id;
//   res.send(`User ID ${userId} deleted`);
// });
module.exports = router;