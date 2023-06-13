import React from "react";
import img1 from "../components/assets/dataset1.jpg";
import { singlemodel } from "../dummyData/SingleModel";
import { useState, useEffect } from "react";
function SingleModel() {
  const [csvData, setCSVData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.csv");
      const csvText = await response.text();
      setCSVData(csvText);
    };

    fetchData();
  }, []);

  return (
    <>
      {singlemodel.map((item, index) => (
        <div className="signledataset-main-div">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "20px 50px",
              borderBottom: "1px solid black",
            }}
          >
            <div style={{ width: "50%" }}>
              {" "}
              <h1 className="single-data-title" key={index}>
                {item.name}
              </h1>
              <p>
                {" "}
                The provided dataset contains information related to CBSE
                Class-X results
              </p>
              <div
                style={{
                  backgroundColor: "lightgray",
                  width: "50px",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                {item.access}
              </div>
            </div>
            <div className="single-dataset-flex-sidebar">
              <div>
                <button className="single-data-btn">Create Model</button>
                <button className="single-data-btn">Download</button>
              </div>
              <div>
                <img src={img1} className="single-dataset-img"></img>
              </div>
            </div>{" "}
          </div>
          <div className="single-dataset-flex-content">
            <div style={{ width: "55%" }} className="single-dataset-desc">
              {item.description}
            </div>
            <div className="single-dataset"></div>
          </div>
          <div>
            <div className="language-csv">{csvData}</div>
          </div>
        </div>
      ))}{" "}
    </>
  );
}

export default SingleModel;
