import React, { useState } from "react";
import SortSentenceStart from "./SortSentenceStart";
import SortSentenceLogic from "./SortSentenceLogic";
import SortSentenceFinish from "./SortSentenceFinish";
const SortSentence = () => {
  const sentences = [
    {
      sentence: "Hi, my name is Kayyyyyyyyyyyyy",
      imageURL: "https://i.ibb.co/Vwxpm9j/bike-v.png",
    },
    {
      sentence: "Hi, this is my friend",
      imageURL: "https://i.ibb.co/Vwxpm9j/bike-v.png",
    },
    {
      sentence: "Hi, this is my friend",
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
      {!play && <SortSentenceStart setPlay={setPlay} />}
      {play && !finish && (
        <SortSentenceLogic
          sentences={sentences}
          setFinish={setFinish}
          point={point}
          setPoint={setPoint}
        />
      )}
      {finish && (
        <SortSentenceFinish point={point} handleReplay={handleReplay} />
      )}
    </div>
  );
};

export default SortSentence;
