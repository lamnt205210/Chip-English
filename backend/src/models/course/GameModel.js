const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Course schema
const gameSchema = new Schema(
  {
    lessonId: { type: String, ref: "Lesson", required: true },
    gameName: { type: String },
    materialId: { type: String, ref: "Material" },
  },
  { collection: "games" }
);

// Create the models

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
