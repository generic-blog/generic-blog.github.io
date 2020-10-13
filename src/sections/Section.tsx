import React, { createRef } from "react";
import "./section.css";

interface Props {
  text?: string;
  img: {
    src: string;
    alt: string;
  };
  flipped?: boolean;
  className?: string;
}

export default class Section extends React.Component<
  Props,
  { isVisible: boolean }
> {
  domRef: React.RefObject<HTMLElement>;
  constructor(props: any) {
    super(props);
    this.domRef = createRef();
    this.state = { isVisible: false };
  }
  componentDidMount() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.setState({ isVisible: true });
        observer.unobserve(this.domRef.current!);
      }
    });

    observer.observe(this.domRef.current!);

    return () => observer.unobserve(this.domRef.current!);
  }
  render() {
    const { text, img } = this.props;
    return (
      <section
        className={
          (this.props.className || "section") +
          (this.props.flipped ? "" : " flip") +
          (this.state.isVisible ? " visible" : "")
        }
        ref={this.domRef}
      >
        <main className="container">
          <div className="text-container">
            <p className="text">{text}</p>
          </div>
          <div className="image-container">
            <img src={img.src} alt={img.alt} className="image" />
          </div>
        </main>
      </section>
    );
  }
}
