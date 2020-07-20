import React, { useState, useContext, useEffect } from "react";
import {
  getProducts,
  deleteProduct,
  saveProduct,
} from "../services/productService";
import _ from "lodash";
import { notification } from "antd";

const ProductsContext = React.createContext();

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProductsFromServer() {
      let { data } = await getProducts();
      console.log("Fetch products from server");
      setProducts(data);
    }

    getProductsFromServer();
  }, []);

  //i dont know what kind of copy is this?
  const findProductById = (id) => {
    const product = products.find((product) => product._id === id);
    return product;
  };

  const handleEditProduct = async (data) => {
    let tempProducts = [...products];
    try {
      const response = await saveProduct(data);

      const { _id } = response.data;

      // It return edited product
      // Find it and change directly for UX
      tempProducts = tempProducts.filter((product) => product._id !== _id);
      tempProducts.push({ ...response.data });
      setProducts(tempProducts);
    } catch (error) {
      if (error.response && error.response.status === 404)
        notification.error({
          message: "Something wrong happened",
          description: error.response.data,
        });
    }
  };

  const handleDeleteProduct = async (id) => {
    const tempProducts = [...products];
    setProducts(tempProducts.filter((product) => product._id !== id));

    try {
      const response = await deleteProduct(id);
      return response;
    } catch (error) {
      notification.error({
        message: `Delete product fail`,
        description: `${error.response.data}`,
      });
      setProducts(tempProducts);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        findProductById: findProductById,
        onDeleteProduct: handleDeleteProduct,
        onEditProduct: handleEditProduct,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

const Consumer = ProductsContext.Consumer;

export { ProductsProvider, Consumer, ProductsContext };
