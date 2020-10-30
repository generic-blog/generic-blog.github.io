import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./header.css";

interface Props {
  toggleTheme: Function;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const text = [
    "i make stuff",
    "hello world",
    "static typing",
    "macOS is the best",
    "bash scripts",
    "coders rise up",
    "while (true);",
    "fira code",
    "angular sucks",
    "enjoying the vue",
    "react is king",
    "syntactical sugar",
    "sipping coffeescript",
    "php am i right",
    "i need glasses to c#",
    "int elligence",
    "double trouble",
    "string theory",
    "[object Object]",
    "deno and nodejs",
    "sublime sucks",
    "owo whats this",
    "i need coffee",
    "object oriented",
    "pure functions",
    "ew light theme",
    "i use vscode btw",
    "vim",
    "npm",
    "yarn",
    "program.exe",
    "lolcode",
    "debugging",
  ];

  const randomText = useRef<string>(
    text[Math.floor(Math.random() * text.length)]
  );

  return (
    <header className="header">
      <div className="logo-container">
        <h3 className="logo">
          <Link to="/">generic&lt;blog&gt;()</Link>
        </h3>
      </div>
      <div className="header-text">
        <p onClick={() => toggleTheme()}>{randomText.current}</p>
      </div>
    </header>
  );
};

export default Header;
