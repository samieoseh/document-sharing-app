const mongoose = require("mongoose");
const Token = require("../models/token");

exports.createToken = async (payload) => {
  const token = await new Token(payload);
  token.save();
};

exports.deleteToken = async (userId) => {
  console.log({ userId });
  await Token.deleteMany({ userId });
};
