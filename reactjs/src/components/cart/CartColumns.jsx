import React from "react";
import { Row, Col, Steps } from "antd";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../commons/Button";

const colResponsive = {
  xs: 6,
  sm: 6,
  md: 6,
  lg: 6,
  xl: 6
};

const CartColumns = props => {
  const { cart, removeAllCart } = props;

  return (
    <SCartColumns onClick={removeAllCart}>
      <SText>Products ({cart.length})</SText>
      <Button
        variant="text"
        color="primary"
        startIcon={<FontAwesomeIcon icon="times" />}
        style={{ float: "right" }}
      >
        Remove All Item
      </Button>
    </SCartColumns>
  );

  // return (
  //   <Row>
  //     <Col {...colResponsive} style={{ textAlign: "center" }}>
  //       <SText className="text-uppercase">products</SText>
  //     </Col>
  //     <Col {...colResponsive} style={{ textAlign: "center" }}>
  //       <SText className="text-uppercase">information</SText>
  //     </Col>
  //     <Col {...colResponsive} style={{ textAlign: "center" }}>
  //       <SText className="text-uppercase">quantity</SText>
  //     </Col>
  //   </Row>
  // );
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
`;

export default CartColumns;
