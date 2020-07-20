import React, { useState, useEffect, useContext } from "react";
import _ from "lodash";
import { getProduct, saveProduct } from "../../../services/productService";
import CustomForm from "./CustomForm";
import { notification } from "antd";
import { ProductsContext } from "../../../context/productsProvider";

const initialValues = {
  name: "",
  detail: "",
  // price: 0,
  // brand: "",
  // category: "",
  // image: "",
  // isPublished: "",
  // salePrice: "",
  // hotDealExpired: "",
  // hotDealPrice: "",
  // quantityForDeal: "",
  // quantityInStock: ""
};

const EditForm = (props) => {
  const { _id: productId, cbOnSubmit } = props;

  const { onEditProduct } = useContext(ProductsContext);

  const [data, setData] = useState({});

  useEffect(() => {
    const getProductFromServer = async () => {
      const response = await getProduct(productId);
      setData({
        ...response.data,
        brand: response.data.brand.name,
        category: response.data.category.name,
      });

      console.log({
        ...response.data,
        brand: response.data.brand.name,
        category: response.data.category.name,
      });

      const { name, detail } = response.data;

      initialValues.name = name;
      initialValues.detail = detail;
    };

    getProductFromServer();
  }, [productId]);

  //  data:{
  //   myImage: {},
  //   product: {}
  //  }
  const handleSubmit = async (data, values, { resetForm }) => {
    // Add _id for PUT api
    let { product } = data;
    product._id = productId;

    const response = await onEditProduct(data);
    if (response && response.status === 200) {
      notification.success({
        message: "Edit product success!",
        description: `Check products for more details`,
      });
    }
    cbOnSubmit();
    //   triggerFullReset();
    resetForm({});
  };

  return _.isEmpty(data) ? (
    <div>Loading...</div>
  ) : (
    <CustomForm
      initialValues={initialValues}
      data={data}
      onSubmit={handleSubmit}
    />
  );
};

export default EditForm;
