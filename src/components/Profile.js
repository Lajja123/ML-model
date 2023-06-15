import React from "react";
import img from "../components/assets/profile.jpg";
import "../styles/profile.scss";
import DashboardNavbar from "./DashboardNavbar";
import dataset from "../components/assets/dataset2.png";
import model from "../components/assets/model2.png";
import download from "../components/assets/down.png";
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
      <div style={{ margin: "50px, 0px" }}>
        <div className="profile-main">
          <div style={{ margin: "20px 0px" }}>
            <img
              className="p-user"
              src={img}
              alt="Rounded avatar"
              style={{
                width: "35px",
                borderRadius: "100px",
                padding: "10px",
                backgroundColor: "white",
              }}
            />{" "}
          </div>
          <div style={{ margin: "0px 20px" }}>
            <h3
              style={{
                textAlign: "center",
                fontFamily: "JosefinSans",
                fontWeight: 600,
                letterSpacing: "2px",
                textAlign: "start",
                fontSize: "30px",
              }}
            >
              Welcome,Lajja
            </h3>
            <div
              style={{
                textAlign: "center",
                fontFamily: "JosefinSans",
                fontWeight: 500,
                letterSpacing: "1px",
                textAlign: "start",
                fontSize: "20px",
                lineHeight: "25px",
              }}
            >
              This plateform evaluation and sharing of dataset as well as ML
              Models
            </div>
            <div
              style={{
                textAlign: "center",
                fontFamily: "JosefinSans",
                fontWeight: 500,
                letterSpacing: "1px",
                textAlign: "start",
                fontSize: "20px",
                lineHeight: "25px",
              }}
            >
              Occupation
            </div>
            <div
              style={{
                textAlign: "center",
                fontFamily: "JosefinSans",
                fontWeight: 500,
                letterSpacing: "1px",
                textAlign: "start",
                fontSize: "20px",
                lineHeight: "25px",
              }}
            >
              Organization
            </div>
            <div
              style={{
                textAlign: "center",
                fontFamily: "JosefinSans",
                fontWeight: 500,
                letterSpacing: "1px",
                textAlign: "start",
                fontSize: "20px",
                lineHeight: "25px",
              }}
            >
              Location
            </div>
          </div>
        </div>
        <div className="profile-second-section">
          <div className="profile-progress">
            {" "}
            <img
              src={dataset}
              alt="dataset"
              className="dashDataset"
              style={{ width: "30px", padding: "0px 20px", margin: "10px" }}
            />
            <div
              style={{
                textAlign: "center",
                fontFamily: "JosefinSans",
                fontWeight: 600,
                letterSpacing: "2px",
                textAlign: "start",
                fontSize: "15px",
              }}
            >
              {" "}
              Dataset
            </div>
            <div style={{ textAlign: "center" }}>20</div>
          </div>
          <div className="profile-progress">
            {" "}
            <img
              src={model}
              alt="model"
              className="dashModel"
              style={{ width: "30px", padding: "0px 20px", margin: "10px" }}
            />
            <div
              style={{
                textAlign: "center",
                fontFamily: "JosefinSans",
                fontWeight: 600,
                letterSpacing: "2px",
                textAlign: "start",
                fontSize: "15px",
              }}
            >
              Model
            </div>
            <div style={{ textAlign: "center" }}>10</div>
          </div>
          <div className="profile-progress">
            <img
              src={download}
              alt="model"
              className="dashModel"
              style={{ width: "30px", padding: "0px 20px", margin: "10px" }}
            />
            <div
              style={{
                textAlign: "center",
                fontFamily: "JosefinSans",
                fontWeight: 600,
                letterSpacing: "2px",
                textAlign: "start",
                fontSize: "15px",
              }}
            >
              {" "}
              Model Downloads
            </div>{" "}
            <div style={{ textAlign: "center" }}>10</div>
          </div>
          <div className="profile-progress">
            <img
              src={download}
              alt="model"
              className="dashModel"
              style={{ width: "30px", padding: "0px 20px", margin: "10px" }}
            />
            <div
              style={{
                textAlign: "center",
                fontFamily: "JosefinSans",
                fontWeight: 600,
                letterSpacing: "2px",
                textAlign: "start",
                fontSize: "15px",
              }}
            >
              {" "}
              Dataset Downloads
            </div>{" "}
            <div style={{ textAlign: "center" }}>10</div>
          </div>
        </div>
        <div className="profile-third-section">
          <button
            style={{ marginRight: "30px", border: "none" }}
            className={allDataset ? "active" : "tag-btn"}
            onClick={() => {
              profileLinks("allDataset");
            }}
          >
            All Datasets
          </button>

          <button
            style={{ marginRight: "30px", border: "none" }}
            className={allModel ? "active" : "tag-btn"}
            onClick={() => {
              profileLinks("allModel");
            }}
            id="tag-btn"
          >
            All Models
          </button>
          <button
            style={{ marginRight: "30px", border: "none" }}
            className="tag-btn"
          >
            Model Downloads
          </button>
          <button
            style={{ marginRight: "30px", border: "none" }}
            className="tag-btn"
          >
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
