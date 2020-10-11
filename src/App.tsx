import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./header/NavBar";
import Home from "./Home";
import NotFound from "./notfound/NotFound";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
