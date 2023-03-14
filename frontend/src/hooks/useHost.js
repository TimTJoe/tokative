import React, { useEffect, useState } from "react";
import useShow from "@hooks/useShow";
import useUser from "@hooks/useUser";
import axios from "axios";
import {useLocation} from "react-router-dom"

const DATA_URL = "http://localhost:8020/user/";

export const useHost = () => {
    const [hostName, setHostName] = useState("");
    const show = useShow();
    const user_uuid = show.user_uuid;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(DATA_URL + user_uuid);
            const user = result.data;
            setHostName(user.fullname);
        }
        fetchData()
    }, [user_uuid])
  return hostName
};

export default useHost;
