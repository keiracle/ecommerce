import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Button from "../../commons/Button";
import { Popconfirm, Modal, notification } from "antd";
import EditForm from "../addProduct/EditForm";
import { ProductsContext } from "../../../context/productsProvider";

const ActionFunctional = ({ _id }) => {
  const { onDeleteProduct } = useContext(ProductsContext);

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  useEffect(() => {}, []);

  const handleDelete = async () => {
    const response = await onDeleteProduct(_id);
    // if (response && response.status === 200)
    //   notification.success({ message: "Product deleted" });
  };

  const handleEdit = () => {
    setIsEditModalVisible(true);
  };

  const handleCancel = () => {
    setIsEditModalVisible(false);
  };

  return (
    <SActionFunctional>
      <Modal
        title="Edit product"
        visible={isEditModalVisible}
        onCancel={handleCancel}
        okText="Done"
        centered
        closable
        width={720}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <EditForm _id={_id} cbOnSubmit={() => setIsEditModalVisible(false)} />
      </Modal>
      <Popconfirm
        placement="top"
        title="Are you sure to delete this product ?"
        onConfirm={handleDelete}
        okText="Yes"
        cancelText="No"
      >
        <Button variant="contained" color="secondary" size="small">
          Delete
        </Button>
      </Popconfirm>
      <Button
        style={{ marginLeft: "10px" }}
        variant="contained"
        color="primary"
        size="small"
        onClick={handleEdit}
      >
        Edit
      </Button>
    </SActionFunctional>
  );
};

const SActionFunctional = styled.div``;

export default ActionFunctional;
