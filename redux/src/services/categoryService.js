import http from './httpService';

const apiEndpoint = '/categories';

export const getCategories = async () => {
  const response = await http.get(apiEndpoint);
  return response;
};
