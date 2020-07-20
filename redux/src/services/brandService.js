import http from './httpService';

const apiEndpoint = '/brands';

export const getBrands = async () => {
  const response = await http.get(apiEndpoint);
  return response;
};
