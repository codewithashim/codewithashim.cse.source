import React from "react";
import "./header.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiLinktree } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a href="codewithashim.com" target="_blank">
        <BsGithub />
      </a>
      <a href="codewithashim.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="codewithashim.com" target="_blank">
        <BsTwitter />
      </a>
      <a href="codewithashim.com" target="_blank">
        <BsInstagram />
      </a>
      <a href="codewithashim.com" target="_blank">
        <BsFacebook />
      </a>
      <a href="codewithashim.com" target="_blank">
      <SiLinktree/>
      </a>

      <div className="soical_line"></div>
    </div>
  );
};

export default HeaderSocial;
