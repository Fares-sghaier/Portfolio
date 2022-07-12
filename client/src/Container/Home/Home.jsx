import React from "react";
import Typical from "react-typical";
import welcome from "../../../src/assets/images/welcome.png"
export default function Home() {
  return (
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
        <div >
          <button>Hire Me</button>
          
        </div>
        <a href="Fares.pdf" download="Fares Fares.pdf">
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
      </section>
      <div className="image">
        <img src={welcome} alt="" />
      </div>
    </div>
  );
}
