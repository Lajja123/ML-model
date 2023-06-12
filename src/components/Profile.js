import React from "react";
import img from "../components/assets/profile.jpg";
import { Link } from "react-router-dom";
import "../styles/profile.scss";
import DashboardNavbar from "./DashboardNavbar";
import dataset from "../components/assets/dataset.png";
import model from "../components/assets/model.png";
import { data } from "../dummyData/dataset";
import { useState } from "react";
import AllDataset from "./AllDataset";

function Profile() {
  const [allDataset, setAllDataset] = useState(false);
  const showDataset = () => {
    setAllDataset(!allDataset);
  };

  return (
    <>
      <DashboardNavbar />
      <div>
        <div className="profile-main">
          <div>
            <Link to="/profile">
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
            </Link>
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
          </div>
          <div className="profile-progress">
            <img
              src={model}
              alt="model"
              className="dashModel"
              style={{ width: "30px", padding: "0px 20px" }}
            />
            <div> Model Downloads</div>{" "}
          </div>
          <div className="profile-progress">
            <img
              src={model}
              alt="model"
              className="dashModel"
              style={{ width: "30px", padding: "0px 20px" }}
            />
            <div> Dataset Downloads</div>{" "}
          </div>
        </div>
        <div className="profile-third-section">
          <button
            style={{ margin: "0px 50px", border: "none" }}
            onClick={() => showDataset()}
          >
            All Datasets
          </button>

          <button style={{ margin: "0px 50px", border: "none" }}>
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
      {/* <div className="main-dataset-grid">
        {data.map((item, index) => (
          <>
            <div style={{ width: "100%" }}>
              <img
                src={item.image_url}
                alt={`Image ${index}`}
                className="dataset-img"
              />
              <div>
                <h4 key={index}>{item.name}</h4>
                <div key={index}>
                  {item.file_type} ( {item.file_size})
                </div>
                <div key={index}>
                  <p className="dataset-dec">{item.description}</p>
                </div>
              </div>
              <button
                className="dataset-viewmore"
                onClick={() => toggleComponent()}
              >
                View More
              </button>
            </div>
          </>
        ))}
      </div> */}
    </>
  );
}
export default Profile;
