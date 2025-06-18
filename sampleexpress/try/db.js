const mongoos = require('mongoose');

async function connectDB(){
    try{
        await mongoos.connect('mongodb+srv://awateanjali123:awateanjali123%40@devdata.seo6qea.mongodb.net/?retryWrites=true&w=majority&appName=devdata'
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