const mongoos = require('mongoose');

async function connectDB(){
    try{
        await mongoos.connect('mongodb+srv://anjali_awate:anjali_awate@devdata.seo6qea.mongodb.net/'
 ,
            {
                useNewUrlParser:true,
                useUnifiedTopology:true,
                
            });
            console.log('Successfully connected to MongoDB');
    }
        catch(err){
            console.log('Mongo connection error', err);
            process.exit(1);
        }
        
    

}

module.exports = connectDB;