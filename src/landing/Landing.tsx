import React from "react";
import Wave from "../wave/Wave";
import "./landing.css";

export default class Landing extends React.PureComponent {
  render() {
    return (
      <>
        <section className="landing">
          <main className="main-landing">
            <h2 className="title">A Database for Your Server</h2>
            <p className="subtitle">
              Store information and have everything at your fingertips
            </p>
            <hr className="line" />
            <br />
            <div className="buttons">
              <a href="#1" className="landinglink">
                <div className="btn">Invite</div>
              </a>
              <a href="#2" className="landinglink">
                <div className="btn">Discord</div>
              </a>
            </div>
          </main>
        </section>
        <Wave />
      </>
    );
  }
}
