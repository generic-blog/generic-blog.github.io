import React from "react";
import "./footer.css";

import "../syntax/syntax.css";
import { Link } from "react-router-dom";

interface Props {
  latestPostLink: string;
  latestPostTitle: string;
}

const Footer: React.FC<Props> = ({ latestPostLink, latestPostTitle }) => {
  return (
    <footer className="footer">
      <div className="left">
        <div className="mono">
          <span className="class">Generic</span>{" "}
          <span className="var">blog</span> ={" "}
          <span className="keyword">new</span>{" "}
          <span className="class">Generic</span>&lt;
          <span className="class">Blog</span>&gt;();
        </div>
      </div>
      <div className="right">
        <div className="latest">
          latest post:{" "}
          <span>
            <Link to={latestPostLink}>{latestPostTitle}</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
