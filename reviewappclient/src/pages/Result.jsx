import React, { useEffect, useState } from "react";
import { Card } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

function Result() {
  const [data1, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get( "http://localhost:8000/reviewroute/getpost");
        setData(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2 className="text-center">All Reviews</h2>
      <Link to={"/addreview"}>
        
        <button className="btn btn-danger" style={{ marginLeft: "1250px" }}>
          Back to Review page
        </button>
      </Link>
      {data1.map((dat) => (
        <Card
          style={{ width: "50%" }}
          key={dat._id}
          className="container mt-3 bg-light"
        >
          <p className="fw-bold">
            How often do you use this app? :
            <span className="ms-2 fw-normal">{dat.appuse}</span>
          </p>
          <p className="fw-bold">
            Main app goal? :
            <span className="fw-normal ms-2">{dat.goal.join(", ")}</span>
          </p>
          <p className="fw-bold">
            Rate User Experience:
            <span className="fw-normal ms-2">{dat.rateuser}</span>
          </p>
          <p className="fw-bold">
            Suggest any improvements:
            <span className="fw-normal ms-2">{dat.improve}</span>
          </p>
          <p className="fw-bold">
            Enter your birthday:
            <span className="fw-normal ms-2">{dat.dob}</span>
          </p>
        </Card>
      ))}
    </div>
  );
}

export default Result;
