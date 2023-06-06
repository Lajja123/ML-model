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

function Dashboard() {
  const [showItem, setShowItem] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const showItems = () => {
    setShowItem(!showItem);
  };
  const isactive = () => {
    setIsActive(!isActive);
  };

  //   const navigate = useNavigate();

  //   const dashboardLinks = (a) => {
  //     if (a === "AddProduct") {
  //       setAddProduct(true);
  //       setDeleteProduct(false);
  //       setViewProduct(false);
  //       setTransfer(false);
  //       setTransferHistory(false);
  //     }
  //     if (a === "ViewProduct") {
  //       setAddProduct(false);
  //       setDeleteProduct(false);
  //       setViewProduct(true);
  //       setTransfer(false);
  //       setTransferHistory(false);
  //     }
  //     if (a === "DeleteProduct") {
  //       setAddProduct(false);
  //       setDeleteProduct(true);
  //       setViewProduct(false);
  //       setTransfer(false);
  //       setTransferHistory(false);
  //       setStock(false);
  //     } else if (a === "Transfer") {
  //       setAddProduct(false);
  //       setDeleteProduct(false);
  //       setViewProduct(false);
  //       setTransfer(true);
  //       setTransferHistory(false);
  //       setStock(false);
  //     } else if (a === "TransferHistory") {
  //       setAddProduct(false);
  //       setDeleteProduct(false);
  //       setViewProduct(false);
  //       setTransfer(false);
  //       setTransferHistory(true);
  //       setStock(false);
  //     } else if (a === "HistoryDetails") {
  //       setAddProduct(false);
  //       setDeleteProduct(false);
  //       setViewProduct(false);
  //       setTransfer(false);
  //       setTransferHistory(false);
  //       setStock(false);
  //       setTransferHistoryDetails(true);
  //     } else if (a === "RequestStock") {
  //       setAddProduct(false);
  //       setDeleteProduct(false);
  //       setViewProduct(false);
  //       setTransfer(false);
  //       setTransferHistory(false);
  //       setStock(true);
  //       setTransferHistoryDetails(false);
  //     }
  //   };

  //   useEffect(() => {
  //     if (!isConnected) {
  //       navigate("/");
  //     }
  //   }, [isConnected]);
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
            {" "}
            <button className="create-button-dashboard">
              {" "}
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
              <li>
                <img
                  src={dataset}
                  alt="dataset"
                  className="dashDataset"
                  style={{ width: "30px", padding: "0px 20px" }}
                />
                <div> Dataset</div>
              </li>
              <li>
                <img
                  src={model}
                  alt="model"
                  className="dashModel"
                  style={{ width: "30px", padding: "0px 20px" }}
                />
                <div>Model</div>
              </li>
              <li>
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
          {/* {addProduct ? (
            <>
              <AddProduct></AddProduct>
            </>
          ) : viewProduct ? (
            <ViewProduct />
          ) : deleteProduct ? (
            <DeleteProduct />
          ) : transfer ? (
            <Transfer />
          ) : transferHistory ? (
            <TransferHistory dashboardLinks={dashboardLinks} />
          ) : transferHistoryDetails ? (
            <HistoryDetails
              setTransferHistoryDetails={setTransferHistoryDetails}
            />
          ) : stock ? (
            <RequestStock dashboardLinks={dashboardLinks} />
          ) : null} */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
