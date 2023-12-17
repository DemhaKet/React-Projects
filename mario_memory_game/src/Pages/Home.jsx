import React from "react";
import { logo, background } from "../assets";
import "../App.css";
import { Link } from "react-router-dom";
import { all, fourPairs, sixPairs } from "../assets";
import "@fontsource/poppins";

function Home() {
  return (
    <>
      <div>
        <div>
          <h1>
            <span style={{ color: "#EE0500" }}>S</span>
            <span style={{ color: "#00D2FF" }}>u</span>
            <span style={{ color: "#FFF000" }}>p</span>
            <span style={{ color: "#00D2FF" }}>e</span>
            <span style={{ color: "#1DDB81" }}>r</span>
            <br />
            <span style={{ color: "#00D2FF" }}> M</span>
            <span style={{ color: "#1DDB81" }}>a</span>
            <span style={{ color: "#FFF000" }}>r</span>
            <span style={{ color: "#EE0500" }}>i</span>
            <span style={{ color: "#1DDB81" }}>o</span>
          </h1>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="selection">
          <div>
            <Link to="/game" state={{ arr: fourPairs }}>
              <button className="button">4 Pairs</button>
            </Link>
          </div>
          <div>
            <Link to="/game" state={{ arr: sixPairs }}>
              {" "}
              <button className="button">6 Pairs</button>
            </Link>
          </div>
          <div>
            <Link to="/game" state={{ arr: all }}>
              {" "}
              <button className="button">12 Pairs</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
