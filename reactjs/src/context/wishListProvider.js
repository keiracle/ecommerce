import React, { useState, useEffect } from "react";
import { markWishItem, getWishList } from "../services/wishListService";
import { notification, Icon } from "antd";

const WishListContext = React.createContext();

const WishListProvider = props => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const getWishListFromServer = async () => {
      const { data } = await getWishList();
      setWishList(data);
    };

    getWishListFromServer();
  }, []);

  // Pessimistic unmark & mark
  const handleMarkWishItem = async productId => {
    let response = null;
    try {
      response = await markWishItem(productId);
      setWishList(response.data);
      return response;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        openNotification("error", "Action dont apply", error.response.data);
      }
      return response;
    }
  };

  const openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
      icon: <Icon style={{ color: "#108ee9" }} type="smile" />
    });
  };

  return (
    <WishListContext.Provider
      value={{ wishList, setWishList, markWishItem: handleMarkWishItem }}
    >
      {props.children}
    </WishListContext.Provider>
  );
};

export { WishListProvider, WishListContext };
