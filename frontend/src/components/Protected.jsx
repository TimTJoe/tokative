import React from 'react'
import { Navigate } from "react-router-dom";

const Protected = ({ isAuth, children, ...rest }) => {

    if (!isAuth) {
        return <Navigate to="/login" replace />
    } else {
        return children
    }

};

export default Protected;