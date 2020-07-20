import Axios from "axios";
import { notification } from "antd";

const openNotification = (description) => {
  notification.error({
    message: "Unexpected Error",
    description,
  });
};

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

Axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);
    openNotification();
    // logger.log(error);
  }

  return Promise.reject(error);
});

const setJwt = (jwt) => {
  Axios.defaults.headers["x-auth-token"] = jwt;
};

export default {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete,
  setJwt,
};
