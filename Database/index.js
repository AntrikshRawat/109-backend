const mongoose = require("mongoose");
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const connectToDb = async () => {
    try {
        const URI = process.env.MONGO_DB_URI;
        if (!URI) {
            throw new Error("MONGO_DB_URI is not defined in environment variables");
        }
        await mongoose.connect(URI);
        console.log("database connected");
    } catch (err) {
        console.error("Connection Error: ", err);
    }
};

module.exports = connectToDb;