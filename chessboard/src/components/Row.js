import React from "react";
import Square from "./Square";
import "./Row.css";

function Row(props) {
  const { row } = props;

  const newRow = row.map((square, i) => {
    return square === 0 ? (
      <Square colorClass="white" key={i} />
    ) : (
      <Square colorClass="black" key={i} />
    );
  });

  return <div className="row">{newRow}</div>;
}

export default Row;