import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import DescriptionOption from "./DescriptionOption";
import DescriptionPrice from "./DescriptionPrice";
import TimeReminder from "./TimeReminder";

const MainDetail = (props) => {
  const { product } = props;

  const {
    id,
    name,
    image,
    price,
    salePrice,
    detail,
    hotDealPrice,
    hotDealExpired,
    quantityInStock,
    quantityForDeal,
    quantityDealSold,
    isPublished,
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

  const Image = () => (
    <SImage>
      <img src={`data:image/png;base64,${image}`} alt="" />
    </SImage>
  );

  const DesciptionContent = () => {
    return (
      <SContent>
        <p>{detail}</p>
      </SContent>
    );
  };

  return (
    <SMainDetail>
      <Row>
        <Col span={10}>
          <Image />
        </Col>
        <Col span={14}>
          <SName>
            <span>{name}</span>
            <h5>Brand: ?</h5>
          </SName>
          <SDescription>
            <DescriptionPrice
              price={price}
              hotDealPrice={hotDealPrice}
              salePrice={salePrice}
              isPublished={isPublished}
              isHotDeal={isHotDeal}
              isSale={isSale}
              setIsHotDeal={setIsHotDeal}
              hotDealExpired={hotDealExpired}
              quantityDealSold={quantityDealSold}
              quantityForDeal={quantityForDeal}
              quantityInStock={quantityInStock}
            />
            <DesciptionContent />
            <DescriptionOption product={product} />
          </SDescription>
        </Col>
      </Row>
    </SMainDetail>
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
`;

const SMainDetail = styled.div`
  background-color: ${({ theme }) => theme.color.primaryLight};

  margin: auto;

  @media screen and (min-width: ${({ theme }) => theme.responsive.xs}) {
    max-width: 540px;
  }

  @media screen and (min-width: ${({ theme }) => theme.responsive.sm}) {
    max-width: 720px;
  }

  @media screen and (min-width: ${({ theme }) => theme.responsive.md}) {
    max-width: 960px;
  }

  @media screen and (min-width: ${({ theme }) => theme.responsive.lg}) {
    max-width: 1140px;
  }
`;

const SImage = styled.div`
  text-align: center;
  border-right: 1px solid rgb(240, 240, 240);

  & > img {
    width: 400px;
    height: 400px;
  }
`;

const SName = styled.div`
  padding: 15px;
  border-bottom: 1px solid rgb(240, 240, 240);

  & > span {
    margin: 0;
    font-size: 24px;
    font-weight: lighter;
    color: #333;
    line-height: 30px;
  }

  & > h5 {
    font-weight: bold;
  }
`;

const SDescription = styled.div`
  padding: 20px;
`;

const SContent = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid rgb(240, 240, 240);

  & > p {
    margin: 0;
  }
`;

export default MainDetail;

/* <DescriptionPrice
  price={price}
  isHotDeal={isHotDeal}
  isSale={isSale}
  setIsHotDeal={setIsHotDeal}
  quantityDealSold={quantityDealSold}
  quantityForDeal={quantityForDeal}
  quantityInStock={quantityInStock}
/>; */
