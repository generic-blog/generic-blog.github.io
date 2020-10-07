import React from "react";

export default class Section extends React.PureComponent {
  props: any;
  render() {
    return (
      <section className={this.props.className || "section"}>
        <main className="container">
          <div className="flex-container">
            {this.props.flipped ? (
              <>
                <div className="text-container">
                  <p className="text">{this.props.text}</p>
                </div>
                <div className="image-container">
                  <img
                    src={this.props.img.src}
                    alt={this.props.img.alt}
                    className="image"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="image-container">
                  <img
                    src={this.props.img.src}
                    alt={this.props.img.alt}
                    className="image"
                  />
                </div>
                <div className="text-container">
                  <p className="text">{this.props.text}</p>
                </div>
              </>
            )}
          </div>
        </main>
      </section>
    );
  }
}
