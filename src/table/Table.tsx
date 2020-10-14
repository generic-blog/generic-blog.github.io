import React from "react";
import Row from "./row/Row";
import "./table.css";

interface Props {
  rows?: Array<Object>;
}

export default class Table extends React.PureComponent<Props> {
  render() {
    return (
      <div className="table">
        <Row />
      </div>
    );
  }
}
