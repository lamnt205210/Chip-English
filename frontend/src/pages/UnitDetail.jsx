import React from "react";
import ExerciseCatergory from "../ui/ExerciseCategory";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
const UnitDetail = () => {
  return (
    <div
      style={{
        backgroundColor: "#f5fcff",
        margin: 0,
        padding: 0,
        paddingTop: "28px",
      }}
    >
      <Box
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#21bdc6",
          color: "#ffffff",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          cursor: "pointer",
          margin: "0 0 20px 98px",
          position: "fixed",
        }}
      >
        <ArrowBackIcon style={{ fontSize: "35px" }} />
      </Box>
      <Box
        sx={{
          border: "2px solid #f0f0f0",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "32px",

          margin: "70px 200px 0px 200px",
          paddingBottom: "30px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
            fontFamily: "Cabin, sans-serif",
            padding: "16px 16px 16px 50px",
            color: "#292d32",
          }}
        >
          Unit 9: In the shopping mall
        </Typography>
        <ExerciseCatergory />
        <ExerciseCatergory />
        <ExerciseCatergory />
        <ExerciseCatergory />
        <ExerciseCatergory />
      </Box>
    </div>
  );
};

export default UnitDetail;
