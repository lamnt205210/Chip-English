import React, { useEffect, useRef, useState } from "react";

import { Box, TextField, Typography } from "@mui/material";
import CharacterBox from "./CharacterBox";

const DictationLogic = ({ words }) => {
  const canvasRef = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [lengthWords, setLengthWords] = useState(
    words[currentWordIndex].word.length
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const background = new Image();
    background.src = "images/dictation/bg.png"; // Update this path to the correct one
    background.onload = () => {
      context.drawImage(background, 0, 0, canvas.width, canvas.height);
      // Vẽ các đối tượng game khác tại đây
    };

    // Thêm các sự kiện và logic game khác tại đây
  }, []);

  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <canvas
        ref={canvasRef}
        style={{ borderRadius: "0" }}
        width={1000}
        height={550}
      ></canvas>
      <Box>
        <img
          src="images/dictation/mainboard.png"
          alt="lỗi"
          style={{
            position: "absolute",
            left: "11%",
            top: "6%",

            zIndex: 1,
          }}
        ></img>
      </Box>
      <Box>
        <img
          src="images/dictation/point.png"
          alt="lỗi"
          style={{
            position: "absolute",
            right: "26%",
            top: "26%",
            transform: "translate(50%, -50%)",
            zIndex: 1,
          }}
        ></img>
        <Typography
          sx={{
            position: "absolute",
            right: "26%",
            top: "27%",
            color: "#f5b813f4",
            fontWeight: 600,
            fontSize: 20,
            zIndex: 1,
            transform: "translate(50%, -50%)",
          }}
        >
          100 ĐIỂM
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            position: "absolute",
            left: "25%",
            top: "25.5%",
            color: "#2f4858",
            fontWeight: 600,
            fontSize: 24,
            zIndex: 1,
            transform: "translate(-50%, -50%)",
          }}
        >
          {currentWordIndex + 1}/{words.length}
        </Typography>
        <img
          src="images/dictation/btn-lestplay.png"
          alt="play"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            cursor: "pointer",
            zIndex: 2,
            width: "300px",
            height: "165px",
            transform: "translate(-50%, -50%)",
            border: "3px solid #2f4858",
            borderRadius: "10px",
          }}
        ></img>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "73%",
            cursor: "pointer",
            zIndex: 2,
            backgroundColor: "#2f4858",
            height: "42px",
            transform: "translate(-50%, -50%)",
            borderRadius: "5px",

            alignContent: "center",
          }}
        >
          {Array.from({ length: lengthWords }, (_, index) => (
            <CharacterBox key={index} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default DictationLogic;
