import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import _ from "lodash";
import { ProductsContext } from "../../../context/productsProvider";
import { paginate } from "../../../services/utilities";
import { Table, Tag } from "antd";
import ProductImage from "../../product/ProductImage";
import ActionFunctional from "./ActionFunctional";

const { Column } = Table;

export default function ProductContainer(props) {
  const { products } = useContext(ProductsContext);

  const [searchQuery, setSearchQuery] = useState("");

  const [pagination, setPagination] = useState({
    pageSize: 8,
    currentPage: 1,
  });

  const [sortType, setSortType] = useState({
    path: "hotDealPrice",
    order: "asc",
  });

  useEffect(() => {}, []);

  // Handle actions
  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  //get data after filter query and pagination
  const getPageData = () => {
    let filtered = [...products];
    if (searchQuery) {
      filtered = products.filter((p) =>
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

  const handlePageSizeChange = (value) => {
    setPagination({ ...paginate, pageSize: value });
  };

  const handleSort = () => {
    setSortType((prev) => {
      if (prev.order === "asc") return { ...prev, order: "desc" };
      return { ...prev, order: "asc" };
    });
  };

  // const { totalCount, data } = getPageData();

  return (
    <SProductContainer>
      {/* <ProductList products={products} /> */}
      <Table dataSource={products} rowKey="_id">
        <Column
          title="Image"
          dataIndex=""
          // key="image"
          render={(product) => (
            <ProductImage
              style={{ width: "50px", height: "50px" }}
              _id={product._id}
              image={product.image}
            />
          )}
        />
        <Column
          title="Name"
          dataIndex="name"
          key="name"
          defaultSortOrder="descend"
          sorter={(a, b) => a.name.length - b.name.length}
        />
        <Column
          title="Action"
          dataIndex="_id"
          render={(_id) => {
            return <ActionFunctional _id={_id} />;
          }}
        />
      </Table>
    </SProductContainer>
  );
}

const SProductContainer = styled.div`
  /* display: flex; */
  /* flex-flow: row nowrap; */
  /* justify-content: center; */
  background-color: ${({ theme }) => theme.color.primaryLight};

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
