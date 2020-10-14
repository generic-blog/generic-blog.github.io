import React from "react";
import "./row.css";

export interface Props {
  command?: string;
  description?: string;
}

export default class Row extends React.PureComponent<Props> {
  render() {
    return (
      <div className="table-row">
        <h1 className="command">{this.props.command}</h1>
        <p className="command-description">{this.props.description}</p>
      </div>
    );
  }
}
