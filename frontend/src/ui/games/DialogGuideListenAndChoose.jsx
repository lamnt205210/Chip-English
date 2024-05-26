import React from "react";

const DialogGuideListenAndChoose = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "30%",
        width: "40%",
        padding: "20px",
        backgroundColor: "#5EBFCB",
        borderRadius: "10px",
        color: "white",
        textAlign: "center",
      }}
    >
      <p>
        <strong>Hướng dẫn:</strong> Học sinh được nghe file audio và hình ảnh,
        học sinh chọn tranh phù hợp với audio để đạt điểm.
      </p>
      <button
        onClick={() => {}}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#F1E6BE",
          color: "#4A4A4A",
          cursor: "pointer",
        }}
      >
        Back
      </button>
    </div>
  );
};

export default DialogGuideListenAndChoose;
