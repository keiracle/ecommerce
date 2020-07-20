import React, { useContext } from "react";
import Button from "../commons/Button";
import { CartContext } from "../../context/cartProvider";
import { getCurrentUser } from "../../services/authService";
import { notification } from "antd";

const AddToCart = React.memo((props) => {
  const { product, quantity = 1 } = props;

  const {
    _id,
    isPublished,
    quantityInStock,
    quantityForDeal,
    quantityDealSold,
  } = product;

  const { cart, addToCart, isSale, isHotDeal } = useContext(CartContext);

  const handleAddToCart = async () => {
    // If not login
    if (!getCurrentUser()) {
      notification.info({ message: "You need login to use cart" });
      return;
    }

    let tempQuantity = quantity;
    cart.forEach((item) => {
      const { quantity: quantityInCart, product } = item;
      if (product._id === _id) {
        tempQuantity += quantityInCart;
      }
    });

    const response = await addToCart(_id, tempQuantity);
    if (response && response.status === 200) {
      notification.success({
        message: "Item is added",
        description: `${tempQuantity} kind of this item in cart`,
      });
    }
  };

  const isOutOfStock = !!quantityInStock === 0;

  // In hot deal time but sell out
  const isSellOut =
    isHotDeal && quantityDealSold === quantityForDeal ? true : false;

  let isDisabled = !isPublished;

  isDisabled = isPublished && !isOutOfStock && !isSellOut ? false : true;

  return (
    <Button
      variant="text"
      color="secondary"
      disabled={isDisabled}
      onClick={handleAddToCart}
    >
      {isPublished ? "Add To Cart" : "Comming Soon"}
    </Button>
  );
});

export default AddToCart;
