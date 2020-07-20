import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import * as utilities from "../../services/utilities";
import { getProduct } from "../../services/productService";
import MainDetail from "./MainDetail";
import { useParams } from "react-router-dom";
import _ from "lodash";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Detail = (props) => {
  const isMounted = useRef(false);

  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    isMounted.current = true;

    const populateProduct = async () => {
      const { data } = await getProduct(id);
      if (isMounted.current) setProduct(mapToViewModel(data));
    };

    populateProduct();

    return () => {
      isMounted.current = false;
    };
  }, [id]);

  //have confusing about findProductById need back to the server ?
  //resolve:
  //back to server is best approach
  //cause if refresh page it gonna bug undefined product
  //cause main state at contextAPI doesnt load and it dont have products
  //Set products from server will run after findProduct

  const mapToViewModel = (product) => {
    const {
      _id,
      name,
      image,
      category,
      brand,
      detail,
      isPublished,
      price,
      salePrice,
      hotDealExpired,
      hotDealPrice,
      quantityForDeal,
      quantityDealSold,
      quantityInStock,
    } = product;

    return {
      id: _id,
      name,
      image: utilities.getImageBase64(image.data.data),
      category,
      brand,
      detail,
      isPublished,
      price,
      salePrice,
      hotDealExpired,
      hotDealPrice,
      quantityForDeal,
      quantityDealSold,
      quantityInStock,
    };
  };

  return (
    // Object.keys(obj).length === 0 && obj.constructor === Object
    _.isEmpty(product) ? (
      <div
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin indicator={antIcon} />
      </div>
    ) : (
      <SDetail>
        <MainDetail product={product} />
      </SDetail>
    )
  );
};

const SDetail = styled.div`
  padding-top: 50px;
  margin-top: 50px;
`;

export default Detail;
