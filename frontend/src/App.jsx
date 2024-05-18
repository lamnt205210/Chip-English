import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import DashBoard from "./pages/DashBoard";
import AppLayout from "./ui/AppLayout";
import LangdingPage from "./pages/LandingPage";
import { isJsonString } from "./utils/utils";
import * as UserService from "./services/UserService";
import { updateUser } from "./redux/slides/userSlice";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
axios.defaults.withCredentials = true;
const App = () => {
  console.log("This is APP");

  const dispatch = useDispatch();

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
    console.log("res", res);
  };

  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");

    let decoded = {};

    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData);
    }
    return { decoded, storageData };
  };

  UserService.axiosJWT.interceptors.request.use(
    async (config) => {
      const { decoded } = handleDecoded();
      console.log("decoded EXP", decoded?.exp);

      console.log("Date.now()", Date.now() / 1000);
      if (decoded?.exp < Date.now() / 1000) {
        const data = await UserService.refreshToken();
        config.headers["token"] = `Bearer ${data?.access_token}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  useEffect(() => {
    const { storageData, decoded } = handleDecoded();
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/courses" element={<div>Courses</div>} />
        </Route>
        <Route index element={<Navigate replace to="landing-page" />} />
        <Route path="landing-page" element={<LangdingPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
