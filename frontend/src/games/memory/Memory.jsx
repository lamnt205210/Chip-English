import React, { useState, useRef } from "react";
import MemoryStart from "./MemoryStart";
import MemoryLogic from "./MemoryLogic";
import MemoryFinish from "./MemoryFinish";
import MemoryCardAnimation from "./MemoryCardAnimation";
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
  function getRandomNumbers(n) {
    const numbers = new Set();

    while (numbers.size < 3) {
      const randomNumber = Math.floor(Math.random() * (n + 1));
      numbers.add(randomNumber);
    }

    return Array.from(numbers);
  }

  const listWordIndex = getRandomNumbers(words.length - 1);
  const listWord = listWordIndex.map((index) => words[index]);
  const [scenario, setScenario] = useState("start");
  const clickTimeRef = useRef(0);
  const handleReplay = () => {
    setScenario("logic");
  };

  return (
    <div>
      {scenario === "start" && <MemoryStart setScenario={setScenario} />}

      {scenario === "animation" && (
        <MemoryCardAnimation words={listWord} setScenario={setScenario} />
      )}

      {scenario === "logic" && (
        <MemoryLogic
          words={listWord}
          setScenario={setScenario}
          clickTimeRef={clickTimeRef}
        />
      )}
      {scenario === "finish" && (
        <MemoryFinish handleReplay={handleReplay} clickTimeRef={clickTimeRef} />
      )}
    </div>
  );
};

export default Memory;