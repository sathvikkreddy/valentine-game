import React, { useState } from "react";
import heart from "../heart.png";
import { useNavigate } from "react-router-dom";

export default function Heart() {
  const [message, setMessage] = useState("");
  const [i, setI] = useState(0);
  const navigate = useNavigate();
  const messageArr = [
    "Are you sure?",
    "You are gonna break my heart.",
    "Nah, you don't want this to happen.",
    "It's not funny anymore.",
    "Alert!! Attacks have started in my heart.",
    "Only you could stop them.",
  ];

  const onYesClick = () => {
    setMessage("Great! We make a good pair.");
  };

  const onNoClick = () => {
    if (i < messageArr.length) {
      setMessage(messageArr[i]);
      setI(i + 1);
    } else {
      navigate("/heart-break");
    }
  };

  return (
    <div className="postition-relative">
      <div className="container text-center position-absolute top-50 start-50 translate-middle">
        <p className="fs-4">Perfect, now I've made up my heart</p>
        <h1 className="mb-4">Will you be my valentine ?</h1>
        <img
          src={heart}
          alt="heart"
          role="button"
          onClick={onYesClick}
          style={{ width: `${(i + 1) * 100}px` }}
        ></img>
        <button className="btn btn-danger my -3 mx-3" onClick={onNoClick}>
          No
        </button>
        <p className="fs-4">{message}</p>
      </div>
    </div>
  );
}
