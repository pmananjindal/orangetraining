const mongoose = require("mongoose");
const { convertCompilerOptionsFromJson } = require("typescript");
require('dotenv').config()

async function connectDb()
{
    const dbconnstr = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVER}/`;
    console.log(dbconnstr);
    try{
        await mongoose.connect(dbconnstr,{
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