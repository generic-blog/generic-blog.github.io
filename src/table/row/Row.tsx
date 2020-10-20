import React from "react";
import "./row.css";

export interface Props {
  command?: string;
  usage?: string;
  description?: string;
}

export default class Row extends React.PureComponent<Props> {
  render() {
    return (
      <div className="table-row">
        <div className="overview">
          <h1 className="command">{this.props.command}</h1>
          <p className="usage">{this.props.usage}</p>
        </div>
        <p className="command-description">{this.props.description}</p>
      </div>
    );
  }
}
