const express = require("express");
const router = express.Router();
const courseController = require("../controllers/CourseController");

router.get("/", courseController.getAllCourses);
router.get(
  "/:courseId/semester/:semesterId",
  courseController.getUnitsByCourseId
);
router.get("/unit/:unitId", courseController.getUnitDetailsById);
router.get("/lesson/:lessonId", courseController.getLessonDetailsById);
module.exports = router;
