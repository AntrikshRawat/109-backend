require("dotenv").config();
const connectToDb = require("./Database/index");
const express = require("express");
const routes = require("./Routes/index");
const cors = require("cors");
const Frontend_Url = process.env.FRONTEND_URL;
const app = express();
app.use(express.json());
app.use(cors({
     origin:Frontend_Url
}));

connectToDb();

app.use("/data",routes);

app.listen(3000,()=>{
     console.log("Server Running on port 3000");
})


