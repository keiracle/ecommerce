import React, { useState } from 'react';
import { InputNumber } from 'antd';
// import { addToCart } from "../../actions";
import { useDispatch } from 'react-redux';

const CartItemQuantity = props => {
  const { id, quantity } = props;

  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

  const handleChange = async quantity => {
    setDisabled(true);
    // const response = await dispatch(addToCart(id, quantity));
    setDisabled(false);
  };

  return (
    <InputNumber
      min={1}
      value={quantity}
      parser={value => value.replace('.', '')}
      step={1}
      size="default"
      disabled={disabled}
      style={{ fontSize: '1rem' }}
      onChange={handleChange}
    />
  );
};

export default CartItemQuantity;
