import React from "react";
import { Navigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links">
          <a href="/">Home</a>
          <a>Profile</a>
          <a>About</a>
        </div>
      </div>
      <div className="rightSide">
        <input type="text" placeholder="Search"></input>
        <button>Search</button>
      </div>
    </div>
  );
}

export default Navbar;
