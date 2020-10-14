import React from "react";
import "./row.css";

interface Props {
  command?: string;
  description?: string;
}

export default class Row extends React.PureComponent<Props> {
  render() {
    return <div className="table-row"></div>;
  }
}
