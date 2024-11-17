const express = require("express");
const router = express.Router();
const { validateRequestBody } = require("../utils/validate-pipe");
const {
  validateAuth,
  validateRefreshTokenInCookies,
} = require("../utils/validate-auth");
const authCtrl = require("../controllers/auth");

router.post(
  "/login",
  validateRequestBody([
    { field: "username", types: ["string"] },
    { field: "password", types: ["string"] },
  ]),
  authCtrl.login,
);

router.post(
  "/signup",
  validateRequestBody([
    { field: "username", types: ["string"] },
    { field: "password", types: ["string"] },
  ]),
  authCtrl.signup,
);

router.get("/refresh", validateRefreshTokenInCookies, authCtrl.refresh);

router.delete("/logout", validateAuth, authCtrl.logout);

router.post(
  "/forgot-password",
  validateRequestBody([
    { field: "password", types: ["string"] },
    { field: "confirmPassword", types: ["string"] },
  ]),
  authCtrl.forgotPassword,
);

module.exports = router;
