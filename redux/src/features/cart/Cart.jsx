import React, { useEffect } from 'react';
import CartTable from './CartTable';
import FeeTable from './FeeTable';
import styled from 'styled-components';
import { Row, Col, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from './cartSlice';
import { isHotDeal, isSale } from '../../services/utilities';

const colCartTableResponsive = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 16 },
  xl: { span: 16 },
};

const colFeeTableResponsive = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 8 },
  xl: { span: 8 },
};

const Cart = props => {
  const dispatch = useDispatch();

  const { values: cart, totalPrice, isLoading } = useSelector(
    state => state.cart
  );

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  if (isLoading)
    return (
      <SEmptyCart style={{ minHeight: '50vh' }}>
        <Spin />
      </SEmptyCart>
    );

  return cart.length !== 0 ? (
    <SCart>
      <Row gutter={48}>
        <Col {...colCartTableResponsive}>
          <CartTable cart={cart} isHotDeal={isHotDeal} isSale={isSale} />
        </Col>
        <Col {...colFeeTableResponsive}>
          <FeeTable
            totalPrice={totalPrice}
            cart={cart}
            isFetching={isLoading}
          />
        </Col>
      </Row>
    </SCart>
  ) : (
    <SEmptyCart>
      <img src="/images/mascot.png" alt="" />
      <p>Your cart is current empty</p>
      <Link to="products">
        <Button>Continuous shopping</Button>
      </Link>
    </SEmptyCart>
  );
};

const SCart = styled.div`
  width: 80%;
  margin: 20px auto;
  min-height: 100vh;
`;

const SEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.primaryLight};

  & > p {
    font-size: 1.2rem;
    margin: 10px;
  }

  & > img {
    margin: 30px;
  }
`;

export default Cart;
