const express = require("express");
const User = require("./userschema");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const router = express.Router();
require('dotenv').config();

// Middleware to protect routes
function authenticateToken(req, res, next) {
const authHeader = req.headers['authorization'];
const token = authHeader?.split(' ')[1];

if (!token) return res.sendStatus(401);

jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
if (err) return res.sendStatus(403);
//req.user = user;
next();
});
}


router.get("/profile",authenticateToken, (req,res)=>{
// res.json({ message: 'Hello user });
res.send("create profile");
});

//add user routes
router.post("/signup", async(req, res)=>{
const password = req.body.password;
const email = req.body.emailId;
    console.log(req.body);
    console.log(req.body.emailId);
const hashedPassword = await bcrypt.hash(password, 10);
console.log(hashedPassword);
// Insert the data into DB using Schema
let newUser = new User({
    email: req.body.emailId,
    password: hashedPassword
});
newUser.save().then((result) => {
    res.send(result);
}).catch((err) => {
    console.error(err);
    res.status(500).send({ error: 'Failed to create user' });
});
//res.send("create signup");
});

// router.post("/login", async (req, res)=>{
//     const email= req.body.email;
//     const password= req.body.password;
//     const user_1 = await User.findOne({ email: email });
// const result = await bcrypt.compare(password, user.password);
// console.log(result);

//       const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
//   res.json({ token });

// });
router.post('/login', async (req, res) => {
    const email= req.body.emailId;
    const password= req.body.password;
    console.log(req.body);
//const { username, password } = req.body;
//const user = await User.findOne({ emailId: email })
const user = await User.findOne({ email });
console.log(user);

if (!user || !(await bcrypt.compare(password, user.password))) {
return res.status(401).json({ message: 'Invalid credentials' });
}

const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
res.json({ token });
});

router.post("/signout", (req, res)=>{
console.log(req.body);
res.send("create signout");
});

module.exports = router;
