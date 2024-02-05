import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="postition-relative">
      <div className="container text-center position-absolute top-50 start-50 translate-middle">
        <h1>Hey.</h1>
        <p className="fs-4">
          It's Febraury, you know what time of the year it is. I have something
          to ask but I'm not sure. So I created this little fun game for us
          where you just have choose your picks. Play the game and help me
          figure out my mind!!
        </p>
        <Link className="btn btn-success my-3 mx-3" role="button" to="/game">
          Let's go
        </Link>
        <button className="btn btn-danger my -3 mx-3">No</button>
      </div>
    </div>
  );
}
