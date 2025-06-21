const mongoose = require('mongoose');
require('dotenv').config();
async function connectDB() {
    // const MONGODB_CONNSTR = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVER}/`;
    // const MONGODB_CONNSTR = `mongodb+srv://<akshadaaachrekar>:<Welcome2025>@cluster0.rv9atff.mongodb.net/`;

    try {
        // await mongoose.connect(process.env.MONGODB_CONNSTR,{
        //     useNewUrlParser:true,
        //     useUnifiedTopology:true
        // });
        await mongoose.connect('mongodb+srv://akshadaaachrekar:Welcome2025@cluster0.rv9atff.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Mongodb connected successfully !!!")
    }
    catch (err) {
        console.log('❌ MongoDB Connection Error:', err);
        process.exit(1);
    }
}

module.exports = connectDB;