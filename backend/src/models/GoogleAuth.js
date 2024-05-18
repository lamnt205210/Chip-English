const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleAuthSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("GoogleAuth", googleAuthSchema);
