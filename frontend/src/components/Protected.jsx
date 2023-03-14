import React, {useContext} from 'react'
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import withAuth from "@contexts/withAuth"

const Protected = ({isAuth, children, ...rest}) => {
    const location = useLocation()

    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location }} replace />
    } else {
        return children
    }
};

export default Protected;
