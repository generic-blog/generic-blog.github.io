import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";

import "./App.css";
import Footer from "./footer/Footer";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div className="content">
            <Switch>
              <Route />
            </Switch>
          </div>
          <Footer latestPostLink="/" latestPostTitle="Lorem ipsum" />
        </Router>
      </div>
    );
  }
}
