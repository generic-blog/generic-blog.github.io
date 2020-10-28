import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";

import "./App.css";
import Footer from "./footer/Footer";
import Home from "./home/Home";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/blog/" component={Home} />
            </Switch>
          </div>
          <Footer latestLink="/" />
        </Router>
      </div>
    );
  }
}
