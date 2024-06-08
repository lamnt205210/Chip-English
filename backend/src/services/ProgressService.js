const mongoose = require("mongoose");
const GameProgress = require("../models/statistic/GameProgress");
const LessonProgress = require("../models/statistic/LessonProgress");
const UnitProgress = require("../models/statistic/UnitProgress");
const CourseProgress = require("../models/statistic/CourseProgress");

const Lesson = require("../models/course/LessonModel");
const Unit = require("../models/course/UnitModel");
const Course = require("../models/course/CourseModel");

const findIdsByGameId = async (gameId) => {
  try {
    // Find the lesson containing the given gameId
    const lesson = await Lesson.findOne({ "games.materialId": gameId }).exec();
    if (!lesson) {
      throw new Error(`No lesson found with gameId: ${gameId}`);
    }
    const unitId = lesson.unitId;
    // Find the unit containing the lesson
    const unit = await Unit.findById(unitId).exec();

    if (!unit) {
      throw new Error(`No unit found with unitId: ${unitId}`);
    }
    const courseId = unit.courseId;

    // Find the course containing the unit
    const course = await Course.findById(courseId).exec();

    if (!course) {
      throw new Error(`No course found with courseId: ${courseId}`);
    }
    return {
      lessonId: lesson._id,
      unitId: unit._id,
      courseId: course._id,
    };
  } catch (error) {
    return error;
  }
};
const findIdsByLessonId = async (lessonId) => {
  try {
    // Find the lesson
    const lesson = await Lesson.findById(lessonId).exec();
    if (!lesson) {
      throw new Error(`No lesson found with lessonId: ${lessonId}`);
    }
    const unitId = lesson.unitId;
    const unit = await Unit.findById(unitId).exec();
    if (!unit) {
      throw new Error(`No unit found with unitId: ${unitId}`);
    }
    const courseId = unit.courseId;
    // Find the course containing the unit
    const course = await Course.findById(courseId).exec();
    if (!course) {
      throw new Error(`No course found with courseId: ${courseId}`);
    }
    return {
      unitId: unit._id,
      courseId: course._id,
    };
  } catch (error) {
    return error;
  }
};
const updateGameScore = async (userId, gameId, score) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    // Update game score
    await GameProgress.updateOne(
      { userId: userId, game: gameId },
      { $set: { score } },
      { upsert: true, session }
    );
    const { lessonId, unitId, courseId } = await findIdsByGameId(gameId);
    // Recalculate lesson progress
    const lessonProgress = await LessonProgress.findOne({
      userId: userId,
      lessonId: lessonId,
    }).session(session);
    if (!lessonProgress) throw new Error("Lesson progress not found");

    const videoScore = lessonProgress.videoScore;
    const gamesScore = await GameProgress.find({
      userId: userId,
      lessonId: lessonId,
    }).session(session);
    const gamesTotalScore = gamesScore.reduce(
      (acc, game) => acc + (game.score || 0),
      0
    );
    const totalScore = videoScore + gamesTotalScore;
    const videoCompleted = lessonProgress.videoScore !== 0 ? 1 : 0;
    const gameCompleted = gamesScore.some((game) => game.score !== 0) ? 1 : 0;
    const completed =
      ((videoCompleted + gameCompleted) / (1 + gamesScore.length)) * 100;

    await LessonProgress.updateOne(
      { userId: userId, lesson: lessonId },
      { $set: { completed, totalScore } },
      { session }
    );

    // Recalculate unit progress
    const unitLessons = await LessonProgress.find({
      userId: userId,
      unitId: unitId,
    }).session(session);
    const unitCompleted =
      unitLessons.reduce((acc, lesson) => acc + (lesson.completed || 0), 0) /
      unitLessons.length;

    await UnitProgress.updateOne(
      { userId: userId, unit: unitId },
      { $set: { completed: unitCompleted } },
      { session }
    );

    // Recalculate course progress
    const courseUnits = await UnitProgress.find({
      userId: userId,
      courseId: courseId,
    }).session(session);
    const courseCompleted =
      courseUnits.reduce((acc, unit) => acc + (unit.completed || 0), 0) /
      courseUnits.length;

    await CourseProgress.updateOne(
      { userId: userId, courseId: courseId },
      { $set: { completed: courseCompleted } },
      { session }
    );

    await session.commitTransaction();
    session.endSession();
    return { status: "OK", message: "Score updated" };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return { status: "ERR", message: error.message };
  }
};

const updateVideoScore = async (userId, lessonId, unitId, courseId, score) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    // Update video score
    await LessonProgress.updateOne(
      { userId: userId, lessonId: lessonId },
      { $set: { videoScore: score } },
      { session }
    );
    const { unitId, courseId } = await findIdsByLessonId(lessonId);
    // Recalculate lesson progress
    const lessonProgress = await LessonProgress.findOne({
      userId: userId,
      lessonId: lessonId,
    }).session(session);
    if (!lessonProgress) throw new Error("Lesson progress not found");

    const videoCompleted = score !== 0 ? 1 : 0;
    const gamesScore = await GameProgress.find({
      userId: userId,
      lessonId: lessonId,
    }).session(session);
    const gameCompleted = gamesScore.some((game) => game.score !== 0) ? 1 : 0;
    const completed =
      ((videoCompleted + gameCompleted) / (1 + gamesScore.length)) * 100;

    await LessonProgress.updateOne(
      { userId: userId, lessonId: lessonId },
      { $set: { completed } },
      { session }
    );

    // Recalculate unit progress
    const unitLessons = await LessonProgress.find({
      userId: userId,
      unitId: unitId,
    }).session(session);
    const unitCompleted =
      unitLessons.reduce((acc, lesson) => acc + (lesson.completed || 0), 0) /
      unitLessons.length;

    await UnitProgress.updateOne(
      { userId: userId, unitId: unitId },
      { $set: { completed: unitCompleted } },
      { session }
    );

    // Recalculate course progress
    const courseUnits = await UnitProgress.find({
      studentId: userId,
      courseId: courseId,
    }).session(session);
    const courseCompleted =
      courseUnits.reduce((acc, unit) => acc + (unit.completed || 0), 0) /
      courseUnits.length;

    await CourseProgress.updateOne(
      { userId: userId, course: courseId },
      { $set: { completed: courseCompleted } },
      { session }
    );

    await session.commitTransaction();
    session.endSession();
    return { status: "OK", message: "Score updated" };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return { status: "ERR", message: error.message };
  }
};
const getCourseProgress = async (userId, courseId) => {
  try {
    const courseProgress = await CourseProgress.findOne({
      userId: userId,
      course: courseId,
    });
    return courseProgress;
  } catch (error) {
    return error;
  }
};
const getUnitProgress = async (userId, unitId) => {
  try {
    const unitProgress = await UnitProgress.findOne({
      userId: userId,
      unitId: unitId,
    });
    return unitProgress;
  } catch (error) {
    return error;
  }
};
const getLessonProgress = async (userId, lessonId) => {
  try {
    const lessonProgress = await LessonProgress.findOne({
      studentId: userId,
      lessonId: lessonId,
    });
    return lessonProgress;
  } catch (error) {
    return error;
  }
};
const getGameProgress = async (userId, gameId) => {
  try {
    const gameProgress = await GameProgress.findOne({
      studentId: userId,
      gameId: gameId,
    });
    return gameProgress;
  } catch (error) {
    return error;
  }
};
module.exports = {
  updateGameScore,
  updateVideoScore,
  getCourseProgress,
  getUnitProgress,
  getLessonProgress,
  getGameProgress,
};
