// Import mongoose
const mongoose = require("mongoose");

// Define the course schema
const courseSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    teacherName: {
      type: String,
      required: true,
    },
    studentJoinedNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // This will add createdAt and updatedAt timestamps
  }
);

// Create the Course model
const Course = mongoose.model("Course", courseSchema);

// Export the model
module.exports = Course;
