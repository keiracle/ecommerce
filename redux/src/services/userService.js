import http from "./httpService";

const apiEndpoint = "/users";

export const register = async (user) => {
  const { firstName, lastName, email, password, phone, gender } = user;

  const response = await http.post(apiEndpoint, {
    firstName,
    lastName,
    email,
    password,
    phone,
    gender,
  });

  return response;
};

export const profile = async () => {
  const response = await http.get(`${apiEndpoint}/me`);
  return response;
};

export const updateProfile = async (user) => {
  const { firstName, lastName, phone, gender } = user;

  const response = await http.post(`${apiEndpoint}/me`, {
    firstName,
    lastName,
    phone,
    gender,
  });

  return response;
};
