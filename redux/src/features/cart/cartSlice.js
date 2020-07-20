import { createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';
import {
  getCart,
  removeAllItemInCart,
  addToCart,
  removeItemInCart,
} from '../../services/cartService';
import { orderProducts } from '../../services/orderService';
import { isHotDeal, isSale } from '../../services/utilities';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    values: [],
    totalPrice: 0,
    isLoading: false,
    createdAt: 0,
  },
  reducers: {
    fetchCartRequest: state => {
      state.isLoading = true;
    },
    fetchCartSuccess: (state, action) => {
      state.values = action.payload.cart;

      let tempTotalPrice = 0;
      action.payload.cart.forEach(item => {
        const { quantity, product } = item;

        const { salePrice, price, hotDealPrice, hotDealExpired } = product;

        if (isHotDeal(hotDealExpired)) {
          tempTotalPrice += quantity * salePrice;
        } else if (isSale(salePrice)) {
          tempTotalPrice += quantity * hotDealPrice;
        } else {
          tempTotalPrice += quantity * price;
        }
      });

      state.totalPrice = tempTotalPrice;
      state.isLoading = false;
      state.createdAt = Date.now();
    },
    fetchCartFail: state => {
      state.isLoading = false;
    },

    addItemToCartRequest: state => {
      state.isLoading = true;
    },
    addItemToCartSuccess: (state, action) => {
      state.values = action.payload.cart;

      let tempTotalPrice = 0;
      action.payload.cart.forEach(item => {
        const { quantity, product } = item;

        const { salePrice, price, hotDealPrice, hotDealExpired } = product;

        if (isHotDeal(hotDealExpired)) {
          tempTotalPrice += quantity * salePrice;
        } else if (isSale(salePrice)) {
          tempTotalPrice += quantity * hotDealPrice;
        } else {
          tempTotalPrice += quantity * price;
        }
      });

      state.totalPrice = tempTotalPrice;
      state.isLoading = false;
      state.createdAt = Date.now();
    },
    addItemToCartFail: state => {
      state.isLoading = false;
    },

    // Remove single item
    removeItemFromCartRequest: state => {
      state.isLoading = true;
    },
    removeItemFromCartSuccess: (state, action) => {
      state.values = state.values.filter(i => {
        const { _id } = i.product;
        return _id !== action.payload;
      });

      let tempTotalPrice = 0;
      state.values.forEach(item => {
        const { quantity, product } = item;

        const { salePrice, price, hotDealPrice, hotDealExpired } = product;

        if (isHotDeal(hotDealExpired)) {
          tempTotalPrice += quantity * salePrice;
        } else if (isSale(salePrice)) {
          tempTotalPrice += quantity * hotDealPrice;
        } else {
          tempTotalPrice += quantity * price;
        }
      });

      state.totalPrice = tempTotalPrice;
      state.isLoading = false;
    },
    removeItemFromCartFail: (state, action) => {
      state.isLoading = false;
    },

    // Remove all cart
    removeCartRequest: state => {
      state.isLoading = true;
    },
    removeCartSuccess: state => {
      state.values = [];
      state.totalPrice = 0;
      state.isLoading = false;
    },
    removeCartFail: state => {
      state.isLoading = false;
    },

    orderRequest: state => {
      state.isLoading = true;
    },
    orderSuccess: state => {
      state.isLoading = false;
    },
    orderFail: state => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchCartRequest,
  fetchCartSuccess,
  fetchCartFail,
  addItemToCartRequest,
  addItemToCartSuccess,
  addItemToCartFail,
  removeItemFromCartRequest,
  removeItemFromCartSuccess,
  removeItemFromCartFail,
  removeCartRequest,
  removeCartSuccess,
  removeCartFail,
  orderRequest,
  orderSuccess,
  orderFail,
} = cartSlice.actions;

export const fetchCart = () => async (dispatch, getState) => {
  // Check if value is not stale
  const isStale = !!(
    getState().cart.createdAt === 0 ||
    getState().cart.createdAt < Date.now() - 300000
  );
  if (!isStale) return;

  try {
    dispatch(fetchCartRequest());
    const response = await getCart();
    dispatch(
      fetchCartSuccess({
        cart: response.data,
      })
    );
  } catch (error) {
    dispatch(fetchCartFail());
    notification.error({
      message: 'Cannot fetch cart',
      description: error.response.data,
    });
  }
};

export const addItemToCart = (productId, quantity) => async (
  dispatch,
  getState
) => {
  // Calculate suitable quantity
  const cart = getState().cart.values;
  cart.forEach(i => {
    const { quantity: quantityInCart, product } = i;
    if (product._id === productId) {
      quantity += quantityInCart;
    }
  });

  try {
    dispatch(addItemToCartRequest());
    const response = await addToCart(productId, quantity);
    dispatch(addItemToCartSuccess({ cart: response.data }));

    if (response && response.status === 200) {
      notification.success({
        message: 'Item is added',
        description: `${quantity} kind of this item in cart`,
      });
    }
  } catch (error) {
    dispatch(addItemToCartFail());
    notification.error({
      message: 'Cannot add item to cart',
      description: error.response.data,
    });
  }
};

export const removeItemFromCart = productId => async (dispatch, getState) => {
  try {
    dispatch(removeItemFromCartRequest());
    await removeItemInCart(productId);
    dispatch(removeItemFromCartSuccess(productId));
  } catch (error) {
    dispatch(removeItemFromCartFail());
    notification.error({
      message: 'Cannot remove item',
      description: error.response.data,
    });
  }
};

export const removeCart = () => async (dispatch, getState) => {
  try {
    dispatch(removeCartRequest());
    await removeAllItemInCart();
    dispatch(removeCartSuccess());
  } catch (error) {
    dispatch(removeCartFail());
    notification.error({
      message: 'Cannot remove cart',
      description: error.response.data,
    });
  }
};

export const order = () => async (dispatch, getState) => {
  const cart = getState().cart.values;

  let orderDetails = cart.map(item => {
    return {
      productId: item.product._id,
      quantity: parseInt(item.quantity),
    };
  });

  try {
    dispatch(orderRequest());
    const response = await orderProducts(orderDetails);
    dispatch(orderSuccess());

    if (response && response.status === 200) {
      notification.success({
        message: 'Order successfully',
      });
    }
  } catch (error) {
    dispatch(orderFail());
    notification.error({
      message: 'Cannot place order',
      description: error?.response?.data,
    });
  }
};

export default cartSlice.reducer;
