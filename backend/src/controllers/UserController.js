const UserService = require("../services/UserService");
const JwtService = require("../services/JwtService");
// Sign-up
const createUser = async (req, res) => {
  try {
    const { name, password, confirmPassword } = req.body;

    if (!name || !password || !confirmPassword) {
      return res
        .status(400)
        .json({ message: "Please provide name and password" });
    } else if (password !== confirmPassword) {
      return res
        .status(400)
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
    const { name, password } = req.body;

    if (!name || !password) {
      return res
        .status(400)
        .json({ message: "Please provide name and password" });
    }

    const response = await UserService.loginUser(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
//Get details
const getDetailsUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(200).json({ message: "Please provide user id" });
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
    const token = req.headers.token.split(" ")[1];
    if (!token) {
      return res.status(200).json({ message: "The token is required" });
    }
    const response = await JwtService.refreshTokenJwtService(token);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};
module.exports = { createUser, loginUser, getDetailsUser, refreshToken };
