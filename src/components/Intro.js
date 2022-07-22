import React from "react";
import profile from "../images/profile.png";
import emailicon from "../images/emailicon.png";
import linkedin from "../images/linkedin.png"

export default function Intro() {
  return (
    <div>
        <img src={profile} className="intro__img" alt="Profile" />
        <h1>Mia Pham</h1>
        <p className="intro__position">Frontend Developer</p>
        <div className="intro__buttons">
          <button className="email__button">
            <img src={emailicon} className="email__icon" alt="Email" />
            Email</button>
          <button className="linkedin__button">
            <img src={linkedin} className="linkedin__icon" alt="LinkedIn" />
            LinkedIn</button>
        </div>
    </div>
  )
}