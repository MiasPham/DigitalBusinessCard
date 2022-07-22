import React from "react";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import github from "../images/github.png";


export default function Footer() {
  return (
    <div className="footer" >
      <img src={facebook} className="icons" alt="Facebook" />
      <img src={instagram} className="icons" alt="Instagram" />
      <img src={github} className="icons" alt="Github" />
    </div>
  )
}