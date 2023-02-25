import React, { createContext, useEffect, useState } from 'react'
import useData from "@hooks/useData"

const withAuth = createContext(null)

export function ProvideAuth({children}) {
    const user = useData();
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (user.uuid) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [user])

    const VALUES = {
        isAuth,
        setIsAuth
    }

    return (
        <withAuth.Provider value={VALUES}>
            {children}
        </withAuth.Provider>
    )
}

export default withAuth