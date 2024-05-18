const UserService = require("../services/UserService");
const JwtService = require("../services/JwtService");
// Sign-up
const createUser = async (req, res) => {
  try {
    const { userName, password, confirmPassword } = req.body;

    if (!userName || !password || !confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "Please provide name, password and confirm password",
      });
    } else if (password != confirmPassword) {
      return res
        .status(200)
        .json({ status: "ERR", message: "Password does not match" });
    }
    const response = await UserService.createUser(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
//Login
const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res
        .status(200)
        .json({ status: "ERR", message: "Please provide name and password" });
    }

    const response = await UserService.loginUser(req.body);
    const { refresh_token, ...newResponse } = response;
    console.log("refresh_token", refresh_token);
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    return res.status(200).json(newResponse);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

// Log out
const logoutUser = async (req, res) => {
  try {
    res.clearCookie("refresh_token");
    return res
      .status(200)
      .json({ status: "OK", message: "Logout successfully" });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
//Get details
const getDetailsUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res
        .status(200)
        .json({ status: "ERR", message: "Please provide user id" });
    }
    const response = await UserService.getDetailsUser(userId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};

//Refresh token
const refreshToken = async (req, res) => {
  try {
    console.log("req.cookies", req.cookies);
    const token = req.cookies.refresh_token;
    if (!token) {
      return res
        .status(200)
        .json({ status: "ERR", message: "The token is required" });
    }
    const response = await JwtService.refreshTokenJwtService(token);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};
module.exports = {
  createUser,
  loginUser,
  logoutUser,
  getDetailsUser,
  refreshToken,
};
