import React from "react";

const Input = ({ name, label, type, value, error, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-control"
        value={value}
        onChange={onChange}
      />
      {error && <div className="badge badge-danger">{error}</div>}
    </>
  );
};

export default Input;
