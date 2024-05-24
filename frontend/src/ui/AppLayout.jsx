import Menu from "./Menu";
import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/system";

const AppLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Menu />
      <Outlet
        sx={{
          flex: 1,
          overflowX: "hidden",
        }}
      />
    </Box>
  );
};

export default AppLayout;
