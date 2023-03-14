import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useData from "@hooks/useData";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();
  const user = useData();

  useEffect(() => {
    if (user.uuid) {
      setIsAuth(true);
    } else {
      setIsAuth(false)
    }
  }, [location]);
    
  return isAuth
};

export default useAuth;
