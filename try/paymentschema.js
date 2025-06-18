const mongoose = require('mongoose');
const paymentSchema =new mongoose.Schema({
    paymentName: {
        type : String,
        required : 'this field is required!'
    },
    payId: {
        type: String
    },
    payDuration: {
        type: String
    },
    payAmount:{
        type: String
    }

});
const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;