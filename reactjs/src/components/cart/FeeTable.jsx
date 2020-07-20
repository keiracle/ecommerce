import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../commons/Button";
import { Affix, Spin, notification } from "antd";
import { Icon } from "antd";
import { StuffContext } from "../../context/stuffProvider";

const spinIcon = <Icon style={{ fontSize: 24 }} spin type="loading" />;

const FeeTable = props => {
  const { totalPrice, orderProducts, removeAllCart } = props;

  const [isFetching, setIsFetching] = useState(false);

  const { setIsFetching: setLoadingPage } = useContext(StuffContext);

  const handleCheckOut = async () => {
    setLoadingPage(true);
    setIsFetching(true);
    const response = await orderProducts();
    setIsFetching(false);
    removeAllCart();
    setLoadingPage(false);

    if (response && response.status === 200) {
      notification.success({
        message: "Order success!",
        description: `Check user's profile for more details`
      });
    }
  };

  return (
    <Affix offsetTop={20}>
      <SFeeTable>
        <SPrice>
          <p>total price :</p>
          {totalPrice ? <p>${totalPrice}</p> : <Spin indicator={spinIcon} />}
        </SPrice>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          disabled={isFetching}
          onClick={handleCheckOut}
        >
          {isFetching ? <Spin indicator={spinIcon} /> : "Order Products"}
        </Button>
        <Link to="/products">
          <Button variant="contained" color="primary" fullWidth>
            Continue Shopping
          </Button>
        </Link>
      </SFeeTable>
    </Affix>
  );
};

const SFeeTable = styled.div`
  position: relative;
  min-width: 150px;
  max-width: 300px;
  padding: 20px;
  margin: 15px 0 0 0;
  align-items: center;
  background-color: white;
  border-radius: 5px;

  -webkit-box-shadow: -1px 1px 10px 0px rgba(199, 199, 199, 1);
  -moz-box-shadow: -1px 1px 10px 0px rgba(199, 199, 199, 1);
  box-shadow: -1px 1px 10px 0px rgba(199, 199, 199, 1);

  & > * {
    margin: 5px 0;
    white-space: nowrap;
  }
`;

const SPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.2rem;
`;

export default FeeTable;
