import React, { Suspense } from "react";
import SkeletonLine from "../commons/SkeletonLine";
import { Skeleton, Row, Col, Pagination } from "antd";
import styled from "styled-components";
const Product = React.lazy(() => import("./Product"));

const colResponsive = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 12 },
  lg: { span: 8 },
  xl: { span: 6 }
};

const Loading = props => (
  <div>
    <div style={{ height: "250px" }}>
      <SkeletonLine />
    </div>
    <div style={{ width: "100%", height: "20px", padding: "5px 0" }}>
      <SkeletonLine />
    </div>
    <div style={{ width: "65%", height: "20px", padding: "5px 0" }}>
      <SkeletonLine />
    </div>
    <div style={{ width: "35%", height: "20px", padding: "5px 0" }}>
      <SkeletonLine />
    </div>
  </div>
);

const ProductList = props => {
  const { products, pageSize, currentPage, totalCount, onPageChange } = props;

  return (
    <SProductList>
      <Row>
        <Row type="flex" style={{ minHeight: "90vh" }}>
          {products.map(product => (
            <Suspense key={product._id} fallback={<Loading />}>
              <Col {...colResponsive}>
                {product._id ? (
                  <Product key={product._id} product={product} />
                ) : (
                  <Loading />
                )}
              </Col>
            </Suspense>
          ))}
        </Row>
        <Row justify="center" type="flex">
          <Pagination
            defaultCurrent={1}
            current={currentPage}
            total={totalCount}
            pageSize={pageSize}
            onChange={onPageChange}
          />
        </Row>
      </Row>
    </SProductList>
  );
};

// 790px is max height productlist
const SProductList = styled.div`
  margin-top: 10px;
  min-height: 790px;
`;

export default ProductList;
