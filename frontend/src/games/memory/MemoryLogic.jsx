import { Typography } from "@mui/material";
import React, { useRef, useEffect } from "react";

const MemoryLogic = ({ words }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const background = new Image();
    background.src = "images/memory/background.png"; // Update this path to the correct one
    background.onload = () => {
      context.drawImage(background, 0, 0, canvas.width, canvas.height);
    };
  }, []);
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <canvas
        ref={canvasRef}
        style={{ borderRadius: "0" }}
        width={1000}
        height={550}
      ></canvas>
      <img
        src="images/memory/boardinsight.png"
        alt="play"
        style={{
          position: "absolute",
          left: "10%",
          top: "6%",
          cursor: "pointer",
          zIndex: 2,
        }}
      ></img>
      <Typography
        sx={{
          position: "absolute",
          left: "20%",
          top: "25%",
          transform: "translate(-50%, -50%)",
          fontSize: "22px",
          borderRadius: "15px",
          color: "#394b41",
          cursor: "pointer",

          fontWeight: 600,
          wordSpacing: "5px",
          zIndex: 2,
        }}
      >
        Câu 1/4
      </Typography>
    </div>
  );
};

export default MemoryLogic;
