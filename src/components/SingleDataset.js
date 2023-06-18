import React from "react";
import "../styles/singledataset.scss";
import { singledataset } from "../dummyData/singledataset";
import csvdata from "../dummyData/data.csv";
import { useEffect } from "react";
import { useState } from "react";
import CreateDataset from "./CreateDataset";
import Dataset from "./Dataset";

function SingleDataset() {
  const [csvRows, setCsvRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openDataset, setOpenDataset] = useState(false);

  const toggleComponent = () => {
    setOpenDataset(!openDataset);
  };

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
      {openDataset ? (
        <Dataset />
      ) : (
        <>
          {singledataset.map((item, index) => (
            <div className="signledataset-main-div">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  padding: "20px 50px",
                  borderBottom: "1px solid white",
                  fontFamily: "JosefinSans",
                }}
              >
                <div
                  style={{
                    width: "50%",
                  }}
                >
                  {" "}
                  <h1 className="single-data-title" key={index}>
                    {item.name}
                  </h1>
                  <p style={{ fontSize: "20px" }}>
                    {" "}
                    The provided dataset contains information related to CBSE
                    Class-X results
                  </p>
                </div>
                <div className="single-dataset-flex-sidebar">
                  <div>
                    <button
                      onClick={() => toggleComponent()}
                      className="back-btn"
                    >
                      ⇦
                    </button>
                    <button
                      className="single-data-btn"
                      onClick={() => setOpenModal(true)}
                    >
                      Create Dataset
                    </button>{" "}
                    <CreateDataset
                      open={openModal}
                      onClose={() => setOpenModal(false)}
                    />
                    <button className="single-data-btn">Download</button>
                  </div>
                  <div>
                    <img
                      src={item.image_url}
                      className="single-dataset-img"
                    ></img>
                  </div>
                </div>{" "}
              </div>
              <div className="single-dataset-flex-content">
                <div
                  style={{
                    width: "55%",
                    fontSize: "20px",
                    lineHeight: "37px",
                    letterSpacing: "1px",
                    fontFamily: "JosefinSans",
                  }}
                  className="single-dataset-desc"
                >
                  {item.description}
                </div>
                <div className="single-dataset">
                  <div>
                    <lable
                      style={{
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "30px",
                        fontFamily: "JosefinSans",
                      }}
                    >
                      Categories :
                    </lable>
                    <div
                      style={{
                        fontWeight: "400",
                        fontSize: "17px",
                        lineHeight: "30px",
                        fontFamily: "JosefinSans",
                      }}
                    >
                      {item.categories}
                    </div>
                  </div>
                  <div>
                    <lable
                      style={{
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "30px",
                        fontFamily: "JosefinSans",
                      }}
                    >
                      File type :
                    </lable>
                    <div
                      style={{
                        fontWeight: "400",
                        fontSize: "17px",
                        lineHeight: "30px",
                        fontFamily: "JosefinSans",
                      }}
                    >
                      {item.file_type}
                    </div>
                  </div>
                  <div>
                    <lable
                      style={{
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "30px",
                        fontFamily: "JosefinSans",
                      }}
                    >
                      File Size :
                    </lable>
                    <div
                      style={{
                        fontWeight: "400",
                        fontSize: "17px",
                        lineHeight: "30px",
                        fontFamily: "JosefinSans",
                      }}
                    >
                      {item.file_size}
                    </div>
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
          ))}
        </>
      )}
    </>
  );
}

export default SingleDataset;
