const express = require("express");
const router = express.Router();
const progressController = require("../controllers/ProgressController");
router.post("/score-game/:userId/:gameId", progressController.updateGameScore);
router.post(
  "/score-video/:userId/:lessonId",
  progressController.updateVideoScore
);
router.get(
  "/course-progress/:userId/:courseId",
  progressController.getCourseProgress
);
router.get(
  "/unit-progress/:userId/:courseId",
  progressController.getUnitProgress
);
router.get(
  "/lesson-progress/:userId/:lessonId",
  progressController.getLessonProgress
);
router.get(
  "/game-progress/:userId/:gameId",
  progressController.getGameProgress
);

module.exports = router;
