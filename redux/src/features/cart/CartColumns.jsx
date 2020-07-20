import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeCart } from './cartSlice';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartColumns = props => {
  const { cart } = props;

  const dispatch = useDispatch();

  return (
    <SCartColumns>
      <SText>Products ({cart.length})</SText>
      <SButton
        style={{ float: 'right' }}
        type="primary"
        icon={<FontAwesomeIcon icon="times" style={{ marginRight: '10px' }} />}
        onClick={() => dispatch(removeCart())}
      >
        Remove All Item
      </SButton>
    </SCartColumns>
  );
};

const SText = styled.p`
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
`;

const SCartColumns = styled.div`
  width: 100%;
  min-height: 50px;
`;

const SButton = styled(Button)`
  background-color: palevioletred;
  border-color: palevioletred;

  :focus {
    border-color: palevioletred;
    background-color: palevioletred;
  }
  :hover {
    border-color: palevioletred;
    background-color: palevioletred;
  }

  &.ant-btn-clicked:after {
    border: 0 solid palevioletred;
  }
`;

export default CartColumns;
