import React from "react";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import styled from "styled-components";

const CartTable = React.memo(props => {
  const {
    cart,
    addToCart,
    removeCartItem,
    removeAllCart,
    isHotDeal,
    isSale
  } = props;

  return (
    <SCartTable>
      <CartColumns cart={cart} removeAllCart={removeAllCart} />
      <CartList
        cart={cart}
        removeCartItem={removeCartItem}
        addToCart={addToCart}
        isHotDeal={isHotDeal}
        isSale={isSale}
      />
    </SCartTable>
  );
});

const SCartTable = styled.div`
  width: 100%;
`;

export default CartTable;
