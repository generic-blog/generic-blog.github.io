import React from "react";
import "./footer.css";

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="footer">
        <h2 className="mark">The Archive</h2>
        <div className="footer-flex">
          <div className="posts-container">
            <h4 className="post-title">Articles</h4>
            <div className="posts">
              <div className="post">
                <a href="#lorem" className="post-link">
                  Lorem
                </a>
              </div>
              <div className="post">
                <a href="#ipsum" className="post-link">
                  Ipsum
                </a>
              </div>
              <div className="post">
                <a href="#dolor" className="post-link">
                  Dolor
                </a>
              </div>
            </div>
          </div>
          <div className="footer-grid">
            <div className="link-text">
              <a href="#lorem" className="footer-link">
                Lorum
              </a>
            </div>
            <div className="link-text">
              <a href="#ipsum" className="footer-link">
                Ipsum
              </a>
            </div>
            <div className="link-text">
              <a href="#dolor" className="footer-link">
                Dolor
              </a>
            </div>
            <div className="link-text">
              <a href="#sit" className="footer-link">
                Sit
              </a>
            </div>
            <div className="link-text">
              <a href="#amet" className="footer-link">
                Amet
              </a>
            </div>
            <div className="link-text">
              <a href="#discord" className="footer-link">
                Discord
              </a>
            </div>
          </div>
          <div className="about">
            <p className="about-text">
              asfhasnfsafnoasosafoiafsioasfi;ofas;iojiosafasfjafj;afj;safo;fsjaos;
            </p>
            <div className="invite-container">
              <a href="#invite" className="invite">
                Invite
              </a>
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <p className="copyright">Copyright &copy; im-bad-at-css 2020</p>
        </div>
      </footer>
    );
  }
}
