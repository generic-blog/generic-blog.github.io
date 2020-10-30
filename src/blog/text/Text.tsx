import React from "react";

import "./text.css";

interface Props {
  text: string;
}

const Text: React.FC<Props> = ({ text }) => {
  return <p className="post-text">{text}</p>;
};

export default Text;
