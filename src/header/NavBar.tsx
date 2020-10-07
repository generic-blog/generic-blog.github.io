import React from "react";
import "./navbar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <div className="logo-container">
            <h1 className="logo">The Archive</h1>
          </div>
          <div className="navlinks">
            <div className="navlink-container">
              <a href="#lorum" className="navlink">
                Lorum
              </a>
            </div>
            <div className="navlink-container">
              <a href="#ipsum" className="navlink">
                Ipsum
              </a>
            </div>
            <div className="navlink-container">
              <a href="#dolor" className="navlink">
                Dolor
              </a>
            </div>
            <div className="navlink-container">
              <a href="#sit" className="navlink">
                Sit
              </a>
            </div>
            <div className="navlink-container">
              <a href="#amet" className="navlink">
                Amet
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
