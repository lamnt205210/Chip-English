import React, { useEffect, useRef, useState } from "react";
import DialogGuide from "./DialogGuide";
import { Typography, Button, Box } from "@mui/material";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
const ListenAndChooseLogic = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const background = new Image();
    background.src = "images/listen_and_choose/listen_and_choose_bg_main.png"; // Update this path to the correct one
    background.onload = () => {
      context.drawImage(background, 0, 0, canvas.width, canvas.height);
      // Vẽ các đối tượng game khác tại đây
    };

    // Thêm các sự kiện và logic game khác tại đây
  }, []);

  const handleButtonClick = (option) => {
    // Xử lý khi người dùng chọn một nút
    console.log("Option selected:", option);
  };

  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <canvas
        ref={canvasRef}
        style={{ borderRadius: "0" }}
        width={1000}
        height={550}
      ></canvas>
      <div>
        <Typography
          sx={{
            position: "absolute",
            left: "12%",
            top: "5%",
            padding: "10px 200px",
            fontSize: "20px",
            borderRadius: "15px",
            backgroundColor: "#477288",
            color: "white",
            cursor: "pointer",
            fontWeight: 600,
            wordSpacing: "5px",
          }}
        >
          👉 Nghe và chọn tranh đúng 👈
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            left: "13%",
            top: "18%",

            fontSize: "22px",
            borderRadius: "15px",
            color: "#394b41",
            cursor: "pointer",

            fontWeight: 600,
            wordSpacing: "5px",
          }}
        >
          Câu 1/4
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            right: "15%",
            top: "18%",

            fontSize: "22px",
            borderRadius: "15px",
            color: "#394b41",
            cursor: "pointer",

            fontWeight: 600,
            wordSpacing: "5px",
          }}
        >
          Câu 1/4
        </Typography>
        <Button
          sx={{
            position: "absolute",
            left: "41%",
            top: "20%",
            backgroundColor: "#21bdc6",
            height: "38px",
            padding: "0px",
            borderRadius: "8px",
          }}
        >
          <VolumeUpOutlinedIcon
            fontSize="medium"
            sx={{
              backgroundColor: "#2f4858",
              color: "white",
              borderRadius: "8px",
              height: "100%",
              padding: "0 7px",
            }}
          />
          <Typography
            sx={{ padding: "0 10px", color: "white", fontWeight: 600 }}
          >
            CLICK TO LISTEN
          </Typography>
        </Button>
        <Box
          sx={{
            position: "absolute",
            left: "25%",
            top: "33%",
            display: "flex",
            gap: "36px",
          }}
        >
          {[0, 1].map((item, index) => (
            <Box
              key={index}
              sx={{
                height: "220px",
                width: "220px",
                borderRadius: "8px",

                backgroundColor: "white",
                border: "2px solid #2f4858",
                transition: "transform 0.3s", // Để có hiệu ứng mềm mại khi hover
                "&:hover": {
                  transform: "scale(1.1)", // Thay đổi kích thước khi hover
                },
                "&:not(:last-child)": {
                  marginRight: "20px", // Khoảng cách giữa các hộp
                },
              }}
            >
              <img
                src="images/lop-1-ngang.png"
                alt="lỗi"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              ></img>
            </Box>
          ))}
        </Box>
        <button
          style={{
            position: "absolute",
            left: "45%",
            top: "78%",
            padding: "10px 20px",
            fontSize: "20px",
            borderRadius: "50px",
            border: "none",
            backgroundColor: "#2f4858",
            color: "white",
            cursor: "pointer",
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default ListenAndChooseLogic;
