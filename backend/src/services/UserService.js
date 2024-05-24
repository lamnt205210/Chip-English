const LocalUser = require("../models/user/LocalUserModel");
const GoogleUser = require("../models/user/GoogleUserModel");
const BaseUser = require("../models/user/BaseUserModel");
const { generalAccessToken } = require("./JwtService");
const { generalRefreshToken } = require("./JwtService");
const bcrypt = require("bcrypt");

async function createUser(data) {
  try {
    const { userName, password } = data;

    // Check if the username already exists

    const existingUser = await LocalUser.findOne({ userName });
    if (existingUser) {
      return { status: "ERR", message: "Username already taken" };
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new local user

    const newUser = await LocalUser.create({
      userName: userName,
      password: hashedPassword,
      typeUser: "Local",
    });

    return {
      status: "OK",
      message: "User created successfully",
      user: newUser,
    };
  } catch (error) {
    console.log(error);
    return { status: "ERR", message: error.message };
  }
}

async function loginUser(data) {
  const { userName, password } = data;

  // Find the user by username
  const user = await LocalUser.findOne({ userName });
  if (!user) {
    return { status: "ERR", message: "Invalid username" };
  }

  // Compare the password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return { status: "ERR", message: "Invalid username or password" };
  }

  // Generate JWT tokens
  const access_token = generalAccessToken({ id: user._id });
  const refresh_token = generalRefreshToken({ id: user._id });

  return {
    status: "OK",
    message: "Login successful",
    access_token,
    refresh_token,
  };
}

async function getDetailsUser(userId) {
  // Find the user by ID
  const user = await BaseUser.findById(userId);
  if (!user) {
    return { status: "ERR", message: "User not found" };
  }
  return { status: "OK", user };
}

const authenticateGoogleUser = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  try {
    console.log("profile", profile);
    if (profile) {
      const user = await GoogleUser.findOne({ googleId: profile.id });

      if (!user) {
        const user = await GoogleUser.create({
          googleId: profile.id,
          email: profile.emails[0].value,
          displayName: profile.displayName,
          profilePicture: profile.photos[0].value,
          typeUser: "Google",
        });
      }
      const access_token = generalAccessToken({ id: user._id });
      const refresh_token = generalRefreshToken({ id: user._id });
      done(null, { user, access_token, refresh_token });
      // done(null, user);
    }
  } catch (error) {
    console.log(error);
    done(error, null);
  }
};

module.exports = {
  createUser,
  loginUser,
  getDetailsUser,
  authenticateGoogleUser,
};

// const User = require("../models/UserModel");
// const bcrypt = require("bcrypt");
// const { generalAccessToken } = require("./JwtService");
// const { generalRefreshToken } = require("./JwtService");
// //Sign-up
// const createUser = (newUser) => {
//   return new Promise(async (resolve, reject) => {
//     const { userName, password, confirmPassword } = newUser;
//     try {
//       const checkUser = await User.findOne({ userName });
//       if (checkUser !== null) {
//         resolve({ status: "ERR", message: "Username already exists" });
//       }
//       const hash = bcrypt.hashSync(password, 10);

//       const createdUser = await User.create({
//         userName,
//         password: hash,
//       });

//       if (createdUser) {
//         resolve({
//           status: "OK",
//           message: "User created successfully",
//           data: createdUser,
//         });
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// //Login
// const loginUser = (userLogin) => {
//   return new Promise(async (resolve, reject) => {
//     const { userName, password } = userLogin;
//     try {
//       const checkUser = await LocalUser.findOne({ userName });
//       if (checkUser === null) {
//         resolve({ status: "ERR", message: "Username does not exists" });
//       }
//       const comparePassword = bcrypt.compareSync(password, checkUser.password);

//       if (!comparePassword) {
//         resolve({ status: "ERR", message: "Password is incorrect" });
//       }
//       const access_token = generalAccessToken({ id: checkUser._id });
//       const refresh_token = generalRefreshToken({ id: checkUser._id });

//       resolve({
//         status: "OK",
//         message: "Login successful",
//         access_token,
//         refresh_token,
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// //Get detail user
// const getDetailsUser = (userId) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const user = await User.findOne({ _id: userId });
//       if (user === null) {
//         resolve({ status: "OK", message: "User does not exists" });
//       }
//       resolve({ status: "OK", message: "SUCCESS", data: user });
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// module.exports = { createUser, loginUser, getDetailsUser };
