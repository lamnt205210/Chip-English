import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import DashBoard from "./pages/DashBoard";
import AppLayout from "./ui/AppLayout";
import LangdingPage from "./pages/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashBoard />} />
        </Route>
        <Route index element={<Navigate replace to="landing-page" />} />
        <Route path="landing-page" element={<LangdingPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
