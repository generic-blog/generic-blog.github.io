import React from "react";

import "./code.css";
import "../../syntax/syntax.css";

interface Props {
  code: string;
}

const Code: React.FC<Props> = ({ code }) => {
  let isString = false;
  let nextString = false;
  //   let isObject = false;
  //   let isClass = false;

  const falseBool = (bool: boolean, val?: string) => {
    if (bool) bool = false;
    bool = false;
    return val || "";
  };

  //   const trueBool = (bool: boolean, val?: string) => {
  //     bool = true;
  //     return val || "";
  //   };

  return (
    <div className="post-code">
      <pre className="light">
        {code.split("").map((piece: string) => {
          if ((piece === '"' || piece === "'" || piece === "`") && isString) {
            isString = false;
            nextString = true;
          } else if (
            (piece === '"' || piece === "'" || piece === "`") &&
            !isString
          ) {
            isString = true;
          }
          return (
            <span
              className={
                isString
                  ? "string"
                  : nextString === true
                  ? falseBool(nextString, "string")
                  : ""
              }
              key={Math.random()}
            >
              {piece}
            </span>
          );
        })}
      </pre>
    </div>
  );
};

export default Code;
