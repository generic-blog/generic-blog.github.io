import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { retrieve, postCollection } from "./router";

import "./App.css";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import { Post } from "./Post";
const NotFound = React.lazy(() => import("./notfound/NotFound"));
const Blog = React.lazy(() => import("./blog/Blog"));

const App = () => {
  const [post, setPost] = useState<Post>({
    data: {
      title: "",
      author: "",
      content: [],
      createdAt: "",
      link: "",
      suggestions: [],
    },
  });

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async function () {
      let mounted = true;

      if (mounted) {
        setPost(await postCollection[0]);
        setPosts(await Promise.all(postCollection));
      }

      return () => (mounted = false);
    })();

    if (typeof Storage !== "undefined") {
      if (localStorage.getItem("generic-blog-theme") === "dark") toggleTheme();
      else if (localStorage.getItem("generic-blog-theme") === "light")
        console.log("ew light theme");
      else localStorage.setItem("generic-blog-theme", "light");
    } else console.log("Theme is not saved!");
  }, []);

  const toggleTheme = () => {
    document.getElementsByTagName("html")[0].classList.toggle("dark-mode");
    localStorage.setItem(
      "generic-blog-theme",
      document.getElementsByTagName("html")[0].classList.contains("dark-mode")
        ? "dark"
        : "light"
    );
  };

  return (
    <div className="App">
      <Router>
        <Header toggleTheme={toggleTheme} />
        <div className="content">
          <Suspense fallback={""}>
            <Switch>
              <Route path="/" exact render={() => <Home posts={posts} />} />
              <Route
                path="/posts/:postTitleURLParam"
                render={(props) => <Blog retrieve={retrieve} {...props} />}
              />
              <Route path="/" component={NotFound} />
            </Switch>
          </Suspense>
        </div>
        <Footer latestLink={post.data.link} />
      </Router>
    </div>
  );
};

export default App;
