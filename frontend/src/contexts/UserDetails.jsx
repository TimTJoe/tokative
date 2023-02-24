import React, { createContext } from 'react'
import {useLocation} from 'react-router-dom'


const UserContext = createContext(null)

export function UserDetailsProvider({ children }) {
    const location = useLocation();
    const user = location.state?.user || "";

    const VALUES = {
        isAuth: user.uuid && true || false,
        profile: user,
    }
    
  return (
      <UserContext.Provider value={VALUES}>
          {children}
      </UserContext.Provider>
  )
}

export default UserContext