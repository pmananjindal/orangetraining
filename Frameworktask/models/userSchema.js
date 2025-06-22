const mongoose = require('mongoose');
//attribute of the user object
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'This field is required!'
    },
    password: {
        type: String,
        required: 'This field is required!'
    }
});
const User = mongoose.model('User', userSchema);
module.exports = User;