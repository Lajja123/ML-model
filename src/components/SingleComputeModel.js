import React from "react";
import "../styles/singledataset.scss";
import { singlecompute } from "../dummyData/singleComputeModel";
import { useState } from "react";
import Compute from "./Compute";
import "../styles/popup.scss";

function SingleComputeModel() {
  const [openCompute, setOpenCompute] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modelUrls, setModelUrls] = useState([]);
  const [modelUrl, setModelUrl] = useState("");
  const [datasetUrls, setDatasetUrls] = useState([]);
  const [datasetUrl, setDatasetUrl] = useState("");
  const [fields, setFields] = useState([""]); // Array to store the form field values

  const togglePopup = () => {
    setIsVisible(!isVisible);
  };

  const toggleComponent = () => {
    setOpenCompute(!openCompute);
  };
  const handleAddDatasetUrl = () => {
    setDatasetUrls([...datasetUrls, datasetUrl]);
    setDatasetUrl("");
  };
  const handleAddModelUrl = () => {
    setModelUrls([...modelUrls, modelUrl]);
    setModelUrl("");
  };

  return (
    <>
      {openCompute ? (
        <Compute />
      ) : (
        <>
          {singlecompute.map((item, index) => (
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
                  <p> {item.description}</p>
                </div>
                <div className="single-dataset-flex-sidebar">
                  <div>
                    <button onClick={() => toggleComponent()}>Back</button>
                  </div>
                  <div>
                    <img
                      src={item.image_url}
                      className="single-dataset-img"
                    ></img>
                  </div>
                </div>{" "}
              </div>
              <div style={{ padding: "20px 50px" }}>
                <h4 style={{ margin: "0" }} className="dataset-content">
                  Compute Your Model
                </h4>{" "}
                <div style={{ padding: "20px 0px" }}>
                  {" "}
                  <div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "650",
                        padding: "10px 0px",
                      }}
                    >
                      Enter DataSet URLs:
                    </div>
                    <input
                      type="text"
                      value={datasetUrl}
                      onChange={(e) => setDatasetUrl(e.target.value)}
                      placeholder="Enter dataset URL"
                      style={{ padding: "10px" }}
                    />
                    <button
                      onClick={handleAddDatasetUrl}
                      style={{
                        margin: "0px 20px",
                        padding: "5px",
                        width: "100px",
                      }}
                    >
                      Add
                    </button>
                    <div>
                      <h4>DataSet URLs:</h4>
                      {datasetUrls.map((url, index) => (
                        <div key={index}>{url}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "650",
                        padding: "10px 0px",
                      }}
                    >
                      Enter Model Link
                    </div>
                    <input
                      type="text"
                      value={modelUrl}
                      onChange={(e) => setModelUrl(e.target.value)}
                      placeholder="Enter Model Link"
                      style={{ padding: "10px" }}
                    />
                    <button
                      onClick={handleAddModelUrl}
                      style={{
                        margin: "0px 20px",
                        padding: "5px",
                        width: "100px",
                      }}
                    >
                      Add{" "}
                    </button>
                    <div>
                      <h4> Model Link</h4>
                      {modelUrls.map((url, index) => (
                        <div key={index}>{url}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  className="single-data-btn"
                  style={{ margin: "0px" }}
                  onClick={togglePopup}
                >
                  Compute
                </button>{" "}
                {isVisible && (
                  <div className="popup">
                    <button className="close-button" onClick={togglePopup}>
                      X
                    </button>
                    <div className="popup-content">
                      This is the pop-up content.
                    </div>
                  </div>
                )}
              </div>{" "}
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default SingleComputeModel;
