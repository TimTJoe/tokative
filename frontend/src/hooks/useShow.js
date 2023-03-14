import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const DATA_URL = "http://localhost:8020/show/";

const useShow = () => {
  const [show, setShow] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("r");
  
  useEffect(() => {
    const fetchShow = async () => {
      const result = await axios.get(DATA_URL + token);
      setShow(result.data);
    };
    fetchShow();
  }, [token]);
  return show;
};

export default useShow;
