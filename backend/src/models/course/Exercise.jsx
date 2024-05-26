const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Course schema
const exerciseSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["Từ vựng", "Ngữ âm", "Mẫu câu"],
    },
    name: { type: String, required: true },
  },
  { collection: "exercise" }
);

// Create the models

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
