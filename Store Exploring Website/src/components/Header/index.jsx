import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <div className="navbar-container">
        <h1 className="nav-logo">Findit</h1>
        <div className="nav-links">
          <Link
            to="/"
            style={{ color: "white", padding: 0 }}
            className="nav-navigator"
          >
            <p className="nav-item">Home</p>
          </Link>

          <Link
            to="/catalogue"
            style={{ color: "white", padding: 0 }}
            className="nav-navigator"
          >
            <p className="nav-item about">Stores</p>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;