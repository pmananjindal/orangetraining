const mongoose = require('mongoose')
const userloginSchema = new mongoose.Schema({
     username: {
        type: String
    },
    password: {
        type: String
    }
});
const Userlogin = mongoose.model('User', userloginSchema);
module.exports = Userlogin;