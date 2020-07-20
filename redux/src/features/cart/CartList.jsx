import React from 'react';
import CartItem from './CartItem';
import { Space } from 'antd';
import styled from 'styled-components';

const CartList = props => {
  const { cart, increment, decrement } = props;

  return (
    <SSpace direction="vertical">
      {cart.map(i => (
        <CartItem
          key={i._id}
          item={i}
          increment={increment}
          decrement={decrement}
        />
      ))}
    </SSpace>
  );
};

const SSpace = styled(Space)`
  display: flex;
`;

export default CartList;
