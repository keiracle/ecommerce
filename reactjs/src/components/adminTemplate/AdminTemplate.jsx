import React from "react";
import styled from "styled-components";
import AddForm from "./addProduct/AddForm";
import ProductContainer from "./product/ProductContainer";
import AddProduct from "./product/AddProduct";

const AdminTemplate = () => {
  return (
    <SAdminTemplate>
      <AddProduct />
      <ProductContainer />
    </SAdminTemplate>
  );
};

const SAdminTemplate = styled.div`
  width: 100%;
  /* min-height: 100vh; */
`;

export default AdminTemplate;
