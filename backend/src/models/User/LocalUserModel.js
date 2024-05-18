const mongoose = require("mongoose");
const BaseUser = require("./BaseUser");

const localUserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please tell us your name!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
  },
});

const LocalUser = BaseUser.discriminator("Local", localUserSchema);

module.exports = LocalUser;
