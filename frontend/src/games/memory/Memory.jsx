import React, { useState } from "react";
import MemoryStart from "./MemoryStart";
import MemoryLogic from "./MemoryLogic";
import MemoryFinish from "./MemoryFinish";
const Memory = () => {
  const words = [
    {
      word: "ball",
      imageURL: "https://i.ibb.co/6sM22FZ/ball-v.png",
      audioURL:
        "https://raw.githubusercontent.com/lamnt205210/audio-hosting/main/uploads/g1u1l1_ball%20(1).mp3",
    },
    {
      word: "Bill",
      imageURL: "https://i.ibb.co/vYnmnQz/bill-v.png",
      audioURL:
        "https://raw.githubusercontent.com/lamnt205210/audio-hosting/main/uploads/g1u1l1_bill.mp3",
    },
    {
      word: "book",
      imageURL: "https://i.ibb.co/0q8xPr5/book-v.png",
      audioURL:
        "https://raw.githubusercontent.com/lamnt205210/audio-hosting/main/uploads/g1u1l1_book.mp3",
    },
    {
      word: "bike",
      imageURL: "https://i.ibb.co/Vwxpm9j/bike-v.png",
      audioURL:
        "https://raw.githubusercontent.com/lamnt205210/audio-hosting/main/uploads/g1u1l1_bike.mp3",
    },
  ];

  const pointPerQuestion = 100 / words.length;
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
      {!play && <MemoryStart setPlay={setPlay} />}
      {!finish && play && (
        <MemoryLogic
          words={words}
          pointPerQuestion={pointPerQuestion}
          setFinish={setFinish}
          point={point}
          setPoint={setPoint}
        />
      )}
      {finish && <MemoryFinish point={point} handleReplay={handleReplay} />}
    </div>
  );
};

export default Memory;
