import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom";
import UserContext from '@contexts/UserDetails'

const Protected = ({children, ...rest}) => {
    const { isAuth } = useContext(UserContext)
    if (!isAuth) {
        return <Navigate to="/login" replace/>
    } else {
        return children
    }
    
};

export default Protected;