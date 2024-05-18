const mongoose = require("mongoose");
const BaseUser = require("./BaseUser");

const googleUserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
});

const GoogleUser = BaseUser.discriminator("Google", googleUserSchema);

module.exports = GoogleUser;
