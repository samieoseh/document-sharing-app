const jwt = require("jsonwebtoken");
exports.generateToken = (payload) => {
  try {
    const accessToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: parseInt(process.env.ACCESS_TOKEN_EXPIRATION_TIME),
    });

    const refreshToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: parseInt(process.env.REFRESH_TOKEN_EXPIRATION_TIME),
    });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.refreshAccessToken = (payload) => {
  const accessToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: parseInt(process.env.ACCESS_TOKEN_EXPIRATION_TIME),
  });
  return accessToken;
};
