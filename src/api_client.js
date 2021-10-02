import axios from "axios";

const fetchClient = () => {
  const defaultOptions = {
    baseURL:
      process.env.REACT_APP_API_PATH ||
      "https://biltyapi.mobileprogramming.net/api/v1",
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `${token}` : "";
    return config;
  });

  return instance;
};

export default fetchClient();
