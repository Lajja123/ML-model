import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/register.scss";
import Navbar from "../pages/Navbar";
import upload from "../components/assets/upload.png";
import { modelInstance } from "./Contract";
import { ethers } from 'ethers';
import lighthouse from '@lighthouse-web3/sdk';

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
    const file = event.target.files;
    setUserData(() => ({
      [name]: value,
      file: file,
    }));
  };
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const uploadImage = async() => {
    console.log("in upload image function")
    const file = document.querySelector('input[type="file"]')
    const output = await lighthouse.upload(file, "03a4f6fe.ff4ee70766d646dc90345131bb679658", progressCallback);
    console.log('File Status:', output);

    return output;
  }

  const createUserAccount = async () => {
    try {
      console.log("in create acoount function");
      const output = await uploadImage();
      const cids = output.data.Hash;
      console.log("cids: ", cids);

      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        // const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await modelInstance();
        console.log("Hello");
        const tx = await con.setUser(userData.name, userData.occupation, userData.organization, userData.location, cids);

        console.log(tx)
        await tx.wait();
        // window.location.reload();
        console.log(con);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <button type="submit" className="form-btn" onClick={createUserAccount}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registrationpage;
