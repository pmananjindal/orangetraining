const express = require("express");
const router = express.Router();
const Payment = require("./paymentSchema");
router.get("/", async (req, res) => {
    try {
        const payments = await Payment.find({});
        res.status(200).send(payments);
    } catch (err) {
        console.error('Error fetching payments:', err);
        res.status(500).send({ error: 'Failed to fetch payments' });
    }
});

router.post("/", (req, res) => {
    console.log(req.body);
    // Insert the data into DB using Schema
    let newPayment = new Payment({
        paymentName: req.body.paymentName,
        paymentId: req.body.paymentId,
        amount: req.body.amount
    });
    newPayment.save().then((result) => {
    res.send(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).send({ error: 'Failed to create payment' });
    });
});
module.exports = router;