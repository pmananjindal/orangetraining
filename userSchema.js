const mongoose = require('mongoose');
 
const userSchema =new mongoose.Schema({
   
    email: {
        type: String,
         required : 'this field is required!'
    },
    password: {
        type: String
    }
 
});
const User = mongoose.model('User', userSchema);
module.exports = User;
 