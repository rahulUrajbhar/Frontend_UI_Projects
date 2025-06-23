import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { LocationIcon } from "../assets/LocationIcon";
import { AvtarIcon } from "../assets/AvtarIcon";
export default function header({ data }) {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="mainHeader">
      <div className="headerRight">
        <img
          className="companyLogo"
          src="data:image/png;base64,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"
          alt="companyLogo"
        />
        <button className="headerRightButton">
          <LocationIcon />
          <p>Setup your precise location</p>
        </button>
      </div>
      <div className="headerLeft">
        <ul className="HeaderitemList">
          <li className="headerItem"><Link to="/About-Us">About Us</Link></li>
          <li className="headerItem"><Link to="/Contact-Us">Contact Us</Link></li>
          <li className="headerItem"><Link to="/Card">Card</Link></li>
        </ul>
        <AvtarIcon className="headerLeftAvtarIcon" />
        <button
          className="loginBtn"
          onClick={() => {
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
          }}
        >
          {loginBtn}
        </button>
      </div>
    </div>
  );
}
