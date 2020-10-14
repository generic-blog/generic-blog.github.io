import React from "react";
import Row, { Props as RowProps } from "./row/Row";
import "./table.css";

interface Props {
  title?: string;
  rows?: Array<RowProps>;
}

export default class Table extends React.Component<Props> {
  render() {
    return (
      <div className="table">
        <h4 className="table-title">{this.props.title}</h4>
        {this.props.rows?.map((row) => (
          <Row
            command={row.command}
            description={row.description}
            key={Math.random()}
          />
        ))}
      </div>
    );
  }
}
