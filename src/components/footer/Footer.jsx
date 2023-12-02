import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a></a>
      <ul className="prelink">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https:/facebook.com/clumsyfaisal">
          <FaFacebookF />
        </a>
        <a href="https:/instagram.com/clumsyfaisal">
          <FiInstagram />
        </a>
        <a href="https:/twitter.com/clumsyfaisal">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>All right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
