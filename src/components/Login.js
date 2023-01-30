import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "./home.jpg";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase-Config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const login = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <section className="section">
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>Sign in as an existing user</span>

          <form id="form">
            <input
              type="text"
              placeholder="E mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && email <= 0 ? (
              <label>
                <br />
                Email is empty
                <br />
              </label>
            ) : (
              ""
            )}
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && password <= 0 ? (
              <label>
                <br />
                password is empty
                <br />
              </label>
            ) : (
              ""
            )}
            <button className="btn" onClick={login}>Sign in</button>
          </form>
        </div>
        {/* <div className="col-2">
                <img src={bgImg} alt="" />
            </div> */}
      </div>
    </section>
  );
}
