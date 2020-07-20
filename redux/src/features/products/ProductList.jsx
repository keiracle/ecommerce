import React from 'react';
import { Row, Col, Pagination } from 'antd';
import styled from 'styled-components';
import Product from './Product';

const colResponsive = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 12 },
  lg: { span: 8 },
  xl: { span: 6 },
};

const ProductList = props => {
  const { products, pageSize, currentPage, totalCount, onPageChange } = props;

  return (
    <SProductList>
      <Row>
        <Row type="flex" style={{ minHeight: '90vh' }}>
          {products.map(product => (
            <Col key={product._id} {...colResponsive}>
              <Product product={product} />
            </Col>
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
