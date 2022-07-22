import React from "react";
import "./App.css"
import Intro from "./components/Intro";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";


export default function App() {
  return (
   <div className="card__container">
    <Intro />
    <About />
    <Interest />
    <Footer />
   </div>
  );
}