import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import useData from "@hooks/useData"

const withAuth = createContext(null)

export function ProvideAuth({ children }) {
    const location = useLocation()
    const [isAuth, setIsAuth] = useState(false)
    const data = useData();

    useEffect(() => {
        if (data.uuid) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [location, data])

    const VALUES = { isAuth, setIsAuth }

    return (
        <withAuth.Provider value={VALUES}>
            {children}
        </withAuth.Provider>
    )
}

export default withAuth