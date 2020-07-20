import React, { useContext, useState, useEffect } from "react";
import { WishListContext } from "../../context/wishListProvider";
import Product from "../product/Product";
import { Row, Col, Pagination } from "antd";
import { paginate } from "../../services/utilities";
import styled from "styled-components";
import Search from "antd/lib/input/Search";

const rowGutter = { xs: 8, sm: 16, md: 24, lg: 32 };

const colResponsive = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 8 },
  lg: { span: 6 },
  xl: { span: 4 }
};

const WishList = props => {
  const { wishList } = useContext(WishListContext);

  const [pagination, setPagination] = useState({
    pageSize: 10,
    currentPage: 1
  });

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // In case delete item -> auto go to previous page
    const alterTotalPage = Math.ceil(wishList.length / pagination.pageSize);

    setPagination(prev => {
      if (prev.currentPage - 1 === alterTotalPage && prev.currentPage - 1 > 0) {
        return { ...prev, currentPage: prev.currentPage - 1 };
      }
      return prev;
    });
  }, [pagination.pageSize, wishList.length]);

  //get data after filter query and pagination
  const getPageData = () => {
    let filtered = [...wishList];
    // Query
    if (searchQuery) {
      filtered = wishList.filter(p =>
        p.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    // Pagination
    const paginateProducts = paginate(
      filtered,
      pagination.currentPage,
      pagination.pageSize
    );

    return {
      totalCount: filtered.length,
      data: paginateProducts
    };
  };

  const { totalCount, data } = getPageData();

  const handleSearch = value => {
    setSearchQuery(value);
  };

  const handlePageChange = (page, pageSize) => {
    setPagination(prev => ({ ...prev, currentPage: page }));
  };

  // if (data)
  // return data.length > 0 ? (
  return (
    <SWishList>
      <Row>
        <Search
          placeholder="Input search text"
          onSearch={handleSearch}
          style={{ width: 300, margin: "10px 0" }}
        />
      </Row>
      {data && data.length > 0 ? (
        <>
          <Row>
            <span
              style={{ fontSize: "1rem", fontWeight: "bold" }}
            >{`Total ${totalCount} items`}</span>
          </Row>
          <Row type="flex" style={{ minHeight: "90vh" }}>
            {data.map((i, _) => {
              return (
                <Col {...colResponsive} key={i._id}>
                  <Product product={i} carousel />
                </Col>
              );
            })}
          </Row>
          <Row style={{ marginTop: "30px" }} justify="center" type="flex">
            <Pagination
              defaultCurrent={1}
              current={pagination.currentPage}
              total={totalCount}
              pageSize={pagination.pageSize}
              onChange={handlePageChange}
            />
          </Row>
        </>
      ) : (
        <div>empty</div>
      )}
    </SWishList>
  );
};

const SWishList = styled.div``;

export default WishList;
