import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <div className="logo-container">
            <Link to="/" className="title-link">
              <h1 className="logo">The Archive</h1>
            </Link>
          </div>
          <div className="navlinks">
            <div className="navlink-container">
              <Link to="/" className="navlink">
                Home
              </Link>
            </div>
            <div className="navlink-container">
              <Link to="/storage" className="navlink">
                Storage
              </Link>
            </div>
            <div className="navlink-container">
              <Link to="/moderation" className="navlink">
                Moderation
              </Link>
            </div>
            <div className="navlink-container">
              <Link to="/" className="navlink">
                Sit
              </Link>
            </div>
            <div className="navlink-container">
              <Link to="/" className="navlink">
                Amet
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
