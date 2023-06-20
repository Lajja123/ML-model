import React from "react";
import "../styles/singledataset.scss";
import { useState } from "react";
import Compute1 from "./Compute1";
import "../styles/popup.scss";
import axios from "axios";
// import img1 from "../components/assets/dataset2.jpg";
// import img1 from "../components/assets/cont1.jpg";
import img1 from "../components/assets/cont2.jpeg";
import { useAccount } from "wagmi";
import { Database } from "@tableland/sdk";
import { Wallet, providers } from "ethers";

function Container1() {
  const { address } = useAccount();
  const [openCompute, setOpenCompute] = useState(false);
  const [btnloading, setbtnloading] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
  const [modelUrls, setModelUrls] = useState([]);
  const [notebookUrl, setNotebookUrl] = useState("");
  const [datasetUrls, setDatasetUrls] = useState([]);
  const [datasetUrl, setDatasetUrl] = useState("");
  // const [fields, setFields] = useState([""]); // Array to store the form field values
  const [jobId, setJobId] = useState("");
  const [cid, setCid] = useState("");
  // const [mappings, setMappings] =  useState([]);
  const [showButton, setShowButton] = useState(true);

  // const togglePopup = () => {
  //   setIsVisible(isVisible);
  // };
  const handleGetCID = () => {
    setCid(cid);
    setShowButton(false);
  };
  const toggleComponent = () => {
    setOpenCompute(!openCompute);
  };
  const handleAddDatasetUrl = () => {
    setDatasetUrls([...datasetUrls, datasetUrl]);
    setDatasetUrl("");
  };
  const handleAddModelUrl = () => {
    setModelUrls([...modelUrls, notebookUrl]);
    setNotebookUrl("");
  };
  const handleRemoveModelUrl = (index) => {
    const updatedModelUrls = [...modelUrls];
    updatedModelUrls.splice(index, 1);
    setModelUrls(updatedModelUrls);
  };
  const handleRemoveDatasetUrl = (index) => {
    const updatedDatasetUrls = [...datasetUrls];
    updatedDatasetUrls.splice(index, 1);
    setDatasetUrls(updatedDatasetUrls);
  };

  const handleExecute = () => {
    setbtnloading(true);
    const apiUrl = "http://localhost:5500/execute/container1";
    const requestData = {
      notebookUrl: notebookUrl,
      inputs: datasetUrls.map((url) => ({ url: url })),
    };

    axios
      .post(apiUrl, requestData)
      .then((response) => {
        const { jobId } = response.data;
        setJobId(jobId);
        setbtnloading(false);
        insertTable(jobId);
        fetchCID(jobId);
      })
      .catch((error) => {
        console.error("Error:", error);
        setbtnloading(false);
      });
  };

  const fetchCID = (jobId) => {
    fetch(`/execute/container1/${jobId}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        const { cid } = data;

        // Store the fetched CID in state
        setCid(cid);

        // Hide the CID button
        setShowButton(false);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error appropriately
      });
  };

  const insertTable = async (jobId_) => {
    const privateKey = process.env.REACT_APP_PRIVATEKEY;
    const wallet = new Wallet(privateKey);
    // To avoid connecting to the browser wallet (locally, port 8545).
    // For example: "https://polygon-mumbai.g.alchemy.com/v2/YOUR_ALCHEMY_KEY"
    const provider = new providers.Web3Provider(window.ethereum);
    const signer = wallet.connect(provider);
    // Connect to the database
    const db = new Database({ signer });
    console.log(jobId_);

    const { meta: insert } = await db
      .prepare(
        `INSERT INTO ${process.env.REACT_APP_TABLELAND_TABLE} (id, address, jobId) VALUES (?, ?, ?);`
      )
      .bind(Math.floor(Math.random() * 100), address, jobId_)
      .run();

    // Wait for transaction finality
    await insert.txn.wait();
  };

  return (
    <>
      {openCompute ? (
        <Compute1 />
      ) : (
        <>
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
                <h1 className="single-data-title">Efficient Computing</h1>
                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "20px",
                    lineHeight: "27px",
                    letterSpacing: "1px",
                    fontFamily: "JosefinSans",
                  }}
                >
                  {" "}
                  Efficient Computing is designed to cater to your normal
                  computing needs. It provides a reliable and efficient
                  environment for running machine learning models with specific
                  libraries like Numpy, Pandas, Scikit-learn, Matplotlib,
                  Seaborn. By utilizing Efficient Computing, you can easily
                  leverage the power of these libraries for training and running
                  your machine learning models. Whether you are working with
                  small or medium-sized datasets, Efficient Computing provides
                  the necessary computational capabilities without the need for
                  high-end laptop or computer configurations.
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
                </div>
                <div>
                  <img src={img1} className="single-dataset-img"></img>
                </div>
              </div>{" "}
            </div>
            <div style={{ padding: "20px 50px", display: "flex" }}>
              <div style={{ marginBottom: "45px", width: "70%" }}>
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: "650",
                    marginBottom: "20px",
                  }}
                >
                  {" "}
                  Instructions to Compute your Model are as follow:-
                </div>
                <div>
                  <div style={{ fontSize: "25px", fontWeight: "500" }}>
                    1. Dataset URLs
                  </div>
                  <div style={{ marginLeft: "20px", fontSize: "20px" }}>
                    <li>
                      {" "}
                      Ensure that your dataset URLs are in the raw GitHub URL
                      format.
                    </li>
                    <li>
                      The datasets should be publicly accessible on GitHub.
                    </li>
                    <li>The datasets must be in CSV file format.</li>
                    <li>
                      To add multiple datasets, click on the "Add" button and
                      provide the additional URLs.{" "}
                    </li>
                    <div
                      style={{
                        backgroundColor: "grey",
                        padding: "15px 25px",
                        fontWeight: "550",
                        margin: "10px 0",
                        borderRadius: "25px",
                        width: "90%",
                      }}
                    >
                      <p> Example Dataset URLs:</p>
                      <p>
                        -
                        https://raw.githubusercontent.com/username/repo/master/dataset1.csv
                      </p>
                      <p>
                        -
                        https://raw.githubusercontent.com/username/repo/master/dataset2.csv
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "25px", fontWeight: "500" }}>
                    2. Model URL
                  </div>
                  <div style={{ marginLeft: "20px", fontSize: "20px" }}>
                    <li>
                      The model URL should also be in the raw GitHub URL format.
                    </li>
                    <li>The model repository must be public.</li>
                    <li>Provide the URL of the main model file.</li>
                    <div
                      style={{
                        backgroundColor: "grey",
                        padding: "15px 25px",
                        fontWeight: "550",
                        margin: "10px 0",
                        borderRadius: "25px",
                        width: "90%",
                      }}
                    >
                      <p> Example Model URL:</p>
                      <p>
                        -
                        https://raw.githubusercontent.com/username/repo/master/model.ipynb
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "25px", fontWeight: "500" }}>
                    3. Model Implementation
                  </div>
                  <div style={{ marginLeft: "20px", fontSize: "20px" }}>
                    <li>
                      Inside your model implementation, make sure to give the
                      file paths of the datasets as follows:
                    </li>
                    <div
                      style={{
                        backgroundColor: "grey",
                        padding: "15px 25px",
                        fontWeight: "550",
                        margin: "10px 0",
                        borderRadius: "25px",
                        width: "90%",
                      }}
                    >
                      <p>abc = pd.read_csv("/inputs/abc.csv")</p>
                      <p>xyz = pd.read_csv("/inputs/xyz.csv")</p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginLeft: "15px" }}>
                <h3
                  style={{
                    margin: "0",
                    letterSpacing: "1px",
                    fontFamily: "JosefinSans",
                    fontSize: "30px",
                  }}
                  className="dataset-content"
                >
                  Compute Your Model
                </h3>{" "}
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
                        padding: "10px",
                        width: "100px",
                        backgroundColor: "#1a74e2",
                        border: "none",
                        borderRadius: "10px",
                      }}
                    >
                      Add
                    </button>
                    <div>
                      <h4>DataSet URLs:</h4>
                      {datasetUrls.map((url, index) => (
                        <div
                          key={index}
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            width: "500px",
                            padding: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            {url}

                            <button
                              onClick={() => handleRemoveDatasetUrl(index)}
                            >
                              X
                            </button>
                          </div>
                        </div>
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
                      value={notebookUrl}
                      onChange={(e) => setNotebookUrl(e.target.value)}
                      placeholder="Enter Model Link"
                      style={{ padding: "10px" }}
                    />
                    {/* <button
                      onClick={handleAddModelUrl}
                      style={{
                        margin: "0px 20px",
                        padding: "10px",
                        width: "100px",
                        backgroundColor: "#1a74e2",
                        border: "none",
                        borderRadius: "10px",
                      }}
                    >
                      Add{" "}
                    </button>
                    <div>
                      <h4> Model Link</h4>
                      {modelUrls.map((url, index) => (
                        <div
                          key={index}
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            width: "500px",
                            padding: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            {url}{" "}
                            <button onClick={() => handleRemoveModelUrl(index)}>
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
                <button
                  className="single-data-btn"
                  style={{ margin: "0px" }}
                  // onClick={togglePopup}
                  onClick={handleExecute}
                >
                  {btnloading ? (
                    <svg
                      className="animate-spin button-spin-svg-pic"
                      version="1.1"
                      id="L9"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      style={{ fill: "#fff" }}
                    >
                      <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"></path>
                    </svg>
                  ) : (
                    <> Compute</>
                  )}
                </button>{" "}
                <h3>JOBID: {jobId}</h3>
                <h3>
                  CID:{" "}
                  {showButton ? (
                    <button onClick={fetchCID}>Get CID</button>
                  ) : (
                    { cid }
                  )}
                </h3>
                {/* {isVisible && (
                  <div className="popup">
                    <button className="close-button" onClick={togglePopup}>
                      X
                    </button>
                    <div className="popup-content">
                    <h3>JOBID: {jobId}</h3>
                    <h3>CID: {jobId}</h3>
                    </div>
                  </div>
                )} */}
              </div>
            </div>{" "}
          </div>
        </>
      )}
    </>
  );
}

export default Container1;
