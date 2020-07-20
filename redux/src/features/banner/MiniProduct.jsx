import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { getImageBase64, isHotDeal, isSale } from '../../services/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../cart/cartSlice';

const MiniProduct = props => {
  const { item } = props;

  const { product, quantity } = item;

  const {
    _id,
    image,
    name,
    price,
    salePrice,
    hotDealPrice,
    hotDealExpired,
  } = product;

  const dispatch = useDispatch();

  let imageBase64 = getImageBase64(image.data.data);

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
    <SMiniProduct>
      <Row>
        <Col span={6}>
          <img
            src={`data:image/png;base64,${imageBase64}`}
            alt=""
            style={{ width: '50px', height: '50px' }}
          />
        </Col>
        <Col span={14}>
          <p>{name}</p>
          <NewPrice />
          <p>{quantity} items </p>
        </Col>
        <Col span={4}>
          <FontAwesomeIcon
            icon="times"
            size="2x"
            style={{ display: 'block', cursor: 'pointer' }}
            onClick={() => {
              dispatch(removeItemFromCart(_id));
            }}
          />
        </Col>
      </Row>
    </SMiniProduct>
  );
};

const SMiniProduct = styled.div`
  border-bottom: 0.05px solid #e3e3e3;
  margin-bottom: 2px;

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  .price {
    font-weight: bold;
  }

  .original-price {
    text-decoration: line-through;
    font-size: 13px;
    font-weight: lighter;
    margin-left: 5px;
  }
`;

MiniProduct.propTypes = {
  product: Proptypes.shape({
    id: Proptypes.string.isRequired,
    image: Proptypes.array.isRequired,
    name: Proptypes.string.isRequired,
    price: Proptypes.number.isRequired,
    salePrice: Proptypes.number.isRequired,
    saleExpired: Proptypes.object.isRequired,
    quantity: Proptypes.number.isRequired,
  }),
};

export default MiniProduct;
