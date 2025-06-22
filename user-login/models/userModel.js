const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // name: { type: String, required: true },
    // email: { type: String, required: true, unique: true },
    email: {type: String, required: 'This field is required!' },
    password: { type: String, required: 'This field is required!'}
}, { timestamps: true,});

const User = mongoose.model('User', userSchema);
module.exports = User;