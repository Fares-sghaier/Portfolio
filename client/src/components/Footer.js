import React from "react";
import { Button } from "./Button/Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <MdFingerprint className="navbar-icon" />
              FARES
            </Link>
          </div>
          <small className="website-rights">FARES © 2022</small>
          <div className="social-icons">
            <a
              className="social-icon-link"
              href="https://www.facebook.com/fares.sghayer.5/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className="social-icon-link"
              href="https://www.instagram.com/fares_sghaierr/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className="social-icon-link"
              href="https://twitter.com/f_sghayer"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              className="social-icon-link"
              href="https://www.linkedin.com/in/fares-sghaier-23a1a4238/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
