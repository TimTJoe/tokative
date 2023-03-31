import React from 'react'
import { useNavigate, Navigate, useLocation } from "react-router-dom";

const Protected = ({ isAuth, children, ...rest }) => {
    // const navigate = useNavigate()
    const location = useLocation()
    if (!isAuth) {
        // navigate("/login")
        return <Navigate to="/login" state={{ from: location }} replace />

    } else {
        return children
    }
};

export default Protected;
