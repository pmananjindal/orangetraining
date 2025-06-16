const mongoose = require("mongoose");

async function connectDb()
{
    try{
        await mongoose.connect("mongodb+srv://dbadmin:mFNVwMdQ2fEkhPzB@cluster0.o5ocjp4.mongodb.net/",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("✅ Mongodb connected successfully !!!")
    }
    catch(err){
        console.error('❌ MongoDB Connection Error:', err);
        process.exit(1);
    }
}

module.exports = connectDb;