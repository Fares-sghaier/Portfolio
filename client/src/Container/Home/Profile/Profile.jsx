import React from "react";
import Typical from "react-typical";
import fares from "../../../assets/images/fares.jpeg"
import welcome from "../../../assets/images/welcome.png"
import "./Profile.css";
export default function Profile() {
  const user = true;
  return (
    <div>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-github-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <a className="link" to="/Sidebar">
                HOME
              </a>
            </li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">
              <a className="link" to="/write">
                WRITE
              </a>
            </li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <a className="link" to="/settings">
              <img className="topImg" alt="" src={fares} />
            </a>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <a className="link" to="/login">
                  LOGIN
                </a>
              </li>
              <li className="topListItem">
                <a className="link" to="/register">
                  REGISTER
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div>
        <div className="container">
          <section className="content">
            <h3>Hello , I´M Arbi Fares Sghaier </h3>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Full Stack Developer 💻",
                      5000,
                      "Passionated ❤️",
                      5000,
                      "Hard Worker 😌",
                      5000,
                      "Enthusiastic Dev 😁",
                      5000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                    A passionated full stack developer from tunisia
                </span>
              </span>
            </div>
            <br />
            <div className="profile-optins">
                <button className="btn primary-btn">Hire Me</button>
                <a href="Fares.pdf" download="Fares Fares.pdf">
                    <button className="btn highlighted-btn">Get Resume</button>
                </a>
            </div>
          
          </section>
          <div className="image">
            <img src={welcome} alt="" />
          </div>
     
         
        </div>
      </div>
    </div>
  );
}
