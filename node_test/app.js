// //app.js
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("Hello, World!!");
// });
// module.exports = app;



// //app.js
// const express = require("express");
// const app = express();
// app.use(express.json());
// app.get("/", (req, res) => {
//     res.json({ message: 'Hello, world!' });
// });

// app.post("/users", (req, res) => {
//     const { name, email } = req.body;
//     if (!name || !email) {
//         return res.status(400).json({ error: 'Name and email are required.' });
//     }
//     const newUser = { id: Date.now(), name, email };
//     res.status(201).json(newUser);
// });


// module.exports = app;
 

//app.js
const express = require("express");
const app = express();
//const userRoutes = require("./routes/userRoutes"); // Import user routes
const userRoutes = require("./userRoutes.js");
app.use(express.json()); // Middleware to parse JSON bodies
// app.get("/", (req, res) => {
//     res.json({ message: 'Hello, world!' });
// });
app.use("/users", userRoutes); // Use user routes
// app.use("/hello", userRoutes); // Use user routes
// app.use("/bye", userRoutes); // Use user routes
module.exports = app;