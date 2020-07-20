import http from './httpService';

const apiEndpoint = '/wishList';

export const getWishList = async () => {
  const response = await http.get(apiEndpoint);
  return response;
};

export const markWishItem = async productId => {
  const response = await http.put(`${apiEndpoint}/${productId}`);
  return response;
};
