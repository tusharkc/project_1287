import { useQuery } from "react-query";
import axios from "../api_client";



const searchTransporter = async ({userid,from_service,to_service,vehicle_type,load_type,goods_type,nature_of_goods,quantity,packaging_type}) => {
    let json = {
        userid,
        to_service,
        from_service,
        vehicle_type,
        load_type,
        goods_type,
        nature_of_goods,
        quantity,
        packaging_type,
        search_date: '2021-09-14T12:30:37.215Z'
      }
    
  const { data } = await axios.post("/transporter/searchTransporter",json);
  return data;
};

export default function useSearchTransporter(data) {
  return useQuery(["searchTransporter",data], () => searchTransporter(data));
}
