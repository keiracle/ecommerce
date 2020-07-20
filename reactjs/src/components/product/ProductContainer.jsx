import React, { useContext, useState, useEffect, useRef } from "react";
import ProductList from "./ProductList";
import styled from "styled-components";
import ToolBar from "./ToolBar";
import { ProductsContext } from "../../context/productsProvider";
import { paginate } from "../../services/utilities";
import SpecialCarousel from "../SpecialCarousel";
import _ from "lodash";
// import Loading from "../commons/Loading";
import SkeletonLine from "../commons/SkeletonLine";
import { Row, Col } from "antd";

export default function ProductContainer(props) {
  const { products } = useContext(ProductsContext);

  const [searchQuery, setSearchQuery] = useState("");

  const [pagination, setPagination] = useState({
    pageSize: 8,
    currentPage: 1
  });

  const [sortType, setSortType] = useState({
    path: "hotDealPrice",
    order: "asc"
  });

  useEffect(() => {}, []);

  // Handle actions
  const handleSearch = searchQuery => {
    setSearchQuery(searchQuery);
  };

  //get data after filter query and pagination
  const getPageData = () => {
    let filtered = [...products];
    if (searchQuery) {
      filtered = products.filter(p =>
        p.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    const sorted = _.orderBy(filtered, [sortType.path], [sortType.order]);

    const paginateProducts = paginate(
      sorted,
      pagination.currentPage,
      pagination.pageSize
    );

    return { totalCount: filtered.length, data: paginateProducts };
  };

  const handlePageChange = (page, pageSize) => {
    setPagination({ ...pagination, currentPage: page });
  };

  const handlePageSizeChange = value => {
    setPagination({ ...paginate, pageSize: value });
  };

  const handleSort = () => {
    setSortType(prev => {
      if (prev.order === "asc") return { ...prev, order: "desc" };
      return { ...prev, order: "asc" };
    });
  };

  const { totalCount, data } = getPageData();

  const Loading = props => (
    <div style={{ padding: "20px" }}>
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

  let arrLoading = [];
  const colResponsive = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 8 },
    xl: { span: 6 }
  };
  for (let i = 0; i < pagination.pageSize; i++) {
    arrLoading.push(
      <Col key={i} {...colResponsive}>
        <Loading />
      </Col>
    );
  }

  // I dont know how to
  // recognize data is fetching or emty data

  return (
    <>
      <SProductContainer>
        <ToolBar
          value={searchQuery.searchQuery}
          pageSize={pagination.pageSize}
          sortType={sortType}
          onSearch={handleSearch}
          onPageSizeChange={handlePageSizeChange}
          onSort={handleSort}
        />
        {products.length === 0 ? (
          <Row>{arrLoading}</Row>
        ) : (
          <ProductList
            products={data}
            pageSize={pagination.pageSize}
            currentPage={pagination.currentPage}
            totalCount={totalCount}
            onPageChange={handlePageChange}
          />
        )}
      </SProductContainer>
      <SpecialCarousel label="or you may like" />
    </>
  );
}

const SProductContainer = styled.div`
  /* display: flex; */
  /* flex-flow: row nowrap; */
  /* justify-content: center; */
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
