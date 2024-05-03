import axios from "axios";

export const loginUser = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/user/login`,
    data
  );
  return res.data;
};
export const createUser = async (data) => {
  console.log("data", data);
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/user/sign-up`,
    data
  );
  return res.data;
};
