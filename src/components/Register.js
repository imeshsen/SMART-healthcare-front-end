import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase-Config";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [nic, setNIC] = useState("");
  const [error, setError] = useState(false);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log("error");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (
      name.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      cpassword.length == 0 ||
      mobile.length == 0 ||
      nic.length == 0
    ) {
      setError(true);
    }

    if (name && email && password && cpassword && mobile && nic) {
      const patient = { name, password, mobile, nic };
      fetch("http://localhost:8080/api/v1/patient/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patient),
      }).then(() => {
        console.log("New Patient added");
        navigate("/dashboard");
      });
    }
  };

  return (
    <section className="section">
      <div className="register">
        <div className="col-1">
          <h2>Sign up</h2>
          <span>Register as a new user</span>

          <form id="form" onSubmit={handleClick}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error && name.length <= 0 ? (
              <label>
                <br />
                Name can't be empty
                <br />
              </label>
            ) : (
              ""
            )}

            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && email.length <= 0 ? (
              <label>
                <br />
                Email can't be empty
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
            {error && password.length <= 0 ? (
              <label>
                <br />
                Password can't be empty
                <br />
              </label>
            ) : (
              ""
            )}

            <input
              type="password"
              placeholder="Confirm password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
            {error && (password !== cpassword || cpassword <= 0) ? (
              <label>
                <br />
                your Password and confirm password doesn't match or empty
                <br />
              </label>
            ) : (
              ""
            )}

            <input
              type="text"
              placeholder="mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {error && mobile.length <= 0 ? (
              <label>
                <br />
                Mobile number can't be empty
                <br />
              </label>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="NIC number"
              value={nic}
              onChange={(e) => setNIC(e.target.value)}
            />
            {error && nic.length <= 0 ? (
              <label>
                <br />
                NIC can't be empty
                <br />
              </label>
            ) : (
              ""
            )}
            <button className="btn">Sign Up</button>
          </form>
        </div>
        {/* <div className="col-2">
          <img src={bgImg} alt="" />
        </div> */}
      </div>
    </section>
  );
}
