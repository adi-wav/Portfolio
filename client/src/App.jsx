import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/index" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
