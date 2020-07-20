import http from './httpService';

const apiEndpoint = '/cart';

export const getCart = async () => {
  const response = await http.get(apiEndpoint);
  return response;
};

export const addToCart = async (productId, quantity = 1) => {
  const response = await http.put(`${apiEndpoint}`, {
    product: productId,
    quantity,
  });

  return response;
};

export const removeItemInCart = async cartItemId => {
  const response = await http.delete(`${apiEndpoint}/${cartItemId}`);
  return response;
};

export const removeAllItemInCart = async cartItemId => {
  const response = await http.delete(`${apiEndpoint}`);
  return response;
};
