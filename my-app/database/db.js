const { default: mongoose} =require ("mongoose");

async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/nodejs-course'); 
}

 
module.exports = connectDB; 

// const { MongoClient } = require ('mongodb');



// // Connection url
// const url = 'mongodb://127.0.0.1:27017'; 
// const client = new MongoClient(url); 


// // Database name
// const dbName = "nodejs-course"; 


// async function connect(){

//     await client.connect();
//     const db = client.db(dbName);
//     return db; 
// }  

// module.exports = connect; 

 
