import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="footer-distributed">
        <div className="footer-left">
          <h2>
            The<span>Archive</span>
          </h2>
          <p className="footer-links">
            <Link to="/">Home</Link>·<Link to="/storage">Storage</Link>·
            <Link to="/moderation">Moderation</Link>·
            <Link to="/utility">Utility</Link>·<Link to="/docs">Docs</Link>
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
              <a href="#invite" target="_blank">
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
