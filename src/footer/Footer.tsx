import React from "react";
import "./footer.css";

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="footer">
        <h2 className="mark">The Archive</h2>
        <div className="footer-flex">
          <div className="footer-grid">
            <a href="#lorum" className="footer-link">
              <div className="link-text">Lorum</div>
            </a>
            <a href="#ipsum" className="footer-link">
              <div className="link-text">Ipsum</div>
            </a>
            <a href="#dolor" className="footer-link">
              <div className="link-text">Dolor</div>
            </a>
            <a href="#sit" className="footer-link">
              <div className="link-text">Sit</div>
            </a>
            <a href="#amet" className="footer-link">
              <div className="link-text">Amet</div>
            </a>
            <a href="#discord" className="footer-link">
              <div className="link-text">Discord</div>
            </a>
          </div>
          <div className="about">
            <p className="about-text">
              asfhasnfsafnoasosafoiafsioasfi;ofas;iojiosafasfjafj;afj;safo;fsjaos;
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
