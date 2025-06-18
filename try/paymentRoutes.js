// const express = require("express");
// const router1 = express.Router();
// //Define user routes
// router1.get("/", (req, res)=>{
//     console.log("my code");

// });


// router1.post("/", (req, res) => {
//     console.log(req.body);
//     // Insert the data into DB using Schema
//     let newPayment = new Payment({
//         paymentName: req.body.paymentName,
//         payId: req.body.payId,
//         payDuration: req.body.payDuration,
//         payAmount: req.body.payAmount
//     });
//     newPayment.save().then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         console.error(err);
//         res.status(500).send({ error: 'Failed to create payemnt' });
//     });
// });
// module.exports = router1;
