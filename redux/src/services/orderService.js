import http from './httpService';

const apiEndpoint = '/orders';

export const getAllOrders = async () => {};

export const orderProducts = async orderDetails => {
  const response = await http.post(`${apiEndpoint}`, {
    orderDetails,
  });

  return response;
};
