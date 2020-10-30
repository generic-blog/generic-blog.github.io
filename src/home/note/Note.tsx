import React from "react";
import { Link } from "react-router-dom";

import "./note.css";

interface Props {
  link: string;
  title: string;
  text: string;
}

const Note: React.FC<Props> = ({ link, text, title }) => {
  return (
    <Link to={`/posts/${link}`}>
      <div className="note">
        <h3 className="note-title">{title}</h3>
        <hr />
        <p className="note-text">{text}</p>
      </div>
    </Link>
  );
};

export default Note;
