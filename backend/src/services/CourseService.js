const Teacher = require("../models/course/TeacherModel");
const Course = require("../models/course/CourseModel");
const Unit = require("../models/course/UnitModel");
const Lesson = require("../models/course/LessonModel");
const Material = require("../models/course/MaterialModel");
const mongoose = require("mongoose");
const getAllCourses = async () => {
  try {
    const courses = await Course.find().populate({
      path: "teacher",
      model: "Teacher",
    });

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
const getLessonDetailsById = async (lessonId) => {
  try {
    const lesson = await Lesson.findById({ _id: lessonId }).populate({
      path: "games.materialId",
      model: "Material",
    });
    return lesson;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllCourses,
  getUnitsByCourseId,
  getUnitDetailsById,
  getLessonDetailsById,
};
