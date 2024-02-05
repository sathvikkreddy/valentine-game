import React from "react";
import heartBreak from "../heart-break.png";

export default function HeartBreak() {
  return (
    <div className="postition-relative">
      <div className="container text-center position-absolute top-50 start-50 translate-middle">
        <img src={heartBreak} alt="heartBreak" />
      </div>
    </div>
  );
}
