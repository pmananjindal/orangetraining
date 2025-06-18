const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
    userId :{
      type: String,
    },
    userPassword :{
      type: String,
    }

});
const User = mongoose.model('User', userSchema);

module.exports = User;