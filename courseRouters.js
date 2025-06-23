const express = require("express");
const router =express.Router();
router.get("/",(req,req)=>{
    res.send("List of Courses");

});
router.post("/",(req,res)=>{
    console.log(req.body);
    res.send("Create Course");
});
module.exports=routers;
