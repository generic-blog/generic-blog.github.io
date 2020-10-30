import React from "react";

import Note from "./note/Note";

import "./padding.css";
import "./home.css";

import { Post } from "../Post";

interface Props {
  posts: Post[];
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <div className="home">
      <div className="home-grid">
        {posts.map(({ data: { link, title, content } }) => (
          <Note
            link={link}
            text={content.find((part) => part.type === "text")?.content!}
            title={title}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
