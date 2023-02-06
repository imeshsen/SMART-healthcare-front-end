import React from "react";
import "./AdminNavbar.css";

export default function AdminNavbar() {
  return (
    <div className="adminNavbar">
      <div className="flex-left">
        <div className="links-left">
          <a href="/">Home</a>
        </div>
      </div>
      <div className="flex-right">
        <div className="links-right">
          <a>About</a>
        </div>
      </div>
    </div>
  );
}
