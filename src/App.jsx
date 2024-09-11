import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <About />
      <Services />
      <Projects />
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default App;
