/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";

import "./code.css";
import "../../syntax/syntax.css";

import {
  useHighlightCSS,
  useHighlightHTML,
  useHighlightJS,
} from "../../syntax/highlight";

interface Props {
  code: string;
  lang: string;
}

const Code: React.FC<Props> = ({ code, lang }) => {
  const highlightedCode =
    lang === "js" ? (
      useHighlightJS(code)
    ) : lang === "html" ? (
      useHighlightHTML(code)
    ) : lang === "css" ? (
      useHighlightCSS(code)
    ) : (
      <span>Unsupported language: {lang}</span>
    );

  return (
    <div className="post-code">
      <pre className="light">{highlightedCode}</pre>
    </div>
  );
};

export default Code;
