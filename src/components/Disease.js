import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { async } from "@firebase/util";
import axios from "axios";

export default function Disease() {
  const [diseases, setDiseases] = useState([]);

  const { name } = useParams();

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
      <div className="column">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Choose your Disease</h2>

          <select
            className="form-control"
          >
            <option value="">Choose  Name</option>

            {diseases.map((disease) => (
              <option value={disease.name} key={disease.name}>
                {disease.name}
              </option>
            ))}
          </select>

          <button type="button" class="btn btn-success mt-1">
            Go
          </button>

          <h3 className="text-center m-4">Or</h3>

          

          <button type="button" class="btn btn-success mt-1">
            View full list
          </button>
        </div>
      </div>
    </div>
  );
}
