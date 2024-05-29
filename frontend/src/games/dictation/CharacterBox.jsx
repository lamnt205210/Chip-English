// CharacterBox.js
import React from "react";
import { Box, TextField } from "@mui/material";

const CharacterBox = ({ value, index, onChange }) => {
  return (
    <TextField
      variant="outlined"
      inputProps={{
        maxLength: 1,
        style: {
          color: "white", // Cài đặt màu chữ
          textAlign: "center",
          fontSize: "24px", // Cài đặt kích thước font chữ
          fontStyle: "italic", // Cài đặt kiểu font chữ
          fontWeight: 600, // Cài đặt độ đậm của font chữ
        },
      }}
      value={value}
      onChange={(e) => onChange(e.target.value, index)}
      sx={{
        display: "inline-block",
        alignSelf: "center",
        margin: "5px 5px",
        padding: 0,
        width: "33px",
        height: "33px",
        backgroundColor: "#1d99a3",
        borderRadius: "7px",
        "& .MuiInputBase-input": {
          padding: "3px 0", // Điều chỉnh padding bên trong để giảm chiều cao
          height: "33px",
          lineHeight: "33px", // Điều chỉnh chiều cao dòng để căn giữa văn bản theo chiều dọc
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "transparent",
          },
          "&:hover fieldset": {
            borderColor: "transparent",
          },
          "&.Mui-focused fieldset": {
            borderColor: "transparent",
          },
        },
      }}
    />
  );
};

export default CharacterBox;
