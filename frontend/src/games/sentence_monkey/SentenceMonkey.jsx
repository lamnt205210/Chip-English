import React, { useState } from "react";

import SentenceMonkeyLogic from "./SentenceMoneyLogic";
import Finish from "../Finish";
import SentenceMonkeyStart from "./SentenceMonkeyStart";
const SentenceMonkey = () => {
  const sentences = [
    {
      ls: "Hi ",
      rs: " name is Kay",
      keyword: ["my", "name", "your", "father", "hi"],
      key: "my",
      sentence: "Hi my name is Kay",
      imageURL: "https://i.ibb.co/Vwxpm9j/bike-v.png",
    },
    {
      ls: "What ",
      rs: " is it?",
      keyword: ["time", "name", "your", "father"],
      key: "time",
      sentence: "Hi my name is Kay",
      imageURL: "https://i.ibb.co/Vwxpm9j/bike-v.png",
    },
  ];
  const [play, setPlay] = useState(false);
  const [finish, setFinish] = useState(false);
  const [point, setPoint] = useState(0);
  const handleReplay = () => {
    setPlay(true);
    setFinish(false);
    setPoint(0);
  };

  return (
    <div>
      {!play && <SentenceMonkeyStart setPlay={setPlay} />}
      {play && !finish && (
        <SentenceMonkeyLogic
          sentences={sentences}
          setFinish={setFinish}
          point={point}
          setPoint={setPoint}
        />
      )}
      {finish && <Finish point={point} handleReplay={handleReplay} />}
    </div>
  );
};

export default SentenceMonkey;