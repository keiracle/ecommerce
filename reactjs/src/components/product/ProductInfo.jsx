import React from "react";
import styled from "styled-components";

const ProductInfo = React.memo(props => {
  const {
    name,
    isPublished,
    isSale,
    isHotDeal,
    salePrice,
    hotDealPrice,
    price,
    quantityInStock,
    quantityForDeal
  } = props;

  const getSalePercent = salePrice => {
    return Math.round(((price - salePrice) / price) * 100);
  };

  const HotDeal = () => {
    return (
      <>
        ${hotDealPrice}
        <span className="percent-deal">-{getSalePercent(hotDealPrice)}%</span>
        <span className="original-deal">${price}</span>
      </>
    );
  };

  const Sale = () => {
    return (
      <>
        ${salePrice}
        <span className="percent-sale">-{getSalePercent(salePrice)}%</span>
        <span className="original-sale">${price}</span>
      </>
    );
  };

  return (
    <SProductIfo>
      <p className="title">{name}</p>
      <p className="price">
        {isPublished ? (
          isHotDeal ? (
            <HotDeal />
          ) : isSale ? (
            <Sale />
          ) : (
            `$${price}`
          )
        ) : (
          "Not Available"
        )}
      </p>
    </SProductIfo>
  );
});

const SProductIfo = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.primaryDark};

  & > .title {
    position: relative;
    max-height: 40px;
    width: 100%;
    font-size: 13px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.54;
    letter-spacing: 0.1px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0px;
  }

  & > .price {
    margin-top: 5px;
    font-weight: bold;
    margin: 5px 0 0 0;

    & > .percent-deal {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      color: ${({ theme }) => theme.color.primaryLight};
      font-size: 13px;
      top: 10px;
      left: 20px;
      background-image: url("https://frontend.tikicdn.com/_new-next/static/img/icons/product/deal-tag.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 40px 35px;
      width: 40px;
      height: 35px;
      padding-bottom: 5px;
    }

    & > .original-deal {
      margin-left: 5px;
      font-size: 13px;
      font-weight: normal;
      text-decoration: line-through;
    }

    & > .percent-sale {
      font-weight: lighter;
      font-size: 12px;
      margin-left: 5px;
    }

    & > .original-sale {
      display: block;
      font-size: 13px;
      font-weight: normal;
      text-decoration: line-through;
    }
  }
`;

export default ProductInfo;
