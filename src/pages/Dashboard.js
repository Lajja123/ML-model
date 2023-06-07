import React from "react";
import "../styles/dashboard.scss";
import { Link } from "react-router-dom";
import dashLogo from "../components/assets/Blockchain tribune Icon.png";
import Menu from "../components/assets/menu.png";
import dataset from "../components/assets/dataset.png";
import model from "../components/assets/model.png";
import code from "../components/assets/code.png";
import plus from "../components/assets/plus.png";
import { useState } from "react";
import Dataset from "../components/Dataset";
import Model from "../components/Model";
import Code from "../components/Code";

function Dashboard() {
  const [showItem, setShowItem] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [addDataset, setAddDataset] = useState(false);
  const [addModel, setAddModel] = useState(false);
  const [addCode, setAddCode] = useState(false);

  const showItems = () => {
    setShowItem(!showItem);
  };
  const isactive = () => {
    setIsActive(!isActive);
  };
  const dashboardLinks = (a) => {
    if (a === "addDataset") {
      setAddDataset(true);
      setAddModel(false);
      setAddCode(false);
    }
    if (a === "addModel") {
      setAddModel(true);
      setAddDataset(false);
      setAddCode(false);
    }
    if (a === "addCode") {
      setAddCode(true);
      setAddDataset(false);
      setAddModel(false);
    }
  };

  return (
    <>
      <div className="dashboard-main">
        <div className="left-db">
          <div
            className="dashLogo-flex"
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "flex-start",
              margin: "20px 0px",
            }}
          >
            <img
              src={Menu}
              alt="menu"
              className={isActive ? "" : ""}
              onClick={isactive}
              style={{ width: "30px", padding: "0px 20px" }}
            />
            <Link to="/">
              <img
                src={dashLogo}
                alt="logo"
                className="dashLogo"
                style={{ width: "100px" }}
              />
            </Link>
          </div>
          <div style={{ width: "100%" }}>
            <button className="create-button-dashboard">
              <img
                src={plus}
                alt="plus"
                className="dashPlus"
                onClick={showItems}
                style={{
                  width: "30px",
                  padding: "0px 20px",
                }}
              />{" "}
              <div style={{ fontSize: "1.1rem", fontWeight: "400" }}>
                Create
              </div>
            </button>
            {showItem && (
              <ul
                style={{
                  backgroundColor: "lightgray",
                  margin: "10px 0px",
                  position: "absolute",
                  padding: "20px 0px",
                  width: "250px",
                }}
              >
                <li style={{ margin: "0px" }}>
                  <img
                    src={dataset}
                    alt="dataset"
                    className="dashDataset"
                    style={{ width: "30px", padding: "0px 20px" }}
                  />
                  <div> Create Dataset</div>
                </li>
                <li style={{ margin: "0px" }}>
                  <img
                    src={model}
                    alt="model"
                    className="dashModel"
                    style={{ width: "30px", padding: "0px 20px" }}
                  />
                  <div> Create Model</div>
                </li>
              </ul>
            )}
          </div>

          <ul>
            <>
              <li
                className={addDataset ? "active" : ""}
                onClick={() => {
                  dashboardLinks("addDataset");
                }}
              >
                <img
                  src={dataset}
                  alt="dataset"
                  className="dashDataset"
                  style={{ width: "30px", padding: "0px 20px" }}
                />
                <div> Dataset</div>
              </li>
              <li
                className={addModel ? "active" : ""}
                onClick={() => {
                  dashboardLinks("addModel");
                }}
              >
                <img
                  src={model}
                  alt="model"
                  className="dashModel"
                  style={{ width: "30px", padding: "0px 20px" }}
                />
                <div>Model</div>
              </li>
              <li
                className={addCode ? "active" : ""}
                onClick={() => {
                  dashboardLinks("addCode");
                }}
              >
                <img
                  src={code}
                  alt="code"
                  className="dashCode"
                  style={{ width: "30px", padding: "0px 20px" }}
                />
                <div>Code</div>
              </li>
            </>
          </ul>
        </div>
        <div className="right-db">
          <div>
            {addDataset ? (
              <>
                <Dataset></Dataset>
              </>
            ) : addModel ? (
              <>
                <Model></Model>
              </>
            ) : addCode ? (
              <>
                <Code></Code>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
