import React from "react";
import { win_bg } from "../assets";
import { Link } from "react-router-dom";

function IsWin({ score }) {
  return (
    <div>
      <h2 style={{ color: "#EE0500" }}>
        Great Job! <br /> Score: {score}
      </h2>
      <img
        src={win_bg}
        alt="win_background"
        style={{
          maxWidth: "70%",
          minWidth: "250px",
          borderRadius: "1%",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19",
        }}
      />{" "}
      <br />
      <Link to="/">
        <button className="button">Play Again</button>
      </Link>
    </div>
  );
}

export default IsWin;
