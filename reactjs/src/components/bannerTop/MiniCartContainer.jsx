import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MiniCart from "./MiniCart";
import { Badge, Popover } from "antd";

const MiniCartContainer = props => {
  const { value, cart, removeCartItem, totalPrice, isSale, isHotDeal } = props;

  const [isActive, setIsActive] = useState(false);

  const ref = useRef(null);

  const content = (
    <MiniCart
      cart={cart}
      removeCartItem={removeCartItem}
      totalPrice={totalPrice}
      isSale={isSale}
      isHotDeal={isHotDeal}
    />
  );

  return (
    <SMiniCartContainer
      isActive={isActive}
      ref={ref}
      // onClick={() => setIsActive(prev => !prev)}
    >
      <Popover trigger="click" placement="bottom" content={content}>
        <Badge count={value} overflowCount={99}>
          <FontAwesomeIcon icon="shopping-cart" size="2x" />
        </Badge>
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
    props.isActive ? "1px solid rgb(31, 104, 168)" : "1px solid transparent"};

  &:hover {
    cursor: pointer;
  }

  & > span {
    margin: 5px;
    font-size: 0.8rem;
  }
`;

MiniCartContainer.propTypes = {
  value: Proptypes.number.isRequired,
  cart: Proptypes.array.isRequired,
  removeCartItem: Proptypes.func.isRequired,
  totalPrice: Proptypes.number.isRequired
};

export default MiniCartContainer;
