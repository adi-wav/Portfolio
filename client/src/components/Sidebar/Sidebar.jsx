import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <img className="picsb" src="/images/sidebar.png" />
        <div className="boxs">
          <div className="list1">
            <NavLink className="link" to="/index">
              <h2>Home</h2>
            </NavLink>
            <NavLink className="link" to="/about">
              <h2>About</h2>
            </NavLink>
            <NavLink className="link" to="/skills">
              <h2>Skills</h2>
            </NavLink>
            <NavLink className="link" to="/contact">
              <h2>Contact</h2>
            </NavLink>
          </div>
          <div className="list2">
            <a href="https://www.github.com/adi-wav">
              <img src="/images/github.png" className="logo" />
            </a>
            <a href="https://www.linkedin.com/in/adi-wav">
              <img src="/images/linkedin.png" className="logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
