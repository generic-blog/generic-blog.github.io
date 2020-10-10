import React from "react";
import "./section.css";

export default class Section extends React.Component {
  props: any;
  render() {
    const { text, img } = this.props;
    return (
      <section
        className={
          (this.props.className || "section") +
          (this.props.flipped ? "" : " flip")
        }
      >
        <main className="container">
          {this.props.flipped ? (
            <>
              <div className="text-container">
                <p className="text">{text}</p>
              </div>
              <div className="image-container">
                <img src={img.src} alt={img.alt} className="image" />
              </div>
            </>
          ) : (
            <>
              <div className="image-container">
                <img src={img.src} alt={img.alt} className="image" />
              </div>
              <div className="text-container">
                <p className="text">{text}</p>
              </div>
            </>
          )}
        </main>
      </section>
    );
  }
}
