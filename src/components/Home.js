import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <form className="form1">
      <div>
        <h3>Already a member?</h3>

        <button
          className="btn1"
          style={{ width: "150%" }}
          onClick={() => {
            navigate("/lgin");
          }}
        >
          Sign in
        </button>

        <h3>Or</h3>

        <button
          className="btn2"
          style={{ width: "150%" }}
          onClick={() => {
            navigate("/reg");
          }}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default Home;
