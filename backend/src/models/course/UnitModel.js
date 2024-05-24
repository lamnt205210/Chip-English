const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the unit schema
const unitSchema = new Schema(
  {
    unitNumber: { type: Number, required: true },
    englishName: { type: String, required: true },
    vnName: { type: String, required: true },
    imageURL: { type: String, required: true },
    courseId: [{ type: Number, ref: "Course" }], // Reference to the Course schema
    semesterId: [{ type: Number, ref: "Semester" }], // Reference to the Semester schema
  },
  { collection: "units" }
);

// Create the models

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;
