import React, { useEffect, useRef } from "react";
import { DialogGuideListenAndChoose } from "../ui/games/DialogGuideListenAndChoose";
const ListenAndChoose = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const background = new Image();
    background.src = "images/listen_and_choose_bg.png"; // Update this path to the correct one
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
        <button
          onClick={() => handleButtonClick("Let's Play")}
          style={{
            position: "absolute",
            left: "32%",
            top: "65%",
            padding: "10px 20px",
            fontSize: "20px",
            borderRadius: "50px",
            border: "none",
            backgroundColor: "#0bbba5",
            color: "white",
            cursor: "pointer",
          }}
        >
          Let's Play
        </button>
        <button
          onClick={() => handleButtonClick("How To Play")}
          style={{
            position: "absolute",
            left: "55%",
            top: "65%",
            padding: "10px 20px",
            fontSize: "20px",
            borderRadius: "50px",
            border: "none",
            backgroundColor: "#2f4858",
            color: "white",
            cursor: "pointer",
          }}
        >
          How To Play
        </button>
        <DialogGuideListenAndChoose />
      </div>
    </div>
  );
};

export default ListenAndChoose;
