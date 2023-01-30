
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dash.css";
import Navbar from "./Navbar";

export default function () {
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [mobile, setMobile] = useState("");
  const [hometown, setHometown] = useState("");
  const [error, setError] = useState(false);

  const navigate  = useNavigate();

  //const patient = { name, nic, mobile, hometown };
  const facedt = {name};

  const handleclick = (e) => {
    e.preventDefault();
    if (
      name.length == 0 ||
      nic.length == 0 ||
      mobile.length == 0 ||
      hometown.length == 0
    ) {
      setError(true);
    }

    if (name && nic && mobile && hometown) {
      const patient = { name, nic, mobile, hometown };
      fetch("http://localhost:8080/api/v1/patient/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patient),
      }).then(() => {
        alert("Success !");
        navigate("/user");
      });
    }
  };

  const face = () => {
    fetch("http://127.0.0.1:5000/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(facedt),
      }).then(() => {
        alert("Success");
      });
  };
  return (
    <div className="bar">
      <Navbar />
      <div className="content">
        <div className="content-left">
          {/* <a>ddscdsc</a>
          <a>sefesfe</a>
          panel
          <br />
          dasas */}
        </div>
        <div className="content-right">
          <h1>Welcome</h1>
          <h3>Fill up your personal information</h3>
          <div className="form">
            <input
              type="text"
              placeholder="Name with initials"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            {error && name.length <= 0 ? (
              <label> Email can't be empty</label>
            ) : (
              ""
            )}
            <br />
            <br />
            <input
              type="text"
              placeholder="Nic number"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            ></input>
            {error && nic.length <= 0 ? (
              <label> NIC can't be empty</label>
            ) : (
              ""
            )}
            <br />
            <br />
            <input
              type="text"
              placeholder="Mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            ></input>
            {error && mobile.length <= 0 ? (
              <label> Mobile number can't be empty</label>
            ) : (
              ""
            )}
            <br />
            <br />
            <input
              type="text"
              placeholder="Hometown"
              value={hometown}
              onChange={(e) => setHometown(e.target.value)}
            ></input>
            {error && hometown.length <= 0 ? (
              <label> Hometown can't be empty</label>
            ) : (
              ""
            )}
            <br />
            <br />
            <button onClick={face}>take face details</button>
            <button className="btnsubmit" onClick={handleclick}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
