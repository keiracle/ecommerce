import React from "react";
import CartItem from "./CartItem";
import { Row } from "antd";

const CartList = props => {
  const {
    cart,
    addToCart,
    increment,
    decrement,
    removeCartItem,
    isHotDeal,
    isSale
  } = props;

  return (
    <Row>
      {cart.map(i => (
        <CartItem
          key={i._id}
          item={i}
          addToCart={addToCart}
          increment={increment}
          decrement={decrement}
          removeCartItem={removeCartItem}
          isHotDeal={isHotDeal}
          isSale={isSale}
        />
      ))}
    </Row>
  );
};

export default CartList;
