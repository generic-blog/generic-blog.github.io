import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./header/NavBar";
import Home from "./Home";
import Moderation from "./moderation/Moderation";
import NotFound from "./notfound/NotFound";
import Storage from "./storage/Storage";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/storage" component={Storage} />
            <Route path="/moderation" component={Moderation} />
            <Route path="/" component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
