import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";

import "./App.css";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import NotFound from "./notfound/NotFound";
const Blog = React.lazy(() => import("./blog/Blog"));

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div className="content">
            <React.Suspense fallback={""}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/posts/:postTitleURLParam" component={Blog} />
                <Route path="/" component={NotFound} />
              </Switch>
            </React.Suspense>
          </div>
          <Footer latestLink="/" />
        </Router>
      </div>
    );
  }
}
