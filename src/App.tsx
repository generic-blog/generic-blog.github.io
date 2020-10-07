import React from "react";
import "./App.css";
import NavBar from "./header/NavBar";
import Landing from "./landing/Landing";
import Section from "./sections/Section";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Landing />
        <Section flipped={false} img={{ src: "", alt: "" }} text={""} />
      </div>
    );
  }
}

export default App;
