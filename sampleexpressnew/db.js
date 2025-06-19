const mongoose = require('mongoose');

async function connectDB() {
    try{
        await mongoose.connect('mongodb+srv://vishal99:vishaljadhav@cluster0.flho56e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });
        console.log("Successfully connected to mongoDB");
    } catch (err) {
        console.error('mongoDB connection error',err);
            process.exit(1);
        }
    }
    
    module.exports = connectDB;