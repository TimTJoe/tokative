import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import useData from "@hooks/useData"
import useRoom from "@hooks/useRoom"
import axios from 'axios';


const withBroadcast = createContext(null)

export const ProvideBroadcast = ({ children }) => {
    const room = useRoom()
    const StartBroadcast = () => {}
    const EndBroadcast = () => {}
    const JoinBroadcast = () => {}
    const LeaveBroadcast = () => {}

    const VALUES = {
        StartBroadcast,
        EndBroadcast,
        JoinBroadcast,
        LeaveBroadcast,
        room
    }
    return (
        <withBroadcast.Provider value={VALUES}>
            {children}
        </withBroadcast.Provider>
    )
}

export default withBroadcast