const mongoose = require('mongoose');
//attributes of the course object


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'This field is required!'
    },
    password: {
        type: String
    },
    
});

const User = mongoose.model('User', userSchema);
module.exports = User;