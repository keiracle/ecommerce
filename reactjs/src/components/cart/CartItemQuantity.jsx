import React, { useState } from "react";
import { InputNumber } from "antd";

const CartItemQuantity = props => {
  const { id, quantity, addToCart } = props;

  const [disabled, setDisabled] = useState(false);

  const handleChange = async value => {
    setDisabled(true);
    const response = await addToCart(id, value);
    setDisabled(false);
  };

  return (
    <InputNumber
      min={1}
      value={quantity}
      parser={value => value.replace(".", "")}
      step={1}
      size="default"
      disabled={disabled}
      style={{ fontSize: "1rem" }}
      onChange={handleChange}
    />
  );
};

export default CartItemQuantity;
