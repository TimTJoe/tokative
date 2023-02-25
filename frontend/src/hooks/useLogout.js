import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
const LOGOUT_URL = "http://localhost:8020/logout"


const useLogout = () => {
    const [isLogout, setIsLogout] = useState(false)
    const navigate = useNavigate()

    const handleLogout = () => {
      axios
        .delete(LOGOUT_URL, { withCredentials: true })
        .then((res) => {
          console.log(res);
            const tokative_sid = "tokative_sid";
            //TODO: CLEAR COOKIES WITH PASSPORT/EXPRESS
          document.cookie =
            tokative_sid + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
          localStorage.clear();
          location.state = null;
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return handleLogout
}

export default useLogout
