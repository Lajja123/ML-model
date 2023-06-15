import React from "react";
import img from "../components/assets/profile.jpg";
import { Link } from "react-router-dom";
import "../styles/profile.scss";
import DashboardNavbar from "./DashboardNavbar";
import dataset from "../components/assets/dataset.png";
import model from "../components/assets/model.png";
import { useState } from "react";
import AllModel from "./AllModel";
import AllDataset from "./AllDataset";
import SingleDataset from "./SingleDataset";
import SingleModel from "./SingleModel";

function Profile() {
  const [allDataset, setAllDataset] = useState(true);
  const [allModel, setAllModel] = useState(false);
  const [singleDataset, setSingleDataset] = useState(false);
  const [singleModel, setSingleModel] = useState(false);

  const toggleComponent = () => {
    setSingleDataset(!singleDataset);
    setSingleModel(!singleModel);
  };

  const profileLinks = (a) => {
    if (a === "allDataset") {
      setAllDataset(true);
      setAllModel(false);
      setSingleModel(false);
      setSingleDataset(false);
    }
    if (a === "allModel") {
      setAllDataset(false);
      setAllModel(true);
      setSingleModel(false);
      setSingleDataset(false);
    }
    if (a === "singleDataset") {
      setAllDataset(false);
      setAllModel(false);
      setSingleModel(false);
      setSingleDataset(true);
    }
    if (a === "singleModel") {
      setAllDataset(false);
      setAllModel(false);
      setSingleModel(true);
      setSingleDataset(false);
    }
  };
  if (singleDataset) {
    return (
      <>
        <SingleDataset
          profileLinks={profileLinks}
          onClick={() => toggleComponent()}
        />
      </>
    );
  }
  if (singleModel) {
    return (
      <>
        <SingleModel
          profileLinks={profileLinks}
          onClick={() => toggleComponent()}
        />
      </>
    );
  }

  return (
    <>
      <div>
        <div className="profile-main">
          <div>
            <img
              className="p-user"
              src={img}
              alt="Rounded avatar"
              style={{
                width: "70px",
                borderRadius: "100px",
                padding: "10px",
              }}
            />{" "}
          </div>
          <div>
            <h3 style={{ textAlign: "center", fontFamily: "JosefinSans", 
            fontWeight: 600, letterSpacing: "2px",textAlign:"start",fontSize:"30px"}}>Welcome,Lajja</h3>
            <div style={{ textAlign: "center",
    fontFamily: "JosefinSans",
    fontWeight: 500,
    letterSpacing: "2px",textAlign:"start",fontSize:"15px",lineHeight:"25px"}}>
              This plateform evaluation and sharing of dataset as well as ML
              Models
            </div>
            <div style={{ textAlign: "center",
    fontFamily: "JosefinSans",
    fontWeight: 500,
    letterSpacing: "2px",textAlign:"start",fontSize:"15px" ,lineHeight:"25px"}}>Occupation</div>
            <div style={{ textAlign: "center",
    fontFamily: "JosefinSans",
    fontWeight: 500,
    letterSpacing: "2px",textAlign:"start",fontSize:"15px",lineHeight:"25px"}}>Organization</div>
            <div style={{ textAlign: "center",
    fontFamily: "JosefinSans",
    fontWeight: 500,
    letterSpacing: "2px",textAlign:"start",fontSize:"15px",lineHeight:"25px"}}>Location</div>
          </div>
        </div>
        <div className="profile-second-section">
          <div className="profile-progress">
            {" "}
            <img
              src={dataset}
              alt="dataset"
              className="dashDataset"
              style={{ width: "30px", padding: "0px 20px",margin:"10px" }}
            />
            <div style={{ textAlign: "center",
    fontFamily: "JosefinSans",
    fontWeight: 600,
    letterSpacing: "2px",textAlign:"start",fontSize:"15px" ,color:"black"}}> Dataset</div>
            <div style={{ textAlign: "center",
    color:"black"}}>20</div>
          </div>
          <div className="profile-progress">
            {" "}
            <img
              src={model}
              alt="model"
              className="dashModel"
              style={{ width: "30px", padding: "0px 20px",margin:"10px" }}
            />
            <div style={{ textAlign: "center",
    fontFamily: "JosefinSans",
    fontWeight: 600,
    letterSpacing: "2px",textAlign:"start",fontSize:"15px" ,color:"black"}} >Model</div>
            <div  style={{ textAlign: "center",
    color:"black"}}>10</div>
          </div>
          <div className="profile-progress">
            <img
              src={model}
              alt="model"
              className="dashModel"
              style={{ width: "30px", padding: "0px 20px",margin:"10px" }}
            />
            <div style={{ textAlign: "center",
    fontFamily: "JosefinSans",
    fontWeight: 600,
    letterSpacing: "2px",textAlign:"start",fontSize:"15px" ,color:"black"}}> Model Downloads</div> <div  style={{ textAlign: "center",
    color:"black"}}>10</div>
          </div>
          <div className="profile-progress">
            <img
              src={model}
              alt="model"
              className="dashModel"
              style={{ width: "30px", padding: "0px 20px",margin:"10px" }}
            />
            <div style={{ textAlign: "center",
    fontFamily: "JosefinSans",
    fontWeight: 600,
    letterSpacing: "2px",textAlign:"start",fontSize:"15px" ,color:"black"}}> Dataset Downloads</div> <div style={{ textAlign: "center",
    color:"black"}} >10</div>
          </div>
        </div>
        <div className="profile-third-section">
          <button
            style={{ margin: "0px 50px", border: "none" }}
            className={allDataset ? "active" : "tag-btn"}
            onClick={() => {
              profileLinks("allDataset");
            }}
          >
            All Datasets
          </button>

          <button
            style={{ margin: "0px 50px", border: "none" }}
            className={allModel ? "active" : "tag-btn"}
            onClick={() => {
              profileLinks("allModel");
            }}
            id="tag-btn"
          >
            All Models
          </button>
          <button style={{ margin: "0px 50px", border: "none" }} className="tag-btn">
            Model Downloads
          </button>
          <button style={{ margin: "0px 50px", border: "none" }}className="tag-btn">
            Dataset Downloads
          </button>
        </div>
      </div>
      {allDataset ? (
        <>
          <AllDataset profileLinks={profileLinks} />
        </>
      ) : allModel ? (
        <>
          <AllModel profileLinks={profileLinks}></AllModel>
        </>
      ) : null}
    </>
  );
}
export default Profile;
