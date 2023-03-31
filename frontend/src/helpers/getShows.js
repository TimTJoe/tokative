import React, { useState, useEffect } from "react";
import useData from "@hooks/useData";
import axios from "axios";
import { useLocation } from "react-router-dom";
const DATA_URL = "http://localhost:8020/show";

const getShows = () => {
    const [shows, setShows] = useState([]);
    let location = useLocation()

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(DATA_URL);
        setShows(result.data);
      };
      fetchData();
    
    }, [location])
    
  return shows;
};

export default getShows;
