import React from "react";
import "../styles/home.scss";
import bg1 from "../components/assets/ml.png";
import bg2 from "../components/assets/working.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";
function Home() {
  const navigate = useNavigate();

  const dashboard = () => {
    navigate("/dashboard");
  };
  const register = () => {
    navigate("/register");
  };
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-left">
          <p className="hero-p">Welcome to ML-model</p>
          <h1 className="hero-h1">ML-model</h1>
          <p className="hero-p">
            The platform aims to ensure fairness, transparency, and
            trustworthiness in the evaluation and sharing of datasets as well as
            ML Models.
          </p>
          <div style={{ display: "flex" }}>
            <div className="hero-left-buttons">
              <button className="hero-btn-1" onClick={() => dashboard()}>
                Get Started
              </button>
            </div>
            <div className="hero-left-buttons">
              <button className="hero-btn-1" onClick={() => register()}>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="hero-right">
          {/* <div className="hero-right-bg"></div> */}
          <div className="hero-right-inside">
            <img className="hero-right-bg1" src={bg1} alt="backgroundimage" />
            {/* <div className="hero-right-inside-box">
              <p className="heor-right-quote">
                <em>
                  Friends, such as we desire, are dreams and fables. Friendship
                  demands the ability to do without it.
                </em>
              </p>
              <p className="hero-right-quote-title">Ralph Waldo Emerson</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="section2-title">
          <p className="section2-text">Check out our wide range of services</p>
        </div>
        <div>
          <div className="grid-container">
            <div className="grid-item">
              <p className="grid-item-text">Discussion Forum</p>
            </div>
            <div className="grid-item">
              <p className="grid-item-text">Reporting Mechanism</p>
            </div>
            <div className="grid-item">
              <p className="grid-item-text">Model Certification and Badges</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="section3-left">
          <div className="section3-left-inside">
            <img
              className="section3-left-bg2"
              src={bg2}
              alt="backgroundimage"
              width={600}
              height={450}
            />
          </div>
        </div>
        <div className="section3-right">
          <div className="section3-right-inside">
            <div className="section3-right-title">
              <p>Detailed Guide on How the System Works and Operates</p>
            </div>
            <div className="section3-right-content">
              <div>
                <i class="fa fa-long-arrow-right"></i>{" "}
                <b>Connect your wallet:</b>
                <p>
                  Connecting your wallet is the first step to using our Platform
                </p>
              </div>
              <div>
              <i class="fa fa-long-arrow-right"></i> <b>Get Started:</b>
                <p>
                  Click on the 'Get Started' button to be redirected to the
                  sign-up page.
                </p>
              </div>
              <div>
              <i class="fa fa-long-arrow-right"></i> <b>User Dashboard:</b>
                <p>
                  The User Dashboard displays your profile information,
                  datasets, models, and other important details.
                </p>
              </div>
              <div>
              <i class="fa fa-long-arrow-right"></i> <b>Create Dataset:</b>
                <p>
                  To create a dataset, upload a file from your local device in
                  the required format. Fill in all the necessary details and
                  click the submit button.
                </p>
              </div>
              <div>
              <i class="fa fa-long-arrow-right"></i> <b>Create Model:</b>
                <p>
                  To create a model, you can either write code directly in the
                  integrated development environment (IDE) or import code from
                  your local device. Fill in all the required information and
                  click the submit button.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="copyright">
          <p>
            {" "}
            Copyright © 2023, Created by <span>De-DataCollabria</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
