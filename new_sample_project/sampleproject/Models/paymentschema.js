const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({
    PaymentUserName: {
        type: String,
        required: 'This field is required!'
    },
    PaymentFee: {
        type: String
    },

});
const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;