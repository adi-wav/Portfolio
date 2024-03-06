import React from "react";
import "./skills.scss";
import Loader from "react-loaders";
import Layout from "../Layout/Layout";

export default function Skills() {
  return (
    <>
      {/* <Layout /> */}
      <div className="skills">
        <div className="skills-boxes">
          <div className="skills-bar">
            <h1>Skills & Expreriences</h1>
            <br></br>
            <div className="skills-bar-box">
              <div className="skills-bar-content">
                <p>C | C++ : 45%</p>
                <hr
                  style={{
                    width: "45%",
                  }}
                ></hr>
                <p>HTML | CSS | BOOTSTRAP : 90%</p>
                <hr
                  style={{
                    width: "90%",
                  }}
                ></hr>
                <p>Python : 40%</p>
                <hr
                  style={{
                    width: "40%",
                  }}
                ></hr>
                <p>React : 50%</p>
                <hr
                  style={{
                    width: "50%",
                  }}
                ></hr>
                {/* <p>MYSQL | PHP : 45%</p>
              <hr
              style={{
                width: "45%",
              }}
            ></hr> */}
                <img className="overlay-image" src="./images/skills.png" />
              </div>
            </div>
          </div>
          <div className="skills-projects">
            <h1>Projects</h1>
            <br></br>
            <div className="skills-projects-box">
              <a href="https://www.adi-wav.github.io/Drum/">
                <button>Drum</button>
              </a>
              <p>Online platform to play drum.</p>
              <a href="https://agile-twill-jay.cyclic.cloud">
                <button>WatchIt</button>
              </a>
              <p>Online ecommerce platform to buy watches.</p>
              <a href="https://www.adiportfolio.surge.sh/index">
                <button>Portfolio</button>
              </a>

              <p>A basic portfolio where you already are.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
