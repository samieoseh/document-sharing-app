const jwt = require("jsonwebtoken");

exports.validateAuth = async (req, res, next) => {
  const headers = req.headers;
  const authorizationHeader = headers["authorization"];
  if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
    const bearerToken = authorizationHeader.split(" ")[1];
    console.log({ bearerToken });
    jwt.verify(bearerToken, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ message: `Unauthorized: ${err.message}` });
      }
      req.auth = { userId: decoded._id };
      next();
    });
  }
};

exports.validateRefreshTokenInCookies = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token is missing" });
    }

    // Verify the refresh token
    jwt.verify(refreshToken, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Invalid refresh token" });
      }

      req.auth = { userId: decoded._id };
      next();
    });
  } catch (error) {
    console.error({ error });
    return res.status(500).json({ message: "Server error" });
  }
};
