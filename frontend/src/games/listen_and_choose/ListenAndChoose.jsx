import React, { useState } from "react";
import ListenAndChooseStart from "./ListenAndChooseStart";

import ListenAndChooseLogic from "./ListenAndChooseLogic";
import ListenAndChooseFinish from "./ListenAndChooseFinish";
const ListenAndChoose = () => {
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
  const points = 100;
  const pointPerQuestion = 100 / words.length;
  const [play, setPlay] = useState(false);

  return (
    <div>
      {!play && <ListenAndChooseStart setPlay={setPlay} />}
      {play && <ListenAndChooseLogic words={words} />}
    </div>
  );
};

export default ListenAndChoose;
