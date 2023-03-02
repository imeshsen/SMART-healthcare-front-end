import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ContactSpecialist() {
  const [data, setData] = useState([]);
  const [search, setSerach] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const {specialist} = useParams();

  const loadData = async () => {
    const results = await axios.get(
      `http://localhost:8080/api/v1/specialist/${specialist}`
    );
    setData(results.data);
    console.log(results);
  };

  return (
    <div className="container">
      <div className="py-4">
        <input
          type={"text"}
          className="txt border shadow"
          placeholder="Search here"
          onChange={(e) => {
            setSerach(e.target.value);
          }}
        ></input>
        <h2 className="text-center">Results</h2>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((specialist) => {
                if (search == "") {
                  return specialist;
                } else if (
                  specialist.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return specialist;
                }
              })
              .map((specialist, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{specialist.name}</td>
                  <td>{specialist.city}</td>
                  <td>{specialist.email}</td>
                  <td>{specialist.contact}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
