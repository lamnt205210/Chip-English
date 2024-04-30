const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { generalAccessToken } = require("./JwtService");
const { generalRefreshToken } = require("./JwtService");
//Sign-up
const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, password, confirmPassword } = newUser;
    try {
      const checkUser = await User.findOne({ name });
      if (checkUser !== null) {
        resolve({ status: "OK", message: "Username already exists" });
      }
      const hash = bcrypt.hashSync(password, 10);

      const createdUser = await User.create({
        name,
        password: hash,
      });

      if (createdUser) {
        resolve({
          status: "OK",
          message: "User created successfully",
          data: createdUser,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

//Login
const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { name, password } = userLogin;
    try {
      const checkUser = await User.findOne({ name });
      if (checkUser === null) {
        resolve({ status: "OK", message: "Username does not exists" });
      }
      const comparePassword = bcrypt.compareSync(password, checkUser.password);

      if (!comparePassword) {
        resolve({ status: "OK", message: "Password is incorrect" });
      }
      const access_token = generalAccessToken({ id: checkUser._id });
      const refresh_token = generalRefreshToken({ id: checkUser._id });

      resolve({
        status: "OK",
        message: "Login successful",
        access_token,
        refresh_token,
      });
    } catch (error) {
      reject(error);
    }
  });
};

//Get detail user
const getDetailsUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ _id: userId });
      if (user === null) {
        resolve({ status: "OK", message: "User does not exists" });
      }
      resolve({ status: "OK", message: "SUCCESS", data: user });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { createUser, loginUser, getDetailsUser };
