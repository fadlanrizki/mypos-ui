import axios from 'axios';

export const getAPI = () => {
  return 'localhost:3000';
}

export const doGet = (endpoint, token, params) => {
  const url = getAPI() + endpoint;
  const method = 'GET';
  const headers = { 'X-AUTH-TOKEN-NEXPOS': token };
  const request = { url, method, headers, params };

  return axios(request);
};

export const doPost = (endpoint, token, data, params) => {
  const url = getAPI() + endpoint;
  const method = 'POST';
  const headers = { 'X-AUTH-TOKEN-NEXPOS': token };
  const request = { url, method, headers, data, params };

  return axios(request);
};

export const doPut = (endpoint, token, data, params) => {
  const url = getAPI() + endpoint;
  const method = 'PUT';
  const headers = { 'X-AUTH-TOKEN-NEXPOS': token };
  const request = { url, method, headers, data, params };

  return axios(request);
}

export const doDelete = (endpoint, token, params, data) => {
  const url = getAPI() + endpoint;
  const method = 'DELETE';
  const headers = { 'X-AUTH-TOKEN-NEXPOS': token };
  const request = { url, method, headers, params, data};

  return axios(request);
}

