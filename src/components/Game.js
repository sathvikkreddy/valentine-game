import Path from "./Path";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Game() {
  const [position, setPosition] = useState(0);
  const [gameFinished, setGameFinished] = useState(0);
  const questionsArr = [
    "How do you like to travel?",
    "What would you do in winters?",
    "Favorite color?",
    "What do you like more?",
    "What do you like to read?",
    "What's your favorite type of snack?",
  ];

  const optionsArr = [
    ["Car", "Bike"],
    ["Camp Fire", "Blanket Wrap"],
    ["Black", "White"],
    ["Tulips", "Braclets"],
    ["E-books", "Physical books"],
    ["Fries", "Chekodi"],
  ];
  const [challenge, setChallenge] = useState({
    id: 0,
    question: questionsArr[0],
    option1: optionsArr[0][0],
    option2: optionsArr[0][1],
  });
  const [maxIndex, setmaxIndex] = useState(0);
  const { id, question, option1, option2 } = challenge;
  const handleOnClick = () => {
    setPosition(position + 1);
    if (maxIndex === position) {
      setmaxIndex(maxIndex + 1);
    }
    if (position < 5) {
      setChallenge({
        id: position + 1,
        question: questionsArr[position + 1],
        option1: optionsArr[position + 1][0],
        option2: optionsArr[position + 1][1],
      });
      console.log(position + 1, maxIndex);
    } else {
      setGameFinished(true);
      handleGameFinished();
    }
  };

  const navigate = useNavigate();
  const handleGameFinished = () => {
    // setChallenge({
    //   id: 142,
    //   question: "Will you be my valentine?",
    //   option1: "Yes",
    //   option2: "No",
    // });
    // setPosition(-1);
    // setmaxIndex(-1);
    navigate("/heart");
  };

  const handlePrevClick = () => {
    setChallenge({
      id: position - 1,
      question: questionsArr[position - 1],
      option1: optionsArr[position - 1][0],
      option2: optionsArr[position - 1][1],
    });
    setPosition(position - 1);
    console.log(position - 1, maxIndex);
  };

  const handleNextClick = () => {
    setChallenge({
      id: position + 1,
      question: questionsArr[position + 1],
      option1: optionsArr[position + 1][0],
      option2: optionsArr[position + 1][1],
    });
    setPosition(position + 1);
    console.log(position + 1, maxIndex);
  };

  return (
    <div>
      <Path position={position} />
      <div className="container text-center">
        <h3>
          {gameFinished ? "Yayyy!! We won the game" : "Let me guess your picks"}
        </h3>
        <h1>{`${id + 1}. ${question}`}</h1>
        <button className="btn btn-primary my-3 mx-3" onClick={handleOnClick}>
          {option1}
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleOnClick}>
          {option2}
        </button>
        <div className="row">
          <div className="col">
            {position > 0 && (
              <button className="btn btn-primary" onClick={handlePrevClick}>
                &larr;
              </button>
            )}
          </div>
          <div className="col"></div>
          <div className="col">
            {maxIndex > position && (
              <button className="btn btn-primary" onClick={handleNextClick}>
                &rarr;
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
