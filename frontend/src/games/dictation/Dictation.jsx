import React from "react";
import DictationStart from "./DictationStart";
import DictationLogic from "./DictationLogic";
const Dictation = () => {
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
  return (
    <div>
      <DictationLogic words={words} />
    </div>
  );
};

export default Dictation;
