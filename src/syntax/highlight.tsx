/* eslint-disable react-hooks/rules-of-hooks */

import React, { useRef, MutableRefObject } from "react";

const useFalse = (bools: MutableRefObject<boolean>[], val?: string) => {
  bools.forEach((bool: MutableRefObject<boolean>) => {
    bool.current = false;
  });
  return val || "";
};

const useTrue = (bools: MutableRefObject<boolean>[], val?: string) => {
  bools.forEach((bool: MutableRefObject<boolean>) => {
    bool.current = true;
  });
  return val || "";
};

const useFlip = (bools: MutableRefObject<boolean>[], val?: string) => {
  bools.forEach((bool: MutableRefObject<boolean>) => {
    bool.current = !bool.current;
  });
  return val || "";
};

export const useHighlightJS = (code: string) => {
  const isString = useRef<boolean>(false);
  const nextString = useRef<boolean>(false);
  const currentString = useRef<string>("");
  const isEscaped = useRef<boolean>(false);
  const isProperty = useRef<boolean>(false);
  const isObject = useRef<boolean>(false);
  const escapeHighlight = useRef<boolean>(false);
  const isClass = useRef<boolean>(false);
  const isKeyword = useRef<string>("");
  const isComment = useRef<boolean>(false);
  const comment = useRef<string>("");

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
    if (piece === "\\" && isString.current) isEscaped.current = true;

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

    if (!/[ .;[\]{}<>]/.test(piece) && !isObject.current)
      isProperty.current = !isProperty.current;
    else isObject.current = true;

    if (piece.toUpperCase() === piece && /\w/.test(piece))
      isClass.current = true;

    if (/[.,:;()[\]{}<>\-+*/=|&~!@#$%^&?]/.test(piece)) {
      escapeHighlight.current = true;
      isClass.current = false;
    } else escapeHighlight.current = false;

    if (!/[a-zA-Z]/.test(piece)) isKeyword.current += piece;
    else isKeyword.current = "";

    comment.current += piece;

    if (comment.current.includes("/*") && !isComment.current) {
      isComment.current = true;
      comment.current = "";
    }

    if (comment.current.includes("*/") && isComment.current) {
      isComment.current = true;
      comment.current = "";
    }

    const className = isComment.current
      ? "comment"
      : isString.current
      ? "string"
      : isEscaped.current
      ? useFlip([isEscaped, isString], "string")
      : escapeHighlight.current
      ? useTrue([escapeHighlight], "normal")
      : nextString.current
      ? useFalse([nextString], "string")
      : isClass.current
      ? "class"
      : keywords.includes(isKeyword.current)
      ? "keyword"
      : isObject.current
      ? useTrue([isObject], "var")
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

export const useHighlightHTML = (code: string) => {
  const isTag = useRef<boolean>(false);
  const nextTag = useRef<boolean>(false);
  const isAttr = useRef<boolean>(false);
  const escapeHighlight = useRef<boolean>(false);
  const isString = useRef<boolean>(false);
  const nextString = useRef<boolean>(false);
  const currentString = useRef<string>("");
  const isEscaped = useRef<boolean>(false);
  const isCode = useRef<boolean>(false);
  const nextCode = useRef<boolean>(false);
  const isComment = useRef<boolean>(false);
  const comment = useRef<string>("");

  return code.split("").map((piece: string, i) => {
    if (piece === "\\" && isString.current) isEscaped.current = true;

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

    if (piece === "<") {
      isTag.current = true;
    }

    if (piece === ">") {
      isTag.current = false;
      isAttr.current = false;
      nextTag.current = true;
    }

    if (/ /.test(piece) && isTag.current) {
      isAttr.current = true;
    }

    if (/[.,:()[\]{}\-+*=|~!@$%^?]/.test(piece)) {
      escapeHighlight.current = true;
    }

    if (piece === "&" && !isEscaped.current && code[i + 1] !== "\\")
      isCode.current = true;
    if (/\\/.test(piece)) isCode.current = false;

    if (piece === ";" && isCode.current) {
      isCode.current = false;
      nextCode.current = true;
    }

    if (!/[&#a-zA-Z0-9]/.test(piece) && isCode.current) isCode.current = false;

    comment.current += piece;

    if (comment.current.includes("<!--") && !isComment.current) {
      isComment.current = true;
      comment.current = "";
    }

    if (comment.current.includes("-->") && isComment.current) {
      isComment.current = true;
      comment.current = "";
    }

    const className = isComment.current
      ? "comment"
      : isString.current
      ? "string"
      : isEscaped.current
      ? useFlip([isEscaped, isString], "string")
      : escapeHighlight.current
      ? useFalse([escapeHighlight], "normal")
      : nextString.current
      ? useFalse([nextString], "string")
      : isAttr.current
      ? "property"
      : isTag.current
      ? "var"
      : nextTag.current
      ? useFalse([nextTag], "var")
      : isCode.current
      ? "keyword"
      : nextCode.current
      ? useFalse([nextCode], "keyword")
      : "normal";

    return (
      <span className={className} key={Math.random()}>
        {piece}
      </span>
    );
  });
};

export const useHighlightCSS = (code: string) => {
  const isRuleset = useRef<boolean>(false);
  const escapeHighlight = useRef<boolean>(false);
  const isString = useRef<boolean>(false);
  const nextString = useRef<boolean>(false);
  const currentString = useRef<string>("");
  const isEscaped = useRef<boolean>(false);
  const isNumber = useRef<boolean>(false);
  const isProperty = useRef<boolean>(false);
  const isValue = useRef<boolean>(false);
  const isTag = useRef<boolean>(false);
  const isColon = useRef<boolean>(false);
  const isClassOrId = useRef<boolean>(false);
  const isPseudo = useRef<boolean>(false);
  const isComment = useRef<boolean>(false);
  const comment = useRef<string>("");

  return code.split("").map((piece: string, i) => {
    if (piece === "{" && !isRuleset.current) isRuleset.current = true;
    if (piece === "}" && isRuleset.current) isRuleset.current = false;

    if (piece === "\\" && isString.current) isEscaped.current = true;

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

    if (/[,:;()[\]{}+*=|~!@$%^?]/.test(piece)) {
      escapeHighlight.current = true;
    }

    if (/[0-9]/.test(piece)) isNumber.current = true;

    if (/[a-z0-9]/i.test(piece) && isRuleset.current) isProperty.current = true;

    if (piece === ":" && isProperty.current) {
      isValue.current = true;
    }

    if ((piece === "." || piece === "#") && !isRuleset.current)
      isClassOrId.current = true;

    if (/[a-z0-9]/i.test(piece) && !isRuleset.current) isTag.current = true;
    if (isRuleset.current) isTag.current = false;

    if (!isRuleset || piece === ";") isValue.current = false;

    if (piece === ":" && !isRuleset.current) {
      isColon.current = true;
      isClassOrId.current = false;
    } else isColon.current = false;

    if (piece === ":" && code[i + 1] !== ":" && !isRuleset.current) {
      isPseudo.current = true;
    }

    if (piece === " ") {
      isPseudo.current = false;
      isClassOrId.current = false;
    }

    comment.current += piece;

    if (comment.current.includes("/*") && !isComment.current) {
      isComment.current = true;
      comment.current = "";
    }

    if (comment.current.includes("*/") && isComment.current) {
      isComment.current = true;
      comment.current = "";
    }

    const className = isComment.current
      ? "comment"
      : isString.current
      ? "string"
      : isEscaped.current
      ? useFlip([isEscaped, isString], "string")
      : isColon.current
      ? "var"
      : escapeHighlight.current
      ? useFalse([escapeHighlight], "normal")
      : nextString.current
      ? useFalse([nextString], "string")
      : isClassOrId.current
      ? "class"
      : isPseudo.current
      ? "property"
      : isTag.current
      ? "keyword"
      : isNumber.current
      ? useFalse([isNumber], "var")
      : isValue.current
      ? "normal"
      : isProperty.current
      ? "property"
      : "normal";

    return (
      <span className={className} key={Math.random()}>
        {piece}
      </span>
    );
  });
};
