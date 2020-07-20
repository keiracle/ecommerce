import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productSlice';
import { Row, Col, Skeleton, Space } from 'antd';
import ProductList from './ProductList';
import styled from 'styled-components';
import { paginate } from '../../services/utilities';
import _ from 'lodash';

const colResponsive = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 12 },
  lg: { span: 8 },
  xl: { span: 6 },
};

const ProductContainer = () => {
  const dispatch = useDispatch();
  const { values: items } = useSelector(state => state.products);
  const [searchQuery, setSearchQuery] = useState('');
  const [pagination, setPagination] = useState({
    pageSize: 8,
    currentPage: 1,
  });
  const [sortType, setSortType] = useState({
    path: 'hotDealPrice',
    order: 'asc',
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //get data after filter query and pagination
  const getPageData = () => {
    let filtered = [...items];
    if (searchQuery) {
      filtered = items.filter(p =>
        p.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    const sorted = _.orderBy(filtered, [sortType.path], [sortType.order]);

    const paginateProducts = paginate(
      sorted,
      pagination.currentPage,
      pagination.pageSize
    );

    return {
      totalCount: filtered.length,
      data: paginateProducts,
    };
  };

  const handlePageChange = (page, pageSize) => {
    setPagination({ ...pagination, currentPage: page });
  };

  const handlePageSizeChange = value => {
    setPagination({ ...paginate, pageSize: value });
  };

  const handleSort = () => {
    setSortType(prev => {
      if (prev.order === 'asc') return { ...prev, order: 'desc' };
      return { ...prev, order: 'asc' };
    });
  };

  const { totalCount, data } = getPageData();

  return (
    <SProductContainer>
      <Row type="flex" style={{ minHeight: '90vh' }}>
        {data && data.length === 0 ? (
          [...Array(8)].map((_, index) => (
            <Col key={index} {...colResponsive}>
              <ProductSkeleton />
            </Col>
          ))
        ) : (
          <ProductList
            products={data}
            pageSize={pagination.pageSize}
            currentPage={pagination.currentPage}
            totalCount={totalCount}
            onPageChange={handlePageChange}
          />
        )}
      </Row>
    </SProductContainer>
  );
};

const ProductSkeleton = () => (
  <Space
    direction="vertical"
    style={{
      border: '1px solid #D2D2D2',
      minHeight: '330px',
      marginTop: '10px',
      borderRadius: '5px',
    }}
  >
    <Skeleton.Avatar
      shape="square"
      active
      style={{ width: 250, height: 200 }}
    />
    <Skeleton.Input style={{ width: 200 }} active size="small" />
    <Skeleton.Input style={{ width: 150 }} active size="small" />
    <Skeleton.Input style={{ width: 100 }} active size="small" />
  </Space>
);

const SProductContainer = styled.div`
  /* display: flex; */
  /* flex-flow: row nowrap; */
  /* justify-content: center; */
  background-color: ${({ theme }) => theme.color.background};

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

export default ProductContainer;
