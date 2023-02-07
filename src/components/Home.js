import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import HomeNavbar from "./HomeNavbar";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <HomeNavbar/>
      <form className="form1">
      <div>
        <h3>Already a member?</h3>
        <button
          className="btn1"
          onClick={() => {
            navigate("/lgin");
          }}
        >
          Sign in
        </button>

        <h3>Or</h3>

        <button
          className="btn2"
          onClick={() => {
            navigate("/reg");
          }}
        >
          Sign Up
        </button>
      </div>
    </form>
    </div>
    
  );
}

export default Home;
