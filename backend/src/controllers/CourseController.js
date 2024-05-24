const CourseService = require("../services/CourseService");

const getAllCourses = async (req, res) => {
  try {
    const response = await CourseService.getAllCourses();
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

const getUnitsByCourseId = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const semesterId = req.params.semesterId;

    const response = await CourseService.getUnitsByCourseId(
      courseId,
      semesterId
    );

    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
module.exports = { getAllCourses, getUnitsByCourseId };
