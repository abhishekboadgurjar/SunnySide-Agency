import React from "react";
import LogoImage from "../assets/images/logo.svg";
import fb from "../assets/images/icon-facebook.svg";
import ig from "../assets/images/icon-instagram.svg";
import pt from "../assets/images/icon-pinterest.svg";
import tw from "../assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img className="logoImage" src={LogoImage} alt="" />
      <div className="link-bar">
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Projects</a>
      </div>
      <div className="social-link">
        <a href="">
          {" "}
          <img src={fb} alt="" />
        </a>
        <a href="">
          {" "}
          <img src={ig} alt="" />
        </a>
        <a href="">
          {" "}
          <img src={tw} alt="" />
        </a>
        <a href="">
          {" "}
          <img src={pt} alt="" />
        </a>
      </div>
      <p>Made with ❤️ by Abhishek Gurjar</p>
    </div>
  );
};

export default Footer;
