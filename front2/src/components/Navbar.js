import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const pathname = window.location.pathname;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Wedding Planner
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Todo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/card" ? "active" : ""}`}
                aria-current="page"
                to="/card"
              >
                Wedding Cards
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = {};
