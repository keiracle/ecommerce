import React from "react";
import Button from "../commons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "../../context/cartProvider";
import { getCurrentUser } from "../../services/authService";
import { notification } from "antd";

const ButtonAddToCart = ({ id }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <FontAwesomeIcon
      icon="cart-plus"
      onClick={() => {
        if (!getCurrentUser()) {
          notification.info({ message: "You need login to use cart" });
          return;
        }
        addToCart(id, 1);
      }}
    />
  );
};

export default ButtonAddToCart;
