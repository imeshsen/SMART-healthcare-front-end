import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "./Dashboard";
import Reg from "./Reg";
import Lgin from "./Lgin";
import Usr from "./User";
import Admin from "./Admin";
import Disease from "./Disease";
import Diseaselist from "./Diseaselist";
import Selecteddisease from "./Selecteddisease";
import ContactSpecialist from "./ContactSpecialist";

export default function Mapper() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/reg" element={<Reg />}></Route>
          <Route path="/lgin" element={<Lgin />}></Route>
          <Route path="/user/:nic" element={<Usr />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/disease" element={<Disease/>}></Route>
          <Route path="/list" element={<Diseaselist/>}></Route>
          <Route path="/selected/:value" element={<Selecteddisease/>}></Route>
          <Route path="/contact/:specialist" element={<ContactSpecialist/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
