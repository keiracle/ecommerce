import React, { useState, useContext } from "react";
import { CartContext } from "../../context/cartProvider";
import CartTable from "./CartTable";
import FeeTable from "./FeeTable";
import styled from "styled-components";
import { Row, Col } from "antd";
import Button from "../commons/Button";
import { Link } from "react-router-dom";

const colCartTableResponsive = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 16 },
  xl: { span: 16 }
};

const colFeeTableResponsive = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 8 },
  xl: { span: 8 }
};

const Cart = props => {
  const {
    cart,
    totalPrice,
    addToCart,
    orderProducts,
    removeCartItem,
    removeAllCart,
    isHotDeal,
    isSale
  } = useContext(CartContext);

  return cart.length !== 0 ? (
    <SCart>
      <Row gutter={48}>
        <Col {...colCartTableResponsive}>
          <CartTable
            cart={cart}
            addToCart={addToCart}
            removeCartItem={removeCartItem}
            removeAllCart={removeAllCart}
            isHotDeal={isHotDeal}
            isSale={isSale}
          />
        </Col>
        <Col {...colFeeTableResponsive}>
          <FeeTable
            totalPrice={totalPrice}
            orderProducts={orderProducts}
            removeAllCart={removeAllCart}
          />
        </Col>
      </Row>
    </SCart>
  ) : (
    <SEmptyCart>
      <img src="/images/mascot.png" alt="" />
      <p>Your cart is current empty</p>
      <Link to="products">
        <Button variant="contained" color="primary">
          Continuous shopping
        </Button>
      </Link>
    </SEmptyCart>
  );
};

const SCart = styled.div`
  width: 80%;
  margin: auto;
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
