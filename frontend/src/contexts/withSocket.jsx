import React, { createContext, useEffect, useMemo } from 'react'
import { io } from 'socket.io-client'

export const withSocket = createContext(null)

function connSocket(io) {
  let socket = io("http://localhost:8020")
  return socket
}

export function ProvideSocket({ children }) {
  const flag = true
  const socket = useMemo(() => connSocket(io), [flag])



  const VALUES = { socket }

  return (
    <withSocket.Provider value={VALUES}>
      {children}
    </withSocket.Provider>
  )
}

export default withSocket