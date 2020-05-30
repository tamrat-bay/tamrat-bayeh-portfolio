import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div  className="Header">
        <div id="home" className="headerContainer">
          <div className="text-with-animation">Tamrat Bayeh</div>
          <div className="subtext-with-animation">
            <span>Full Stack</span>
            <span> Web Developer</span>
          </div>
      </div>
      <div className="headerLinks">
        <a
          href="https://linkedin.com/in/tamrat-bayeh-6b1b53192"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-linkedin"
            style={{ color: "#0077B5" }}
          ></i>
        </a>
        <a
          href="https://github.com/tamrat-bay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-github"
            style={{ color: "rgb(31, 40, 41)" }}
          ></i>
        </a>
        <a href="#contact">
          <i
            className="fab fa-google"
            style={{ color: "#d93025" }}
          ></i>
        </a>
        <a
          href="https://www.facebook.com/tamrat.bayeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-facebook"
            style={{ color: "#4267B2" }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
