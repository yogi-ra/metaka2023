import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a className="navbar-item">
              <NavLink to="/">Home</NavLink>
            </a>
            <a className="navbar-item">
              <NavLink to="/about" class="navbar-item">
                About
              </NavLink>
            </a>
            <a class="navbar-item">
              <NavLink to="/jobs">Jobs</NavLink>
            </a>
            <a class="navbar-item">
              <NavLink to="/contact" class="navbar-item">
                Contact
              </NavLink>
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item">
              <NavLink to="/report">Report an issue</NavLink>
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
