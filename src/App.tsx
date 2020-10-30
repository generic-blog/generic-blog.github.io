import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { retrieve, dynamicSort, postCollection } from "./router";

import "./App.css";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import NotFound from "./notfound/NotFound";
import { Post } from "./Post";
const Blog = React.lazy(() => import("./blog/Blog"));

const App = () => {
  const [post, setPost] = useState<Post>({
    data: {
      title: "",
      author: "",
      content: [],
      createdAt: "",
      link: "",
    },
  });

  useEffect(() => {
    (async function () {
      let mounted = true;

      const sortedPosts = postCollection.sort(dynamicSort("createdAt", true));
      if (mounted) setPost(await sortedPosts[0]);

      return () => (mounted = false);
    })();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <React.Suspense fallback={""}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/posts/:postTitleURLParam"
                render={(props) => <Blog retrieve={retrieve} {...props} />}
              />
              <Route path="/" component={NotFound} />
            </Switch>
          </React.Suspense>
        </div>
        <Footer latestLink={post.data.link} />
      </Router>
    </div>
  );
};

export default App;
