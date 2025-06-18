const express = require('express');
const paymentRouter = express.Router();

paymentRouter.get("/",(req,res)=>{
    res.send("Pyment !!!")
})

paymentRouter.post("/",(req,res)=>{
    console.log(req.body)
    res.send("create payment")
})

module.exports = paymentRouter;