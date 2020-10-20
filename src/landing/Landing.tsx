import React from "react";
import Wave from "../wave/Wave";
import "./landing.css";

export default class Landing extends React.PureComponent {
  render() {
    return (
      <>
        <section className="landing">
          <main className="main-landing">
            <h2 className="title">A Utility for Your Server</h2>
            <p className="subtitle">
              Multi-purpose bot with many features and lots of tools
            </p>
            <hr className="line" />
            <br />
            <div className="buttons">
              <a
                href="https://discord.com/oauth2/authorize?client_id=766033365727051777&scope=bot&permissions=2146958847"
                rel="noopener noreferrer"
                target="_blank"
                className="landinglink"
              >
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
