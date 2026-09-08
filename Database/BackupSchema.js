const mongoose = require("mongoose");

const BackupSchema = new mongoose.Schema({
  syncKey: { type: String, required: true, unique: true },
  data: { type: Object, required: true },
  lastSynced: { type: Date, default: Date.now },
});


module.exports = mongoose.model("Backup",BackupSchema);