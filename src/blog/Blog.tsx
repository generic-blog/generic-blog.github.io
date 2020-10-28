import React from "react";
import { useParams } from "react-router-dom";
import "./blog.css";
import "./post.css";

interface Props {
  postTitleURLParam: string;
}

const Blog: React.FC<Props> = () => {
  const { postTitleURLParam } = useParams<Props>();

  return (
    <article className="blog">
      {
        //! This is just a temporary placeholder.
        //! The post object will be retrieved from a database.
        //! The object will then be parsed and rendered.
      }
      <h3 className="post-title">{postTitleURLParam}</h3>
      <p className="post-timestamp">{new Date().toString().slice(0, 15)}</p>
    </article>
  );
};

export default Blog;
