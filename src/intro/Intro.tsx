import React from "react";
import "./intro.css";

interface Props {
  feature?: string;
  description?: string;
  img?: string;
  spin?: boolean;
}

export default class Intro extends React.PureComponent<Props> {
  render() {
    return (
      <article className="intro">
        <main className="intro-flex">
          <div className="intro-text">
            <h2 className="feature">{this.props.feature}</h2>
            <hr className="underline" />
            <p className="description">{this.props.description}</p>
          </div>
          <div className="intro-image-container">
            <img
              src={this.props.img}
              alt="graphic not found :("
              className={"intro-image" + (this.props.spin ? " spin" : "")}
            />
          </div>
        </main>
      </article>
    );
  }
}
