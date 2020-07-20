import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { Formik, Form } from "formik";
import * as Antd from "antd";
import moment from "moment";
import MyField from "./MyField";
import PrimaryFields from "./PrimaryFields";
import SpecificFields from "./SpecificFields";
import AdditionalFields from "./AdditionalFields";
import Button from "../../commons/Button";

const { Input, Upload, message } = Antd;

const validationSchema = yup.object().shape({
  name: yup.string().min(3, "Name length at least 3 characters").required(),
  detail: yup.string().min(5, "Detail length at least 5 characters").required(),
  // image: yup.object(),
  // brand: yup.object().required(),
  // category: yup.object().required()
  // isPublished: yup.bool().required(),
  // price: yup
  //   .number()
  //   .min(0, "Min price is 0")
  //   .max(2000, "Max price is 2000")
  //   .required(),
  // salePrice: yup
  //   .number()
  //   .min(0, "Min price is 0")
  //   .max(2000, "Max price is 2000"),
  // hotDealExpired: yup.object(),
  // hotDealPrice: yup
  //   .number()
  //   .min(0, "Min price is 0")
  //   .max(2000, "Max price is 2000"),
  // quantityForDeal: yup.number().min(0, "Quantity for deal can't be negative"),
  // quantityInStock: yup.number().min(0, "Quantity in stock can't be negative")
});

