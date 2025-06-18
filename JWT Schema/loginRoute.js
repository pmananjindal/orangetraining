const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Course = require('./UserSchema');
const User = require('./UserSchema');
const { config } = require('dotenv');


/*router.get('/', (req,res) => {
    console.log("Inside User Module");
       res.send("<h1>Inside User Module</h1>");
});*/

require('dotenv').config();

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

//router.use(authenticateToken);

router.get('/profile', authenticateToken, (req,res) => {
    res.json({message :'Hello User'});
});

router.post("/login",authenticateToken, async (req, res) => {
    try {
        const user = await User.find({userId : req.body.userId});
        const usrName= req.body.userId;
        var result = bcrypt.compare(req.body,userPassword, user.userPassword);
        console.log(result);
        if(!user)
        {
            return res.status(404).send({error : 'User not found'});
        }
        const token = jwt.sign({usrName},process.env.JWT_SECRET, {expiresIn : '1h'});
        res.json({token});
      } catch (err) {
        console.error('Error fetching User:', err);
        res.status(500).send({ error: 'Failed to fetch User' });
      }
}); 

router.get("/:id", authenticateToken, async (req, res) => {
    try {
        const user = await User.find({userId : req.params.id});
        if(!user)
        {
            return res.status(404).send({error : 'User not found'});
        }
        res.status(200).send(user);
      } catch (err) {
        console.error('Error fetching User:', err);
        res.status(500).send({ error: 'Failed to fetch User' });
      }
}); 

/*router.put("/:id", async (req, res) => {
    try {
        var courseFee = req.body["courseFee"];
        const updatecourses = await Course.findByIdAndUpdate(req.params.id,{courseFee: courseFee, courseDuration : req.body.courseDuration});
        res.status(200).send(updatecourses);
      } catch (err) {
        console.error('Error fetching courses:', err);
        res.status(500).send({ error: 'Failed to fetch courses' });
      }
});*/




router.post("/signin", async (req, res) => {
    console.log(req.body);
    // Insert the data into DB using Schema
    const hashedPassword= await bcrypt.hash(req.body.userPassword,10);
    console.log("hashedPassword" + hashedPassword);

    let newUser = new User({
        userId: req.body.userId,
        userPassword: hashedPassword
    });

    newUser.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).send({ error: 'Failed to create course' });
    });
});



let x=10


router.post("/logout",authenticateToken, (req, res) => {
    console.log(req.body);
    // Insert the data into DB using Schema
    res.send("<h1>Logout</h1>");
});

module.exports = router;