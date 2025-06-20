const mongoose = require('mongoose');
async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://akshadaaachrekar:Welcome2025@cluster0.rv9atff.mongodb.net/', {
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