import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig,
} from "axios";

import URLs from "@/lib/apis";

const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      const refreshToken = localStorage.getItem("refreshToken");

      try {
        const response = await axios.post(URLs.auth.REFRESH_TOKEN, {
          refreshToken: refreshToken,
        });

        const tokenData = response.data.data;

        localStorage.setItem("accessToken", tokenData?.accessToken);
        localStorage.setItem("refreshToken", tokenData?.refreshToken);

        const originalRequest =
          error.config || ({} as InternalAxiosRequestConfig);
        originalRequest.headers =
          originalRequest?.headers || ({} as AxiosRequestHeaders);
        originalRequest.headers.Authorization = `Bearer ${tokenData?.accessToken}`;

        return axios(originalRequest);
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);

        localStorage.clear();
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
