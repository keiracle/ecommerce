import http from './httpService';

const apiEndpoint = '/products';

export const getProducts = () => {
  return http.get(apiEndpoint);
};

export const getProduct = productId => {
  return http.get(`${apiEndpoint}/${productId}`);
};

export const deleteProduct = productId => {
  return http.delete(`${apiEndpoint}/${productId}`);
};

// save or edit
// data : {
//   myImage: {},
//   product: {}
// }
export const saveProduct = data => {
  const { myImage, product } = data;
  const formData = new FormData();
  formData.append('myImage', myImage);

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  if (product._id) {
    const body = { ...product };
    delete body._id;

    formData.append('data', JSON.stringify(body));

    return http.put(`${apiEndpoint}/${product._id}`, formData, config);
  }

  formData.append('data', JSON.stringify(product));
  return http.post(apiEndpoint + '/', formData, config);
};

export const saveImage = data => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  console.log(data);

  return http.post(apiEndpoint + '/upload', data, config);
};
