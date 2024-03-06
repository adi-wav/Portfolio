import React from "react";
import "./contact.scss";
import Layout from "../Layout/Layout";
export default function Contact() {
  return (
    <>
      {/* <Layout /> */}
      <div className="contact">
        <div className="form">
          <h1 className="heading">Contact Me</h1>
          <p>
            I'm a passionate web developer with hands on data structures and
            algorithms also.
          </p>
          <form>
            <input type="text" placeholder=" Name" className="name" />
            <input
              type="email"
              placeholder=" Email Address"
              className="email"
            />
            <input type="text" placeholder=" Subject" className="subject" />
            <textarea placeholder=" Message" className="tarea" />
            <button className="button1">Send</button>
          </form>
        </div>
        <div className="box2">
          <img className="pic1" src="/images/contact.png" />
        </div>
      </div>
    </>
  );
}
