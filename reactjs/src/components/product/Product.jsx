import React from "react";
import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";
import TimeReminder from "../detail/TimeReminder";
import ProductFunctional from "./ProductFunctional";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

// Not found solution for not re-render whole product
// Create separate MarkWish-Button & AddCart-Button

const Product = React.memo(props => {
  const { product, style, ...rest } = props;

  const {
    _id,
    name,
    image,
    price,
    salePrice,
    hotDealPrice,
    hotDealExpired,
    quantityInStock,
    quantityForDeal,
    quantityDealSold,
    isPublished
  } = product;

  const [isHotDeal, setIsHotDeal] = useState(() => {
    // It's hot deal
    if (
      new Date(hotDealExpired.startDate) <= Date.now() &&
      new Date(hotDealExpired.endDate) > Date.now()
    )
      return true;
    return false;
  });

  const [isSale, setIsSale] = useState(() => {
    // It's normal sale
    if (salePrice !== 0) return true;
    return false;
  });

  return (
    <SProduct style={style}>
      <ProductImage _id={_id} image={image} />
      <ProductInfo
        name={name}
        isPublished={isPublished}
        isSale={isSale}
        isHotDeal={isHotDeal}
        salePrice={salePrice}
        hotDealPrice={hotDealPrice}
        price={price}
        quantityInStock={quantityInStock}
        quantityForDeal={quantityForDeal}
      />
      <ProductFunctional product={product} />
      {isPublished && isHotDeal && (
        <TimeReminder.Simple
          setIsHotDeal={setIsHotDeal}
          hotDealExpired={hotDealExpired}
          quantityForDeal={quantityForDeal}
          quantityDealSold={quantityDealSold}
        />
      )}
    </SProduct>
  );
});

// Product.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number,
//     img: PropTypes.string,
//     name: PropTypes.string,
//     price: PropTypes.number,
//     inCart: PropTypes.bool
//   }).isRequired
// };

export const SProduct = styled.div`
  position: relative;
  max-width: 250px;
  padding: 10px;
  margin: auto;
  border: 0.04rem solid;
  border-color: transparent;
  transition: all 0.2s linear;

  &:hover {
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;

export default Product;
