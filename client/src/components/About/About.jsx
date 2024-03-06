import React from "react";
import "./about.scss";
import Loader from "react-loaders";
import Layout from "../Layout/Layout";

export default function About() {
  return (
    <>
      {/* <Layout /> */}
      <div className="about">
        <div className="about-boxes">
          <div className="about-text">
            <h1>About Me</h1>
            <p>
              I'm a B.Tech.,Electrical Engineering undergraduate student from
              Motilal Nehru National Institute of Technology.
              <br /> You will always find me,building new things and exploring
              new technologies .I am interested in working with the latest
              technologies and diverse projects.
              <br />
              <br />
              I'm quietly confident, naturally curious, innovative and
              perpetually working on improving my skills.
              <br />
              <br /> If I need to define myself in some words that would be
              friendly,enthusiast, sports fanatic,music lover and
              tech-obsessed!!!
            </p>
          </div>
          <div className="about-img">
            <img src="/images/about1.png" className="apic" />
          </div>
        </div>
      </div>
    </>
  );
}
