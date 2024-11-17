const User = require("../models/user");
exports.getUser = async (username) => {
  const user = await User.findOne({ username });
  return user;
};

exports.getUserById = async (userId) => {
  const user = await User.findOne({ _id: userId });
  return user;
};

exports.userExists = async (username) => {
  const user = await this.getUser(username);
  console.log({ user });
  return user != undefined;
};

exports.createUser = async (payload) => {
  const newUser = await new User(payload);
  newUser.save();

  if (newUser) {
    return newUser;
  } else {
    throw new Error("Error occured when creating user");
  }
};
