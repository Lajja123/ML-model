import React from "react";
import "../styles/home.scss";
import bg1 from "../components/assets/ml.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";
function Home() {
  const navigate = useNavigate();

  const dashboard = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-left">
          <p className="hero-p">Lorem, ipsum dolor.</p>
          <h1 className="hero-h1">Lorem ipsum dolor sit amet.</h1>
          <p className="hero-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
            dolorum?
          </p>
          <div className="hero-left-buttons">
            <button className="hero-btn-1" onClick={() => dashboard()}>
              Get Started
            </button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right-bg"></div>
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
      {/* <footer id="footer">
        <div className="copyright">
          <p>
            {" "}
            Copyright © 2023, Created by <span>ProvyLense</span>
          </p>
        </div>
      </footer>{" "} */}
    </>
  );
}

export default Home;
