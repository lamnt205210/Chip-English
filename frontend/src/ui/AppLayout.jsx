import Menu from "./Menu";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default AppLayout;
