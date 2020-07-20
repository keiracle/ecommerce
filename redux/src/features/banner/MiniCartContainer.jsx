import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MiniCart from './MiniCart';
import { Badge, Popover, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../cart/cartSlice';

const MiniCartContainer = props => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart);

  const { values: items, isLoading, totalPrice } = cart;

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const getTotalCartItem = () => {
    let total = 0;
    items.forEach(item => {
      const { quantity, product } = item;
      total += quantity;
    });
    return total;
  };

  const content = <MiniCart cart={items} totalPrice={totalPrice} />;

  return (
    <SMiniCartContainer
      isActive={isActive}
      ref={ref}
      // onClick={() => setIsActive(prev => !prev)}
    >
      <Popover trigger="click" placement="bottom" content={content}>
        {isLoading ? (
          <Badge>
            <FontAwesomeIcon icon="circle-notch" size="2x" spin />
          </Badge>
        ) : (
          <Badge count={getTotalCartItem()} overflowCount={99}>
            <FontAwesomeIcon icon="shopping-cart" size="2x" />
          </Badge>
        )}
      </Popover>
    </SMiniCartContainer>
  );
};

const SMiniCartContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 20px;
  padding: 0;
  font-size: 0.8rem;
  color: white;
  border-radius: 5px;
  border: ${props =>
    props.isActive ? '1px solid rgb(31, 104, 168)' : '1px solid transparent'};

  &:hover {
    cursor: pointer;
  }

  & > span {
    margin: 5px;
    font-size: 0.8rem;
  }
`;

export default MiniCartContainer;
