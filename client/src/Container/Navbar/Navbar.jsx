// import React from "react";
// import Typical from "react-typical";
// import fares from "../../../src/assets/images/fares.jpeg"
// import {Link} from "react-router-dom"
// import "./Navbar.css";
// export default function Navbar() {
//   const user = true;
//   return (
//     <div>
//       <div className="top">
//         <div className="topLeft">
//           <i className="topIcon fab fa-facebook-square"></i>
//           <i className="topIcon fab fa-instagram-square"></i>
//           <i className="topIcon fab fa-github-square"></i>
//         </div>
//         <div className="topCenter">
//           <ul className="topList">
//             <li className="topListItem">
//               <Link className="link" to="/">
//                 HOME
//               </Link>
//             </li>
//             <li className="topListItem">ABOUT</li>
//             <li className="topListItem">CONTACT</li>
//             <li className="topListItem">
//               <Link className="link" to="/resume">
//                 WRITE
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="topRight">
//           {user ? (
//             <a className="link" to="/settings">
//               <img className="topImg" alt="" src={fares} />
//             </a>
//           ) : (
//             <ul className="topList">
//               <li className="topListItem">
//                 <a className="link" to="/login">
//                   LOGIN
//                 </a>
//               </li>
//               <li className="topListItem">
//                 <a className="link" to="/register">
//                   REGISTER
//                 </a>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//       <div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              Fares Sghaier
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Write
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
