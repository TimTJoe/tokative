import React, { createContext, useEffect, useState } from 'react'
import useShow from '@hooks/useShow'
import useUser from '@hooks/useUser'
import useRole from "@hooks/useRole"
import useHost from "@hooks/useHost"
import { useLocation } from 'react-router-dom';

export const withShow = createContext(null)

export function ProvideShow({ children }) {
    const location = useLocation()
    const [showName, setShowName] = useState("")
    const [aboutShow, setAboutShow] = useState("")
    const role = useRole()
    const show = useShow()
    const user = useUser()
    const hostName = useHost()
    
    useEffect(() => {
        setShowName(show.name)
        setAboutShow(show.about)
    }, [show, location])

    const VALUES = { role, hostName, showName, aboutShow }
    return (
        <withShow.Provider value={VALUES}>
            {children}
        </withShow.Provider>
    )
}

export default withShow