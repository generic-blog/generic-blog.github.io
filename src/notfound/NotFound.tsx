import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

const NotFound: React.FC = () => {
  return (
    <div className="notfound">
      <div className="notfound-text">
        <h1>Well this is awkward...</h1>
        <p>
          Nothing much to see here.{" "}
          <Link
            to={`${process.env.PUBLIC_URL}/`}
            onClick={() => window.history.back()}
            className="notfound-back"
          >
            Go back?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
