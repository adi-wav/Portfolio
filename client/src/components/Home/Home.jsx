import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./home.scss";
import Loader from "react-loaders";
import Layout from "../Layout/Layout";

export default function Home() {
  return (
    <>
      {/* <Layout /> */}
      <div className="home">
        <div className="boxes">
          <div className="intro">
            <br></br>
            <h1>Hello, I'm</h1>
            <h1>Aditya Sharma</h1>
            <h1>Student at MNNIT</h1>
            <h3>Pursuing BTech | Electrical Engineering</h3>
            <br></br>
            <div className="button">
              <NavLink to="/contact">
                <button className="btn">
                  <h2>Contact Me</h2>
                </button>
              </NavLink>
            </div>
          </div>
          <div className="photo">
            <img className="pic" src="/images/hi.png" />
          </div>
        </div>
      </div>
    </>
  );
}
