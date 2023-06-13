import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/register.scss";
import Navbar from "../pages/Navbar";
import upload from "../components/assets/upload.png";

function Registrationpage() {
  const [userData, setUserData] = useState({
    file: null,
    name: null,
    occupation: null,
    organization: null,
    location: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const file = event.target.files[0];
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
      file: file,
    }));
  };
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <>
      <Navbar />
      <div className="register-main-div">
        <h1 className="form-title">Register</h1>
        <div className="register-sub-div">
          <div className="form-file">
            <div style={{ width: "50px", margin: "0 auto" }}>
              <img src={upload} alt="" style={{ width: "50px" }} />
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
          <label className="form-flexlable">
            Name:
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="form-inputLable"
            />
          </label>
          <label className="form-flexlable">
            Occupation:
            <input
              type="text"
              name="occupation"
              value={userData.occupation}
              onChange={handleChange}
              className="form-inputLable"
            />
          </label>
          <label className="form-flexlable">
            Organization:
            <input
              type="text"
              name="organization"
              value={userData.organization}
              onChange={handleChange}
              className="form-inputLable"
            />
          </label>
          <label className="form-flexlable">
            Location:
            <input
              type="text"
              name="location"
              value={userData.location}
              onChange={handleChange}
              className="form-inputLable"
            />
          </label>
          <div className="form-button">
            <button className="form-btn">Register</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registrationpage;
