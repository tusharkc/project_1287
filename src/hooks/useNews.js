import { useQuery } from "react-query";
import axios from "../api_client";

const getNews = async () => {
  const { data } = await axios.post("/event/listNews");
  return data;
};

export default function useNews() {
  return useQuery("news", getNews);
}
