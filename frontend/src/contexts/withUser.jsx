import React, { createContext, useEffect, useState } from 'react'
import useData from '@hooks/useData';
const withUser = createContext(null)

export function ProvideUser({ children }) {
    const user = useData()
    const VALUES = { user}

    return (
        <withUser.Provider value={VALUES}>
            {children}
        </withUser.Provider>
    )
}

export default withUser