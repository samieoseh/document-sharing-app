const express = require("express");
const router = express.Router();
const { validateRequestBody } = require("../utils/validate-pipe");
const { validateAuth } = require("../utils/validate-auth");
const folderCtrl = require("../controllers/folder");

router.post(
  "/",
  validateAuth,
  validateRequestBody([{ field: "name", types: ["string"] }]),
  folderCtrl.createFolder,
);

router.get("/:parentId", validateAuth, folderCtrl.getFolders);

module.exports = router;
