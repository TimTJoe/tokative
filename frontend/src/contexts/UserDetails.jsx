import React, { createContext } from 'react'
import {useLocation} from 'react-router-dom'


const UserContext = createContext(null)

export function UserDetailsProvider({ children }) {
    const location = useLocation();
    const USER = location.state?.user || "";

    const VALUES = {
        USER
    }
    
  return (
      <UserContext.Provider value={VALUES}>{ children}</UserContext.Provider>
  )
}

export default UserContext