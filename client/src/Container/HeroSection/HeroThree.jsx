import React from "react";
import "./HeroSection.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import awd from "../../../src/assets/images/awd.png";
import b from "../../../src/assets/images/b.png";
import c from "../../../src/assets/images/c.png";
import d from "../../../src/assets/images/d.png";
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
              </div>
            </div>
            <div className="col">
              <div className="gallery">
                <img src={awd} alt={alt} className=".gallery__img " />
                <img src={d} alt={alt} className=".gallery__img " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
