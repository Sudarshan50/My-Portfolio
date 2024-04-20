import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container contaner">
        <h1 className="footer__title">Sudarshan</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/sudarshan-oraon-2004c/"
            className="footer__social-link"
            target="blank"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://www.instagram.com/sudarshan0004"
            className="footer__social-link"
            target="blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/Sudarshan50"
            className="footer__social-link"
            target="blank"
          >
            <i className='bx bxl-github' ></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169 NoobCoder. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
