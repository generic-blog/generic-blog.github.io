import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";

import { Post } from "../Post";

import "./blog.css";
import Code from "./code/Code";
import "./post.css";

import Text from "./text/Text";

interface Params {
  postTitleURLParam: string;
}

interface Props {
  retrieve: Function;
}

const Blog: React.FC<Props> = ({ retrieve }) => {
  const { postTitleURLParam } = useParams<Params>();

  const [post, setPost] = useState<Post>({
    data: {
      author: "",
      content: [],
      createdAt: new Date().toDateString(),
      title: "",
      link: "",
    },
  });

  useEffect(() => {
    (async function () {
      let mounted = true;

      if (mounted) setPost(await retrieve(postTitleURLParam));

      return () => (mounted = false);
    })();
  }, [postTitleURLParam, retrieve]);

  if (!post) return <Redirect to="/something-went-wrong" />;

  return (
    <article className="blog">
      <div className="post-meta">
        <h3 className="post-title">{post.data.title}</h3>
        <div className="post-info">
          <p className="post-timestamp">{post.data.createdAt}</p>
          <p className="post-author">posted by {post.data.author}</p>
        </div>
      </div>
      <div className="post-content">
        {post.data.content.map((content: { type: string; content: string }) => {
          switch (content.type) {
            case "text":
              return <Text text={content.content} key={Math.random()} />;
            case "code":
              return <Code code={content.content} key={Math.random()} />;
            default:
              console.log(`Unsupported content type: ${content.type}`);
              return <div key={Math.random()}></div>;
          }
        })}
      </div>
    </article>
  );
};

export default Blog;
