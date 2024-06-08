const express = require("express");
const router = express.Router();
const progressController = require("../controllers/ProgressController");
router.post(
  "/score-game/:userId/:gameId/:lessonId",
  progressController.updateGameScore
);
router.post(
  "/score-video/:userId/:lessonId",
  progressController.updateVideoScore
);
router.get(
  "/course-progress/:userId/:courseId",
  progressController.getCourseProgress
);
router.get(
  "/unit-progress/:userId/:unitId",
  progressController.getUnitProgress
);
router.get(
  "/lesson-progress/:userId/:lessonId",
  progressController.getLessonProgress
);
router.get(
  "/game-progress/:userId/:lessonId",
  progressController.getGameProgress
);

module.exports = router;
