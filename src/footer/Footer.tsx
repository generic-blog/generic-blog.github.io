import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="footer-distributed">
        <div className="footer-left">
          <h2>The Archive</h2>
          <p className="footer-links">
            <Link to="/" onClick={() => (window.location.href = "#")}>
              Home
            </Link>
            ·
            <Link to="/storage" onClick={() => (window.location.href = "#")}>
              Storage
            </Link>
            ·
            <Link to="/moderation" onClick={() => (window.location.href = "#")}>
              Moderation
            </Link>
            ·
            <Link to="/utility" onClick={() => (window.location.href = "#")}>
              Utility
            </Link>
            ·
            <Link to="/docs" onClick={() => (window.location.href = "#")}>
              Docs
            </Link>
          </p>
          <p className="footer-company-name">Copyright &copy; 2020 im-lonely</p>
        </div>
        <div className="footer-center" id="section2">
          <div>
            <p>Manage your server easily</p>
          </div>
          <br />
          <div>
            <p>Are you ready?</p>
          </div>
          <br />
          <div>
            <p>
              <a
                href="https://discord.com/oauth2/authorize?client_id=766033365727051777&scope=bot&permissions=2146958847"
                rel="noopener noreferrer"
                target="_blank"
              >
                Invite
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About</span>
            The Archive is a multi-purpose functional bot for storing and
            retrieving data easily.
          </p>
        </div>
      </footer>
    );
  }
}
