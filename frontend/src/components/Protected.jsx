import React from 'react'
import { useNavigate, Navigate } from "react-router-dom";

const Protected = ({ isAuth, children, ...rest }) => {
    // const navigate = useNavigate()
    if (!isAuth) {
        // navigate("/login")
        return <Navigate to={"/login"} replace />
    } else {
        return children
    }
};

export default Protected;