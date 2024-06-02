import React from "react";
import ChooseWordStart from "./ChooseWordStart";
const ChooseWord = () => {
  const words = [
    {
      word: "do exercise",
      imageURL: "https://i.ibb.co/0q8xPr5/book-v.png",
      keyword: ["do exers", "du exercize", "do exercise"],
    },
    {
      word: "read a book",
      imageURL: "https://i.ibb.co/0q8xPr5/book-v.png",
      keyword: ["reed a buk", "read book", "red a book"],
    },
    {
      word: "cook dinner",
      imageURL: "https://i.ibb.co/0q8xPr5/book-v.png",
      keyword: ["cuk diner", "cook diner", "cook dinner"],
    },
    {
      word: "go shopping",
      imageURL: "https://i.ibb.co/0q8xPr5/book-v.png",
      keyword: ["go shoping", "go shopping", "goshopping"],
    },
    {
      word: "ride a bike",
      imageURL: "https://i.ibb.co/0q8xPr5/book-v.png",
      keyword: ["ride bike", "ryde a bike", "ride a bike"],
    },
    {
      word: "play a game",
      imageURL: "https://i.ibb.co/0q8xPr5/book-v.png",
      keyword: ["play game", "pley a game", "play a game"],
    },
    {
      word: "watch a movie",
      imageURL: "https://i.ibb.co/0q8xPr5/book-v.png",
      keyword: ["wach a movie", "watch movie", "watch a movi"],
    },
    {
      word: "listen to music",
      imageURL: "https://i.ibb.co/0q8xPr5/book-v.png",
      keyword: ["listen to musik", "lisen to music", "listen to music"],
    },
    {
      word: "write a letter",
      imageURL: "https://i.ibb.co/0q8xPr5/book-v.png",
      keyword: ["rite a letter", "write letter", "rite letter"],
    },
    {
      word: "take a walk",
      imageURL: "https://i.ibb.co/0q8xPr5/book-v.png",
      keyword: ["take walk", "tak a walk", "take a walk"],
    },
  ];

  return (
    <div>
      <ChooseWordStart words={words} />
    </div>
  );
};

export default ChooseWord;
