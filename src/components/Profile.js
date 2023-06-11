import React from "react";
import img from "../components/assets/profile.jpg";
import { Link } from "react-router-dom";
import "../styles/profile.scss";
import DashboardNavbar from "./DashboardNavbar";
import dataset from "../components/assets/dataset.png";
import model from "../components/assets/model.png";

function profile() {
    return(<>
    <DashboardNavbar/>
        <div className="profile-main">      
    <div>
    <Link to="/profile">
            <img
              className="p-user"
              src={img}
              alt="Rounded avatar"
              style={{ width: "70px", borderRadius: "100px", padding: "10px" }}
            />{" "}
          </Link></div>
          <div>
            <h3>Welcome,Lajja</h3>
            <div>This plateform evaluation and sharing of dataset as well as ML Models</div>
            <div>Occupation</div>
            <div>Organization</div>
            <div>Location</div>
          </div>
        
        </div>
        <div className="profile-second-section"> 
        <div className="profile-flex"> <img
                 src={dataset}
                  alt="dataset"
                  className="dashDataset"
                  style={{ width: "30px", padding: "0px 20px" }}
                />
                <div> Dataset</div></div>
             <div> <img
                src={model}
                alt="model"
                className="dashModel"
                style={{ width: "30px", padding: "0px 20px" }}
                />
                <div>Model</div></div>  
              <div><img
                 src={model}
                 alt="model"
                 className="dashModel"
                 style={{ width: "30px", padding: "0px 20px" }}
                />
                <div>Download</div> </div> 
           
                
                </div>
      
    </>)
}
export default profile;