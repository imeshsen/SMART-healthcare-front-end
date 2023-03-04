import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signinopttions() {
  const handleclick=()=>{
    axios.get("http://127.0.0.1:5000/start");
  }
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Sign in options</h2>
            <div className="card text-center">
            <Link className="btn btn-primary my-2 mx-6" to={"/lgin"}>Sign in using Email</Link>
            <button className="btn btn-primary my-2 mx-6" onClick={handleclick}>Sign in using face ID</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
