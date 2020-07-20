import React from "react";

const MyInput = props => {
  const { children, label } = props;

  return (
    <div>
      <span style={{ marginRight: "5px" }}>{label}</span>
      {children}
    </div>
  );
};

export default MyInput;
