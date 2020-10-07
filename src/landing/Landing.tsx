import React from "react";
import "./landing.css";

export default class Landing extends React.PureComponent {
  render() {
    return (
      <>
        <section className="landing">
          <main className="container">
            <h2 className="title">Lorum Ipsum Dolor</h2>
            <hr className="line" />
            <br />
            <div className="buttons">
              <a href="#1" className="landinglink">
                <div className="btn">Sit</div>
              </a>
              <a href="#2" className="landinglink">
                <div className="btn">Amet</div>
              </a>
            </div>
          </main>
        </section>
        <div className="wave-container">
          <svg className="wave">{/* Make the wave svg thing */}</svg>
        </div>
      </>
    );
  }
}
