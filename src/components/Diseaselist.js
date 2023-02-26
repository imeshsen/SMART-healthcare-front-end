import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Diseaselist() {

    const[data,setData] = useState({
        name:"",
        type:"",
        specialist:""
    });

    useEffect(()=>{
        loadData();
    },[]);

    const loadData=async ()=>{
        const results = await axios.get("http://localhost:8080/api/v1/diseases/findall")
        setData(results.data);
        console.log(results);
    }

  return (
    <div className="container">
         <div className="py-4">
            <h2 className="text-center">List View</h2>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Specialist</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((disease, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{disease.name}</td>
                <td>{disease.type}</td>
                <td>{disease.specialist}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
