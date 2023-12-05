import axios from "axios";
const BASE_URL = "http://localhost:7001/api/v1/";
const publicInstance = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
});
const privateInstance = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
});

privateInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // using custom property `error.config._retry` to prevent infinite loop
    // when refresh token expires as well
    const { response, config } = error;
    if (response.status !== 401) {
      return Promise.reject(error);
    }
    if (!config._retry && response?.status === 401) {
      config._retry = true; // retry once after the initial 401

      try {
        // using privateApiRequest causes infinite loop
        await publicApiRequest.get("/admins/token/refresh");

        // re initiate the API call
        return axios(error.response.config);
      } catch (err) {
        return Promise.reject(err);
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export const publicApiRequest = publicInstance;
export const privateApiRequest = privateInstance;
