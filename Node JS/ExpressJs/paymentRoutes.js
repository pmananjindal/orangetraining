const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("payments page!");
});

router.get('/:id',(req,res)=>{
    res.send(`payments page with id ${req.params.id} !`);
});


module.exports = router;
