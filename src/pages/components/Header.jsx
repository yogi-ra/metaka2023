import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <style>
        {`
        .active {
            color: black;
            font-weight: bold;
        }
            `}
      </style>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="Bulma"
            />
          </a>

          <a
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={handleBurgerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <NavLink
              exact
              to="/"
              className="navbar-item"
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="navbar-item"
              activeClassName="active"
            >
              About
            </NavLink>
            <NavLink
              to="/jobs"
              className="navbar-item"
              activeClassName="active"
            >
              Jobs
            </NavLink>
            <NavLink
              to="/contact"
              className="navbar-item"
              activeClassName="active"
            >
              Contact
            </NavLink>
            <NavLink
              to="/report"
              className="navbar-item"
              activeClassName="active"
            >
              Report an issue
            </NavLink>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
