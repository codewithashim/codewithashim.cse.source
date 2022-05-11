import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import Profile from "../../assets/me.jpg";

const Header = () => {
  return (
    <header id="main_header">
      <div className="container header_container">
        <div className="header_title">
          <h3>Hello I'm</h3>
          <h1>Ashim Rudra Paul</h1>
          <h3>
            <span>Progrummer</span> || <span>Frontend Developer</span>
          </h3>
          <CTA />
        </div>

        <HeaderSocial />
        <div className="Profile">
          <img src={Profile} alt="codewithashim" />
        </div>

        <a href="#contact" className="scoroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
