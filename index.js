require("dotenv").config();
const connectToDb = require("./Database/index");
const express = require("express");
const routes = require("./Routes/index");
const cors = require("cors");
const Frontend_Url = process.env.FRONTEND_URL;
const app = express();
app.use(cors({
     origin:Frontend_Url
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

connectToDb();


app.get("/",(_,res)=>{
     res.send("working...");
})

app.use("/data",routes);

app.listen(3000,()=>{
     console.log("Server Running on port 3000");
})


