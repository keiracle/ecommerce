import React from "react";
import styled from "styled-components";
import TimeReminder from "./TimeReminder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DescriptionPrice = props => {
  const {
    price,
    salePrice,
    hotDealPrice,
    isPublished,
    isSale,
    isHotDeal,
    setIsHotDeal,
    hotDealExpired,
    quantityDealSold,
    quantityForDeal
  } = props;

  const getSalePercent = salePrice => {
    return Math.round(((price - salePrice) / price) * 100);
  };

  const HotDeal = () => {
    return (
      <>
        <p className="price">
          <span className="hot-deal-icon">
            <FontAwesomeIcon icon={["fab", "hotjar"]} />
          </span>
          <span className="sale-price">${hotDealPrice}</span>
        </p>
        <p className="price">
          Save:
          <span className="percent-sale">{getSalePercent(hotDealPrice)}</span>
        </p>
        <p className="price">
          Original price: <span className="origin-price">{price}</span>
        </p>
        <TimeReminder.Detail
          setIsHotDeal={setIsHotDeal}
          hotDealExpired={hotDealExpired}
          quantityForDeal={quantityForDeal}
          quantityDealSold={quantityDealSold}
        />
      </>
    );
  };

  const Sale = () => {
    return (
      <>
        <p className="price">
          <span className="sale-price">${salePrice}</span>
        </p>
        <p className="price">
          Save:
          <span className="percent-sale">{getSalePercent(salePrice)}</span>
        </p>
        <p className="price">
          Original price: <span className="origin-price">{price}</span>
        </p>
      </>
    );
  };

  const Price = () => {
    return (
      <>
        <p className="price">
          <span className="sale-price">${price}</span>
        </p>
      </>
    );
  };

  return isPublished ? (
    <SPrice>{isHotDeal ? <HotDeal /> : isSale ? <Sale /> : <Price />}</SPrice>
  ) : (
    <SPrice>
      <p>Not Available</p>
    </SPrice>
  );
};

const SPrice = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(240, 240, 240);

  .price {
    color: rgb(180, 180, 180);
    margin: 0;
  }

  .sale-price {
    font-size: 24px;
    color: ${({ theme }) => theme.color.primaryRed};
  }

  .percent-sale {
    color: ${({ theme }) => theme.color.primaryRed};
  }

  .hot-deal-icon {
    margin: 0 10px 0 0;
    font-size: 20px;

    & > svg {
      color: ${({ theme }) => theme.color.primaryOrange};
    }
  }
`;

export default DescriptionPrice;
