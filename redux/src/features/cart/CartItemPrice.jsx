import React from 'react';
import styled from 'styled-components';
import { isHotDeal, isSale } from '../../services/utilities';

const CartItemPrice = props => {
  const { price, salePrice, hotDealPrice, hotDealExpired } = props;

  const NewPrice = () => {
    return (
      <p className="price">
        ${isHotDeal(hotDealExpired) ? hotDealPrice : isSale ? salePrice : price}
        {isHotDeal(hotDealExpired) && isSale(salePrice) && (
          <span className="original-price">${price}</span>
        )}
      </p>
    );
  };

  return (
    <SCartItemInformation>
      <NewPrice />
    </SCartItemInformation>
  );
};

const SCartItemInformation = styled.div`
  font-size: 16px;

  .price {
    font-weight: bold;
    margin: 0;
  }

  .original-price {
    text-decoration: line-through;
    font-size: 13px;
    font-weight: lighter;
    margin-left: 5px;
  }
`;

export default CartItemPrice;
