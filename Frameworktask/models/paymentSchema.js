const mongoose = require('mongoose');
//attribute of the course object
const paymentSchema = new mongoose.Schema({
    paymentName: {
        type: String,
        required: 'This field is required!'
    },
    paymentId: {
        type: String
    },
    amount: {
        type: String
    }
});
const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;