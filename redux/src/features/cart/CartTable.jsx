import React from "react";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import styled from "styled-components";

const CartTable = React.memo((props) => {
  const { cart } = props;

  return (
    <SCartTable>
      <CartColumns cart={cart} />
      <CartList cart={cart} />
    </SCartTable>
  );
});

const SCartTable = styled.div`
  width: 100%;
`;

export default CartTable;
