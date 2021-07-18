import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div class="header-content-wrapper">
        <Link to="/">
          <div className="logo-container">
            <img className="imageLogo" src="./resources/Logo.svg" alt="logo" />
          </div>
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about-us">ABOUT US</Link>
            </li>
            <li>
              <Link to="/contact-us">CONTACT US</Link>
            </li>
            <li id="headerLogIn">Log in</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
