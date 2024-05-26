const express = require("express");
const router = express.Router();
const courseController = require("../controllers/CourseController");

router.get("/", courseController.getAllCourses);
router.get(
  "/:courseId/semester/:semesterId",
  courseController.getUnitsByCourseId
);
router.get("/unit/:unitId", courseController.getUnitDetailsById);
module.exports = router;
