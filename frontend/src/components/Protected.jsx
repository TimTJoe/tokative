import React from 'react'
import { Navigate } from "react-router-dom";

const Protected = ({ isAuth, children }) => {
    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }
    return children;
};
export default Protected;