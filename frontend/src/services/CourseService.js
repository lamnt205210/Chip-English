import axios from "axios";

export const getAllCourses = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/course/`);

  return res.data;
};

export const getUnits = async (courseId, semesterId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/course/${courseId}/semester/${semesterId}`
  );

  return res.data;
};

export const getUnitDetails = async (unitId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/course/unit/${unitId}`
  );

  return res.data;
};
