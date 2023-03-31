import React, { useEffect, useState } from 'react'
import useShow from '@hooks/useShow'
import useUser from '@hooks/useUser'

export const useRole = () => {
    const [role, setRole] = useState("")
      const show = useShow()
      const user = useUser()
      const user_uuid = show.user_uuid
      
      useEffect(() => {
        if (user_uuid === user.uuid) {
          setRole("host")
        } else {
          setRole("listener")
        }
        return () => {}
      }, [user_uuid])
    return role
}

export default useRole