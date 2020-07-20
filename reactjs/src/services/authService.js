import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndPoint = "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export const login = async (email, password) => {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
};

export const loginWithJwt = (jwt) => {
  localStorage.setItem(tokenKey, jwt);
};

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export const logout = () => {
  localStorage.removeItem(tokenKey);
};

export const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
};
