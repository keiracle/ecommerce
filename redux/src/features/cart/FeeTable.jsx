import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Affix, Spin, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { order, removeCart } from './cartSlice';

const spinIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const FeeTable = ({ totalPrice, cart, isFetching }) => {
  const dispatch = useDispatch();

  return (
    <Affix offsetTop={20}>
      <SFeeTable>
        <SPrice>
          <p>total price :</p>
          {totalPrice ? <p>${totalPrice}</p> : <Spin indicator={spinIcon} />}
        </SPrice>
        <Button
          type="primary"
          block
          disabled={isFetching}
          onClick={() => {
            dispatch(order());
            dispatch(removeCart());
          }}
        >
          {isFetching ? <Spin indicator={spinIcon} /> : 'Order Products'}
        </Button>
        <Link to="/products">
          <Button block>Continue Shopping</Button>
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
  margin: 0;
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
