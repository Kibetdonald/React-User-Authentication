import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavHashLink } from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="Navbar">
        <a href="/" className="nav-logo">
          Portal
        </a>
        <div className={`nav-items ${isOpen && "open"}`}>
          <NavHashLink to="/dashboard">View Users </NavHashLink>
          <NavHashLink to="/">Log Out </NavHashLink>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
