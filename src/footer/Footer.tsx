import React from "react";
import "./footer.css";

import "../syntax/syntax.css";
import { Link } from "react-router-dom";

import { DiReact } from "react-icons/di";
import { IconContext } from "react-icons";

interface Props {
  latestLink: string;
}

const Footer: React.FC<Props> = ({ latestLink }) => {
  return (
    <footer className="footer">
      <div className="left">
        <div className="code large dark">
          <span className="class">Generic</span>{" "}
          <span className="var">blog</span> ={" "}
          <span className="keyword">new</span>{" "}
          <span className="class">Generic</span>&lt;
          <span className="class">Blog</span>&gt;();
        </div>
      </div>
      <div className="right">
        <div className="middle">
          <span>Made with</span>
          <IconContext.Provider
            value={{
              color: "#61dbfb",
              size: "4rem",
            }}
          >
            <DiReact />
          </IconContext.Provider>
        </div>
        <div className="latest">
          <Link to={`${process.env.PUBLIC_URL}/posts/${latestLink}`}>
            latest post
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
