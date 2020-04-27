import React from "react";

const Char = (props) => {
  const charStyle = {
    display: "inline-block",
    textAling: "center",
    padding: "16px",
    margin: "8px",
    border: "solid 1px white",
    backgroundColor: "gray",
    cursor: "pointer",
  };

  return (
    <div style={charStyle} onClick={props.clicked}>
      {props.character}
    </div>
  );
};

export default Char;
