import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/register.scss";
import Navbar from "../pages/Navbar";
import file from "../components/assets/file.png";
import "../styles/createdataset.scss";

function CreateDataset({ open, onClose }) {
  const [Data, setData] = useState({
    title: "",
    description: "",
    catagory: "",
    file: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const file = event.target.files[0];
    setData((prevData) => ({
      ...prevData,
      [name]: value,
      file: file,
    }));
  };
  useEffect(() => {
    console.log(Data);
  }, [Data]);

  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <p
            className="closeBtn"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          >
            X
          </p>
          <div className="register-main-div" style={{ width: "90%" }}>
            <div className="register-sub-div" style={{ margin: "0" }}>
              <div
                className="form-file"
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  height: "15vh",
                  justifyContent: "space-evenly",
                }}
              >
                <div style={{ width: "50px", margin: "0 auto" }}>
                  <img src={file} alt="" style={{ width: "50px" }} />
                </div>
                <div className="file-input-container">
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    accept=".jpg,.jpeg,.png,.pdf" // Optional: Set accepted file extensions
                  />
                </div>
              </div>
              <label className="form-flexlable" style={{ width: "400px" }}>
                <input
                  type="text"
                  name="name"
                  value={Data.title}
                  onChange={handleChange}
                  className="form-inputLable"
                  placeholder="Enter Dataset Title"
                />
              </label>
              <label className="form-flexlable" style={{ width: "400px" }}>
                <input
                  type="text"
                  name="occupation"
                  value={Data.description}
                  onChange={handleChange}
                  className="form-inputLable"
                  placeholder="Description"
                />
              </label>
              <div className="form-flexlable" style={{ width: "400px" }}>
                {" "}
                <select
                  name="category"
                  id="category"
                  value={Data.organization}
                  onChange={handleChange}
                  className=""
                  style={{ padding: "10px" }}
                >
                  <option value="All dataset">All dataset</option>
                  <option value="Eduaction">Eduaction</option>
                  <option value="Drugs & Medical">Drugs & Medical</option>
                  <option value="Earth & nature">Earth & nature</option>
                  <option value="Scie & Technology">Scie & Technology</option>
                </select>
              </div>

              <div
                className="form-button"
                style={{ display: "flex", width: "70%" }}
              >
                <button
                  className="form-btn"
                  style={{ width: "100%", margin: "0px 20px" }}
                >
                  Make it private
                </button>
                <button
                  className="form-btn"
                  style={{ width: "100%", margin: "0px 20px" }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateDataset;
