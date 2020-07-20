import React from "react";
import styled from "styled-components";

const CartItemName = props => {
  const { name } = props;

  return <SCartItemName>{name}</SCartItemName>;
};

const SCartItemName = styled.p`
  margin: 0;
`;

export default CartItemName;
