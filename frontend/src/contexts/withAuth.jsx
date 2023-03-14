import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import useUser from "@hooks/useUser"

const withAuth = createContext(null)

export function ProvideAuth({ children }) {
    const [isAuth, setIsAuth] = useState(false)
    const location = useLocation()
    const user = useUser();

    useEffect(() => {
        //if user has uuid means he's logged in
        if (user.uuid) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [location, user])

    const VALUES = { isAuth, setIsAuth }

    return (
        <withAuth.Provider value={VALUES}>
            {children}
        </withAuth.Provider>
    )
}

export default withAuth