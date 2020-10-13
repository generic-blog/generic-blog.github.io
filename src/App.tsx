import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./footer/Footer";
import NavBar from "./header/NavBar";
import Home from "./home/Home";
import Moderation from "./moderation/Moderation";
import NotFound from "./notfound/NotFound";
import Storage from "./storage/Storage";
import Utility from "./utility/Utility";

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
            <Route path="/utility" component={Utility} />
            <Route path="/" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
