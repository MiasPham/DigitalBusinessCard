import React from "react";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import github from "../images/github.png";


export default function Footer() {
  return (
    <div className="footer" >
      <img src={facebook} className="footer__icons" alt="Facebook" />
      <img src={instagram} className="footer__icons" alt="Instagram" />
      <img src={github} className="footer__icons" alt="Github" />
    </div>
  )
}