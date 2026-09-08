const Backup = require("../Database/BackupSchema");

const backupController = async (req, res) => {
  try {
    const { syncKey, data } = req.body;
    await Backup.findOneAndUpdate(
      { syncKey },
      { data, lastSynced: Date.now() },
      { upsert: true, new: true },
    );
    res.status(200).json({status:true, data:"Backup successful" });
  } catch (error) {
   console.log(error);
    res.status(500).json({status:false, error: "Sync failed" });
  }
};

module.exports = backupController;
