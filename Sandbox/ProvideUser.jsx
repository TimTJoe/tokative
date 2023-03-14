import React, { createContext, useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import useData from '@hooks/useData';

const withUser = createContext(null)

export function ProvideUser({ children }) {
    const location = useLocation();
    const user = useData()
    
    // const [user, setUser] = useState([])
    // useEffect(() => {
    //     if (data) {
    //         setUser(data)
    //     } else {
    //         setUser([])
    //   }
    // }, [location])
    

    const VALUES = {
        user
    }
    
  return (
      <withUser.Provider value={VALUES}>
          {children}
      </withUser.Provider>
  )
}

export default withUser