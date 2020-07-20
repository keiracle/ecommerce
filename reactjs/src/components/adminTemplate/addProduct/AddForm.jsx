import React from "react";
import { notification } from "antd";
import { saveProduct } from "../../../services/productService";
import CustomForm from "./CustomForm";

const initialValues = {
  name: "",
  detail: "",
  // price: 0
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

const AddForm = ({ cbOnSumbit }) => {
  // data:{
  //  myImage: {},
  //  product: {}
  // }
  const handleSubmit = async (data, values, { resetForm }) => {
    try {
      const response = await saveProduct(data);
      if (response && response.status === 200) {
        notification.success({
          message: "Create product success!",
          description: `Check products for more details`,
        });
      }
      //   triggerFullReset();
      resetForm({});
    } catch (error) {
      if (error.response && error.response.status === 404)
        notification.error({
          message: "Something wrong happened",
          description: error.response.data,
        });
    }

    cbOnSumbit();
  };

  return (
    <CustomForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      submitLabel="Create product"
    />
  );
};

export default AddForm;
