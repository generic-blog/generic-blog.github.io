import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Docs from "./docs/Docs";
import Footer from "./footer/Footer";
import NavBar from "./header/NavBar";
import Home from "./home/Home";
import me from "./me.png";
import Moderation from "./moderation/Moderation";
import NotFound from "./notfound/NotFound";
import Storage from "./storage/Storage";
import Utility from "./utility/Utility";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <img
          src={me}
          alt=""
          className="watermark"
          onClick={() =>
            document.getElementsByTagName("html")[0].classList.toggle("light")
          }
        />
        <div className="content">
          <Router basename={process.env.PUBLIC_URL}>
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/storage" component={Storage} />
              <Route path="/moderation" component={Moderation} />
              <Route path="/utility" component={Utility} />
              <Route path="/docs" component={Docs} />
              <Route path="/" component={NotFound} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </div>
    );
  }
}
