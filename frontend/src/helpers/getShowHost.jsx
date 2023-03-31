import React, { useState } from "react";
import axios from "axios";
const DATA_URL = "http://localhost:8020/show/host/";

const getShowHost = (user_uuid) => {
    const [Host, setHost] = useState("");
    try{
        async function fetchData() {
            const result = await axios.get(DATA_URL + user_uuid);
            console.log(result)
            setHost(result.data);
        }
        fetchData()
    }catch(error){
        throw {error}
    }
    return Host;
};

export default getShowHost;
