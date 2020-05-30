import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer >
     <div className="footerLinks">
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
            style={{ color: "rgba(255, 255, 255)" }}
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

          <div className="Copyright">
                <p>Copyright <strong>Tamrat Bayeh</strong> © 2020. All rights reserved.</p>
            </div>
       </footer>
    )
}

export default Footer
