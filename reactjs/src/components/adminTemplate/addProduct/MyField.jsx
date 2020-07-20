import React from "react";
import { Form } from "antd";
import { Field, ErrorMessage } from "formik";
import styled from "styled-components";

const { Item } = Form;

const MyField = props => {
  const {
    as,
    name,
    type,
    label,
    placeholder,
    prefix,
    handleChange,
    value,
    validateStatus,
    children,
    ...rest
  } = props;
  return (
    <Item validateStatus={validateStatus} label={label}>
      <Field
        as={as}
        name={name}
        type={type}
        placeholder={placeholder}
        prefix={prefix}
        onChange={handleChange}
        value={value}
        {...rest}
      >
        {children}
      </Field>
      <ErrorMessage component={SErrorMessage} name={name} />
    </Item>
  );
};

const SErrorMessage = styled.span`
  color: red;
  display: block;
  margin: 0 0 -24px 0;
`;

export default MyField;
