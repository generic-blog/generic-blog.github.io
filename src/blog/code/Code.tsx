/* eslint-disable react-hooks/rules-of-hooks */

import React, { MutableRefObject, useRef } from "react";

import "./code.css";
import "../../syntax/syntax.css";

interface Props {
  code: string;
}

const Code: React.FC<Props> = ({ code }) => {
  const useFalse = (bools: MutableRefObject<boolean>[], val?: string) => {
    bools.forEach((bool: MutableRefObject<boolean>) => {
      bool.current = false;
    });
    return val || "";
  };

  //   const usingTrue = (bools: MutableRefObject<boolean>[], val?: string) => {
  //     bools.forEach((bool: MutableRefObject<boolean>) => {
  //       bool.current = true;
  //     });
  //     return val || "";
  //   };

  const useFlip = (bools: MutableRefObject<boolean>[], val?: string) => {
    bools.forEach((bool: MutableRefObject<boolean>) => {
      bool.current = !bool.current;
    });
    return val || "";
  };

  const useHighlight = (code: string) => {
    let isString = useRef(false);
    let nextString = useRef(false);
    let currentString = useRef("");
    let isEscaped = useRef(false);
    let isProperty = useRef(false);
    let isObject = useRef(false);
    let escapeHighlight = useRef(false);
    let isClass = useRef(false);
    let isKeyword = useRef("");

    const keywords = [
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "debugger",
      "default",
      "delete",
      "do",
      "else",
      "export",
      "extend",
      "finally",
      "for",
      "function",
      "if",
      "import",
      "in",
      "instanceof",
      "new",
      "return",
      "super",
      "switch",
      "this",
      "throw",
      "try",
      "typeof",
      "var",
      "void",
      "while",
      "with",
      "yield",
    ];

    return code.split("").map((piece: string) => {
      if (piece === "\\" && !isString.current) isEscaped.current = true;

      if (
        (piece === '"' || piece === "'" || piece === "`") &&
        isString.current &&
        piece === currentString.current
      ) {
        isString.current = false;
        nextString.current = true;
      } else if (
        (piece === '"' || piece === "'" || piece === "`") &&
        !isString.current
      ) {
        isString.current = true;
        currentString.current = piece;
      }

      if (!/[ .;[\]{}<>]/gi.test(piece) && !isObject.current)
        isProperty.current = !isProperty.current;
      else isObject.current = true;

      if (piece.toUpperCase() === piece) isClass.current = true;

      if (/[.,:;()[\]{}<>\-+*/=|&~!@#$%^&?]/.test(piece)) {
        escapeHighlight.current = true;
        isClass.current = false;
      } else escapeHighlight.current = false;

      if (!/[a-zA-Z]/.test(piece)) isKeyword.current += piece;
      else isKeyword.current = "";

      let className = isString.current
        ? "string"
        : isEscaped.current
        ? useFlip([isEscaped, isString], "string")
        : escapeHighlight.current
        ? "normal"
        : nextString.current
        ? useFalse([nextString], "string")
        : isClass.current
        ? "class"
        : keywords.includes(isKeyword.current)
        ? "keyword"
        : isObject.current
        ? "var"
        : !isObject.current && isProperty
        ? "property"
        : "normal";

      return (
        <span className={className} key={Math.random()}>
          {piece}
        </span>
      );
    });
  };

  const highlightedCode = useHighlight(code);

  return (
    <div className="post-code">
      <pre className="light">{highlightedCode}</pre>
    </div>
  );
};

export default Code;
