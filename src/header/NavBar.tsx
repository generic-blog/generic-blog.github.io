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
          <div className="links">
            <div className="link-container">
              <a href="#lorum" className="link">
                Lorum
              </a>
            </div>
            <div className="link-container">
              <a href="#ipsum" className="link">
                Ipsum
              </a>
            </div>
            <div className="link-container">
              <a href="#dolor" className="link">
                Dolor
              </a>
            </div>
            <div className="link-container">
              <a href="#sit" className="link">
                Sit
              </a>
            </div>
            <div className="link-container">
              <a href="#amet" className="link">
                Amet
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
