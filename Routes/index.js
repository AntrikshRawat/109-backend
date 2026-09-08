const express = require("express");
const Router = express.Router();


const backup = require("./Backup");
const restore = require("./Restore");

Router.post("/backup",backup);
Router.get("/restore/:syncKey",restore);

module.exports = Router;