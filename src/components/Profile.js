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

function Profile() {
  const [allDataset, setAllDataset] = useState(true);
  const [allModel, setAllModel] = useState(false);

  const profileLinks = (a) => {
    if (a === "allDataset") {
      setAllDataset(true);
      setAllModel(false);
    }
    if (a === "allModel") {
      setAllDataset(false);
      setAllModel(true);
    }
  };

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
            <h3>Welcome,Lajja</h3>
            <div>
              This plateform evaluation and sharing of dataset as well as ML
              Models
            </div>
            <div>Occupation</div>
            <div>Organization</div>
            <div>Location</div>
          </div>
        </div>
        <div className="profile-second-section">
          <div className="profile-progress">
            {" "}
            <img
              src={dataset}
              alt="dataset"
              className="dashDataset"
              style={{ width: "30px", padding: "0px 20px" }}
            />
            <div> Dataset</div>
            <div>20</div>
          </div>
          <div className="profile-progress">
            {" "}
            <img
              src={model}
              alt="model"
              className="dashModel"
              style={{ width: "30px", padding: "0px 20px" }}
            />
            <div>Model</div>
            <div>10</div>
          </div>
          <div className="profile-progress">
            <img
              src={model}
              alt="model"
              className="dashModel"
              style={{ width: "30px", padding: "0px 20px" }}
            />
            <div> Model Downloads</div> <div>10</div>
          </div>
          <div className="profile-progress">
            <img
              src={model}
              alt="model"
              className="dashModel"
              style={{ width: "30px", padding: "0px 20px" }}
            />
            <div> Dataset Downloads</div> <div>10</div>
          </div>
        </div>
        <div className="profile-third-section">
          <button
            style={{ margin: "0px 50px", border: "none" }}
            className={allDataset ? "active" : ""}
            onClick={() => {
              profileLinks("allDataset");
            }}
          >
            All Datasets
          </button>

          <button
            style={{ margin: "0px 50px", border: "none" }}
            className={allModel ? "active" : ""}
            onClick={() => {
              profileLinks("allModel");
            }}
          >
            All Models
          </button>
          <button style={{ margin: "0px 50px", border: "none" }}>
            Model Downloads
          </button>
          <button style={{ margin: "0px 50px", border: "none" }}>
            Dataset Downloads
          </button>
        </div>
      </div>
      {allDataset ? (
        <>
          <AllDataset> </AllDataset>
        </>
      ) : allModel ? (
        <>
          <AllModel></AllModel>
        </>
      ) : null}
    </>
  );
}
export default Profile;
