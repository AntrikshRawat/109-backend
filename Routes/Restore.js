const BackupSchema = require("../Database/BackupSchema");

const restoreController = async (req, res) => {
  try {
    const { syncKey } = req.params;

    const backup = await BackupSchema.findOne({ syncKey }).sort({ version: -1, lastSynced: -1 });
    if (!backup) return res.status(404).json({ status: false, error: "Backup not found" });

    res.status(200).json({ status: true, data: backup.data, version: backup.version });
  } catch (error) {
    res.status(500).json({ status: false, error: "Restore failed" });
  }
};

module.exports = restoreController;
