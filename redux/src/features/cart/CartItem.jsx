import React from 'react';
import { Row, Col, Divider, Spin, notification } from 'antd';
import CartItemImg from './CartItemImg';
import CartItemPrice from './CartItemPrice';
import CartItemQuantity from './CartItemQuantity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartItemName from './CartItemName';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from './cartSlice';

const colResponsive = value => {
  return {
    xs: value,
    sm: value,
    md: value,
    lg: value,
    xl: value,
  };
};

const CartItem = props => {
  const { item } = props;

  const { product, quantity } = item;

  const dispatch = useDispatch();

  const {
    _id,
    image,
    name,
    price,
    salePrice,
    hotDealPrice,
    hotDealExpired,
  } = product;

  return (
    <SCartItem>
      <Row type="flex" align="middle">
        <Col {...colResponsive(4)} style={{ textAlign: 'center' }}>
          <CartItemImg image={image} />
        </Col>
        <Col
          xs={11}
          sm={11}
          md={11}
          lg={11}
          xl={11}
          style={{ textAlign: 'start' }}
        >
          <CartItemName name={name} />
          <SRemove onClick={() => dispatch(removeItemFromCart(_id))}>
            <FontAwesomeIcon icon="trash" />
            <span>Remove</span>
          </SRemove>
        </Col>
        <Col {...colResponsive(3)} style={{ textAlign: 'center' }}>
          <CartItemQuantity id={_id} quantity={quantity} />
        </Col>
        <Col {...colResponsive(6)} style={{ textAlign: 'start' }}>
          <CartItemPrice
            price={price}
            salePrice={salePrice}
            hotDealPrice={hotDealPrice}
            hotDealExpired={hotDealExpired}
          />
        </Col>
      </Row>
    </SCartItem>
  );
};

const SRemove = styled.div`
  cursor: pointer;
  color: red;
  margin-top: 10px;

  & > span {
    margin-left: 10px;
  }
`;

const SCartItem = styled.div`
  /* margin: 15px 0; */
  /* padding: 10px 0; */
  background-color: ${({ theme }) => theme.color.primaryLight};
  -webkit-box-shadow: 1px 1px 5px 0px rgba(209, 209, 209, 1);
  -moz-box-shadow: 1px 1px 5px 0px rgba(209, 209, 209, 1);
  box-shadow: 1px 1px 5px 0px rgba(209, 209, 209, 1);
`;

export default CartItem;
