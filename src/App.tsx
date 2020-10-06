import React from "react";
import "./App.css";
import NavBar from "./header/NavBar";
import Landing from "./landing/Landing";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Landing />
      </div>
    );
  }
}

export default App;
