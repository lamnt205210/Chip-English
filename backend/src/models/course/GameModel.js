const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Course schema
const gameSchema = new Schema(
  {
    unitId: { type: String, ref: "Unit", required: true },
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
        materialId: { type: String, ref: "Material" },
      },
    ],
  },
  { collection: "games" }
);

// Create the models

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
