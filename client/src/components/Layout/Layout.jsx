import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./layout.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
export default function Layout() {
  return (
    <>
      <Sidebar />
      <Navbar />
      {/* <h2>hello</h2> */}
      {/* <h1>Hello</h1> */}
      <Outlet />
      {/* <h1>Bye</h1> */}
    </>
  );
}
