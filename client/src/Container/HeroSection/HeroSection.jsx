import React from "react";
import "./HeroSection.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import welcome from "../../../src/assets/images/welcome.png";
import Typical from "react-typical";
function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <div className="profile-optins">
                  <button className="btn primary-btn">Hire Me</button>
                  <a href="Fares.pdf" download="Fares Fares.pdf">
                    <button className="btn highlighted-btn">Get Resume</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img[0]} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