const CustomForm = (props) => {
  const { initialValues, submitLabel = "Submit", onSubmit } = props;

  // Default props
  const {
    data = {
      isPublished: false,
      quantityInStock: 0,
      price: 0,
      salePrice: 0,
      brand: "",
      category: "",
      isHotDeal: false,
      hotDealPrice: 0,
      quantityForDeal: 0,
      hotDealExpired: {
        startDate: moment().format(),
        endDate: moment().format(),
      },
    },
  } = props;

  const [isPublished, setIsPublished] = useState(data.isPublished);

  const [quantityInStock, setQuantityInStock] = useState(data.quantityInStock);

  const [price, setPrice] = useState(data.price);

  const [salePrice, setSalePrice] = useState(data.salePrice);

  const [brand, setBrand] = useState(data.brand);

  const [category, setCategory] = useState(data.category);

  const [isHotDeal, setIsHotDeal] = useState(
    moment().format() >= data.hotDealExpired.startDate &&
      moment().format() < data.hotDealExpired.endDate
  );

  const [hotDealPrice, setHotDealPrice] = useState(data.hotDealPrice);

  const [quantityForDeal, setQuantityForDeal] = useState(data.quantityForDeal);

  const [hotDealExpired, setHotDealExpired] = useState({
    startDate: data.hotDealExpired.startDate,
    endDate: data.hotDealExpired.endDate,
  });

  const [file, setFile] = useState({
    selectedFile: null,
    selectedFileList: [],
  });

  const handlePublished = () => {
    setIsPublished((prev) => !prev);
  };

  const handleQuantityInStock = (value) => {
    setQuantityInStock(value);
  };

  const handlePrice = (value) => {
    setPrice(value);
  };

  const handleSalePrice = (value) => {
    if (value > price) {
      console.log("wrong");
    } else {
      setSalePrice(value);
    }
  };

  const handleBrandChange = (value) => {
    setBrand(value);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handleHotDeal = () => {
    setIsHotDeal((prev) => !prev);
  };

  const handleDealPrice = (value) => {
    if (value > price) console.log("wrong");
    else setHotDealPrice(value);
  };

  const handleQuantityForDeal = (value) => {
    if (value > quantityInStock) console.log("wrong");
    else setQuantityForDeal(value);
  };

  const handleDateExpired = (value, dateString) => {
    const [startDate, endDate] = value;
    setHotDealExpired({
      startDate: startDate.format(),
      endDate: endDate.format(),
    });
  };

  const handleOk = (value) => {
    const [startDate, endDate] = value;
    setHotDealExpired({
      startDate: startDate.format(),
      endDate: endDate.format(),
    });
  };

  const customRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const handleUpload = (info) => {
    const { file } = info;

    const { originFileObj } = file;

    let fileList = [...info.fileList];
    fileList = fileList.slice(-1);

    if (file.status !== "uploading") {
      // console.log(info.file, info.fileList);
    }
    if (file.status === "done") {
      message.success(`${file.name} file uploaded successfully`);
      // formData.append("myImage", info.file.originFileObj);
    } else if (file.status === "error") {
      message.error(`${file.name} file upload failed.`);
    }

    setFile({
      selectedFile: originFileObj,
      selectedFileList: [...fileList],
    });
  };

  const handleCustomReset = (values, FormikBag) => {
    triggerFullReset();
  };

  const triggerFullReset = () => {
    setIsHotDeal(false);
    setIsPublished(false);
    setPrice(0);
    setSalePrice(0);
    setHotDealPrice(0);
    setQuantityInStock(0);
    setQuantityForDeal(0);
    setHotDealExpired({
      startDate: moment().format(),
      endDate: moment().format(),
    });
    setFile({ selectedFile: null, selectedFileList: [] });
  };

  const handleSubmit = (values, { resetForm }) => {
    const product = {
      ...values,
      price,
      brand: { name: brand },
      category: { name: category },
      isPublished,
      salePrice,
      hotDealExpired,
      hotDealPrice,
      quantityForDeal,
      quantityInStock,
    };

    const data = { myImage: file.selectedFile, product };

    onSubmit(data, values, { resetForm });
    triggerFullReset();
  };

  return (
    <SCustomForm>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        onReset={handleCustomReset}
        enableReinitialize
      >
        {({ values, errors, touched, handleChange, ...rest }) => (
          <Form>
            <MyField
              as={Input}
              name="name"
              type="text"
              placeholder="Enter product name"
              size="large"
              onChange={handleChange}
              value={values.name}
              validateStatus={errors.name && touched.name ? "error" : ""}
            />
            <MyField
              as={Input.TextArea}
              name="detail"
              type="text"
              placeholder="Enter product detail"
              size="large"
              onChange={handleChange}
              value={values.detail}
              validateStatus={errors.detail && touched.detail ? "error" : ""}
            />
            <PrimaryFields
              isPublished={isPublished}
              price={price}
              salePrice={salePrice}
              quantityInStock={quantityInStock}
              handlePrice={handlePrice}
              handlePublished={handlePublished}
              handleSalePrice={handleSalePrice}
              handleQuantityInStock={handleQuantityInStock}
            />
            <SpecificFields
              selectedBrand={brand}
              setSelectedBrand={setBrand}
              selectedCategory={category}
              setSelectedCategory={setCategory}
              handleBrandChange={handleBrandChange}
              handleCategoryChange={handleCategoryChange}
            />
            <AdditionalFields
              isHotDeal={isHotDeal}
              hotDealPrice={hotDealPrice}
              isPublished={isPublished}
              quantityForDeal={quantityForDeal}
              hotDealExpired={hotDealExpired}
              handleHotDeal={handleHotDeal}
              handleDealPrice={handleDealPrice}
              handleQuantityForDeal={handleQuantityForDeal}
              handleDateExpired={handleDateExpired}
              handleOk={handleOk}
            />
            <SUpload>
              <Upload
                fileList={file.selectedFileList}
                customRequest={customRequest}
                onChange={handleUpload}
              >
                <Button
                  type="button"
                  variant="contained"
                  color="default"
                  size="small"
                >
                  Upload Image
                </Button>
              </Upload>
            </SUpload>
            <SConfirm>
              <Button type="submit" variant="contained" color="primary">
                {submitLabel}
              </Button>
              <Button type="reset" variant="contained" color="secondary">
                Reset
              </Button>
            </SConfirm>
          </Form>
        )}
      </Formik>
    </SCustomForm>
  );
};

const SCustomForm = styled.div`
  padding: 20px;
  margin: auto;
  width: 600px;
  min-height: 500px;
  background: ${({ theme }) => theme.color.primaryLight};

  /* -webkit-box-shadow: 0px 0px 5px 0px rgba(200, 200, 200, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(200, 200, 200, 1);
  box-shadow: 0px 0px 5px 0px rgba(200, 200, 200, 1); */

  form {
    & > div {
      /* border-bottom: 1px solid rgb(195, 195, 195); */
    }
  }
`;

const SConfirm = styled.div`
  & > button {
    margin-right: 20px;
  }
`;

const SUpload = styled.div`
  margin: 20px 0;
`;

export default CustomForm;
