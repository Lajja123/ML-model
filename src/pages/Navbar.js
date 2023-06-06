import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../styles/navbar.scss";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [address, setAddress] = useState("");

  function handleClick() {
    setIsExpanded(!isExpanded);
  }
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <span className="logo">
            <Link to="/">
              {/* <Image src={logo} alt="logo" /> */}
              <h1 className="logo-h1">
                LOGO
                {/* UpToData */}
              </h1>
            </Link>
          </span>
          <ConnectButton
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
          />
          <button
            onClick={handleClick}
            className={isExpanded === false ? "hamburger" : "hamburger active"}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
