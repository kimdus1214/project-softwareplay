import axios from 'axios';

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function registerUser(submitData) {
  const request = axios.post('/register', submitData).then((response) => (response.data));
  return {
    type: REGISTER_USER,
    payload: request
  };
};

export function loginUser(submitData) {
  const request = axios.post('/login', submitData).then((response) => (response.data));
  return {
    type: LOGIN_USER,
    payload: request
  };
};

export function logoutUser(submitData) {
  const request = axios.get('/logout').then((response) => (response.data));
  return {
    type: LOGOUT_USER,
    payload : request
  }
}