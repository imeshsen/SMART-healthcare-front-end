import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase-Config";
import "./Lgin.css";

export default function Lgin() {
  const navigate = useNavigate();

  const login = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Success!");
        navigate(`/user/${nic}`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Please check your username or password!");
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nic, setNic] = useState("");

  return (
    <div className="login">
      <div className="flex-left">
        <h1>Login</h1>
        <input
          type="NIC"
          placeholder="Enter your NIC"
          value={nic}
          onChange={(e) => setNic(e.target.value)}
          required
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <br />
        <button onClick={login} className="btnlgin">
          Sign in
        </button>
      </div>
    </div>
  );
}
