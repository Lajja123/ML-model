import React from "react";
import "../styles/singledataset.scss";
import { singledataset } from "../dummyData/singledataset";
import csvdata from "../dummyData/data.csv";
import { useEffect } from "react";
import { useState } from "react";

function SingleDataset() {
  const [csvRows, setCsvRows] = useState([]);
  useEffect(() => {
    fetchCSVData();
  }, []);

  const fetchCSVData = () => {
    fetch(csvdata)
      .then((response) => response.text())
      .then((data) => {
        const rows = data.split("\n");
        setCsvRows(rows);
      })
      .catch((error) => {
        console.log("Error reading CSV file:", error);
      });
  };
  return (
    <>
      {" "}
      {singledataset.map((item, index) => (
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
            </div>
            <div className="single-dataset-flex-sidebar">
              <div>
                <button className="single-data-btn">Create Dataset</button>
                <button className="single-data-btn">Download</button>
              </div>
              <div>
                <img src={item.image_url} className="single-dataset-img"></img>
              </div>
            </div>{" "}
          </div>
          <div className="single-dataset-flex-content">
            <div style={{ width: "55%" }} className="single-dataset-desc">
              {item.description}
            </div>
            <div className="single-dataset">
              <div>
                <lable
                  style={{
                    fontWeight: "700",
                    fontSize: "15px",
                    lineHeight: "30px",
                  }}
                >
                  Categories
                </lable>
                <div>{item.categories}</div>
              </div>
              <div>
                <lable
                  style={{
                    fontWeight: "700",
                    fontSize: "15px",
                    lineHeight: "30px",
                  }}
                >
                  File type
                </lable>
                <div>{item.file_type}</div>
              </div>
              <div>
                <lable
                  style={{
                    fontWeight: "700",
                    fontSize: "15px",
                    lineHeight: "30px",
                  }}
                >
                  File tize
                </lable>
                <div>{item.file_size}</div>
              </div>
            </div>
          </div>{" "}
          <table>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                {/* Add more column headers if needed */}
              </tr>
            </thead>
            <tbody>
              {csvRows.map((row, index) => {
                const columns = row.split(",");
                return (
                  <tr key={index}>
                    {columns.map((column, columnIndex) => (
                      <td key={columnIndex}>{column}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}{" "}
    </>
  );
}

export default SingleDataset;
