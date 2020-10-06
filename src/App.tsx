import React from "react";
import "./App.css";
import { NavBar } from "./header/NavBar";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
