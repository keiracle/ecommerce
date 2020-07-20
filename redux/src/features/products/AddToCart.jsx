import React from 'react';
import { getCurrentUser } from '../../services/authService';
import { notification, Button } from 'antd';
import { isHotDeal } from '../../services/utilities';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../cart/cartSlice';

const AddToCart = React.memo(props => {
  const { product, quantity = 1 } = props;

  const {
    _id,
    isPublished,
    quantityInStock,
    quantityForDeal,
    quantityDealSold,
    hotDealExpired,
  } = product;

  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    // If not login
    if (!getCurrentUser()) {
      notification.info({
        message: 'You need login to use cart',
      });
      return;
    }

    dispatch(addItemToCart(_id, quantity));
  };

  const isOutOfStock = !!quantityInStock === 0;

  //  In hot deal time but sell out
  const isSellOut =
    isHotDeal(hotDealExpired) && quantityDealSold === quantityForDeal
      ? true
      : false;

  let isDisabled = !isPublished;

  isDisabled = isPublished && !isOutOfStock && !isSellOut ? false : true;

  return (
    <Button type="primary" disabled={isDisabled} onClick={handleAddToCart}>
      {isPublished ? 'Add To Cart' : 'Comming Soon'}
    </Button>
  );
});

export default AddToCart;
