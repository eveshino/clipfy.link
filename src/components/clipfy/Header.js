import logo from "../../logo.svg";
import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./HeaderElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} className="app-logo" alt="logo"></img>
          <p className="logoName">Clipfy.link</p>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Register</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
