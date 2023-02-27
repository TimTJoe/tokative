import React, { createContext, useEffect, useState } from 'react'
import useData from '@hooks/useData';
import { useLocation } from 'react-router-dom';
const withUser = createContext(null)

export function ProvideUser({ children }) {
    const location = useLocation();
    const [user, setUser] = useState([])
    const data = useData()

    useEffect(() => {
        if (data) {
            setUser(data)
        } else {
            setUser([])
        }
    }, [location, data])

    const VALUES = {
        user,
        setUser
    }

    return (
        <withUser.Provider value={VALUES}>
            {children}
        </withUser.Provider>
    )
}

export default withUser