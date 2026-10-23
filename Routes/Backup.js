const Backup = require("../Database/BackupSchema");

const backupController = async (req, res) => {
  try {
    const { syncKey, data } = req.body;

    if (!syncKey || data === undefined) {
      return res.status(400).json({ status: false, error: "syncKey and data are required" });
    }

    // Find the latest backup for this syncKey to determine the next version number
    const latestBackup = await Backup.findOne({ syncKey }).sort({ version: -1, lastSynced: -1 });

    const nextVersion = latestBackup
      ? (typeof latestBackup.version === "number" ? latestBackup.version + 1 : 2)
      : 1;

    // Create a new backup document instead of updating the existing one
    const newBackup = new Backup({
      syncKey,
      data,
      version: nextVersion,
      lastSynced: Date.now(),
    });

    await newBackup.save();

    res.status(200).json({
      status: true,
      data: "Backup successful",
      version: nextVersion,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, error: "Sync failed" });
  }
};

module.exports = backupController;
