import React from "react";
import { openAudio } from "../../utils/audioUtils";
const MemoryDialogGuide = ({ setOpenGuide }) => {
  return (
    <div>
      <img
        src="/images/memory/guide.png"
        alt="play"
        style={{
          position: "absolute",
          left: "10%",
          top: "9%",
          cursor: "pointer",
          zIndex: 3,
        }}
        // onClick={() => {
        //   setOpenGuide(false);
        //   openAudio("/audio/touch.mp3");
        // }}
      ></img>
      <img
        src="/images/memory/backIntro.png"
        alt="play"
        style={{
          position: "absolute",
          left: "40%",
          bottom: "30%",
          cursor: "pointer",
          zIndex: 4,
        }}
        onClick={() => {
          setOpenGuide(false);
          openAudio("/audio/touch.mp3");
        }}
      ></img>
    </div>
  );
};

export default MemoryDialogGuide;
