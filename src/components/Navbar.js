import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="container">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
          onClick={closeMenu}
        >
          {" "}
          <h1>
            De<span className="primary">Fi</span>
          </h1>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="featured"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              Featured
            </Link>
          </li>
          <li>
            <Link
              to="signup"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}
            >
              Earn
            </Link>
          </li>
          <li>
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
