const Folder = require("../models/folder");

exports.createFolder = async (payload) => {
  const newFolder = await new Folder(payload);
  newFolder.save();

  if (newFolder) {
    return newFolder;
  } else {
    throw new Error("Error occured when creating folder");
  }
};

exports.getFolders = async (userId, parentId) => {
  if (!userId) {
    throw new Error("User ID is required");
  }

  if (parentId === "undefined") {
    const folders = await Folder.find({ userId, parentId: null });
    return folders;
  }

  const folders = await Folder.find({ userId, parentId });
  return folders;
};

exports.getFolder = async (id) => {
  const folder = await Folder.findById(id);
  return folder;
};
