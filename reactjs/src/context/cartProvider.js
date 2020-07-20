import React, { useState, useContext, useEffect, useCallback } from "react";
import { ProductsContext } from "./productsProvider";
import {
  getCart,
  addToCart,
  deleteItemInCart,
  deleteAllItemInCart,
} from "../services/cartService";
import { notification, Icon } from "antd";
import { orderProducts } from "../services/orderService";

const CartContext = React.createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { findProductById } = useContext(ProductsContext);

  useEffect(() => {
    const getCartFromServer = async () => {
      const { data } = await getCart();
      setCart(data);
    };

    getCartFromServer();
  }, []);

  // Check if product is on sale
  const isSale = useCallback((salePrice) => {
    return salePrice === 0 ? false : true;
  }, []);

  useEffect(() => {
    //Update total price
    const addTotalPrice = () => {
      const tempCart = [...cart];
      let total = 0;

      tempCart.forEach((item) => {
        const { quantity, product } = item;

        const { salePrice, price, hotDealPrice, hotDealExpired } = product;

        if (isHotDeal(hotDealExpired)) {
          total += quantity * salePrice;
        } else if (isSale(salePrice)) {
          total += quantity * hotDealPrice;
        } else {
          total += quantity * price;
        }
      });

      setTotalPrice(total);
    };

    addTotalPrice();
  }, [cart, isSale]);

  // Check if product is on hot deal
  function isHotDeal(saleExpired) {
    return Date.now() < new Date(saleExpired.endDate) &&
      Date.now() >= new Date(saleExpired.startDate)
      ? true
      : false;
  }

  const openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
      icon: <Icon style={{ color: "#108ee9" }} type="smile" />,
    });
  };

  //close pop-up added item to cart
  const closeAddedItemToCartNoti = () => {
    setIsAddedToCart(false);
  };

  // Handle cart stuff
  const handleAddToCart = async (productId, quantity) => {
    let response = null;
    try {
      response = await addToCart(productId, quantity);
      setCart(response.data);
      // setIsAddedToCart(true);
    } catch (error) {
      if (error.response && error.response.status === 400)
        openNotification("info", "Limit Product", error.response.data);
    }
    return response;
  };

  // Optimistic remove
  const handleRemoveCartItem = async (cartItemId) => {
    const tempCart = [...cart];
    const newCart = tempCart.filter((item) => item.product._id !== cartItemId);
    setCart(newCart);

    try {
      const response = await deleteItemInCart(cartItemId);
      return response;
    } catch (error) {
      const originalCart = await getCart();
      setCart(originalCart.data);

      if (error.response && error.response.status === 404)
        openNotification(
          "error",
          "Something wrong happened!",
          error.response.data
        );

      setCart(tempCart);
    }
  };

  const handleRemoveAllCart = async () => {
    let response = null;
    try {
      response = await deleteAllItemInCart();
      setCart(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404)
        openNotification(
          "error",
          "Something wrong happened!",
          error.response.data
        );
    }
    return response;
  };

  const handleOrderProducts = async () => {
    let response = null;
    let orderDetails = cart.map((item) => {
      return {
        productId: item.product._id,
        quantity: parseInt(item.quantity),
      };
    });

    try {
      response = await orderProducts(orderDetails);
    } catch (error) {
      if (error.response && error.response.status === 404)
        openNotification("error", "Error", error.response.data);
    }
    return response;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isAddedToCart,
        totalPrice,
        removeCartItem: handleRemoveCartItem,
        removeAllCart: handleRemoveAllCart,
        addToCart: handleAddToCart,
        orderProducts: handleOrderProducts,
        closeAddedItemToCartNoti: closeAddedItemToCartNoti,
        isHotDeal,
        isSale,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

// const handleIncrementQuantity = (id, quantity = 1) => {
//   let tempCart = [...cart];
//   let product = tempCart.find(i => i._id === id);

//   const sale = isSale(product.saleExpired);

//   product.quantity++;
//   product.total =
//     (sale ? product.salePrice : product.price) * product.quantity;

//   setCart([...tempCart]);
// };

// const handleDecrementQuantity = (id, quantity = 1) => {
//   let tempCart = [...cart];
//   let product = tempCart.find(i => i._id === id);

//   const sale = isSale(product.saleExpired);

//   product.quantity--;
//   if (product.quantity === 0) {
//     handleRemoveCartItem(id);
//     return;
//   }
//   product.total =
//     (sale ? product.salePrice : product.price) * product.quantity;

//   setCart([...tempCart]);
// };

//when add product to cart, add extra properties (quantity,total)
// const handleAddToCart = useCallback(
//   (id, quantity = 1) => {
//     let tempCart = [...cart];

//     let product = tempCart.find(i => i._id === id);

//     let sale = false;

//     if (product) {
//       sale = isSale(product.saleExpired);

//       product.quantity += quantity;
//       product.total =
//         (sale ? product.salePrice : product.price) * product.quantity;

//       setCart([...tempCart]);
//       setIsAddedToCart(true);
//     } else {
//       product = { ...findProductById(id) };
//       sale = isSale(product.saleExpired);

//       product.quantity = quantity;
//       product.total =
//         (sale ? product.salePrice : product.price) * product.quantity;

//       tempCart = [...tempCart, product];

//       setCart([...tempCart]);
//       setIsAddedToCart(true);
//     }
//     return;
//   },
//   [cart, findProductById]
// );
