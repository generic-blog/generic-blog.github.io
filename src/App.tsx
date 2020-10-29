import React from "react";
// import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";

import Sequelize from "sequelize";

import "./App.css";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import NotFound from "./notfound/NotFound";
const Blog = React.lazy(() => import("./blog/Blog"));

const sequelize = new Sequelize("database", "user", "password", {
  host: "localhost",
  // host: "generic-blog.github.io",
  dialect: "sqlite",
  logging: false,
  storage: "database.sqlite",
});

// console.log(sequelize);

// type Post = {
//   link: string;
//   title: string;
//   author: string;
//   content: string;
// };

const Posts = sequelize.define("posts", {
  link: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    unique: true,
  },
  author: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    get: function (this: any) {
      return JSON.parse(this.getDataValue("content"));
    },
  },
});

Posts.sync();

const App = () => {
  // const [post, setPost] = useState({} as Post);

  // Posts.findAll({
  //   limit: 1,
  //   order: [["createdAt", "DESC"]],
  //   //@ts-ignore
  // }).then((posts) => setPost(posts[0]));

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
        <Footer latestLink={"/"} />
      </Router>
    </div>
  );
};

export default App;
