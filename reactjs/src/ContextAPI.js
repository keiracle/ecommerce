import React, { useState, useEffect } from "react";
import { getProducts } from "./services/productService";

const Context = React.createContext();

const Provider = props => {
  const [state, setState] = useState({
    products: [],
    cart: [],
    bucketBrands: [
      { name: "Nike", isLike: false },
      { name: "Balanciaga", isLike: false },
      { name: "Gucci", isLike: true },
      { name: "Converse", isLike: true },
      { name: "Adiddas", isLike: true }
    ],
    isAddedToCart: false
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const setProducts = async () => {
    let { data } = await getProducts();
    let products = data;
    console.log("Fetch products from server");
    console.log(products);
    //for now just fake image
    products.map(p => {
      p.inCart = false;
      // p.image = "images/product-1.png";
      return p;
    });
    setState({ ...state, products });
  };

  useEffect(() => {
    setProducts();
  }, []);

  useEffect(() => {
    addTotalPrice();
  }, [state.cart]);

  const setBucketBrands = bucketBrands => {
    setState({ ...state, bucketBrands });
  };

  //i dont know what kind of copy is this?
  const findProductById = id => {
    const product = state.products.find(product => product._id === id);
    return product;
  };

  //when add product to cart, add extra properties (quantity,total)
  const handleAddToCart = id => {
    let cart = [...state.cart];
    let product = cart.find(i => i._id === id);

    if (product) {
      product.quantity += 1;
      product.total = product.price * product.quantity;
      setState({
        ...state,
        cart,
        isAddedToCart: true
      });
    } else {
      product = { ...findProductById(id) };
      product.quantity = 1;
      product.total = product.price * product.quantity;
      cart = [...cart, product];
      setState({
        ...state,
        cart,
        isAddedToCart: true
      });
    }
    return;
  };

  //close pop-up added item to cart
  const closeAddedItemToCartNoti = () => {
    setState({ ...state, isAddedToCart: false });
  };

  const handleIncrementQuantity = id => {
    let cart = [...state.cart];
    let product = cart.find(i => i.id === id);

    product.quantity++;
    product.total = product.price * product.quantity;

    setState({ ...state, cart });
  };

  const handleDecrementQuantity = id => {
    let cart = [...state.cart];
    let product = cart.find(i => i.id === id);

    product.quantity--;
    if (product.quantity === 0) {
      handleRemoveCartItem(id);
      return;
    }
    product.total = product.price * product.quantity;

    setState({ ...state, cart });
  };

  const handleRemoveCartItem = id => {
    let cart = [...state.cart];

    cart = cart.filter(i => i.id !== id);
    setState({ ...state, cart });
  };

  //Update total price
  const addTotalPrice = () => {
    const cart = [...state.cart];
    let total = 0;
    cart.map(item => (total += item.total));
    setTotalPrice({ totalPrice: total });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        ...totalPrice,
        handleBucketBrands: setBucketBrands,
        addToCart: handleAddToCart,
        closeAddedItemToCartNoti: closeAddedItemToCartNoti,
        incrementQuantity: handleIncrementQuantity,
        decrementQuantity: handleDecrementQuantity,
        removeCartItem: handleRemoveCartItem,
        findProductById: findProductById
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;

export { Provider, Consumer, Context };
