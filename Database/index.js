const mongoose = require("mongoose");
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const URI = process.env.MONGO_DB_URI

 const connectToDb = async() =>{
     try {
          await mongoose.connect(URI);
          console.log("database connected");
     }
     catch(err) {
          console.error("Connection Errror: ",err);
     }
}

module.exports = connectToDb;