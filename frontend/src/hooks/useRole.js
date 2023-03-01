import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useStation from "@hooks/useStation"
import useData from "@hooks/useData"
import { useLocation } from 'react-router-dom'

/**
 * Create role array
 * check if visitor is owner of station
 * if yes role is host else role is listener
 */
const useRole = () => {
    let role;
    const user = useData()
    const location = useLocation();
    const station = location.state.station;
    role = station.user_uuid === user.uuid ? "host" : "listener";
    return role
}

export default useRole
