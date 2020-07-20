import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputNumber, notification } from "antd";
import Button from "../commons/Button";
import MarkWish from "../product/MarkWish";
import AddToCart from "../product/AddToCart";

const DescriptionOption = props => {
  let { product } = props;

  const { id } = product;

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = value => {
    setQuantity(value);
  };

  // Need fix
  product = { ...product, _id: id };

  return (
    <SOption>
      <InputNumber
        min={1}
        defaultValue={1}
        value={quantity}
        parser={value => value.replace(".", "")}
        step={1}
        size="default"
        onChange={handleQuantityChange}
      />
      <AddToCart product={product} quantity={quantity} />
      <MarkWish _id={id} />
    </SOption>
  );
};

const SOption = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;

  & > * {
    margin-left: 15px;
  }
`;

export default DescriptionOption;
