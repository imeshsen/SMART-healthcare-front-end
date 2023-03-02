import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Disease() {
  const [diseases, setDiseases] = useState([]);

  const [value, setValue] = useState("");

  useEffect(() => {
    loadDiseaseNames();
  }, []);

  const loadDiseaseNames = async () => {
    const names = await axios.get(
      `http://localhost:8080/api/v1/diseases/findall`
    );
    setDiseases(names.data);
    console.log(names);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Choose your Disease</h2>
          <div className="card">
            <div className="card-header text-center P-5">
              <select
                className="form-control"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              >
                <option value="">Choose Name</option>

                {diseases.map((disease) => (
                  <option key={disease.name}>{disease.name}</option>
                ))}
              </select>
            </div>
            <Link
              className="btn btn-primary my-2 mx-6 text-right"
              to={`/selected/${value}`}
            >
              Go
            </Link>
            <h3 className="text-center m-4">Or</h3>
            <Link type="button" class="btn btn-primary my-2 mx-6" to={"/list"}>
              View full list
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
