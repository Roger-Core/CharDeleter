import React from "react";

const Validation = (props) => {
  let ValidationMessage = "Text Long Enough";

  if (props.inputLength <= 5) {
    ValidationMessage = "Text To Short";
  }

  const textStyle = {
    color: "#fff",
  };

  return (
    <div style={textStyle}>
      <h2>{ValidationMessage}</h2>
      <h3>Click And Play</h3>
    </div>
  );
};

export default Validation;
