import React from "react";
import { Upload, message, Button } from "antd";
import { saveProduct, saveImage } from "../services/productService";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text"
  }
};

const product = {
  name: "Balance",
  detail: "FLAFJLAKJLKFJ",
  brand: {
    name: "nike"
  },
  category: {
    name: "shoes"
  },
  isPublished: true,
  price: 60
};

const formData = new FormData();
formData.append("data", JSON.stringify(product));

const FileUpload = () => {
  const handleChooseImage = info => {
    if (info.file.status !== "uploading") {
      // console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      formData.append("myImage", info.file.originFileObj);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleUpload = async () => {
    const response = await saveProduct(formData);
    console.log(response.data);
  };

  return (
    <>
      <Upload {...props} onChange={handleChooseImage}>
        <Button>Click</Button>
      </Upload>
      <Button onClick={handleUpload}>Upload</Button>
    </>
  );
};

export default FileUpload;
