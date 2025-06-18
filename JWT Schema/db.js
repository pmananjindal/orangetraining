const mongoose = require('mongoose');
const moongoseSchema = require('./UserSchema');

async function connectDB() {
    try {
      await mongoose.connect('mongodb+srv://swatinandal99:3IS5PPxFjqxg1wnZ@cluster0.jpxyhs1.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('✅ Successfully Connected to MongoDB');
    } catch (err) {
      console.error('❌ MongoDB Connection Error:', err);
      process.exit(1);
    }
  }

  module.exports = connectDB;