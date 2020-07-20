import http from "./httpService";

const apiEndpoint = "/users";

export const register = async (user) => {
  const response = await http.post(apiEndpoint, {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    phone: user.phone,
    gender: user.gender,
  });

  return response;
};

export const profile = async () => {
  const response = await http.get(`${apiEndpoint}/me`);
  return response;
};

export const updateProfile = async (user) => {
  const response = await http.post(`${apiEndpoint}/me`, {
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    gender: user.gender,
    address: user.address,
  });

  return response;
};
