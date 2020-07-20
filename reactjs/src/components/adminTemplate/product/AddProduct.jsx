import React, { useState } from "react";
import Button from "../../commons/Button";
import { Modal } from "antd";
import AddForm from "../addProduct/AddForm";

const AddProduct = () => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const handleCancel = () => {
    setIsAddModalVisible(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        style={{ margin: "10px 0" }}
        onClick={() => setIsAddModalVisible(true)}
      >
        Add product
      </Button>
      <Modal
        title="Edit product"
        visible={isAddModalVisible}
        onCancel={handleCancel}
        okText="Done"
        centered
        closable
        width={720}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <AddForm cbOnSumbit={handleCancel} />
      </Modal>
    </>
  );
};

export default AddProduct;
