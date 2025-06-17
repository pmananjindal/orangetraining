const mongoose = require('mongoose');
async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://tejaspatil:mongo678@cluster0.ntmfoti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
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