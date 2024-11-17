const folderRepo = require("../repo/folder-repo");

exports.createFolder = async (req, res) => {
  try {
    const { name, parentId } = req.body;
    const folder = await folderRepo.createFolder({
      name,
      parentId,
      userId: req.auth.userId,
    });
    return res.status(200).json({ message: "Folder created", folder });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

exports.getFolders = async (req, res) => {
  try {
    const folders = await folderRepo.getFolders(
      req.auth.userId,
      req.params.parentId,
    );
    return res.status(200).json(folders);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

exports.getFolder = async (req, res) => {
  try {
    const folder = await folderRepo.getFolder(req.params.id);
    return res.status(200).json(folder);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
