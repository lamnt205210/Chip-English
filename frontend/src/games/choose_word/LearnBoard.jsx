import React, { useState } from "react";
import { Box } from "@mui/material";
const LearnBoard = (words) => {
  const [urlListen, setUrlListen] = useState(
    "images/choose_word/btn_listen.png"
  );
  return (
    <div>
      <img
        src="images/choose_word/boardguide.jpg"
        alt="play"
        style={{
          position: "absolute",
          zIndex: 2,
        }}
      ></img>
      <Box
        style={{
          position: "absolute",
          zIndex: 2,
        }}
      >
        <Box>
          <img
            src={urlListen}
            alt="button listen"
            style={{ borderRadius: "18px" }}
            onMouseEnter={() =>
              setUrlListen("images/choose_word/btn_listen_hover.png")
            }
            onMouseLeave={() =>
              setUrlListen("images/choose_word/btn_listen.png")
            }
          ></img>
        </Box>
      </Box>
    </div>
  );
};

export default LearnBoard;
