import axios from "axios";
export const updateGameScore = async (userId, gameId, score) => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/progress/score-game/${userId}/${gameId}`,
    { score }
  );
  return res.data;
};
export const updateVideoScore = async (userId, lessonId, score) => {
  const res = await axios.post(
    `${
      import.meta.env.VITE_API_URL
    }/progress/score-video/${userId}/${lessonId}`,
    { score }
  );
  return res.data;
};
export const getCourseProgress = async (userId, courseId) => {
  const res = await axios.get(
    `${
      import.meta.env.VITE_API_URL
    }/progress/course-progress/${userId}/${courseId}`
  );
  return res.data;
};
export const getUnitProgress = async (userId, unitId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/progress/unit-progress/${userId}/${unitId}`
  );
  return res.data;
};
export const getLessonProgress = async (userId, lessonId) => {
  const res = await axios.get(
    `${
      import.meta.env.VITE_API_URL
    }/progress/lesson-progress/${userId}/${lessonId}`
  );
  return res.data;
};
export const getGameProgress = async (userId, gameId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/progress/game-progress/${userId}/${gameId}`
  );
  return res.data;
};
