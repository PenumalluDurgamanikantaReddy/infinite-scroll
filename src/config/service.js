import axiosInstance from "./interceptor";

const axiosBaseQuery = ({ baseUrl } = { baseUrl: "" }) => 
  async ({ url, method, body, headers, params, data }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data:body || data,
        params,
        headers,
        body,
      });
      return Promise.resolve(result)
      // return { data: result?.data }
    } catch (error) {
      return Promise.reject(error?.response?.data);
    }
  };


export default axiosBaseQuery;
