import axios from "axios";
axios.defaults.withCredentials = true;
// Add a request interceptor
axios.interceptors.request.use(function(config) {
  config.withCredentials = true;
  return config;
});

/**
 * Will unpack the response body from reponse object
 * @param {*} response
 *
 */

export function get() {
  console.log("get");
}

export function create() {
  console.log("create");
}

export const update = function() {};

export const deleteById = function() {};

export default { get, create, update, deleteById };

// const onGlobalSuccess = response => {
//   /// Should not use if you need access to anything other than the data
//   return response.data;
// };

const onGlobalSuccess = response => {
  return response;
};

const onGlobalError = err => {
  return Promise.reject(err);
};

// const API_HOST_PREFIX = process.env.REACT_APP_API_HOST_PREFIX;
const API_HOST_PREFIX = "https://api.meetup.com";

// console.log("API_HOST_PREFIX", API_HOST_PREFIX);

export { onGlobalError, onGlobalSuccess, API_HOST_PREFIX };
