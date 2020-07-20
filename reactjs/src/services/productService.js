import Axios from "axios";

const apiEndpoint = "/products";

export const getProducts = () => {
  return Axios.get(apiEndpoint);
};

export const getProduct = (productId) => {
  return Axios.get(`${apiEndpoint}/${productId}`);
};

export const deleteProduct = (productId) => {
  return Axios.delete(`${apiEndpoint}/${productId}`);
};

// save or edit
// data : {
//   myImage: {},
//   product: {}
// }
export const saveProduct = (data) => {
  const { myImage, product } = data;
  const formData = new FormData();
  formData.append("myImage", myImage);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  if (product._id) {
    const body = { ...product };
    delete body._id;

    formData.append("data", JSON.stringify(body));

    return Axios.put(`${apiEndpoint}/${product._id}`, formData, config);
  }

  formData.append("data", JSON.stringify(product));
  return Axios.post(apiEndpoint + "/", formData, config);
};

export const saveImage = (data) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  console.log(data);

  return Axios.post(apiEndpoint + "/upload", data, config);
};
