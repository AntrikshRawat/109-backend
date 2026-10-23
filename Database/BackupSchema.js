const mongoose = require("mongoose");

const BackupSchema = new mongoose.Schema({
  syncKey: { type: String, required: true },
  data: { type: Object, required: true },
  version: { type: Number, required: true, default: 1 },
  lastSynced: { type: Date, default: Date.now },
});

BackupSchema.index({ syncKey: 1, version: -1 });

module.exports = mongoose.model("Backup", BackupSchema);