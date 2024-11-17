const authRepo = require("../repo/auth-repo");
const tokenRepo = require("../repo/token-repo");
const { generateToken, refreshAccessToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await authRepo.getUser(username);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordIsSame = await bcrypt.compare(password, user.password);
    if (!passwordIsSame) {
      return res
        .status(400)
        .json({ message: "Password or Username not correct" });
    }
    // generate jwt
    const { accessToken, refreshToken } = generateToken({
      _id: user._id.toString(),
    });

    // save tokens to database
    await tokenRepo.createToken({
      userId: user._id,
      token: accessToken,
      type: "access",
      expiresAt: process.env.ACCESS_TOKEN_EXPIRATION_TIME,
    });

    await tokenRepo.createToken({
      userId: user._id,
      token: refreshToken,
      type: "refresh",
      expiresAt: process.env.REFRESH_TOKEN_EXPIRATION_TIME,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60 * 1000,
      sameSite: "Strict",
    });

    user.password = undefined;

    return res.status(200).json({
      accessToken: accessToken,
      user,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error });
  }
};

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExist = await authRepo.userExists(username);

    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await authRepo.createUser({
      username,
      password: hashedPassword,
    });

    return res
      .status(200)
      .json({ message: "Signup successful", user: newUser });
  } catch (error) {
    console.error({ error });
    return res.status(500).json({ message: "Server error", error: error });
  }
};

exports.logout = async (req, res) => {
  try {
    await tokenRepo.deleteToken(req.auth.userId);
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    return res.status(200).json({ message: "Forgot Password successful" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

exports.refresh = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const user = await authRepo.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const accessToken = refreshAccessToken({ _id: user._id.toString() });
    user.password = undefined;

    return res.status(200).json({ accessToken, user });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
