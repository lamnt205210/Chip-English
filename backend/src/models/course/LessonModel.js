const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Course schema
const lessonSchema = new Schema(
  {
    // unitId: { type: Schema.Types.ObjectId, required: true },
    unit: { type: String, ref: "Unit", required: true },
    category: {
      type: String,
      required: true,
      enum: ["Từ vựng", "Ngữ âm", "Mẫu câu"],
    },
    name: { type: String, required: true },
    videoURL: { type: String, required: false },
    games: [
      {
        gameName: { type: String },
        materialId: { type: Schema.Types.ObjectId, ref: "Material" },
      },
    ],
  },
  { collection: "lessons" }
);

// Create the models

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
