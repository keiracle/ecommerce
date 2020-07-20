import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../../services/productService';
import { notification } from 'antd';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    values: [],
    isLoading: false,
    createdAt: 0,
  },
  reducers: {
    fetchProductsRequest: state => {
      state.isLoading = true;
    },
    fetchProductsSuccess: (state, action) => {
      state.values = action.payload.products;
      state.isLoading = false;
      state.createdAt = Date.now();
    },
    fetchProductsFail: state => {
      state.isLoading = false;
    },
    addProductRequest: () => {},
    addProductSuccess: () => {},
    addProductFail: () => {},
  },
});

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFail,
} = productsSlice.actions;

export const fetchProducts = () => async (dispatch, getState) => {
  // Check if value is not stale
  const isStale = !!(
    getState().products.createdAt === 0 ||
    getState().products.createdAt < Date.now() - 300000
  );
  if (!isStale) return;

  try {
    dispatch(fetchProductsRequest());
    const response = await getProducts();
    dispatch(fetchProductsSuccess({ products: response.data }));
  } catch (error) {
    dispatch(fetchProductsFail());
    notification.error({
      message: 'Cannot fetch products',
      description: error.response.data,
    });
  }
};

export default productsSlice.reducer;
