import React from "react";
import styled from "styled-components";

const Button = ({
  name,
  id,
  addToCart,
  quantity,
  children,
  color = { button: "black", font: "white" }
}) => {
  return (
    <WrapperButton
      className="btn btn-danger"
      onClick={() => {
        addToCart(id, quantity);
      }}
      color={color}
    >
      {children}
      <span>{name}</span>
    </WrapperButton>
  );
};

const WrapperButton = styled.button`
  align-self: center;
  margin: 5px;
  padding: 5px;
  font-size: 1.2rem;
  text-transform: capitalize;
  color: ${props => props.color.font} !important;
  background-color: ${props => props.color.button};

  & > svg {
    font-size: 1.5rem;
    margin-right: 20px;
  }
`;

export default Button;
