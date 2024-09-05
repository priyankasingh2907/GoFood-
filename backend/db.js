const mongoose = require('mongoose');
const mongooseURL = "mongodb://localhost:27017/GoFood";
const mongoDB = async()=>{
    try {
        await mongoose.connect(mongooseURL);
        console.log('Connected to MongoDB');
        const fetch_data = await mongoose.connection.db.collection("gofood");
        await fetch_data.find({}).toArray(function(err, data){
            if(err){ console.log(err);}
             else console.log(data);
        });
    
    } catch (error) { 
        console.error('Error connecting to MongoDB:', error.message);
}}
module.exports = mongoDB;