const mongoose = require('mongoose');

async function connectDB() {

  try {

    await mongoose.connect('mongodb://127.0.0.1:27017/Course', {

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
 