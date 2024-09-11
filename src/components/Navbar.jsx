import React from "react";
import logo from "../assets/images/logo.svg";
import { Link as ScrollLink } from 'react-scroll';
const Navbar = () => {
  return (
    <div className="Navbar">
     <div className="logo">
     <img src={logo} alt="logo" />
     </div>
      <div className="header">
      <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500}>
            Services
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500}>
            Projects
          </ScrollLink>
      <button>CONTACT</button>
      </div>
    </div>
  );
};

export default Navbar;
