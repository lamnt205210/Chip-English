const Teacher = require("../models/course/TeacherModel");
const Course = require("../models/course/CourseModel");
const Unit = require("../models/course/UnitModel");
const Lesson = require("../models/course/LessonModel");
const mongoose = require("mongoose");
const getAllCourses = async () => {
  try {
    const courses = await Course.find().populate({
      path: "teacher",
      model: "Teacher",
    });
    console.log("courses", courses);
    return { courses: courses };
  } catch (error) {
    return error;
  }
};

const getUnitsByCourseId = async (courseId, semesterId) => {
  try {
    const units = await Unit.find({
      courseId: courseId,
      semesterId: semesterId,
    });
    console.log("Units found:", units);
    return { units: units };
  } catch (error) {
    return error;
  }
};
const getUnitDetailsById = async (unitId) => {
  try {
    const lessons = await Lesson.find({ unit: unitId }).populate("unit");

    return { lessons: lessons };
  } catch (error) {
    return error;
  }
};
module.exports = { getAllCourses, getUnitsByCourseId, getUnitDetailsById };
