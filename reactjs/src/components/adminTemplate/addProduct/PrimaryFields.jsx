import React from "react";
import { Checkbox, InputNumber, Row, Col } from "antd";
import styled from "styled-components";
import MyInput from "../../commons/MyInput";

const PrimaryFields = props => {
  const {
    isPublished,
    price,
    salePrice,
    quantityInStock,
    handlePrice,
    handlePublished,
    handleSalePrice,
    handleQuantityInStock
  } = props;

  return (
    <SPrimaryFields>
      <Row align="middle" type="flex" gutter={[0, 40]}>
        <Col span={6}>
          <Checkbox onChange={handlePublished} checked={isPublished}>
            Is Published
          </Checkbox>
        </Col>
      </Row>
      <Row align="middle" type="flex" gutter={[0, 40]}>
        <Col span={8}>
          <MyInput label="Price">
            <InputNumber
              min={0}
              value={price}
              formatter={value =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={value => value.replace(/\$\s?|(,*)/g, "")}
              step={1}
              size="default"
              disabled={!isPublished}
              onChange={handlePrice}
            />
          </MyInput>
        </Col>
        <Col span={8}>
          <MyInput label="Sale Price">
            <InputNumber
              min={0}
              value={salePrice}
              formatter={value =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={value => value.replace(/\$\s?|([.,]*)/g, "")}
              step={1}
              size="default"
              disabled={!isPublished}
              onChange={handleSalePrice}
            />
          </MyInput>
        </Col>
        <Col span={8}>
          <MyInput label="In Stock">
            <InputNumber
              min={0}
              value={quantityInStock}
              parser={value => value.replace(/\$\s?|([.,]*)/g, "")}
              step={1}
              size="default"
              disabled={!isPublished}
              onChange={handleQuantityInStock}
            />
          </MyInput>
        </Col>
      </Row>
    </SPrimaryFields>
  );
};

const SPrimaryFields = styled.div``;

export default PrimaryFields;
